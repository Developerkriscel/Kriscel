import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  jobTitle: { type: String, required: true }, // Denormalized for easier rendering
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  portfolioUrl: { type: String },
  coverLetter: { type: String },
  status: { type: String, enum: ['Pending', 'Reviewed', 'Rejected', 'Accepted'], default: 'Pending' }
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);
export default Application;
