import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium UI/UX Web Designing Services | Kriscel tech',
  description: 'Capture user attention instantly with our ultra-modern, responsive, and conversion-optimized premium Web Designing services.',
  keywords: 'Web Designing, UI/UX Design, Responsive Website Design, Premium Frontend Design',
  openGraph: {
    title: 'Premium UI/UX Web Designing Services | Kriscel tech',
    description: 'Capture user attention instantly with our ultra-modern, responsive, and conversion-optimized premium Web Designing services.',
    url: 'https://kriscel.com/web-designing',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium UI/UX Web Designing Services | Kriscel tech',
    description: 'Capture user attention instantly with our ultra-modern, responsive, and conversion-optimized premium Web Designing services.',
  },
  alternates: {
    canonical: 'https://kriscel.com/web-designing',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
