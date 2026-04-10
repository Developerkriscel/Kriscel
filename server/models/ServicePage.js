import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

const benefitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  iconName: { type: String, required: true, default: 'Star' } 
});

const featureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true }
});

const servicePageSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Business Automation', 'Digital Marketing', 'Ecommerce Services', 'Services', 'Other'],
    default: 'Other'
  },
  
  // Tag above header e.g. "Performance First"
  tagline: { type: String, required: true },
  
  // Standard heading e.g. "Ads Campaign Management"
  title: { type: String, required: true },
  
  // Highlighted font-serif part of title e.g. "Solutions."
  titleHighlight: { type: String, required: true },
  
  // Main paragraph
  description: { type: String, required: true },
  
  // Color palette string name (blue, emerald, rose, indigo, etc.)
  themeColor: { type: String, default: 'blue' },
  
  // The lucide-react icon inside the spinning circles
  heroIconName: { type: String, default: 'Target' },
  
  // The 3 cards "What We Do" section
  whatWeDo: [benefitSchema], // Re-using benefitSchema since it has title, desc, iconName
  
  // The horizontal scrolling grid "Foundations" section
  benefits: [benefitSchema],
  
  // The simple checkboxes grid "The Advantage" section
  features: [featureSchema],
  
  // The accordion questions
  faqs: [faqSchema],
  
  status: { type: String, enum: ['draft', 'published'], default: 'published' }
}, { timestamps: true });

const ServicePage = mongoose.model('ServicePage', servicePageSchema);
export default ServicePage;
