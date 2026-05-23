import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address'
    ],
  },
  phone: {
    type: String,
    trim: true,
  },
  requirement: {
    type: String,
    required: [true, 'Please select a requirement'],
    trim: true,
  },
  subject: {
    type: String,
    required: [true, 'Please provide a subject']
  },
  message: {
    type: String,
    required: [true, 'Please provide a message']
  },
  status: {
    type: String,
    enum: ['New', 'In Progress', 'Completed', 'Archived'],
    default: 'New'
  }
}, { timestamps: true });

export default mongoose.model('Contact', ContactSchema);
