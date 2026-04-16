import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Web Development Services in Delhi NCR | Kriscel tech',
  description: 'Get professional web development services in Delhi NCR. We build responsive & SEO-friendly websites that strengthen your online presence',
  keywords: 'Web Development, Custom Web Apps, Frontend Development, Full Stack Solutions, NextJS Development',
  openGraph: {
    title: 'Top Web Development Services in Delhi NCR | Kriscel tech',
    description: 'Get professional web development services in Delhi NCR. We build responsive & SEO-friendly websites that strengthen your online presence',
    url: 'https://kriscel.com/web-development',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Web Development Services in Delhi NCR | Kriscel tech',
    description: 'Get professional web development services in Delhi NCR. We build responsive & SEO-friendly websites that strengthen your online presence',
  },
  alternates: {
    canonical: 'https://kriscel.com/web-development',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
