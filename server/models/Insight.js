import mongoose from 'mongoose';

const insightSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true, default: 'Technology' },
  date: { type: String, required: true },
  image: { type: String, default: '/images/blue_glass_abstract.png' },
  accent: { type: String, default: 'from-blue-500 to-indigo-600' },
  excerpt: { type: String, default: '' },
  status: { type: String, enum: ['published', 'draft'], default: 'published' },
}, { timestamps: true });

export default mongoose.model('Insight', insightSchema);
