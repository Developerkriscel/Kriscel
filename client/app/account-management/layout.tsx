import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Total E-commerce Account Management | Kriscel tech',
  description: 'Scale securely on marketplaces. Our comprehensive Account Management takes care of inventory, disputes, and seller health dynamically.',
  keywords: 'Account Management, E-commerce Store Management, Marketplace Seller Protection, Total E-commerce Support',
  openGraph: {
    title: 'Total E-commerce Account Management | Kriscel tech',
    description: 'Scale securely on marketplaces. Our comprehensive Account Management takes care of inventory, disputes, and seller health dynamically.',
    url: 'https://kriscel.com/account-management',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Total E-commerce Account Management | Kriscel tech',
    description: 'Scale securely on marketplaces. Our comprehensive Account Management takes care of inventory, disputes, and seller health dynamically.',
  },
  alternates: {
    canonical: 'https://kriscel.com/account-management',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
