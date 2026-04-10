import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert Online Reputation Management (ORM) | Kriscel tech',
  description: 'Protect your brand. Our Online Reputation Management experts suppress negative links and push positive customer reviews to the #1 spot.',
  keywords: 'Online Reputation Management, ORM Services, Brand Protection, Review Management, Trust Building',
  openGraph: {
    title: 'Expert Online Reputation Management (ORM) | Kriscel tech',
    description: 'Protect your brand. Our Online Reputation Management experts suppress negative links and push positive customer reviews to the #1 spot.',
    url: 'https://kriscel.com/online-reputation-management',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Online Reputation Management (ORM) | Kriscel tech',
    description: 'Protect your brand. Our Online Reputation Management experts suppress negative links and push positive customer reviews to the #1 spot.',
  },
  alternates: {
    canonical: 'https://kriscel.com/online-reputation-management',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
