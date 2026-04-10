"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PERSONAS = [
  {
    number: "01",
    title: "Executive Leadership",
    desc: "Gain a bird's-eye view of your entire enterprise with real-time analytics and strategic insights.",
    features: ["Global Dashboards", "ROI Tracking", "Risk Assessment"]
  },
  {
    number: "02",
    title: "Sales & Marketing",
    desc: "Optimize your funnel and drive more revenue with automated lead management and PPC intelligence.",
    features: ["Lead Scoring", "Campaign Tracking", "Automated Follow-ups"]
  },
  {
    number: "03",
    title: "Operations & Supply",
    desc: "Streamline your shop floor and warehouse with intelligent inventory and production management.",
    features: ["Inventory Accuracy", "Quality Control", "Production Planning"]
  },
  {
    number: "04",
    title: "IT & Infrastructure",
    desc: "Build a future-ready digital core with scalable cloud foundations and seamless enterprise integration.",
    features: ["API Modernization", "Cloud Scalability", "Enterprise Security"]
  }
];

export default function PersonaSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // 1. Enter Animation for Cards
      gsap.fromTo(".persona-card", 
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 bg-gradient-to-br from-amber-50 via-white to-rose-50 border-y border-amber-100/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Multiple Personas</h2>
            <h3 className="text-3xl md:text-6xl font-black text-foreground tracking-tighter leading-tight">
              One <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">Unified System.</span><br />For Every Role.
            </h3>
          </div>
          <p className="text-muted text-base md:text-lg max-w-sm font-medium text-center lg:text-left">
            We architect tailored dashboards for every stakeholder in your business, ensuring perfect visibility and control.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 min-h-[500px]">
          {PERSONAS.map((p, i) => (
             <div key={i} className="persona-card group bg-white/60 backdrop-blur-3xl p-8 lg:p-10 rounded-[2.5rem] border border-gray-100 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 cursor-default shadow-sm min-h-[400px] flex flex-col">
                <span className="text-5xl lg:text-6xl font-black bg-gradient-to-br from-accent to-violet-400 bg-clip-text text-transparent opacity-20 mb-8 block transition-opacity group-hover:opacity-60">{p.number}</span>
                <h4 className="text-2xl font-bold text-foreground mb-4">{p.title}</h4>
                <p className="text-muted mb-8 leading-relaxed font-medium grow">{p.desc}</p>
                <div className="space-y-3 pt-6 border-t border-gray-100 mt-auto">
                   {p.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                         <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                           <CheckCircle2 size={12} className="text-accent" />
                         </div>
                         <span>{f}</span>
                      </div>
                   ))}
                </div>
             </div>
          ))}

        </div>
      </div>

    </section>
  );
}
