import { notFound } from 'next/navigation';
import DynamicServiceTemplate from '@/components/DynamicServiceTemplate';
import { API_URL } from '@/lib/api';

export const dynamic = 'force-dynamic';

async function getService(slug: string) {
  try {
    const res = await fetch(`${API_URL}/services/${slug}`, {
      cache: 'no-store'
    });
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error('Failed to fetch service data');
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching dynamic service page:", error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) return { title: 'Not Found | Kriscel Tech' };

  return {
    title: `${service.title} | Kriscel Tech`,
    description: service.description ? service.description.substring(0, 160) : 'Professional Solutions by Kriscel Tech'
  };
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service || service.status !== 'published') {
    notFound();
  }

  return <DynamicServiceTemplate data={service} />;
}
