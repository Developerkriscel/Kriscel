import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Web Development Solutions | Kriscel tech',
  description: 'Build lightning-fast, highly secure, and highly scalable custom web development solutions tailored to your unique business needs.',
  keywords: 'Web Development, Custom Web Apps, Frontend Development, Full Stack Solutions, NextJS Development',
  openGraph: {
    title: 'Custom Web Development Solutions | Kriscel tech',
    description: 'Build lightning-fast, highly secure, and highly scalable custom web development solutions tailored to your unique business needs.',
    url: 'https://kriscel.com/web-development',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web Development Solutions | Kriscel tech',
    description: 'Build lightning-fast, highly secure, and highly scalable custom web development solutions tailored to your unique business needs.',
  },
  alternates: {
    canonical: 'https://kriscel.com/web-development',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
