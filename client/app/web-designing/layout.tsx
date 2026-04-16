import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Web Designing Service in Delhi | Kriscel tech',
  description: 'Top web designing services in Delhi to build responsive & SEO-friendly websites. Grow your business with professional website solutions',
  keywords: 'Web Designing, UI/UX Design, Responsive Website Design, Premium Frontend Design',
  openGraph: {
    title: 'Professional Web Designing Service in Delhi | Kriscel tech',
    description: 'Top web designing services in Delhi to build responsive & SEO-friendly websites. Grow your business with professional website solutions',
    url: 'https://kriscel.com/web-designing',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Designing Service in Delhi | Kriscel tech',
    description: 'Top web designing services in Delhi to build responsive & SEO-friendly websites. Grow your business with professional website solutions',
  },
  alternates: {
    canonical: 'https://kriscel.com/web-designing',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
