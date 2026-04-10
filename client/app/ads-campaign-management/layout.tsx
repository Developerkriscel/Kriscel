import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce ADS Campaign Management | Kriscel tech',
  description: 'Lower your ACoS and drive sales. We design powerful ADS Campaign Management on Amazon and Flipkart tailored for peak marketplace profitability.',
  keywords: 'ADS Campaign Management, E-commerce PPC, Amazon Ads Optimization, Marketplaces Advertising',
  openGraph: {
    title: 'E-commerce ADS Campaign Management | Kriscel tech',
    description: 'Lower your ACoS and drive sales. We design powerful ADS Campaign Management on Amazon and Flipkart tailored for peak marketplace profitability.',
    url: 'https://kriscel.com/ads-campaign-management',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce ADS Campaign Management | Kriscel tech',
    description: 'Lower your ACoS and drive sales. We design powerful ADS Campaign Management on Amazon and Flipkart tailored for peak marketplace profitability.',
  },
  alternates: {
    canonical: 'https://kriscel.com/ads-campaign-management',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
