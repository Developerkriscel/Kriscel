import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Business Automation Services in Delhi NCR | Kriscel tech',
  description: 'Automate, optimize & grow with Krisceltech Providing Powerful Business Automation Services in Delhi NCR to boost productivity & profitability.',
  keywords: 'Business Automation, Business Automation Services, Delhi NCR, Process Automation, Workflow Optimization',
  openGraph: {
    title: 'Top Business Automation Services in Delhi NCR | Kriscel tech',
    description: 'Automate, optimize & grow with Krisceltech Providing Powerful Business Automation Services in Delhi NCR to boost productivity & profitability.',
    url: 'https://kriscel.com/business-automation',
    siteName: 'Kriscel Tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Business Automation Services in Delhi NCR | Kriscel tech',
    description: 'Automate, optimize & grow with Krisceltech Providing Powerful Business Automation Services in Delhi NCR to boost productivity & profitability.',
  },
  alternates: {
    canonical: 'https://kriscel.com/business-automation',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
