import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Commerce Account Management Service in Delhi | Kriscel tech',
  description: 'Optimize your E-Commerce platform with our expert Account Management System service in Delhi. Track, manage, & automate accounts to save time',
  keywords: 'Account Creation, Seller Registration, Amazon Account Setup, Flipkart Onboarding, Business Seller Account',
  openGraph: {
    title: 'E-Commerce Account Management Service in Delhi | Kriscel tech',
    description: 'Optimize your E-Commerce platform with our expert Account Management System service in Delhi. Track, manage, & automate accounts to save time',
    url: 'https://kriscel.com/account-creation',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Account Management Service in Delhi | Kriscel tech',
    description: 'Optimize your E-Commerce platform with our expert Account Management System service in Delhi. Track, manage, & automate accounts to save time',
  },
  alternates: {
    canonical: 'https://kriscel.com/account-creation',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
