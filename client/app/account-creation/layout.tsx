import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-ccomerce Account Creation Service Provider in Delhi | Kriscel tech',
  description: 'Get a Professional E-Commerce account creation services Provider in Delhi. Boost your online sales with expert setup and marketplace support.',
  keywords: 'Account Creation, Seller Registration, Amazon Account Setup, Flipkart Onboarding, Business Seller Account',
  openGraph: {
    title: 'E-ccomerce Account Creation Service Provider in Delhi | Kriscel tech',
    description: 'Get a Professional E-Commerce account creation services Provider in Delhi. Boost your online sales with expert setup and marketplace support.',
    url: 'https://kriscel.com/account-creation',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-ccomerce Account Creation Service Provider in Delhi | Kriscel tech',
    description: 'Get a Professional E-Commerce account creation services Provider in Delhi. Boost your online sales with expert setup and marketplace support.',
  },
  alternates: {
    canonical: 'https://kriscel.com/account-creation',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
