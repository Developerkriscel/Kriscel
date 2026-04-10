import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ROI-Focused Paid Ads Management (PPC) | Kriscel tech',
  description: 'Maximize your Return on Investment. Kriscel Tech offers highly optimized Paid Ads Management to generate high-intent leads instantly.',
  keywords: 'Paid Ads Management, PPC Campaign Optimization, Google Ads Experts, Instant Lead Generation',
  openGraph: {
    title: 'ROI-Focused Paid Ads Management (PPC) | Kriscel tech',
    description: 'Maximize your Return on Investment. Kriscel Tech offers highly optimized Paid Ads Management to generate high-intent leads instantly.',
    url: 'https://kriscel.com/paid-ads-management',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROI-Focused Paid Ads Management (PPC) | Kriscel tech',
    description: 'Maximize your Return on Investment. Kriscel Tech offers highly optimized Paid Ads Management to generate high-intent leads instantly.',
  },
  alternates: {
    canonical: 'https://kriscel.com/paid-ads-management',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
