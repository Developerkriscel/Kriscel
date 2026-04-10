import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automated HR Management System (HRMS) | Kriscel tech',
  description: 'Automate HR tasks including attendance, payroll, leave approvals, onboarding, and employee records in a single fast platform.',
  keywords: 'HR Management System, HRMS Software India, Automated Payroll System, Employee Attendance Tracking',
  openGraph: {
    title: 'Automated HR Management System (HRMS) | Kriscel tech',
    description: 'Automate HR tasks including attendance, payroll, leave approvals, onboarding, and employee records in a single fast platform.',
    url: 'https://kriscel.com/hr-management-system',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automated HR Management System (HRMS) | Kriscel tech',
    description: 'Automate HR tasks including attendance, payroll, leave approvals, onboarding, and employee records in a single fast platform.',
  },
  alternates: {
    canonical: 'https://kriscel.com/hr-management-system',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
