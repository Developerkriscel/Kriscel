import { Metadata, Viewport } from 'next';
import { API_URL } from '@/lib/api';

export async function getPageMetadata(path: string): Promise<Metadata> {
  const defaultMetadata: Metadata = {
    title: "Kriscel tech – Business Automation & Digital Growth Partner",
    description: "Kriscel tech transforms businesses with AI-powered automation, digital marketing, e-commerce & recruitment services—designed to Business growth",
    metadataBase: new URL(process.env.NEXT_PUBLIC_CLIENT_URL || 'http://localhost:3000'),
    robots: "index, follow",
    icons: {
      icon: "/images/kriscel-logo.png",
      apple: "/images/kriscel-logo.png",
    },
    openGraph: {
      title: "Kriscel tech – Business Automation & Digital Growth Partner",
      description: "Kriscel tech transforms businesses with AI-powered automation, digital marketing, e-commerce & recruitment services—designed to Business growth",
      type: 'website',
      locale: 'en_IN',
      url: `https://www.kriscel.com${path}`,
      siteName: 'Kriscel Technologies',
      images: [
        {
          url: '/images/og-default.png',
          width: 1200,
          height: 630,
          alt: 'Kriscel Technologies',
        },
      ],
    },
  };

  try {
    const res = await fetch(`${API_URL}/seo/path?path=${encodeURIComponent(path || '/')}`, {
      next: { revalidate: 60 }, // Cache for 1 minute
      signal: AbortSignal.timeout(2000), // Timeout after 2 seconds
    });

    if (!res.ok) throw new Error('Fetch failed');

    const result = await res.json();

    if (result.success && result.data) {
      const seo = result.data;
      return {
        ...defaultMetadata,
        title: seo.title || defaultMetadata.title,
        description: seo.metaDescription || defaultMetadata.description,
        keywords: seo.keywords || [],
        alternates: {
          canonical: seo.canonicalUrl || `https://www.kriscel.com${path}`,
        },
        robots: seo.noIndex ? "noindex, nofollow" : "index, follow",
        openGraph: {
          ...defaultMetadata.openGraph,
          title: seo.title,
          description: seo.metaDescription,
          images: seo.ogImage ? [{ url: seo.ogImage }] : defaultMetadata.openGraph?.images,
        },
      };
    }
  } catch (err) {
    // Only log errors in development, not during production build to keep logs clean
    if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
      console.error('Error fetching SEO metadata', err);
    }
  }

  return defaultMetadata;
}

export function getPageViewport(path: string): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#4f46e5',
  };
}
