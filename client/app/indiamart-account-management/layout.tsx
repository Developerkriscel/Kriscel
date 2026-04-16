import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indiamart Account Management Service in Delhi | Kriscel tech',
  description: 'Indiamart Account Management service in Delhi to increase visibility & boost sales. We provide complete support for account growth',
  keywords: 'Indiamart Account Management, B2B Lead Generation, Indiamart Listing Optimization, B2B Sales Growth',
  openGraph: {
    title: 'Indiamart Account Management Service in Delhi | Kriscel tech',
    description: 'Indiamart Account Management service in Delhi to increase visibility & boost sales. We provide complete support for account growth',
    url: 'https://kriscel.com/indiamart-account-management',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indiamart Account Management Service in Delhi | Kriscel tech',
    description: 'Indiamart Account Management service in Delhi to increase visibility & boost sales. We provide complete support for account growth',
  },
  alternates: {
    canonical: 'https://kriscel.com/indiamart-account-management',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
