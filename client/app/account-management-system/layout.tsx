import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account Management System Service in Delhi | Kriscel tech',
  description: 'Boost your business efficiency with our expert Account Management System service in Delhi. Streamline accounts, save time, and grow smarter',
  keywords: 'Account Management System, Billing Automation Software, Financial Records System',
  openGraph: {
    title: 'Account Management System Service in Delhi | Kriscel tech',
    description: 'Boost your business efficiency with our expert Account Management System service in Delhi. Streamline accounts, save time, and grow smarter',
    url: 'https://kriscel.com/account-management-system',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Account Management System Service in Delhi | Kriscel tech',
    description: 'Boost your business efficiency with our expert Account Management System service in Delhi. Streamline accounts, save time, and grow smarter',
  },
  alternates: {
    canonical: 'https://kriscel.com/account-management-system',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
