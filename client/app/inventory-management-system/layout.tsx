import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Inventory Management System in India | Kriscel tech',
  description: 'Gain complete control of your stock. Our intelligent Inventory Management System tracks, organizes, and automates your supply chain for zero delays.',
  keywords: 'Inventory Management System, Stock Management Software, Supply Chain Automation, Warehouse Management',
  openGraph: {
    title: 'Best Inventory Management System in India | Kriscel tech',
    description: 'Gain complete control of your stock. Our intelligent Inventory Management System tracks, organizes, and automates your supply chain for zero delays.',
    url: 'https://kriscel.com/inventory-management-system',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Inventory Management System in India | Kriscel tech',
    description: 'Gain complete control of your stock. Our intelligent Inventory Management System tracks, organizes, and automates your supply chain for zero delays.',
  },
  alternates: {
    canonical: 'https://kriscel.com/inventory-management-system',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
