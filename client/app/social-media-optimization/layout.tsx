import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Social Media Optimization Service Provider in Delhi NCR',
  description: 'Top Social Media Optimization service provider in Delhi to grow engagement & traffic. We help businesses build engagement & achieve success',
  keywords: 'Social media optimization, SMO services, Social Media Marketing, Brand Awareness, Audience Engagement',
  openGraph: {
    title: 'Top Social Media Optimization Service Provider in Delhi NCR',
    description: 'Top Social Media Optimization service provider in Delhi to grow engagement & traffic. We help businesses build engagement & achieve success',
    url: 'https://kriscel.com/social-media-optimization',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Social Media Optimization Service Provider in Delhi NCR',
    description: 'Top Social Media Optimization service provider in Delhi to grow engagement & traffic. We help businesses build engagement & achieve success',
  },
  alternates: {
    canonical: 'https://kriscel.com/social-media-optimization',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
