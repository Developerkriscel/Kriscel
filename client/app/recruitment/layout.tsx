import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recruitment Services in Delhi NCR | Trusted Hiring Solutions',
  description: 'Kriscel tech offers Best recruitment services in Delhi NCR, helping businesses find skilled talent with efficient staffing & hiring solutions',
  keywords: 'Recruitment, Staffing Solutions, IT Recruitment, Executive Search India, Talent Acquisition',
  openGraph: {
    title: 'Recruitment Services in Delhi NCR | Trusted Hiring Solutions',
    description: 'Kriscel tech offers Best recruitment services in Delhi NCR, helping businesses find skilled talent with efficient staffing & hiring solutions',
    url: 'https://kriscel.com/recruitment',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recruitment Services in Delhi NCR | Trusted Hiring Solutions',
    description: 'Kriscel tech offers Best recruitment services in Delhi NCR, helping businesses find skilled talent with efficient staffing & hiring solutions',
  },
  alternates: {
    canonical: 'https://kriscel.com/recruitment',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
