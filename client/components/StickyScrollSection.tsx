"use client";

import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}



export default function StickyScrollSection() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

   const STORY_BLOCKS = [
    {
      title: "Business Automation",
      desc: "Transforming manual workflows into high-velocity engines. We unify your fragmented operational data into a cohesive, automated logic hub for executive control.",
      visual_type: "reporting",
      href: "/business-automation"
    },
    {
      title: "Digital Marketing",
      desc: "Architecting resilient digital ecosystems. We boost your brand's online presence with data-driven social media, SEO, and targeted PPC campaigns to maximize your conversions.",
      visual_type: "automation",
      href: "/digital-marketing"
    },
    {
      title: "Recruitment Solutions",
      desc: "Modernizing talent acquisition through technical precision. We build intelligent tracking systems and automated pipelines to help you scale your workforce.",
      visual_type: "recruitment",
      href: "/recruitment"
    }
  ];

  // Helper for dynamic Freeform Canvas Rendering
  const renderFreeformCanvas = (type: string) => {
    switch (type) {

      case "automation":
        return (
          <div className="w-full h-full bg-[#f4f4f5] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '30px 30px', opacity: 0.6 }} />
             
             {/* Spreadsheet Grid SVG Graphic */}
             <div className="absolute top-1/4 left-1/4 w-72 h-56 bg-white p-4 shadow-2xl rounded-xl z-10 border border-emerald-100 transform -rotate-2">
                <div className="w-full h-full border border-gray-200 grid grid-cols-4 grid-rows-5 gap-px bg-gray-200">
                   {[...Array(20)].map((_, i) => (
                     <div key={i} className={`bg-white ${i===5 || i===10 || i===15 ? 'bg-emerald-50' : ''}`} />
                   ))}
                </div>
                <div className="absolute -right-8 -bottom-8 w-20 h-20 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                   <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
             </div>

             {/* Blue Sticky Note */}
             <div className="absolute top-[10%] right-[10%] w-48 h-48 bg-[#dbeafe] p-5 shadow-xl transform rotate-3 z-30 rounded-sm">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/40 backdrop-blur-md shadow-sm transform rotate-1" />
                <div style={{ fontFamily: "'Caveat', cursive" }} className="text-brand-navy text-4xl">Auto-sync enabled! ⚡</div>
             </div>

             {/* Hand drawn arrow */}
             <svg className="absolute top-[40%] right-[30%] w-32 h-32 text-accent z-20 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
               <path d="M10,10 Q50,40 20,80 L10,70 M20,80 L30,90" />
             </svg>
          </div>
        );
      case "reporting":
        return (
          <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
             
             {/* Dark Mode Dashboard Board */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-64 bg-slate-800 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-700 p-6 flex flex-col z-10 transform -rotate-1">
                <div className="w-full h-4 mb-4 flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-rose-500" />
                   <div className="w-3 h-3 rounded-full bg-amber-500" />
                   <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex-1 w-full bg-slate-900 rounded-xl relative overflow-hidden">
                   <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path d="M0,50 L0,30 Q25,40 50,20 T100,5 L100,50 Z" fill="rgba(99,102,241,0.2)" />
                      <path d="M0,30 Q25,40 50,20 T100,5" fill="none" stroke="#818cf8" strokeWidth="2" />
                      <circle cx="100" cy="5" r="3" fill="#818cf8" />
                   </svg>
                </div>
             </div>

             {/* Neon Freeform Note */}
             <div className="absolute top-[10%] left-[10%] px-5 py-2 bg-accent/20 backdrop-blur-md border border-accent/50 rounded-lg transform -rotate-6 z-20 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                <div style={{ fontFamily: "'Caveat', cursive" }} className="text-accent text-3xl">MIS Dashboard</div>
             </div>

             <div className="absolute bottom-[20%] right-[10%] px-5 py-2 bg-rose-500/20 backdrop-blur-md border border-rose-400/50 rounded-lg transform rotate-3 z-20 shadow-[0_0_30px_rgba(244,63,94,0.3)]">
                <div style={{ fontFamily: "'Caveat', cursive" }} className="text-rose-300 text-3xl">Live Data Feed</div>
             </div>
          </div>
        );
      case "recruitment":
        return (
          <div className="w-full h-full bg-[#f8fafc] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '30px 30px', opacity: 0.6 }} />
             
             {/* Hiring Board Sticky */}
             <div className="absolute top-[10%] left-[15%] w-56 h-48 bg-[#fff8b0] p-6 shadow-xl transform -rotate-3 rounded-sm z-20">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/40 backdrop-blur-md shadow-sm transform -rotate-2" />
               <div style={{ fontFamily: "'Caveat', cursive" }} className="text-brand-navy text-3xl leading-tight">Shortlisted Candidates! 📋</div>
               <div className="mt-4 space-y-2">
                 <div className="h-2 w-full bg-accent/5 rounded" />
                 <div className="h-2 w-3/4 bg-accent/5 rounded" />
               </div>
             </div>
             
             {/* Pipeline Card */}
             <div className="absolute bottom-[15%] right-[10%] w-64 h-56 bg-white p-6 shadow-2xl rounded-2xl transform rotate-2 z-10 border border-gray-100">
                <div className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Pipeline Velocity</div>
                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                     <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                       <div className="w-[80%] h-full bg-accent" />
                     </div>
                     <span className="text-[10px] font-bold text-accent">Screening</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                       <div className="w-[40%] h-full bg-violet-400" />
                     </div>
                     <span className="text-[10px] font-bold text-violet-500">Interview</span>
                   </div>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-50 flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   </div>
                   <span className="text-[10px] font-bold text-emerald-600">3 New Hires Joined</span>
                </div>
             </div>
          </div>
        );
      default: return null;
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Pin the section and animate index based on progress
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * STORY_BLOCKS.length),
              STORY_BLOCKS.length - 1
            );
            setActiveIndex(index);
          }
        }
      });

      // Individual item entrance/exit animations
      STORY_BLOCKS.forEach((_, i) => {
        gsap.set(`.img-card-${i}`, { rotateY: 90, opacity: 0, scale: 0.8 });
        gsap.set(`.text-content-${i}`, { y: 100, opacity: 0 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [mounted]);

  // Handle active index changes with separate effect for discrete animations
  useEffect(() => {
    if (!mounted) return;

    const animateStep = (index: number) => {
      STORY_BLOCKS.forEach((_, i) => {
        const isCurrent = i === index;

        // Refined 3D: Lower rotation and scale for better visibility
        gsap.to(`.img-card-${i}`, {
          rotateY: isCurrent ? 0 : i < index ? -35 : 35,
          rotateX: isCurrent ? 0 : i < index ? 5 : -5,
          opacity: isCurrent ? 1 : 0,
          scale: isCurrent ? 1 : 0.9,
          z: isCurrent ? 0 : -150,
          x: isCurrent ? 0 : i < index ? -60 : 60,
          duration: 1.2,
          ease: "power3.out",
          overwrite: true
        });

        // Delicate scale parallax matching the Freeform board feel
        gsap.to(`.img-layer-${i}`, {
          scale: isCurrent ? 1 : 1.1,
          duration: 3,
          ease: "power2.out",
          overwrite: true
        });

        // Text Content Entrances
        gsap.to(`.text-content-${i}`, {
          y: isCurrent ? 0 : i < index ? -30 : 30,
          opacity: isCurrent ? 1 : 0,
          filter: isCurrent ? "blur(0px)" : "blur(15px)",
          duration: 1,
          delay: isCurrent ? 0.3 : 0,
          ease: "power4.out",
          overwrite: true
        });
      });
    };

    animateStep(activeIndex);
  }, [activeIndex, mounted]);

  if (!mounted) return <section className="min-h-screen" />;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center justify-center bg-white z-[20] border-t border-gray-100 pt-8 md:pt-24 lg:pt-32 pb-4 md:pb-16 overflow-hidden md:overflow-visible"
      id="solutions-scroll"
    >
      <style>{`
        .crop-marks::before {
          content: ''; position: absolute; top: -5px; left: -5px; width: 15px; height: 15px;
          border-top: 3px solid #4338ca; border-left: 3px solid #4338ca;
        }
        .crop-marks::after {
          content: ''; position: absolute; top: -5px; right: -5px; width: 15px; height: 15px;
          border-top: 3px solid #4338ca; border-right: 3px solid #4338ca;
        }
        .crop-marks-bottom::before {
          content: ''; position: absolute; bottom: -5px; left: -5px; width: 15px; height: 15px;
          border-bottom: 3px solid #4338ca; border-left: 3px solid #4338ca;
        }
        .crop-marks-bottom::after {
          content: ''; position: absolute; bottom: -5px; right: -5px; width: 15px; height: 15px;
          border-bottom: 3px solid #4338ca; border-right: 3px solid #4338ca;
        }
      `}</style>

      {/* Background Cinematic Lighting (Optimized for performance) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vh] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vh] bg-accent/5 blur-[100px] rounded-full" />
      </div>

      {/* Noise overlay refined */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjUwIDI1MCI+PGZpbHRlciBpZD0ibkIiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSI1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idHJhbnNwYXJlbnQiLz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjEuMCIvPjwvc3ZnPg==')]" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-4 md:gap-12 lg:gap-32 relative z-10 py-4 md:py-16 lg:py-0">

        {/* Left Side: Story Navigation & Context */}
        <div className="w-full lg:w-1/2 flex flex-col relative py-2 md:py-8 lg:h-[65vh] justify-center">
          <div className="mb-2 md:mb-8 lg:mb-12 shrink-0 pt-2 md:pt-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[9px]">Capabilities</span>
            </div>
            <h2 className="relative inline-block text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[0.9] mb-2 py-1">
              Our <br />
              <span className="relative inline-block bg-gradient-to-r from-accent via-accent0 to-violet-600 bg-clip-text text-transparent italic pr-6 pb-2 pt-1">
                Solutions
                {/* Marker Swish Interactive */}
                <svg className="absolute -bottom-2 left-0 w-[110%] h-10 text-amber-400 -rotate-2 stroke-current pointer-events-none drop-shadow-sm overflow-visible" style={{ animation: 'drawSwish 1.5s ease-out forwards', strokeDasharray: 300, strokeDashoffset: 300 }} viewBox="0 0 200 20" fill="none" strokeWidth="6" strokeLinecap="round">
                   <style>{`@keyframes drawSwish { to { stroke-dashoffset: 0; } }`}</style>
                   <path d="M 0,15 C 30,-5 80,25 120,5 S 150,20 190,10" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="relative h-[240px] md:h-[350px] w-full shrink-0">
            {STORY_BLOCKS.map((block, i) => (
              <div key={i} className={`text-content-${i} absolute inset-0 flex flex-col justify-start pt-2 pointer-events-none ${activeIndex === i ? 'pointer-events-auto' : ''}`}>
                <div className="text-[70px] md:text-[90px] font-black text-gray-50 absolute -left-4 md:-left-6 -top-6 md:-top-10 -z-10 select-none opacity-50 tracking-tighter">0{i + 1}</div>

                <h3 className="relative inline-block text-2xl md:text-4xl lg:text-5xl font-black text-foreground mb-2 md:mb-4 tracking-tighter leading-tight drop-shadow-sm group cursor-default">
                  {block.title}
                  {/* Subtle marker underline that reveals on element entrance */}
                  <svg className={`absolute -bottom-3 left-0 w-[110%] h-6 text-accent stroke-current pointer-events-none transition-all duration-1000 ease-out origin-left ${activeIndex === i ? 'scale-x-100 opacity-80' : 'scale-x-0 opacity-0'}`} viewBox="0 0 100 15" preserveAspectRatio="none" fill="none" strokeWidth="3" strokeLinecap="round">
                     <path d="M 0,10 Q 50,15 100,5" />
                  </svg>
                </h3>
                <p className="text-sm md:text-base text-muted font-medium leading-relaxed max-w-sm mb-4">
                  {block.desc}
                </p>
                <div className="mt-2 pointer-events-auto">
                    <Link href={block.href} className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 transition-transform w-[max-content] shadow-md">
                        Know More <ArrowRight size={14} />
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: 3D Freeform Stage */}
        <div className="w-full lg:w-1/2 h-[35vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center [perspective:3000px] py-2 md:py-8 lg:py-12 shrink-0">
          <div className="relative w-full h-full transform-style-3d">
            {STORY_BLOCKS.map((block, i) => (
              <div
                key={i}
                className={`img-card-${i} absolute inset-0 rounded-[2rem] lg:rounded-[3rem] bg-white overflow-hidden border-[8px] lg:border-[12px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform-gpu`}
                style={{ zIndex: activeIndex === i ? 50 : 10 }}
              >
                {/* Higher-tier Blending Overlay */}
                {/* <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 pointer-events-none" /> */}

                <div className={`img-layer-${i} relative w-full h-full transform-gpu overflow-hidden`}>
                  
                  {/* Freeform Interactive UI Replacement */}
                  {renderFreeformCanvas(block.visual_type)}
                  
                  {/* Subtle edge overlay blending */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
                </div>

                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 z-30">
                  <div className="text-left">
                    <div className="text-white font-black text-xl md:text-2xl lg:text-3xl tracking-tighter uppercase leading-tight drop-shadow-lg">{block.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Apple-style Roadmap Nav */}
      <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-end z-[60]">
        <div className="relative flex flex-col gap-10 lg:gap-14">

          {/* The Vertical Dashed Track Line */}
          <div className="absolute right-[4.5px] top-2 bottom-2 w-[2px] border-r-2 border-dashed border-gray-200 -z-10" />

          {/* The Solid Progress Line */}
          <div
            className="absolute right-[5px] top-2 w-[2px] bg-accent -z-10 transition-all duration-700 ease-out origin-top"
            style={{ height: `${(activeIndex / (STORY_BLOCKS.length - 1)) * 100}%` }}
          />

          {STORY_BLOCKS.map((_, i) => (
            <div
              key={i}
              className="relative group cursor-pointer flex items-center justify-end"
              onClick={() => {
                const scrollPos = (i / STORY_BLOCKS.length) * (containerRef.current?.offsetHeight || 0) * 5;
                window.scrollTo({ top: scrollPos, behavior: 'smooth' });
              }}
            >
              <div className={`mr-6 whitespace-nowrap text-[9px] md:text-[10px] font-black tracking-[0.2em] transition-all duration-500 uppercase ${activeIndex === i ? 'text-accent opacity-100 translate-x-0' : 'text-gray-400 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-50 group-hover:translate-x-2'}`}>
                {STORY_BLOCKS[i].title}
              </div>

              {/* Apple Style Indicator Dots */}
              <div className={`relative flex items-center justify-center w-3 h-3 rounded-full transition-all duration-500 bg-white ${activeIndex === i ? 'scale-150 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'hover:scale-125'}`}>
                {/* Outer Ring */}
                <div className={`absolute inset-0 rounded-full border-2 transition-colors duration-500 ${activeIndex >= i ? 'border-accent' : 'border-gray-200 group-hover:border-gray-300'}`} />
                {/* Inner Fill */}
                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${activeIndex >= i ? 'bg-accent scale-100' : 'bg-transparent scale-0'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
