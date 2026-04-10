const fs = require('fs');
const path = require('path');

const seoData = {
  "business-automation": { title: "Top Business Automation Services in Delhi NCR | Kriscel tech", desc: "Automate, optimize & grow with Krisceltech Providing Powerful Business Automation Services in Delhi NCR to boost productivity & profitability.", keys: "Business Automation, Business Automation Services, Delhi NCR, Process Automation, Workflow Optimization" },
  "inventory-management-system": { title: "Best Inventory Management System in India | Kriscel tech", desc: "Gain complete control of your stock. Our intelligent Inventory Management System tracks, organizes, and automates your supply chain for zero delays.", keys: "Inventory Management System, Stock Management Software, Supply Chain Automation, Warehouse Management" },
  "production-management-system": { title: "Advanced Production Management System | Kriscel tech", desc: "Streamline your manufacturing process with our Production Management System. Reduce delays and increase output efficiency effortlessly.", keys: "Production Management System, Manufacturing Software, Production Workflow Automation" },
  "purchase-management-system": { title: "Top Purchase Management System | Kriscel tech", desc: "Simplify purchasing, track vendors, and process orders flawlessly with intelligent purchasing automation software by Kriscel tech.", keys: "Purchase Management System, Vendor Management, Order Processing Software" },
  "hr-management-system": { title: "Automated HR Management System (HRMS) | Kriscel tech", desc: "Automate HR tasks including attendance, payroll, leave approvals, onboarding, and employee records in a single fast platform.", keys: "HR Management System, HRMS Software India, Automated Payroll System, Employee Attendance Tracking" },
  "employee-task-management-system": { title: "Best Employee Task Management System | Kriscel tech", desc: "Assign tasks, track daily progress, and visibly improve team productivity with our streamlined automated workflow systems.", keys: "Employee Task Management System, Workflow Automation Software, Team Productivity Tool" },
  "account-management-system": { title: "Secure Account Management System Solutions | Kriscel tech", desc: "Automate financial and billing workflows. Ensure 100% accuracy and speed up your daily operations seamlessly.", keys: "Account Management System, Billing Automation Software, Financial Records System" },
  
  "digital-marketing": { title: "Top Digital Marketing Services in Delhi NCR | Kriscel tech", desc: "Top Digital Marketing Services in Delhi NCR, including SEO, SMO, PPC & content marketing-Kriscel tech helping brands to grow Online visibility.", keys: "Digital Marketing Services, Best Digital Marketing Agency in Delhi, SEO Agency India, Digital Growth Solutions" },
  "search-engine-optimization": { title: "Professional Search Engine Optimization (SEO) Services | Kriscel tech", desc: "Dominate search engine rankings. Our data-driven SEO strategies dramatically increase your organic visibility, leads, and website traffic.", keys: "Search Engine Optimization, SEO, Best SEO Services India, Organic Traffic Growth, Top Ranking SEO" },
  "social-media-optimization": { title: "Highly Engaging Social Media Optimization (SMO) | Kriscel tech", desc: "Build a loyal audience. Our Social media optimization (SMO) services create massive brand awareness across Instagram, Facebook, and LinkedIn.", keys: "Social media optimization, SMO services, Social Media Marketing, Brand Awareness, Audience Engagement" },
  "paid-ads-management": { title: "ROI-Focused Paid Ads Management (PPC) | Kriscel tech", desc: "Maximize your Return on Investment. Kriscel Tech offers highly optimized Paid Ads Management to generate high-intent leads instantly.", keys: "Paid Ads Management, PPC Campaign Optimization, Google Ads Experts, Instant Lead Generation" },
  "gmb-creation": { title: "Expert GMB Creation & Local SEO Setup | Kriscel tech", desc: "Boost your local visibility. Set up your Google My Business correctly to capture local customers actively searching in your area.", keys: "GMB Creation, Google My Business, Local SEO, Local Business Listing, Map Ranking" },
  "content-marketing": { title: "Strategic Content Marketing Services | Kriscel tech", desc: "Attract and convert visitors with authoritative content. Our Content Marketing strategies position your brand as the #1 industry leader.", keys: "Content Marketing, SEO Content Writing, Blog Marketing, Brand Authority Strategy" },
  "web-development": { title: "Custom Web Development Solutions | Kriscel tech", desc: "Build lightning-fast, highly secure, and highly scalable custom web development solutions tailored to your unique business needs.", keys: "Web Development, Custom Web Apps, Frontend Development, Full Stack Solutions, NextJS Development" },
  "web-designing": { title: "Premium UI/UX Web Designing Services | Kriscel tech", desc: "Capture user attention instantly with our ultra-modern, responsive, and conversion-optimized premium Web Designing services.", keys: "Web Designing, UI/UX Design, Responsive Website Design, Premium Frontend Design" },
  "online-reputation-management": { title: "Expert Online Reputation Management (ORM) | Kriscel tech", desc: "Protect your brand. Our Online Reputation Management experts suppress negative links and push positive customer reviews to the #1 spot.", keys: "Online Reputation Management, ORM Services, Brand Protection, Review Management, Trust Building" },
  "indiamart-account-management": { title: "Professional Indiamart Account Management | Kriscel tech", desc: "Multiply B2B sales. Let experts handle your Indiamart Account Management, optimize your listings, and maximize daily high-quality lead flow.", keys: "Indiamart Account Management, B2B Lead Generation, Indiamart Listing Optimization, B2B Sales Growth" },

  "ecommerce-services": { title: "Top E-commerce Service in Delhi NCR | Kriscel tech", desc: "Top e-commerce Services in Delhi NCR. From online store setup to digital marketing, we help you increase sales & grow your business.", keys: "E-commerce Service, E-commerce Setup Delhi NCR, Online Store Management, Grow E-commerce Business" },
  "account-creation": { title: "E-commerce Account Creation Experts | Kriscel tech", desc: "Fast-track your online selling journey. We flawlessly handle Amazon, Flipkart, and Shopify E-commerce account creation and onboarding.", keys: "Account Creation, Seller Registration, Amazon Account Setup, Flipkart Onboarding, Business Seller Account" },
  "account-management": { title: "Total E-commerce Account Management | Kriscel tech", desc: "Scale securely on marketplaces. Our comprehensive Account Management takes care of inventory, disputes, and seller health dynamically.", keys: "Account Management, E-commerce Store Management, Marketplace Seller Protection, Total E-commerce Support" },
  "catalog-management": { title: "Flawless Catalog Management System | Kriscel tech", desc: "Optimize your listings. Precise category mapping, SEO-friendly descriptions, and organized Catalog Management for higher marketplace conversions.", keys: "Catalog Management, A+ Content, Listing Optimization, E-commerce Product Cataloging" },
  "ads-campaign-management": { title: "E-commerce ADS Campaign Management | Kriscel tech", desc: "Lower your ACoS and drive sales. We design powerful ADS Campaign Management on Amazon and Flipkart tailored for peak marketplace profitability.", keys: "ADS Campaign Management, E-commerce PPC, Amazon Ads Optimization, Marketplaces Advertising" },

  "recruitment": { title: "Top Recruitment & Staffing Solutions | Kriscel tech", desc: "Discover top-tier talent fast. Our precision Recruitment services guarantee standard-setting placements explicitly tailored for your enterprise needs.", keys: "Recruitment, Staffing Solutions, IT Recruitment, Executive Search India, Talent Acquisition" }
};

