export const SOLUTIONS_DATA: Record<string, { title: string; description: string; features: string[]; cta: string; href: string }> = {
  ecommerce: {
    title: "E-commerce Solutions",
    description: "Platforms and technologies that allow companies to sell goods and services online with seamless customer experiences. From custom storefronts to marketplace integrations.",
    features: ["Custom Storefront Design", "Payment Gateway Integration", "Inventory Syncing", "Multi-channel Selling", "SEO for E-commerce"],
    cta: "Scale Your Store",
    href: "/account-management"
  },
  indiamart: {
    title: "IndiaMART Account Management",
    description: "Maximize your lead generation on India's largest B2B marketplace. Our experts handle your IndiaMART account end-to-end, optimizing product listings and response rates.",
    features: ["Listing Optimization", "Lead Response Management", "Keyword Research", "Competitor Analysis", "Monthly Performance Reports"],
    cta: "Grow Your B2B Presence",
    href: "/indiamart-account-management"
  },
  seo: {
    title: "Search Engine Optimization",
    description: "Enhancing website visibility on search engines such as Google, Bing, and Yahoo through expert-driven optimization strategies that drive organic traffic and conversions.",
    features: ["Technical SEO Audit", "On-page Optimization", "Backlink Strategy", "Local SEO Focus", "Content Marketing Integration"],
    cta: "Rank #1 on Google",
    href: "/search-engine-optimization"
  },
  orm: {
    title: "Online Reputation Management",
    description: "Take control of your brand's digital narrative. We monitor, protect, and enhance your online reputation, ensuring your first impression is always positive.",
    features: ["Review Management", "Sentiment Analysis", "Crisis Management", "Positive Content Promotion", "Brand Monitoring"],
    cta: "Secure Your Reputation",
    href: "/online-reputation-management"
  },
  ppc: {
    title: "Paid Ads Management",
    description: "Harness the power of instant traffic with high-ROI PPC campaigns. We manage Google Ads and social media advertising spend for maximum conversions at lowest cost.",
    features: ["Google Ads Management", "Social Media Advertising", "Retargeting Campaigns", "Ad Copywriting", "Conversion Rate Optimization"],
    cta: "Launch Your Campaign",
    href: "/paid-ads-management"
  },
  smo: {
    title: "Social Media Optimization",
    description: "Using digital platforms including websites, social media, email, search engines, and mobile apps to promote goods, services, or brands with maximum engagement.",
    features: ["Social Strategy Planning", "Content Calendar", "Audience Growth", "Engagement Analytics", "Trend Monitoring"],
    cta: "Grow Your Social",
    href: "/social-media-optimization"
  },
  "content-marketing": {
    title: "Content Marketing",
    description: "Drive brand awareness and customer engagement through strategic, high-quality content creation. Blog posts, whitepapers, videos, and social content that converts.",
    features: ["Blog & Article Writing", "Video Content Strategy", "Infographic Design", "Lead Magnet Creation", "Distribution Planning"],
    cta: "Start Content Strategy",
    href: "/content-marketing"
  },
  "gmb-creation": {
    title: "GMB Creation & Optimization",
    description: "Establish a powerful local presence on Google. We create and optimize your Google My Business profile to attract nearby customers and boost local visibility.",
    features: ["Profile Setup & Verification", "Photo & Post Optimization", "Review Generation", "Local SEO Integration", "Insights Monitoring"],
    cta: "Dominate Locally",
    href: "/gmb-creation"
  },
  "web-development": {
    title: "Web App Development",
    description: "Creation of application software that functions and offers interactive experiences on web browsers. Custom dashboards, portals, and SaaS platforms built to scale.",
    features: ["Custom Web Applications", "API Development", "Database Architecture", "Cloud Deployment", "Performance Optimization"],
    cta: "Build Your Platform",
    href: "/web-development"
  },
  "web-designing": {
    title: "Web Designing",
    description: "Premium, responsive web design that captivates users and drives conversions. We create visually stunning interfaces that reflect your brand identity.",
    features: ["UI/UX Design", "Responsive Layouts", "Brand Identity Integration", "Wireframing & Prototyping", "A/B Testing"],
    cta: "Design Your Vision",
    href: "/web-designing"
  },
  "catalog-management": {
    title: "Catalog Management",
    description: "Organize and optimize your product catalog across all channels. Ensure consistent, high-quality product data that drives conversions and customer satisfaction.",
    features: ["Product Data Management", "Image Optimization", "Category Structuring", "Bulk Upload Automation", "Multi-platform Syncing"],
    cta: "Organize Your Catalog",
    href: "/catalog-management"
  },
  "ads-campaign": {
    title: "ADS Campaign Management",
    description: "End-to-end management of your advertising campaigns across Google, Meta, and marketplace platforms. Data-driven optimization for maximum ROI.",
    features: ["Campaign Strategy", "Budget Optimization", "Audience Targeting", "Creative A/B Testing", "Performance Dashboards"],
    cta: "Optimize Your Ads",
    href: "/ads-campaign-management"
  },
  recruitment: {
    title: "Recruitment Services",
    description: "Build winning teams with our expert recruitment and talent acquisition services. We source, screen, and onboard the best talent for your organization.",
    features: ["Requirement Analysis", "Candidate Sourcing", "Skill Assessments", "Interview Coordination", "Onboarding Support"],
    cta: "Hire Top Talent",
    href: "/recruitment"
  },
  "account-creation": {
    title: "Account Creation",
    description: "Seamless setup and configuration of e-commerce accounts across major platforms. We handle the onboarding so you can focus on growing your business.",
    features: ["Platform Registration", "Profile Configuration", "Compliance Setup", "Payment Integration", "Initial Optimization"],
    cta: "Get Started",
    href: "/account-creation"
  }
};

