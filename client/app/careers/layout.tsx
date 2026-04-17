import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career - bisque-lark-249231.hostingersite.com',
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}