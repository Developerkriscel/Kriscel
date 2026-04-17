import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Employee Task Management System | Kriscel tech',
  description: 'Best Employee Task Management System | Kriscel tech',
  keywords: 'Employee Task Management System, Workflow Automation Software, Team Productivity Tool',
  openGraph: {
    title: 'Best Employee Task Management System | Kriscel tech',
    description: 'Best Employee Task Management System | Kriscel tech',
    url: 'https://kriscel.com/employee-task-management-system',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Employee Task Management System | Kriscel tech',
    description: 'Best Employee Task Management System | Kriscel tech',
  },
  alternates: {
    canonical: 'https://kriscel.com/employee-task-management-system',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
