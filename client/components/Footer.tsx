import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { API_URL } from "@/lib/api";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
        <div className="lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="mb-6 overflow-hidden h-14 translate-x-[-10px] sm:translate-x-0">
            <Image
              src="/images/kriscel-logo.png"
              alt="Kriscel Tech"
              width={160}
              height={40}
              className="h-14 w-auto brightness-0 invert scale-[2.2]"
            />
          </div>
          <p className="text-slate-400 mb-8 leading-relaxed max-w-xs">
            Pushing the boundaries of technology and design to create high-performance digital experiences.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center sm:justify-start gap-3 text-slate-400">
              <Phone size={18} className="text-accent" />
              <span className="text-sm font-medium">+91 8985419420</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3 text-slate-400">
              <Mail size={18} className="text-accent" />
              <span className="text-sm font-medium">Info@kriscel.com</span>
            </div>
            <div className="flex items-start justify-center sm:justify-start gap-3 text-slate-400">
              <MapPin size={18} className="text-accent mt-1 shrink-0" />
              <span className="text-sm font-medium text-center sm:text-left">
                229, BHARTHAL, SECTOR - 26, DWARKA, South West Delhi, Delhi, 110077
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Solutions</h3>
          <ul className="space-y-3 text-sm text-slate-400 font-medium tracking-tight">
            <li><Link href="/ecommerce-services" className="hover:text-accent transition-colors">E-commerce Solutions</Link></li>
            <li><Link href="/indiamart-account-management" className="hover:text-accent transition-colors">IndiaMART Management</Link></li>
            <li><Link href="/search-engine-optimization" className="hover:text-accent transition-colors">Search Engine Optimization</Link></li>
            <li><Link href="/online-reputation-management" className="hover:text-accent transition-colors">Digital Reputation</Link></li>
            <li><Link href="/paid-ads-management" className="hover:text-accent transition-colors">Pay Per Click Ads</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Services</h3>
          <ul className="space-y-3 text-sm text-slate-400 font-medium tracking-tight">
            <li><Link href="/inventory-management-system" className="hover:text-accent transition-colors">Inventory Management System</Link></li>
            <li><Link href="/employee-task-management-system" className="hover:text-accent transition-colors">Employee Task Management</Link></li>
            <li><Link href="/production-management-system" className="hover:text-accent transition-colors">Production Management System</Link></li>
            <li><Link href="/account-management-system" className="hover:text-accent transition-colors">Account Management System</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Expert Help</h3>
          <p className="text-sm text-slate-400 mb-6">Need guidance on your next project?</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 text-center w-full">
            Talk to Our Experts
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] md:text-xs font-medium text-white/30 uppercase tracking-[0.1em]">
          <p>&copy; {new Date().getFullYear()} Kriscel Tech Pvt. Ltd. All rights reserved.</p>
        </div>

        {/* Social Icons with Official Colors & Glassmorphism */}
        <div className="flex flex-wrap justify-center gap-4">
          <SocialIcon brand="linkedin" color="#0077B5" />
          <SocialIcon brand="instagram" color="#E4405F" />
          <SocialIcon brand="facebook" color="#1877F2" />
          <SocialIcon brand="reddit" color="#FF4500" />
          <SocialIcon brand="youtube" color="#FF0000" />
        </div>

        <div className="flex gap-6 text-[10px] md:text-xs font-medium text-white/30 uppercase tracking-[0.1em]">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ brand, color }: { brand: string, color: string }) {
  const [url, setUrl] = React.useState('#');

  React.useEffect(() => {
    const fetchLink = async () => {
      try {
        const res = await fetch(`${API_URL}/settings`);
        const result = await res.json();
        if (result.success) {
          const setting = result.data.find((s: any) => s.key === `${brand}_url`);
          if (setting) setUrl(setting.value);
        }
      } catch (err) { }
    };
    fetchLink();
  }, [brand]);

  const icons: Record<string, React.ReactNode> = {
    linkedin: <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />,
    instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
    facebook: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
    reddit: <path d="M24 11.5c0-1.65-1.35-3-3-3-.4 0-.78.08-1.13.24C18.25 7.27 15.83 6.5 13.2 6.5l1.1-5.1 3.7.8c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.83-.67-1.5-1.5-1.5-.65 0-1.2.42-1.4 1l-4.1-.9c-.19-.04-.38.07-.44.27l-1.2 5.5c-2.67 0-5.12.77-6.7 1.74-.35-.16-.73-.24-1.13-.24-1.65 0-3 1.35-3 3 0 1.32.86 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.19-.4 2.05-1.52 2.05-2.84zM6.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zm10.5 5.8c-1.84 2.02-5.16 2.02-7 0-.14-.15-.14-.39 0-.54.15-.14.39-.14.54 0 1.54 1.68 4.37 1.68 5.92 0 .15-.14.39-.14.54 0 .14.15.14.39 0 .54zm.5-4.3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" />,
    youtube: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:scale-110 hover:border-white/20 group backdrop-blur-md"
      style={{ color: 'white' }}
    >
      <div className="transition-transform group-hover:scale-110" style={{ color }}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          {icons[brand]}
        </svg>
      </div>
    </a>
  );
}
