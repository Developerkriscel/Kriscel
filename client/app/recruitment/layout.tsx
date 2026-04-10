import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Recruitment & Staffing Solutions | Kriscel tech',
  description: 'Discover top-tier talent fast. Our precision Recruitment services guarantee standard-setting placements explicitly tailored for your enterprise needs.',
  keywords: 'Recruitment, Staffing Solutions, IT Recruitment, Executive Search India, Talent Acquisition',
  openGraph: {
    title: 'Top Recruitment & Staffing Solutions | Kriscel tech',
    description: 'Discover top-tier talent fast. Our precision Recruitment services guarantee standard-setting placements explicitly tailored for your enterprise needs.',
    url: 'https://kriscel.com/recruitment',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Recruitment & Staffing Solutions | Kriscel tech',
    description: 'Discover top-tier talent fast. Our precision Recruitment services guarantee standard-setting placements explicitly tailored for your enterprise needs.',
  },
  alternates: {
    canonical: 'https://kriscel.com/recruitment',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
