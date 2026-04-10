import mongoose from 'mongoose';

const settingSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true
  },
  value: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['social', 'marketplace', 'general'],
    default: 'general'
  },
  description: {
    type: String
  }
}, { timestamps: true });

const Setting = mongoose.model('Setting', settingSchema);

export default Setting;
