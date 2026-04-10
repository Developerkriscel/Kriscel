import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Indiamart Account Management | Kriscel tech',
  description: 'Multiply B2B sales. Let experts handle your Indiamart Account Management, optimize your listings, and maximize daily high-quality lead flow.',
  keywords: 'Indiamart Account Management, B2B Lead Generation, Indiamart Listing Optimization, B2B Sales Growth',
  openGraph: {
    title: 'Professional Indiamart Account Management | Kriscel tech',
    description: 'Multiply B2B sales. Let experts handle your Indiamart Account Management, optimize your listings, and maximize daily high-quality lead flow.',
    url: 'https://kriscel.com/indiamart-account-management',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Indiamart Account Management | Kriscel tech',
    description: 'Multiply B2B sales. Let experts handle your Indiamart Account Management, optimize your listings, and maximize daily high-quality lead flow.',
  },
  alternates: {
    canonical: 'https://kriscel.com/indiamart-account-management',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
