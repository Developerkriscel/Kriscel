import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Production Management System Services in Delhi NCR',
  description: 'Kriscel tech offers Production Management System services in Delhi NCR. Our solutions help businesses automate workflow & maximize productivity',
  keywords: 'Production Management System, Manufacturing Software, Production Workflow Automation',
  openGraph: {
    title: 'Production Management System Services in Delhi NCR',
    description: 'Kriscel tech offers Production Management System services in Delhi NCR. Our solutions help businesses automate workflow & maximize productivity',
    url: 'https://kriscel.com/production-management-system',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Production Management System Services in Delhi NCR',
    description: 'Kriscel tech offers Production Management System services in Delhi NCR. Our solutions help businesses automate workflow & maximize productivity',
  },
  alternates: {
    canonical: 'https://kriscel.com/production-management-system',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
