import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Catalog Management Service in Delhi | Kriscel tech',
  description: 'Top Catalog Management Service in Delhi. Accurate product data, images, & updates to keep your e-commerce platform organized and profitable.',
  keywords: 'Catalog Management, A+ Content, Listing Optimization, E-commerce Product Cataloging',
  openGraph: {
    title: 'Top Catalog Management Service in Delhi | Kriscel tech',
    description: 'Top Catalog Management Service in Delhi. Accurate product data, images, & updates to keep your e-commerce platform organized and profitable.',
    url: 'https://kriscel.com/catalog-management',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Catalog Management Service in Delhi | Kriscel tech',
    description: 'Top Catalog Management Service in Delhi. Accurate product data, images, & updates to keep your e-commerce platform organized and profitable.',
  },
  alternates: {
    canonical: 'https://kriscel.com/catalog-management',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
