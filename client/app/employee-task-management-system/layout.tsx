import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Employee Task Management System | Kriscel tech',
  description: 'Assign tasks, track daily progress, and visibly improve team productivity with our streamlined automated workflow systems.',
  keywords: 'Employee Task Management System, Workflow Automation Software, Team Productivity Tool',
  openGraph: {
    title: 'Best Employee Task Management System | Kriscel tech',
    description: 'Assign tasks, track daily progress, and visibly improve team productivity with our streamlined automated workflow systems.',
    url: 'https://kriscel.com/employee-task-management-system',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Employee Task Management System | Kriscel tech',
    description: 'Assign tasks, track daily progress, and visibly improve team productivity with our streamlined automated workflow systems.',
  },
  alternates: {
    canonical: 'https://kriscel.com/employee-task-management-system',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
