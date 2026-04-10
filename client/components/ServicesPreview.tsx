"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import Link from "next/link";

const SERVICES = [
  "Digital Marketing",
  "Sheet Automation",
  "MIS Reporting",
  "Web App Excellence",
  "E-commerce Growth",
  "SEO Dominance"
];

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      if (listRef.current?.children) {
        gsap.fromTo(listRef.current.children,
          { x: -50, opacity: 0 },
          {
            x: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50 border-y border-emerald-100/50">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-xs md:text-sm font-semibold text-accent uppercase tracking-widest mb-4">Our Expertise</h2>
          <h3 className="relative inline-block text-3xl md:text-6xl font-black text-foreground mb-6 tracking-tighter leading-tight z-10 pb-2">
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-accent bg-clip-text text-transparent italic mr-2">Capabilities</span> 
            that drive growth.
            {/* Freeform Marker Swish */}
            <svg className="absolute -bottom-4 left-0 w-[110%] h-8 text-teal-400 -rotate-1 stroke-current pointer-events-none drop-shadow-sm overflow-visible" style={{ animation: 'drawSwish 1.5s ease-out forwards', strokeDasharray: 300, strokeDashoffset: 300 }} viewBox="0 0 200 20" fill="none" strokeWidth="6" strokeLinecap="round">
               <style>{`@keyframes drawSwish { to { stroke-dashoffset: 0; } }`}</style>
               <path d="M 5,10 C 40,-5 80,25 150,5 S 180,20 195,12" />
            </svg>
          </h3>
          <p className="text-muted text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">We deliver end-to-end solutions combining engineering excellence with stunning aesthetics.</p>
          <Link href="/services" className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-accent hover:shadow-accent/30 transition-all duration-300 font-bold tracking-tight shadow-xl shadow-slate-900/10 hover:-translate-y-1">
            View All Services
          </Link>
        </div>
        <div className="relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
          <ul ref={listRef} className="space-y-6">
            {SERVICES.map((service, index) => (
              <li key={index} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-accent hover:to-violet-500 transition-all duration-500 cursor-pointer flex items-center gap-6 group">
                <span className="text-xl text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0 transform-gpu">―</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
