import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true }, // Full-time, Contract, etc.
  description: { type: String, required: true },
  requirements: { type: [String], required: true },
  status: { type: String, enum: ['Active', 'Closed'], default: 'Active' }
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);
export default Job;
