import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Account Creation Experts | Kriscel tech',
  description: 'Fast-track your online selling journey. We flawlessly handle Amazon, Flipkart, and Shopify E-commerce account creation and onboarding.',
  keywords: 'Account Creation, Seller Registration, Amazon Account Setup, Flipkart Onboarding, Business Seller Account',
  openGraph: {
    title: 'E-commerce Account Creation Experts | Kriscel tech',
    description: 'Fast-track your online selling journey. We flawlessly handle Amazon, Flipkart, and Shopify E-commerce account creation and onboarding.',
    url: 'https://kriscel.com/account-creation',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Account Creation Experts | Kriscel tech',
    description: 'Fast-track your online selling journey. We flawlessly handle Amazon, Flipkart, and Shopify E-commerce account creation and onboarding.',
  },
  alternates: {
    canonical: 'https://kriscel.com/account-creation',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
