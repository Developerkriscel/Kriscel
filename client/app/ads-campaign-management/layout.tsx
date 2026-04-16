import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paid Ads Management Services in Delhi | Drive Targeted Leads',
  description: 'Get result-driven paid ads management services in Delhi. From Google Ads to social media campaigns optimized for reach, conversions & ROI.',
  keywords: 'ADS Campaign Management, E-commerce PPC, Amazon Ads Optimization, Marketplaces Advertising',
  openGraph: {
    title: 'Paid Ads Management Services in Delhi | Drive Targeted Leads',
    description: 'Get result-driven paid ads management services in Delhi. From Google Ads to social media campaigns optimized for reach, conversions & ROI.',
    url: 'https://kriscel.com/ads-campaign-management',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paid Ads Management Services in Delhi | Drive Targeted Leads',
    description: 'Get result-driven paid ads management services in Delhi. From Google Ads to social media campaigns optimized for reach, conversions & ROI.',
  },
  alternates: {
    canonical: 'https://kriscel.com/ads-campaign-management',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
