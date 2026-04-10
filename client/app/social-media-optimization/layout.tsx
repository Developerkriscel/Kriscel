import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Highly Engaging Social Media Optimization (SMO) | Kriscel tech',
  description: 'Build a loyal audience. Our Social media optimization (SMO) services create massive brand awareness across Instagram, Facebook, and LinkedIn.',
  keywords: 'Social media optimization, SMO services, Social Media Marketing, Brand Awareness, Audience Engagement',
  openGraph: {
    title: 'Highly Engaging Social Media Optimization (SMO) | Kriscel tech',
    description: 'Build a loyal audience. Our Social media optimization (SMO) services create massive brand awareness across Instagram, Facebook, and LinkedIn.',
    url: 'https://kriscel.com/social-media-optimization',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Highly Engaging Social Media Optimization (SMO) | Kriscel tech',
    description: 'Build a loyal audience. Our Social media optimization (SMO) services create massive brand awareness across Instagram, Facebook, and LinkedIn.',
  },
  alternates: {
    canonical: 'https://kriscel.com/social-media-optimization',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