const appDir = path.join(__dirname, 'app');

for (const [slug, data] of Object.entries(seoData)) {
  const dirPath = path.join(appDir, slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const layoutPath = path.join(dirPath, 'layout.tsx');
  
  const layoutContentArray = [
    "import { Metadata } from 'next';",
    "",
    "export const metadata: Metadata = {",
    "  title: " + JSON.stringify(data.title) + ",",
    "  description: " + JSON.stringify(data.desc) + ",",
    "  keywords: " + JSON.stringify(data.keys) + ",",
    "  openGraph: {",
    "    title: " + JSON.stringify(data.title) + ",",
    "    description: " + JSON.stringify(data.desc) + ",",
    "    url: \"https://kriscel.com/" + slug + "\",",
    "    siteName: 'Kriscel Tech',",
    "    type: 'website',",
    "  },",
    "  twitter: {",
    "    card: 'summary_large_image',",
    "    title: " + JSON.stringify(data.title) + ",",
    "    description: " + JSON.stringify(data.desc) + ",",
    "  },",
    "  alternates: {",
    "    canonical: \"https://kriscel.com/" + slug + "\",",
    "  }",
    "};",
    "",
    "export default function Layout({ children }: { children: React.ReactNode }) {",
    "  return <>{children}</>;",
    "}"
  ];

  fs.writeFileSync(layoutPath, layoutContentArray.join("\n"));
  console.log("Generated Beautiful SEO Layout for: " + slug);
}
