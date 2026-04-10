"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const TESTIMONIALS = [
  {
    name: "SARVHA PHARMA",
    role: "Pharmaceutical Partner",
    text: "Working with Kriscel has been an outstanding experience. Their advanced digital solutions and business automation tools have significantly enhanced our performance.",
    type: "sticky-yellow",
    rot: "-rotate-2"
  },
  {
    name: "Kalinga Cables",
    role: "Industrial Logistics",
    text: "The experience of working with Kriscel has been incredibly fulfilling. Our operations are now more efficient because to Kriscel' business automation tool.",
    type: "crop-card",
    rot: "rotate-2"
  },
  {
    name: "Safe Cord",
    role: "Manufacturing Tech",
    text: "Kriscel has been a game-changer in automation and digital innovation. Their innovative solutions have streamlined our operations and boosted efficiency.",
    type: "sticky-blue",
    rot: "-rotate-1"
  },
  {
    name: "Krishna Overseas",
    role: "Global Operations",
    text: "Kriscel has added great value to our operations with their smart automation and digital solutions. Their quality, efficiency, potential and support make them trusted.",
    type: "crop-card",
    rot: "-rotate-2"
  },
  {
    name: "Fire Industrial",
    role: "Technical Services",
    text: "Kriscel has transformed our digital growth with powerful SEO services. Their strategies improved rankings, boosted visibility, and drove quality traffic.",
    type: "sticky-yellow",
    rot: "rotate-1"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll(".freeform-testimonial");
      if (items && items.length > 0) {
        gsap.from(items, {
          y: 80,
          opacity: 0,
          rotation: "random(-10, 10)",
          scale: 0.9,
          stagger: 0.15,
          duration: 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <div className="w-full bg-white py-12 md:py-24 px-4 md:px-8">
      <section ref={containerRef} className="max-w-[1400px] mx-auto py-20 px-6 relative overflow-hidden bg-[#f4f4f5] rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-200/60 transition-all">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
          .font-handwriting { font-family: 'Caveat', cursive; }
          
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

        {/* Apple Freeform Dot Grid Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#d1d5db 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
          opacity: 0.7
        }} />

        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24 relative z-10 flex flex-col items-center">
          <h2 className="text-xs md:text-sm font-semibold text-accent uppercase tracking-widest mb-4">Partner Success</h2>
          <h3 className="relative inline-block text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 tracking-tighter mix-blend-multiply">
            What our clients say.
            {/* Freeform Marker Swish */}
            <svg className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-8 text-accent rotate-1 stroke-current pointer-events-none drop-shadow-sm overflow-visible" style={{ animation: 'drawSwish 1.5s ease-out forwards', strokeDasharray: 300, strokeDashoffset: 300 }} viewBox="0 0 200 20" fill="none" strokeWidth="6" strokeLinecap="round">
              <style>{`@keyframes drawSwish { to { stroke-dashoffset: 0; } }`}</style>
              <path d="M 10,10 C 50,25 100,-5 150,15 S 180,5 190,10" />
            </svg>
          </h3>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10 px-4 md:px-8">
          {mounted && TESTIMONIALS.map((t, i) => (
            <div key={i} className={`freeform-testimonial ${t.rot} w-full flex justify-center transform-gpu cursor-grab active:cursor-grabbing hover:z-20`}>

              {t.type === "sticky-yellow" && (
                <div className="relative w-full max-w-sm aspect-square bg-[#fff8b0] p-8 md:p-10 shadow-[2px_15px_30px_rgba(0,0,0,0.1),_inset_0_-20px_30px_rgba(0,0,0,0.02)] transition-transform hover:scale-105 hover:-rotate-1">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/40 backdrop-blur-md shadow-sm transform -rotate-2" />
                  <p className="font-handwriting text-slate-800 text-2xl md:text-3xl leading-snug mb-6">"{t.text}"</p>
                  <div className="mt-auto absolute bottom-8 left-8">
                    <h4 className="font-bold text-slate-800 text-lg">{t.name}</h4>
                    <p className="font-handwriting text-accent text-xl">{t.role}</p>
                  </div>
                </div>
              )}

              {t.type === "crop-card" && (
                <div className="relative w-full max-w-sm min-h-[300px] bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-xl transition-transform hover:scale-105 hover:rotate-1">
                  <div className="crop-marks" />
                  <div className="crop-marks-bottom" />
                  <p className="font-handwriting text-pink-600 text-2xl md:text-3xl leading-snug mb-8">"{t.text}"</p>
                  <div className="absolute bottom-8 right-8 text-right">
                    <h4 className="font-black text-slate-400 text-sm uppercase tracking-widest">{t.name}</h4>
                  </div>
                </div>
              )}

              {t.type === "sticky-blue" && (
                <div className="relative w-full max-w-sm aspect-square bg-[#dbeafe] p-8 md:p-10 shadow-[2px_15px_30px_rgba(0,0,0,0.1)] transition-transform hover:scale-105 hover:rotate-2">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/40 backdrop-blur-md shadow-sm transform rotate-3" />
                  <p className="font-handwriting text-brand-navy text-2xl md:text-3xl leading-snug mb-6">"{t.text}"</p>
                  <div className="mt-auto absolute bottom-8 left-8">
                    <h4 className="font-bold text-slate-800 text-lg">{t.name}</h4>
                    <span className="inline-block px-3 py-1 bg-white/50 rounded-full text-xs font-bold text-brand-navy mt-2">{t.role}</span>
                  </div>
                </div>
              )}

              {t.type === "sticky-pink" && (
                <div className="relative w-full max-w-sm aspect-[4/3] bg-[#ffc4d9] p-8 md:p-10 shadow-[2px_15px_30px_rgba(0,0,0,0.1)] transition-transform hover:scale-105 hover:-rotate-1">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/40 backdrop-blur-md shadow-sm transform -rotate-1" />
                  <p className="font-handwriting text-slate-800 text-2xl md:text-3xl leading-snug mb-6">"{t.text}"</p>
                  <div className="mt-auto absolute bottom-8 right-8 text-right">
                    <h4 className="font-bold text-slate-800 text-lg">{t.name}</h4>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
