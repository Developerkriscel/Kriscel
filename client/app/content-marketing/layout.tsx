import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Content Marketing Services | Kriscel tech',
  description: 'Strategic Content Marketing Services | Kriscel tech',
  keywords: 'Content Marketing, SEO Content Writing, Blog Marketing, Brand Authority Strategy',
  openGraph: {
    title: 'Strategic Content Marketing Services | Kriscel tech',
    description: 'Strategic Content Marketing Services | Kriscel tech',
    url: 'https://kriscel.com/content-marketing',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategic Content Marketing Services | Kriscel tech',
    description: 'Strategic Content Marketing Services | Kriscel tech',
  },
  alternates: {
    canonical: 'https://kriscel.com/content-marketing',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
