import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert GMB Creation & Local SEO Setup | Kriscel tech',
  description: 'Boost your local visibility. Set up your Google My Business correctly to capture local customers actively searching in your area.',
  keywords: 'GMB Creation, Google My Business, Local SEO, Local Business Listing, Map Ranking',
  openGraph: {
    title: 'Expert GMB Creation & Local SEO Setup | Kriscel tech',
    description: 'Boost your local visibility. Set up your Google My Business correctly to capture local customers actively searching in your area.',
    url: 'https://kriscel.com/gmb-creation',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert GMB Creation & Local SEO Setup | Kriscel tech',
    description: 'Boost your local visibility. Set up your Google My Business correctly to capture local customers actively searching in your area.',
  },
  alternates: {
    canonical: 'https://kriscel.com/gmb-creation',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
