import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Purchase Management System Service in Delhi | Kriscel tech',
  description: 'Boost efficiency with our advanced Purchase Management System in Delhi. Simplify buying, track expenses, and scale your business smartly',
  keywords: 'Purchase Management System, Vendor Management, Order Processing Software',
  openGraph: {
    title: 'Purchase Management System Service in Delhi | Kriscel tech',
    description: 'Boost efficiency with our advanced Purchase Management System in Delhi. Simplify buying, track expenses, and scale your business smartly',
    url: 'https://kriscel.com/purchase-management-system',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purchase Management System Service in Delhi | Kriscel tech',
    description: 'Boost efficiency with our advanced Purchase Management System in Delhi. Simplify buying, track expenses, and scale your business smartly',
  },
  alternates: {
    canonical: 'https://kriscel.com/purchase-management-system',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
