import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seoData = {
  "business-automation": { title: "Top Business Automation Services in Delhi NCR | Kriscel tech", desc: "Automate, optimize & grow with Krisceltech Providing Powerful Business Automation Services in Delhi NCR to boost productivity & profitability", keys: "Business Automation, Business Automation Services, Delhi NCR, Process Automation, Workflow Optimization" },
  "inventory-management-system": { title: "Inventory Management System Service in Delhi | Kriscel tech", desc: "Inventory Management System service in Delhi. Simplify stock tracking & manage your business operations with smart, & scalable solutions", keys: "Inventory Management System, Stock Management Software, Supply Chain Automation, Warehouse Management" },
  "production-management-system": { title: "Production Management System Services in Delhi NCR", desc: "Kriscel tech offers Production Management System services in Delhi NCR. Our solutions help businesses automate workflow & maximize productivity", keys: "Production Management System, Manufacturing Software, Production Workflow Automation" },
  "purchase-management-system": { title: "Purchase Management System Service in Delhi | Kriscel tech", desc: "Boost efficiency with our advanced Purchase Management System in Delhi. Simplify buying, track expenses, and scale your business smartly", keys: "Purchase Management System, Vendor Management, Order Processing Software" },
  "hr-management-system": { title: "HR Management System Service in Delhi | Smarter HR Solutions", desc: "Upgrade your HR process with our advanced HR management system service in Delhi. Automate payroll, attendance & employee records for smooth business operations", keys: "HR Management System, HRMS Software India, Automated Payroll System, Employee Attendance Tracking" },
  "employee-task-management-system": { title: "Best Employee Task Management System | Kriscel tech", desc: "Best Employee Task Management System | Kriscel tech", keys: "Employee Task Management System, Workflow Automation Software, Team Productivity Tool" },
  "account-management-system": { title: "Account Management System Service in Delhi | Kriscel tech", desc: "Boost your business efficiency with our expert Account Management System service in Delhi. Streamline accounts, save time, and grow smarter", keys: "Account Management System, Billing Automation Software, Financial Records System" },
  
  "digital-marketing": { title: "Top Digital Marketing Services in Delhi NCR | Kriscel tech", desc: "Top Digital Marketing Services in Delhi NCR, including SEO, SMO, PPC & content marketing-Kriscel tech helping brands to grow Online visibility", keys: "Digital Marketing Services, Best Digital Marketing Agency in Delhi, SEO Agency India, Digital Growth Solutions" },
  "search-engine-optimization": { title: "Top SEO Services Provider in Delhi NCR | Trusted Digital Experts", desc: "Kriscel tech offers expert SEO services in Delhi NCR designed to increase traffic, improve Google rankings & turn clicks into loyal customers", keys: "Search Engine Optimization, SEO, Best SEO Services India, Organic Traffic Growth, Top Ranking SEO" },
  "social-media-optimization": { title: "Top Social Media Optimization Service Provider in Delhi NCR", desc: "Top Social Media Optimization service provider in Delhi to grow engagement & traffic. We help businesses build engagement & achieve success", keys: "Social media optimization, SMO services, Social Media Marketing, Brand Awareness, Audience Engagement" },
  "paid-ads-management": { title: "Paid Ads Management Services in Delhi | Drive Targeted Leads", desc: "Get result-driven paid ads management services in Delhi. From Google Ads to social media campaigns optimized for reach, conversions & ROI.", keys: "Paid Ads Management, PPC Campaign Optimization, Google Ads Experts, Instant Lead Generation" },
  "gmb-creation": { title: "GMB Creation Service in Delhi | Boost Local Business Visibility", desc: "Professional GMB Creation Service in Delhi to help your business appear on Google Maps & Search, boost local visibility & attract new customers", keys: "GMB Creation, Google My Business, Local SEO, Local Business Listing, Map Ranking" },
  "content-marketing": { title: "Strategic Content Marketing Services | Kriscel tech", desc: "Strategic Content Marketing Services | Kriscel tech", keys: "Content Marketing, SEO Content Writing, Blog Marketing, Brand Authority Strategy" },
  "web-development": { title: "Top Web Development Services in Delhi NCR | Kriscel tech", desc: "Get professional web development services in Delhi NCR. We build responsive & SEO-friendly websites that strengthen your online presence", keys: "Web Development, Custom Web Apps, Frontend Development, Full Stack Solutions, NextJS Development" },
  "web-designing": { title: "Professional Web Designing Service in Delhi | Kriscel tech", desc: "Top web designing services in Delhi to build responsive & SEO-friendly websites. Grow your business with professional website solutions", keys: "Web Designing, UI/UX Design, Responsive Website Design, Premium Frontend Design" },
  "online-reputation-management": { title: "Online Reputation Management Service in Delhi | Kriscel tech", desc: "Get expert Online Reputation Management service in Delhi. From handling negative reviews to improving brand credibility", keys: "Online Reputation Management, ORM Services, Brand Protection, Review Management, Trust Building" },
  "indiamart-account-management": { title: "Indiamart Account Management Service in Delhi | Kriscel tech", desc: "Indiamart Account Management service in Delhi to increase visibility & boost sales. We provide complete support for account growth", keys: "Indiamart Account Management, B2B Lead Generation, Indiamart Listing Optimization, B2B Sales Growth" },

  "ecommerce-services": { title: "Top E-commerce Service in Delhi NCR | Kriscel tech", desc: "Top e-commerce Services in Delhi NCR. From online store setup to digital marketing, we help you increase sales & grow your business", keys: "E-commerce Service, E-commerce Setup Delhi NCR, Online Store Management, Grow E-commerce Business" },
  "account-creation": { title: "E-ccomerce Account Creation Service Provider in Delhi | Kriscel tech", desc: "Get a Professional E-Commerce account creation services Provider in Delhi. Boost your online sales with expert setup and marketplace support.", keys: "Account Creation, Seller Registration, Amazon Account Setup, Flipkart Onboarding, Business Seller Account" },
  "account-management": { title: "E-Commerce Account Management Service in Delhi | Kriscel tech", desc: "Optimize your E-Commerce platform with our expert Account Management System service in Delhi. Track, manage, & automate accounts to save time", keys: "Account Management, E-commerce Store Management, Marketplace Seller Protection, Total E-commerce Support" },
  "catalog-management": { title: "Top Catalog Management Service in Delhi | Kriscel tech", desc: "Top Catalog Management Service in Delhi. Accurate product data, images, & updates to keep your e-commerce platform organized and profitable.", keys: "Catalog Management, A+ Content, Listing Optimization, E-commerce Product Cataloging" },
  "ads-campaign-management": { title: "E-commerce Ads Campaign Management Service in Delhi", desc: "Professional ADS campaign management service in Delhi to boost your e-commerce sales. Track performance, and attract the right customers", keys: "ADS Campaign Management, E-commerce PPC, Amazon Ads Optimization, Marketplaces Advertising" },

  "recruitment": { title: "Recruitment Services in Delhi NCR | Trusted Hiring Solutions", desc: "Kriscel tech offers Best recruitment services in Delhi NCR, helping businesses find skilled talent with efficient staffing & hiring solutions", keys: "Recruitment, Staffing Solutions, IT Recruitment, Executive Search India, Talent Acquisition" }
};

const appDir = path.join(__dirname, 'app');

for (const [slug, data] of Object.entries(seoData)) {
  const dirPath = path.join(appDir, slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const layoutPath = path.join(dirPath, 'layout.tsx');
  
  // Format layout.tsx for NextJS
  const layoutContent = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${data.title}',
  description: '${data.desc.replace(/'/g, "\\'")}',
  keywords: '${data.keys}',
  openGraph: {
    title: '${data.title}',
    description: '${data.desc.replace(/'/g, "\\'")}',
    url: 'https://kriscel.com/${slug}',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${data.title}',
    description: '${data.desc.replace(/'/g, "\\'")}',
  },
  alternates: {
    canonical: 'https://kriscel.com/${slug}',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;

  fs.writeFileSync(layoutPath, layoutContent);
  console.log(`Generated SEO Layout for: ${slug}`);
}
