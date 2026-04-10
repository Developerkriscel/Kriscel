"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { API_URL } from "@/lib/api";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import Link from "next/link";

const FALLBACK_INSIGHTS = [
  {
    _id: "1",
    date: "March 24, 2026",
    title: "The Future of AI in Supply Chain Optimization",
    category: "Technology",
    image: "/images/blue_glass_abstract.png",
    accent: "from-accent to-accent"
  },
  {
    _id: "2",
    date: "March 18, 2026",
    title: "Maximizing ROI on IndiaMART: A Strategic Guide",
    category: "Marketing",
    image: "/images/project_ecommerce.png",
    accent: "from-emerald-500 to-teal-600"
  },
  {
    _id: "3",
    date: "March 10, 2026",
    title: "Transitioning to Headless E-commerce for Scale",
    category: "Services",
    image: "/images/app_dashboard_mockup.png",
    accent: "from-violet-500 to-fuchsia-600"
  }
];

export default function InsightsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const iPadRef = useRef<SVGSVGElement>(null);
  const [insights, setInsights] = useState(FALLBACK_INSIGHTS);

  useEffect(() => {
    // Fetch from API, fallback to hardcoded
    fetch(`${API_URL}/insights?status=published`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data.length > 0) {
          setInsights(data.data.slice(0, 6)); // Show up to 6
        }
      })
      .catch(() => {
        // Keep fallback data
      });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(".insight-card");
      if (cards && cards.length > 0) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        });
      }

      // iPad draw animation
      if (iPadRef.current) {
        const paths = iPadRef.current.querySelectorAll(".ipad-draw");
        if (paths.length > 0) {
          paths.forEach((path) => {
            const p = path as SVGPathElement;
            const length = p.getTotalLength();
            gsap.set(p, { strokeDasharray: length, strokeDashoffset: length });
            gsap.to(p, {
              strokeDashoffset: 0,
              duration: 2.5,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
              }
            });
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, [insights]);

  return (
    <section ref={containerRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img src="/images/tech-bg-1.jpeg" alt="" className="w-full h-full object-cover" />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/92 via-indigo-950/85 to-slate-900/92" />

      <div className="max-w-7xl mx-auto relative">
        {/* Apple iPad SVG Draw Illustration near heading */}
        <svg ref={iPadRef} className="absolute -top-10 right-0 w-44 h-60 opacity-20 hidden lg:block" viewBox="0 0 200 270" fill="none">
          <rect className="ipad-draw" x="10" y="10" width="180" height="250" rx="20" stroke="url(#insightGrad)" strokeWidth="2" />
          <rect className="ipad-draw" x="25" y="30" width="150" height="200" rx="4" stroke="url(#insightGrad)" strokeWidth="1.5" />
          <circle className="ipad-draw" cx="100" cy="248" r="8" stroke="url(#insightGrad)" strokeWidth="1.5" />
          <line className="ipad-draw" x1="70" y1="18" x2="130" y2="18" stroke="url(#insightGrad)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Screen content - article lines */}
          <line className="ipad-draw" x1="40" y1="50" x2="160" y2="50" stroke="url(#insightGrad)" strokeWidth="1" strokeLinecap="round" />
          <line className="ipad-draw" x1="40" y1="65" x2="140" y2="65" stroke="url(#insightGrad)" strokeWidth="1" strokeLinecap="round" />
          <line className="ipad-draw" x1="40" y1="80" x2="150" y2="80" stroke="url(#insightGrad)" strokeWidth="1" strokeLinecap="round" />
          <rect className="ipad-draw" x="40" y="100" width="120" height="60" rx="8" stroke="url(#insightGrad)" strokeWidth="1" />
          <line className="ipad-draw" x1="40" y1="180" x2="155" y2="180" stroke="url(#insightGrad)" strokeWidth="1" strokeLinecap="round" />
          <line className="ipad-draw" x1="40" y1="195" x2="130" y2="195" stroke="url(#insightGrad)" strokeWidth="1" strokeLinecap="round" />
          <defs>
            <linearGradient id="insightGrad" x1="0" y1="0" x2="200" y2="270">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#f0abfc" />
            </linearGradient>
          </defs>
        </svg>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div>
            <h2 className="text-xs md:text-sm font-bold text-violet-400 uppercase tracking-[0.4em] mb-4 text-center md:text-left">Blogs</h2>
            <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight text-center md:text-left">
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Forward Thinking.</span><br />Digital Wisdom.
            </h3>
          </div>
          {/* Hidden on the main blog page, visible if reused elsewhere */}
          <Link href="/blogs" className="mx-auto md:mx-0 px-8 py-3 md:py-4 border border-white/20 rounded-full font-bold text-xs md:text-sm text-white hover:bg-white/10 hover:shadow-xl hover:shadow-violet-500/10 transition-all backdrop-blur-sm hidden">
             View All Blogs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.slice(0, 3).map((post, i) => (
             <div key={post._id || i} className="insight-card group cursor-pointer">
                <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 relative">
                   <img 
                     src={post.image} 
                     alt={post.title}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     onError={(e) => { (e.target as HTMLImageElement).src = '/images/blue_glass_abstract.png'; }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className={`absolute top-6 left-6 px-4 py-2 bg-gradient-to-r ${post.accent} backdrop-blur rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg`}>
                      {post.category}
                   </div>
                </div>
                <div className="px-4">
                   <p className="text-xs font-bold text-white/40 mb-4 uppercase tracking-widest">{post.date}</p>
                   <h4 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors leading-snug">{post.title}</h4>
                   <div className="mt-6 flex items-center gap-2 text-violet-400 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                      Read Article <span>→</span>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
