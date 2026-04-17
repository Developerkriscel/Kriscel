import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Ads Campaign Management Service in Delhi',
  description: 'Professional ADS campaign management service in Delhi to boost your e-commerce sales. Track performance, and attract the right customers',
  keywords: 'ADS Campaign Management, E-commerce PPC, Amazon Ads Optimization, Marketplaces Advertising',
  openGraph: {
    title: 'E-commerce Ads Campaign Management Service in Delhi',
    description: 'Professional ADS campaign management service in Delhi to boost your e-commerce sales. Track performance, and attract the right customers',
    url: 'https://kriscel.com/ads-campaign-management',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Ads Campaign Management Service in Delhi',
    description: 'Professional ADS campaign management service in Delhi to boost your e-commerce sales. Track performance, and attract the right customers',
  },
  alternates: {
    canonical: 'https://kriscel.com/ads-campaign-management',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
