import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

// Avoid re-defining the model if it exists (for reload)
const User = mongoose.models.User || mongoose.model('User', UserSchema);

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

async function setup() {
  if (!MONGO_URI) {
    console.error("❌ No MONGO_URI found in .env");
    process.exit(1);
  }

  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGO_URI);
    console.log("Connected successfully!");

    const existing = await User.findOne({ username: 'admin' });
    if (existing) {
      console.log("Admin user already exists. Checking password...");
      // Just to be safe, update it
      existing.password = 'kriscel111';
      await existing.save();
      console.log("✅ Admin password reset to: kriscel111");
    } else {
      await User.create({
        username: 'admin',
        password: 'kriscel111'
      });
      console.log("✅ Admin user created successfully!");
    }

    process.exit(0);
  } catch (err) {
    console.error("❌ Setup failed:", err.message);
    process.exit(1);
  }
}

setup();
