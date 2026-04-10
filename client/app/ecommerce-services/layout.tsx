import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top E-commerce Service in Delhi NCR | Kriscel tech',
  description: 'Top e-commerce Services in Delhi NCR. From online store setup to digital marketing, we help you increase sales & grow your business.',
  keywords: 'E-commerce Service, E-commerce Setup Delhi NCR, Online Store Management, Grow E-commerce Business',
  openGraph: {
    title: 'Top E-commerce Service in Delhi NCR | Kriscel tech',
    description: 'Top e-commerce Services in Delhi NCR. From online store setup to digital marketing, we help you increase sales & grow your business.',
    url: 'https://kriscel.com/ecommerce-services',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top E-commerce Service in Delhi NCR | Kriscel tech',
    description: 'Top e-commerce Services in Delhi NCR. From online store setup to digital marketing, we help you increase sales & grow your business.',
  },
  alternates: {
    canonical: 'https://kriscel.com/ecommerce-services',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
