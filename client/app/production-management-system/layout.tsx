import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advanced Production Management System | Kriscel tech',
  description: 'Streamline your manufacturing process with our Production Management System. Reduce delays and increase output efficiency effortlessly.',
  keywords: 'Production Management System, Manufacturing Software, Production Workflow Automation',
  openGraph: {
    title: 'Advanced Production Management System | Kriscel tech',
    description: 'Streamline your manufacturing process with our Production Management System. Reduce delays and increase output efficiency effortlessly.',
    url: 'https://kriscel.com/production-management-system',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Production Management System | Kriscel tech',
    description: 'Streamline your manufacturing process with our Production Management System. Reduce delays and increase output efficiency effortlessly.',
  },
  alternates: {
    canonical: 'https://kriscel.com/production-management-system',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
