import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const SettingSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: { type: String, required: true },
  category: { type: String, default: 'general' },
  description: { type: String }
});

const Setting = mongoose.model('Setting', SettingSchema);

const update = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const newSettings = [
      { key: 'reddit_url', value: 'https://reddit.com/r/kriscel', category: 'social', description: 'Reddit Profile' },
      { key: 'youtube_url', value: 'https://youtube.com/@kriscel', category: 'social', description: 'YouTube Channel' }
    ];

    for (const s of newSettings) {
      const exists = await Setting.findOne({ key: s.key });
      if (!exists) {
        await Setting.create(s);
        console.log(`Created: ${s.key}`);
      } else {
        console.log(`Skipped (already exists): ${s.key}`);
      }
    }

    console.log('Update complete!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

update();
