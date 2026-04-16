import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Reputation Management Service in Delhi | Kriscel tech',
  description: 'Get expert Online Reputation Management service in Delhi. From handling negative reviews to improving brand credibility',
  keywords: 'Online Reputation Management, ORM Services, Brand Protection, Review Management, Trust Building',
  openGraph: {
    title: 'Online Reputation Management Service in Delhi | Kriscel tech',
    description: 'Get expert Online Reputation Management service in Delhi. From handling negative reviews to improving brand credibility',
    url: 'https://kriscel.com/online-reputation-management',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Reputation Management Service in Delhi | Kriscel tech',
    description: 'Get expert Online Reputation Management service in Delhi. From handling negative reviews to improving brand credibility',
  },
  alternates: {
    canonical: 'https://kriscel.com/online-reputation-management',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
