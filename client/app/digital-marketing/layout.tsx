import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Digital Marketing Services in Delhi NCR | Kriscel tech',
  description: 'Top Digital Marketing Services in Delhi NCR, including SEO, SMO, PPC & content marketing-Kriscel tech helping brands to grow Online visibility',
  keywords: 'Digital Marketing Services, Best Digital Marketing Agency in Delhi, SEO Agency India, Digital Growth Solutions',
  openGraph: {
    title: 'Top Digital Marketing Services in Delhi NCR | Kriscel tech',
    description: 'Top Digital Marketing Services in Delhi NCR, including SEO, SMO, PPC & content marketing-Kriscel tech helping brands to grow Online visibility',
    url: 'https://kriscel.com/digital-marketing',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Digital Marketing Services in Delhi NCR | Kriscel tech',
    description: 'Top Digital Marketing Services in Delhi NCR, including SEO, SMO, PPC & content marketing-Kriscel tech helping brands to grow Online visibility',
  },
  alternates: {
    canonical: 'https://kriscel.com/digital-marketing',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
