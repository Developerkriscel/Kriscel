import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inventory Management System Service in Delhi | Kriscel tech',
  description: 'Inventory Management System service in Delhi. Simplify stock tracking & manage your business operations with smart, & scalable solutions',
  keywords: 'Inventory Management System, Stock Management Software, Supply Chain Automation, Warehouse Management',
  openGraph: {
    title: 'Inventory Management System Service in Delhi | Kriscel tech',
    description: 'Inventory Management System service in Delhi. Simplify stock tracking & manage your business operations with smart, & scalable solutions',
    url: 'https://kriscel.com/inventory-management-system',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inventory Management System Service in Delhi | Kriscel tech',
    description: 'Inventory Management System service in Delhi. Simplify stock tracking & manage your business operations with smart, & scalable solutions',
  },
  alternates: {
    canonical: 'https://kriscel.com/inventory-management-system',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
