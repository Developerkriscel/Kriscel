"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { API_URL } from '@/lib/api';

interface LogoBadgesProps {
  type: 'marketplace' | 'social' | 'ads' | 'recruitment' | 'all';
}

interface Setting {
  key: string;
  value: string;
}

const BRAND_LOGOS = {
  amazon: {
    name: 'Amazon',
    color: '#FF9900',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.072 13.92c-.612.396-1.548.612-2.316.612-1.74 0-2.328-1.032-2.328-2.148 0-1.896 1.488-2.604 4.092-2.604.18 0 .42.012.564.036v.924c0 1.512-.132 2.652-.012 3.18zm3.66 4.38c-.3 1.152-1.848 1.092-2.676.24-.312-.312-.132-.612-.036-.9.252-.732.552-2.28.552-3.828v-5.22c0-1.752-1.224-2.82-3.468-2.82-1.92 0-3.66.72-4.092 2.628-.06.288.168.456.408.312.444-.24.876-.444 1.344-.444.384 0 .504.192.516.516.036.756-.444.828-1 .96-2.112.48-3.084 1.836-3.084 3.636 0 2.292 1.632 3.528 3.6 3.528 1.152 0 2.232-.348 3.156-1.236.432.744 1.344 1.344 2.508 1.344 1.2 0 2.628-.768 2.928-2.256.096-.516-.276-.648-.636-.48zm.276 2.556c-1.332.96-3.216 1.476-4.944 1.476-2.484 0-4.728-.948-6.528-2.52-.228-.204-.048-.48.24-.336 2.052 1.056 4.608 1.692 7.044 1.692 1.584 0 3.324-.3 4.884-.96.396-.168.612.336.3 1.2l-.996.448z" />
      </svg>
    )
  },
  flipkart: {
    name: 'Flipkart',
    color: '#2874F0',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.14 12.94c0-2.33-1.89-4.22-4.21-4.22-2.33 0-4.22 1.89-4.22 4.22s1.89 4.22 4.22 4.22c2.32 0 4.21-1.89 4.21-4.22zm-4.21 2.8c-1.54 0-2.8-1.26-2.8-2.8s1.26-2.8 2.8-2.8 2.8 1.26 2.8 2.8-1.26 2.8-2.8 2.8zM21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H3V4h18v16zM5.31 16.5h2.12v-2.12H5.31V16.5zm0-3.19h2.12v-2.12H5.31v2.12zm0-3.18h2.12V8.01H5.31v2.12zm11.26 0h2.12V8.01h-2.12v2.12zm0 3.18h2.12v-2.12h-2.12v2.12zm0 3.19h2.12v-2.12h-2.12v2.12z" />
      </svg>
    )
  },
  linkedin: {
    name: 'LinkedIn',
    color: '#0077B5',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    )
  },
  meta: {
    name: 'Meta',
    color: '#0668E1',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  google: {
    name: 'Google Ads',
    color: '#4285F4',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.26 1.07-3.71 1.07-2.87 0-5.3-1.94-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.67-.35-1.38-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
      </svg>
    )
  },
  instagram: {
    name: 'Instagram',
    color: '#E4405F',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
  reddit: {
    name: 'Reddit',
    color: '#FF4500',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 11.5c0-1.65-1.35-3-3-3-.4 0-.78.08-1.13.24C18.25 7.27 15.83 6.5 13.2 6.5l1.1-5.1 3.7.8c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.83-.67-1.5-1.5-1.5-.65 0-1.2.42-1.4 1l-4.1-.9c-.19-.04-.38.07-.44.27l-1.2 5.5c-2.67 0-5.12.77-6.7 1.74-.35-.16-.73-.24-1.13-.24-1.65 0-3 1.35-3 3 0 1.32.86 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.19-.4 2.05-1.52 2.05-2.84zM6.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zm10.5 5.8c-1.84 2.02-5.16 2.02-7 0-.14-.15-.14-.39 0-.54.15-.14.39-.14.54 0 1.54 1.68 4.37 1.68 5.92 0 .15-.14.39-.14.54 0 .14.15.14.39 0 .54zm.5-4.3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" />
      </svg>
    )
  },
  youtube: {
    name: 'YouTube',
    color: '#FF0000',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  }
};

const LOGO_SETS = {
  marketplace: ['amazon', 'flipkart', 'indiamart'],
  social: ['linkedin', 'instagram', 'facebook', 'reddit', 'youtube'],
  ads: ['google', 'meta', 'instagram', 'linkedin'],
  recruitment: ['linkedin'],
  all: Object.keys(BRAND_LOGOS)
};

const LogoBadge = ({ brand, url, delay = 0, style = {} }: { brand: string, url: string, delay?: number, style?: any }) => {
  const logo = BRAND_LOGOS[brand as keyof typeof BRAND_LOGOS] || BRAND_LOGOS.google;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
        transition: {
          y: {
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
          },
          opacity: { duration: 0.5, delay: delay * 0.2 },
          scale: { duration: 0.5, delay: delay * 0.2 }
        }
      }}
      whileHover={{ scale: 1.1, backgroundColor: `${logo.color}15`, borderColor: logo.color }}
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/30 backdrop-blur-md border border-white/40 rounded-full shadow-sm group transition-colors cursor-pointer"
      style={style}
    >
      <div style={{ color: logo.color }} className="group-hover:scale-110 transition-transform duration-300">
        {logo.svg}
      </div>
      <span className="text-[10px] font-black uppercase tracking-tighter text-slate-800">{logo.name}</span>
    </motion.a>
  );
};

export default function LogoBadges({ type }: LogoBadgesProps) {
  const [links, setLinks] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch(`${API_URL}/settings`);
        const result = await res.json();
        if (result.success) {
          const linkMap: Record<string, string> = {};
          result.data.forEach((s: any) => {
            linkMap[s.key] = s.value;
          });
          setLinks(linkMap);
        }
      } catch (err) {
        console.error("Failed to fetch settings", err);
      }
    };
    fetchSettings();
  }, []);

  const set = LOGO_SETS[type] || LOGO_SETS.all;

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {set.map((brand, idx) => {
        const linkKey = `${brand}_url`;
        const url = links[linkKey] || '#';
        if (url === '#' && brand === 'indiamart') return null; // Hide if not configured for specific ones

        return (
          <LogoBadge
            key={brand}
            brand={brand}
            url={url}
            delay={idx * 0.5}
          />
        );
      })}
    </div>
  );
}
