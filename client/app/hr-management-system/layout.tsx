import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Management System Service in Delhi | Smarter HR Solutions',
  description: 'Upgrade your HR process with our advanced HR management system service in Delhi. Automate payroll, attendance & employee records for smooth business operations',
  keywords: 'HR Management System, HRMS Software India, Automated Payroll System, Employee Attendance Tracking',
  openGraph: {
    title: 'HR Management System Service in Delhi | Smarter HR Solutions',
    description: 'Upgrade your HR process with our advanced HR management system service in Delhi. Automate payroll, attendance & employee records for smooth business operations',
    url: 'https://kriscel.com/hr-management-system',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HR Management System Service in Delhi | Smarter HR Solutions',
    description: 'Upgrade your HR process with our advanced HR management system service in Delhi. Automate payroll, attendance & employee records for smooth business operations',
  },
  alternates: {
    canonical: 'https://kriscel.com/hr-management-system',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
