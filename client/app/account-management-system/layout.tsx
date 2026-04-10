import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Account Management System Solutions | Kriscel tech',
  description: 'Automate financial and billing workflows. Ensure 100% accuracy and speed up your daily operations seamlessly.',
  keywords: 'Account Management System, Billing Automation Software, Financial Records System',
  openGraph: {
    title: 'Secure Account Management System Solutions | Kriscel tech',
    description: 'Automate financial and billing workflows. Ensure 100% accuracy and speed up your daily operations seamlessly.',
    url: 'https://kriscel.com/account-management-system',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Account Management System Solutions | Kriscel tech',
    description: 'Automate financial and billing workflows. Ensure 100% accuracy and speed up your daily operations seamlessly.',
  },
  alternates: {
    canonical: 'https://kriscel.com/account-management-system',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
