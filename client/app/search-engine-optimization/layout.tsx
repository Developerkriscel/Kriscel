import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top SEO Services Provider in Delhi NCR | Trusted Digital Experts',
  description: 'Kriscel tech offers expert SEO services in Delhi NCR designed to increase traffic, improve Google rankings & turn clicks into loyal customers',
  keywords: 'Search Engine Optimization, SEO, Best SEO Services India, Organic Traffic Growth, Top Ranking SEO',
  openGraph: {
    title: 'Top SEO Services Provider in Delhi NCR | Trusted Digital Experts',
    description: 'Kriscel tech offers expert SEO services in Delhi NCR designed to increase traffic, improve Google rankings & turn clicks into loyal customers',
    url: 'https://kriscel.com/search-engine-optimization',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top SEO Services Provider in Delhi NCR | Trusted Digital Experts',
    description: 'Kriscel tech offers expert SEO services in Delhi NCR designed to increase traffic, improve Google rankings & turn clicks into loyal customers',
  },
  alternates: {
    canonical: 'https://kriscel.com/search-engine-optimization',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
