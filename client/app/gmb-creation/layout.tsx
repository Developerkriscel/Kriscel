import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GMB Creation Service in Delhi | Boost Local Business Visibility',
  description: 'Professional GMB Creation Service in Delhi to help your business appear on Google Maps & Search, boost local visibility & attract new customers',
  keywords: 'GMB Creation, Google My Business, Local SEO, Local Business Listing, Map Ranking',
  openGraph: {
    title: 'GMB Creation Service in Delhi | Boost Local Business Visibility',
    description: 'Professional GMB Creation Service in Delhi to help your business appear on Google Maps & Search, boost local visibility & attract new customers',
    url: 'https://kriscel.com/gmb-creation',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GMB Creation Service in Delhi | Boost Local Business Visibility',
    description: 'Professional GMB Creation Service in Delhi to help your business appear on Google Maps & Search, boost local visibility & attract new customers',
  },
  alternates: {
    canonical: 'https://kriscel.com/gmb-creation',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