export const SERVICES_DATA: Record<string, { title: string; description: string; features: string[]; cta: string; href: string }> = {
  inventory: {
    title: "Inventory Management System",
    description: "Eliminate stockouts and overstock with our intelligent inventory management software. Track every item across multiple warehouses in real-time with automated alerts and reporting.",
    features: ["Real-time Stock Tracking", "Barcode Scanning Integration", "Multi-warehouse Support", "Automated Reordering", "Insights & Analytics"],
    cta: "Optimize Your Inventory",
    href: "/inventory-management-system"
  },
  "employee-task": {
    title: "Employee Task Management",
    description: "Boost productivity and transparency with our collaborative task management platform. Assign tasks, track progress, and facilitate communication across your entire workforce.",
    features: ["Task Assignment & Deadline", "Progress Tracking Boards", "Internal Communication Tools", "Performance Reporting", "Mobile App Access"],
    cta: "Empower Your Team",
    href: "/employee-task-management-system"
  },
  production: {
    title: "Production Management System",
    description: "Streamline your manufacturing processes from raw materials to finished goods. Our production management tools help you reduce waste and improve throughput.",
    features: ["BOM Management", "Shop Floor Tracking", "Quality Control Checks", "Production Scheduling", "Resource Allocation"],
    cta: "Streamline Production",
    href: "/production-management-system"
  },
  account: {
    title: "Account Management System",
    description: "Keep your finances in check with our robust accounting and invoice management system. Designed for growing businesses that need clarity and compliance.",
    features: ["Invoicing & Billing", "Expense Tracking", "Financial Reporting", "Tax Compliance Tools", "Vendor Management"],
    cta: "Manage Your Accounts",
    href: "/account-management-system"
  },
  hr: {
    title: "HR Management System",
    description: "Digitize and automate your human resource operations from onboarding to offboarding. Manage payroll, attendance, and employee records effortlessly.",
    features: ["Employee Records", "Payroll Automation", "Leave Management", "Attendance Tracking", "Performance Reviews"],
    cta: "Transform Your HR",
    href: "/hr-management-system"
  },
  purchase: {
    title: "Purchase Management System",
    description: "Optimize your procurement workflow with automated purchase orders, vendor management, and spend analytics. Reduce costs and improve supplier relationships.",
    features: ["Purchase Order Automation", "Vendor Management", "Budget Tracking", "Approval Workflows", "Spend Analytics"],
    cta: "Streamline Purchases",
    href: "/purchase-management-system"
  }
};
