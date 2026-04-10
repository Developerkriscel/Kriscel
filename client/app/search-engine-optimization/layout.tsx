import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Search Engine Optimization (SEO) Services | Kriscel tech',
  description: 'Dominate search engine rankings. Our data-driven SEO strategies dramatically increase your organic visibility, leads, and website traffic.',
  keywords: 'Search Engine Optimization, SEO, Best SEO Services India, Organic Traffic Growth, Top Ranking SEO',
  openGraph: {
    title: 'Professional Search Engine Optimization (SEO) Services | Kriscel tech',
    description: 'Dominate search engine rankings. Our data-driven SEO strategies dramatically increase your organic visibility, leads, and website traffic.',
    url: 'https://kriscel.com/search-engine-optimization',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Search Engine Optimization (SEO) Services | Kriscel tech',
    description: 'Dominate search engine rankings. Our data-driven SEO strategies dramatically increase your organic visibility, leads, and website traffic.',
  },
  alternates: {
    canonical: 'https://kriscel.com/search-engine-optimization',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
