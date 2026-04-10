import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flawless Catalog Management System | Kriscel tech',
  description: 'Optimize your listings. Precise category mapping, SEO-friendly descriptions, and organized Catalog Management for higher marketplace conversions.',
  keywords: 'Catalog Management, A+ Content, Listing Optimization, E-commerce Product Cataloging',
  openGraph: {
    title: 'Flawless Catalog Management System | Kriscel tech',
    description: 'Optimize your listings. Precise category mapping, SEO-friendly descriptions, and organized Catalog Management for higher marketplace conversions.',
    url: 'https://kriscel.com/catalog-management',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flawless Catalog Management System | Kriscel tech',
    description: 'Optimize your listings. Precise category mapping, SEO-friendly descriptions, and organized Catalog Management for higher marketplace conversions.',
  },
  alternates: {
    canonical: 'https://kriscel.com/catalog-management',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
