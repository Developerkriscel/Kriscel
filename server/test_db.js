import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI;
console.log(`Connecting to MongoDB...`);

const start = async () => {
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 20000 });
    console.log("SUCCESS: Connected to MongoDB!");
    process.exit(0);
  } catch (err) {
    console.error("FAILURE:", err.message);
    process.exit(1);
  }
};

start();
