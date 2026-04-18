import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// Removed Cloudinary imports

// Models
import Contact from './models/Contact.js';
import Job from './models/Job.js';
import Application from './models/Application.js';
import User from './models/User.js';
import Insight from './models/Insight.js';
import ServicePage from './models/ServicePage.js';
import Setting from './models/Setting.js';
import SEOSetting from './models/SEOSetting.js';
import * as XLSX from 'xlsx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'kriscel_secret_key_123';

// Middleware
app.use(express.json());
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://kriscel.vercel.app',
  'https://www.kriscel.com',
  'http://www.kriscel.com'
];
if (process.env.CLIENT_URL) {
  allowedOrigins.push(
    ...process.env.CLIENT_URL
      .split(',')
      .map((url) => url.trim())
      .filter(Boolean)
  );
}

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`Blocked by CORS: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.options('*', cors());
app.use(helmet({
  crossOriginResourcePolicy: false, // Required for cross-origin images
}));
app.use(morgan('dev'));

// Static files (Development only)
if (process.env.NODE_ENV !== 'production') {
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
}

// Multer Storage Config (Memory storage for processing before saving to GridFS)
const storage = multer.memoryStorage();
const upload = multer({ storage });

let bucket;

// MongoDB Connection
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn("MONGODB_URI is not defined. Skipping DB connection.");
      return;
    }
    console.log("Attempting to connect to MongoDB Atlas...");
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`🚀 MongoDB Connected: ${conn.connection.host}`);
    
    // Initialize GridFS Bucket
    bucket = new mongoose.mongo.GridFSBucket(conn.connection.db, {
      bucketName: 'uploads'
    });
    console.log("📦 GridFS Bucket Initialized");
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Don't exit process in dev, let it retry or stay alive for logs
  }
};

// Middleware to verify JWT
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ success: false, error: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ success: false, error: 'Not authorized, no token' });
  }
};

// --- AUTH ROUTES ---

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && (await user.comparePassword(password))) {
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30d' });
      res.json({ success: true, token, user: { id: user._id, username: user.username } });
    } else {
      res.status(401).json({ success: false, error: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Register (Single Admin/Setup)
app.post('/api/auth/setup', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    if (userCount > 0) return res.status(400).json({ success: false, error: 'Admin already exists' });

    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.status(201).json({ success: true, data: { id: user._id, username: user.username } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- API ROUTES ---

app.get('/', (req, res) => {
  res.send('Kriscel API is running...');
});

// ── Google Apps Script sync helper ──
const syncRowToSheet = async (spreadsheetUrl, rowData) => {
  if (!spreadsheetUrl) return false;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const resp = await fetch(spreadsheetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rowData),
      signal: controller.signal
    });
    clearTimeout(timeout);
    return resp.ok;
  } catch (err) {
    console.warn('⚠️  Sheet sync failed (non-blocking):', err.message);
    return false;
  }
};

// ── Get parsed spreadsheet configs array from DB ──
const getSheetConfigs = async () => {
  const setting = await Setting.findOne({ key: 'spreadsheet_configs' });
  if (!setting?.value) return [];
  try { return JSON.parse(setting.value); } catch { return []; }
};

// ── Save updated configs back to DB ──
const saveSheetConfigs = async (configs) => {
  await Setting.findOneAndUpdate(
    { key: 'spreadsheet_configs' },
    { value: JSON.stringify(configs), category: 'spreadsheet', description: 'Multi-sheet config' },
    { upsert: true, new: true }
  );
};

// Submit a contact request
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'Please provide all required fields' });
    }
    const newContact = await Contact.create({ name, email, phone, subject, message });

    // ── Sync to all LIVE sheets (fire-and-forget) ──
    const configs = await getSheetConfigs();
    const liveSheets = configs.filter(c => c.live && c.url);
    if (liveSheets.length > 0) {
      const rowData = {
        Name: name, Email: email, Phone: phone || '',
        Subject: subject, Message: message,
        Date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };
      
      // Perform sync and update lastSyncedAt for these sheets
      Promise.all(liveSheets.map(async (s) => {
        const ok = await syncRowToSheet(s.url, rowData);
        if (ok) {
          // Update the specific config in our local copy
          const idx = configs.findIndex(c => c.id === s.id);
          if (idx !== -1) configs[idx].lastSyncedAt = new Date().toISOString();
        }
        return ok;
      })).then(async () => {
        // Save the updated configs back to DB if any were updated
        await saveSheetConfigs(configs);
      }).catch(() => {});
    }

    res.status(201).json({ success: true, data: newContact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ── GET spreadsheet configs (Admin) ──
app.get('/api/spreadsheet-configs', protect, async (req, res) => {
  try {
    const configs = await getSheetConfigs();
    res.json({ success: true, data: configs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ── SAVE spreadsheet configs (Admin) ──
app.put('/api/spreadsheet-configs', protect, async (req, res) => {
  try {
    const { configs } = req.body;
    await saveSheetConfigs(configs);
    res.json({ success: true, data: configs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- JOB POSTING ROUTES ---

// GET all jobs
app.get('/api/jobs', async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const jobs = await Job.find(filter).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET single job
app.get('/api/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ success: false, error: 'Job not found' });
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST new job
app.post('/api/jobs', protect, async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    res.status(201).json({ success: true, data: newJob });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT update job
app.put('/api/jobs/:id', protect, async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, data: updatedJob });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE job
app.delete('/api/jobs/:id', protect, async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- APPLICATION ROUTES ---

// POST new application (Public)
app.post('/api/applications', async (req, res) => {
  try {
    const newApp = await Application.create(req.body);
    res.status(201).json({ success: true, data: newApp });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET all applications (Admin)
app.get('/api/applications', protect, async (req, res) => {
  try {
    const apps = await Application.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: apps });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT update application status (Admin)
app.put('/api/applications/:id', protect, async (req, res) => {
  try {
    const updatedApp = await Application.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.status(200).json({ success: true, data: updatedApp });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- CONTACT ROUTES (Admin) ---

// GET all contacts
app.get('/api/contact', protect, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ── SYNC new-only contacts to a specific sheet (Admin) ──
// Reads lastSyncedAt for that sheet, only sends contacts AFTER that timestamp.
// Updates lastSyncedAt after successful sync so repeating is safe.
app.post('/api/contact/sync-sheet', protect, async (req, res) => {
  try {
    const { sheetId } = req.body; // ID of the sheet config to sync
    const configs = await getSheetConfigs();
    const idx = configs.findIndex(c => c.id === sheetId);
    if (idx === -1) return res.status(404).json({ success: false, error: 'Sheet config not found' });

    const sheet = configs[idx];
    if (!sheet.url) return res.status(400).json({ success: false, error: 'Sheet URL not set' });

    // Only fetch contacts NEWER than lastSyncedAt to avoid duplicates
    const filter = sheet.lastSyncedAt
      ? { createdAt: { $gt: new Date(sheet.lastSyncedAt) } }
      : {};
    const contacts = await Contact.find(filter).sort({ createdAt: 1 });

    if (contacts.length === 0) {
      return res.json({ success: true, message: 'No new contacts to sync. Everything is up to date!' });
    }

    let synced = 0;
    for (const c of contacts) {
      const ok = await syncRowToSheet(sheet.url, {
        Name: c.name, Email: c.email, Phone: c.phone || '',
        Subject: c.subject, Message: c.message,
        Date: new Date(c.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      });
      if (ok) synced++;
    }

    // Update lastSyncedAt to now
    configs[idx].lastSyncedAt = new Date().toISOString();
    await saveSheetConfigs(configs);

    res.json({ success: true, message: `✅ Synced ${synced} new contact${synced !== 1 ? 's' : ''} to sheet.`, configs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// EXPORT contacts as Excel file (Admin)
app.get('/api/contact/export', protect, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    const rows = contacts.map(c => ({
      Name: c.name,
      Email: c.email,
      Phone: c.phone || '',
      Subject: c.subject,
      Message: c.message,
      Date: new Date(c.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Contacts');
    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    res.setHeader('Content-Disposition', 'attachment; filename="kriscel-contacts.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buf);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


// --- INSIGHTS ROUTES ---

// GET all insights (Public)
app.get('/api/insights', async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : { status: 'published' };
    const insights = await Insight.find(filter).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: insights });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET single insight
app.get('/api/insights/:id', async (req, res) => {
  try {
    const insight = await Insight.findById(req.params.id);
    if (!insight) return res.status(404).json({ success: false, error: 'Insight not found' });
    res.status(200).json({ success: true, data: insight });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST new insight (Admin)
app.post('/api/insights', protect, async (req, res) => {
  try {
    const newInsight = await Insight.create(req.body);
    res.status(201).json({ success: true, data: newInsight });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT update insight (Admin)
app.put('/api/insights/:id', protect, async (req, res) => {
  try {
    const updatedInsight = await Insight.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, data: updatedInsight });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE insight (Admin)
app.delete('/api/insights/:id', protect, async (req, res) => {
  try {
    await Insight.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- SERVICE PAGE ROUTES ---

// GET all dynamic services (Public)
app.get('/api/services', async (req, res) => {
  try {
    const { status, category } = req.query;
    const filter = {};
    if (status) filter.status = status;
    else filter.status = 'published';
    if (category) filter.category = category;
    
    const services = await ServicePage.find(filter).sort({ category: 1, title: 1 });
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET all services including drafts (Admin)
app.get('/api/services/admin/all', protect, async (req, res) => {
  try {
    const services = await ServicePage.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET single service by slug (Public API route for dynamic rendering)
app.get('/api/services/:slug', async (req, res) => {
  try {
    const service = await ServicePage.findOne({ slug: req.params.slug, status: 'published' });
    if (!service) return res.status(404).json({ success: false, error: 'Service not found' });
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET single service by id (Admin lookup)
app.get('/api/services/admin/:id', protect, async (req, res) => {
  try {
    const service = await ServicePage.findById(req.params.id);
    if (!service) return res.status(404).json({ success: false, error: 'Service not found' });
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST new service (Admin)
app.post('/api/services', protect, async (req, res) => {
  try {
    const newService = await ServicePage.create(req.body);
    res.status(201).json({ success: true, data: newService });
  } catch (error) {
    // Catch unique slug error (code 11000)
    if (error.code === 11000) {
      return res.status(400).json({ success: false, error: 'URL slug must be unique' });
    }
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT update service (Admin)
app.put('/api/services/:id', protect, async (req, res) => {
  try {
    const updatedService = await ServicePage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, data: updatedService });
  } catch (error) {
     if (error.code === 11000) {
      return res.status(400).json({ success: false, error: 'URL slug must be unique' });
    }
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE service (Admin)
app.delete('/api/services/:id', protect, async (req, res) => {
  try {
    await ServicePage.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- SETTINGS ROUTES ---

// GET all settings (Public)
app.get('/api/settings', async (req, res) => {
  try {
    const settings = await Setting.find();
    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET settings by category (Public)
app.get('/api/settings/category/:category', async (req, res) => {
  try {
    const settings = await Setting.find({ category: req.params.category });
    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT update multiple settings (Admin)
app.put('/api/settings/bulk', protect, async (req, res) => {
  try {
    const { settings } = req.body; // Array of { key, value }
    const results = await Promise.all(
      settings.map(async (s) => {
        return await Setting.findOneAndUpdate(
          { key: s.key },
          { value: s.value },
          { new: true, upsert: true }
        );
      })
    );
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- SEO ROUTES ---

// GET all SEO settings
app.get('/api/seo', async (req, res) => {
  try {
    const seoSettings = await SEOSetting.find().sort({ pagePath: 1 });
    res.status(200).json({ success: true, data: seoSettings });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET SEO setting by path
app.get('/api/seo/path', async (req, res) => {
  try {
    const { path } = req.query;
    if (!path) return res.status(400).json({ success: false, error: 'Path is required' });
    const seo = await SEOSetting.findOne({ pagePath: path.toLowerCase() });
    res.status(200).json({ success: true, data: seo });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST create or update SEO setting (Protected)
app.post('/api/seo', protect, async (req, res) => {
  try {
    const { pagePath, title, targetKeyword, metaDescription, keywords, ogImage, canonicalUrl, noIndex } = req.body;
    
    const seo = await SEOSetting.findOneAndUpdate(
      { pagePath: pagePath.toLowerCase() },
      { title, targetKeyword, metaDescription, keywords, ogImage, canonicalUrl, noIndex },
      { new: true, upsert: true }
    );
    
    res.status(200).json({ success: true, data: seo });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE SEO setting (Protected)
app.delete('/api/seo/:id', protect, async (req, res) => {
  try {
    await SEOSetting.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'SEO setting deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Seed default settings (internal helper)
const seedSettings = async () => {
  const defaults = [
    { key: 'amazon_url', value: 'https://amazon.in', category: 'marketplace', description: 'Amazon Seller Portal' },
    { key: 'flipkart_url', value: 'https://flipkart.com', category: 'marketplace', description: 'Flipkart Seller Hub' },
    { key: 'linkedin_url', value: 'https://linkedin.com/company/kriscel', category: 'social', description: 'LinkedIn Profile' },
    { key: 'instagram_url', value: 'https://instagram.com/kriscel', category: 'social', description: 'Instagram Profile' },
    { key: 'facebook_url', value: 'https://facebook.com/kriscel', category: 'social', description: 'Facebook Page' },
    { key: 'reddit_url', value: 'https://reddit.com/r/kriscel', category: 'social', description: 'Reddit Profile' },
    { key: 'youtube_url', value: 'https://youtube.com/@kriscel', category: 'social', description: 'YouTube Channel' },
    { key: 'indiamart_url', value: 'https://indiamart.com/kriscel', category: 'marketplace', description: 'IndiaMART Store' }
  ];

  for (const s of defaults) {
    const exists = await Setting.findOne({ key: s.key });
    if (!exists) await Setting.create(s);
  }
};

// --- UPLOAD ROUTES (GRIDFS) ---

// File Streaming Route
app.get('/api/files/:filename', async (req, res) => {
  try {
    if (!bucket) return res.status(500).json({ success: false, error: 'Storage not initialized' });
    
    const files = await bucket.find({ filename: req.params.filename }).toArray();
    if (!files || files.length === 0) {
      return res.status(404).json({ success: false, error: 'File not found' });
    }

    const file = files[0];
    res.set('Content-Type', file.contentType || 'application/octet-stream');
    
    const downloadStream = bucket.openDownloadStreamByName(req.params.filename);
    downloadStream.pipe(res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Upload Insight Image (Protected)
app.post('/api/upload/insight', protect, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, error: 'No file uploaded' });
    if (!bucket) return res.status(500).json({ success: false, error: 'Storage not initialized' });

    const filename = `insight-${Date.now()}-${req.file.originalname}`;
    const uploadStream = bucket.openUploadStream(filename, {
      contentType: req.file.mimetype
    });

    uploadStream.end(req.file.buffer);

    uploadStream.on('finish', () => {
      res.status(200).json({ success: true, url: `/api/files/${filename}` });
    });

    uploadStream.on('error', (err) => {
      res.status(500).json({ success: false, error: err.message });
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Upload Resume (Public)
app.post('/api/upload/resume', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, error: 'No file uploaded' });
    if (!bucket) return res.status(500).json({ success: false, error: 'Storage not initialized' });

    const filename = `resume-${Date.now()}-${req.file.originalname}`;
    const uploadStream = bucket.openUploadStream(filename, {
      contentType: req.file.mimetype
    });

    uploadStream.end(req.file.buffer);

    uploadStream.on('finish', () => {
      res.status(200).json({ success: true, url: `/api/files/${filename}` });
    });

    uploadStream.on('error', (err) => {
      res.status(500).json({ success: false, error: err.message });
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start Server
app.listen(PORT, async () => {
  await connectDB();
  await seedSettings();
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
