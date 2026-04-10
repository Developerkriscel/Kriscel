import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Purchase Management System | Kriscel tech',
  description: 'Simplify purchasing, track vendors, and process orders flawlessly with intelligent purchasing automation software by Kriscel tech.',
  keywords: 'Purchase Management System, Vendor Management, Order Processing Software',
  openGraph: {
    title: 'Top Purchase Management System | Kriscel tech',
    description: 'Simplify purchasing, track vendors, and process orders flawlessly with intelligent purchasing automation software by Kriscel tech.',
    url: 'https://kriscel.com/purchase-management-system',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Purchase Management System | Kriscel tech',
    description: 'Simplify purchasing, track vendors, and process orders flawlessly with intelligent purchasing automation software by Kriscel tech.',
  },
  alternates: {
    canonical: 'https://kriscel.com/purchase-management-system',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
