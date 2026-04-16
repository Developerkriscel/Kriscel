import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Commerce Account Management Service in Delhi | Kriscel tech',
  description: 'Optimize your E-Commerce platform with our expert Account Management System service in Delhi. Track, manage, & automate accounts to save time',
  keywords: 'Account Management, E-commerce Store Management, Marketplace Seller Protection, Total E-commerce Support',
  openGraph: {
    title: 'E-Commerce Account Management Service in Delhi | Kriscel tech',
    description: 'Optimize your E-Commerce platform with our expert Account Management System service in Delhi. Track, manage, & automate accounts to save time',
    url: 'https://kriscel.com/account-management',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Account Management Service in Delhi | Kriscel tech',
    description: 'Optimize your E-Commerce platform with our expert Account Management System service in Delhi. Track, manage, & automate accounts to save time',
  },
  alternates: {
    canonical: 'https://kriscel.com/account-management',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
