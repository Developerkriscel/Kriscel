"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const DESCRIPTION_PARTS = [
  { text: "Kriscel Tech is a ", highlight: false },
  { text: "forward-thinking software engine", highlight: true },
  { text: ", forging ", highlight: false },
  { text: "premium digital experiences", highlight: true },
  { text: " for ambitious brands.", highlight: false },
];

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Entry animation for text
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Subtle background shimmer
      gsap.to(".bg-accent-blob", {
        x: "20%",
        y: "10%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return <section className="min-h-[60vh]" />;

  return (
    <section ref={sectionRef} className="py-12 md:py-20 px-6 flex flex-col items-center justify-center min-h-[60vh] bg-white relative overflow-hidden">
      
      {/* Refined background accents */}
      <div className="bg-accent-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center z-10 text-center">
        
        {/* Simplified Header */}
         <div className="mb-12 md:mb-16">
            <h2 className="reveal-text text-4xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tighter leading-[0.9] mb-6">
               Where Better Solutions <br />
               <span className="text-accent italic font-serif">Power Scalable Growth</span>
            </h2>
            <div className="reveal-text flex items-center justify-center gap-4">
               <div className="hidden md:block h-px w-8 bg-accent" />
               <p className="text-[10px] md:text-xs text-accent font-bold tracking-[0.3em] uppercase">
                  SOLUTIONS TAILORED FOR THE WORLD&apos;S FASTEST GROWING AMBITIOUS BUSINESSES
               </p>
               <div className="hidden md:block h-px w-8 bg-accent" />
            </div>
         </div>

        {/* Text-Only Content Block */}
        <div className="max-w-5xl mx-auto">
           <div className="reveal-text grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 text-left items-start">
               <div className="space-y-6">
                  <p className="text-xl md:text-3xl text-foreground font-black tracking-tight leading-tight">
                     Transform your daily operations with high-impact automation and digital strategies designed for the modern digital landscape.
                  </p>
                  <div className="h-1.5 w-16 bg-accent rounded-full" />
               </div>
               <div className="space-y-6">
                  <p className="text-base md:text-[17px] text-muted leading-relaxed font-medium">
                     From streamlining complex operations with <b>Business Automation</b> to scaling your brand via <b>Digital Marketing</b> and hiring the top 1% talent through our <b>Recruitment</b> engine. We don&apos;t just build software — we engineer growth systems that empower enterprises to compete on a global stage with unmatched efficiency.
                  </p>
                  <p className="text-base md:text-lg font-black text-foreground italic border-l-4 border-accent pl-6 py-1">
                     Scaling a global business requires more than just tech — it requires a partner who understands your long-term vision. Let&apos;s build your powerhouse today.
                  </p>
               </div>
           </div>
        </div>

      </div>
    </section>
  );
}
