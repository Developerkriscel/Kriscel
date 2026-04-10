"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const FREEFORM_NODES = [
  {
    type: "sticky-yellow",
    title: "Cognitive Logic",
    desc: "Advanced reasoning engines built to scale! 🧠",
    rotation: "-rotate-3",
  },
  {
    type: "crop-card",
    title: "Predictive Analytics",
    desc: "Future-proof your decisions.",
    rotation: "rotate-2",
  },
  {
    type: "pill-badge",
    title: "Global Scale 🌍",
    rotation: "rotate-6",
  },
  {
    type: "sticky-pink",
    title: "Data Integrity",
    desc: "100% Secure & structured. 🔒",
    rotation: "rotate-3",
  },
  {
    type: "doodle",
  },
  {
    type: "sticky-blue",
    title: "Automated Workflows",
    desc: "Let the AI do the heavy lifting ✨",
    rotation: "-rotate-6",
  }
];

export default function AIPowerhouse() {
  const containerRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      const items = containerRef.current?.querySelectorAll(".freeform-item");
      if (items && items.length > 0) {
        // Freeform floaty entrance
        gsap.from(items, {
          y: 60,
          opacity: 0,
          rotation: "random(-15, 15)",
          scale: 0.8,
          stagger: 0.1,
          duration: 1.5,
          ease: "elastic.out(1, 0.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        });

        // Infinite float animation for the canvas elements
        gsap.to(items, {
          y: "+=random(-10, 10)",
          x: "+=random(-10, 10)",
          rotation: "+=random(-2, 2)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <div className="w-full bg-white py-6 md:py-12 px-4 md:px-8">
      <section ref={containerRef} className="max-w-[1400px] mx-auto py-8 px-6 relative overflow-hidden bg-[#f4f4f5] min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-200/60">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
          .font-handwriting { font-family: 'Caveat', cursive; }
          
          .crop-marks::before {
            content: ''; position: absolute; top: -5px; left: -5px; width: 15px; height: 15px;
            border-top: 3px solid var(--color-accent); border-left: 3px solid var(--color-accent);
          }
          .crop-marks::after {
            content: ''; position: absolute; top: -5px; right: -5px; width: 15px; height: 15px;
            border-top: 3px solid var(--color-accent); border-right: 3px solid var(--color-accent);
          }
          .crop-marks-bottom::before {
            content: ''; position: absolute; bottom: -5px; left: -5px; width: 15px; height: 15px;
            border-bottom: 3px solid var(--color-accent); border-left: 3px solid var(--color-accent);
          }
          .crop-marks-bottom::after {
            content: ''; position: absolute; bottom: -5px; right: -5px; width: 15px; height: 15px;
            border-bottom: 3px solid var(--color-accent); border-right: 3px solid var(--color-accent);
          }
        `}</style>

        {/* Apple Freeform Dot Grid Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#d1d5db 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
          opacity: 0.7
        }} />

        {/* Main Title - Marker Style */}
        <div className="relative z-20 max-w-7xl mx-auto w-full mb-6 md:mb-8 flex justify-start">
          <div className="freeform-item relative">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter mix-blend-multiply uppercase" style={{ WebkitTextStroke: '2px #1e293b', color: 'transparent' }}>
              The Power Hub
            </h2>
            <h3 className="absolute top-[60%] left-[10%] text-2xl md:text-4xl font-handwriting text-accent -rotate-3 whitespace-nowrap drop-shadow-sm pointer-events-none">
              Connected Enterprise
            </h3>
            {/* Marker Swish */}
            <svg className="absolute -bottom-8 left-10 w-64 md:w-96 text-amber-400 opacity-80 pointer-events-none" viewBox="0 0 300 30" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
              <path d="M 5,15 Q 80,-5 150,15 T 295,15" strokeDasharray="300" strokeDashoffset="0" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative h-[350px] md:h-[450px] flex items-center justify-center z-10">

          {/* Central Framer-Quality Colorful Globe */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10">
            {/* Deep Colorful Mesh Blur behind globe */}
            <div className="absolute inset-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-amber-300 via-accent to-fuchsia-400 opacity-40 blur-[80px] rounded-full animate-pulse" />

            {/* Glass Globe */}
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full bg-white/30 backdrop-blur-2xl shadow-[inset_-20px_-20px_60px_rgba(0,0,0,0.1),inset_10px_10px_40px_rgba(255,255,255,0.8),0_30px_70px_rgba(14,165,233,0.3)] border border-white/60 flex items-center justify-center transform-gpu">
              {/* Colorful interlocking organic shapes inside the glass */}
              <div className="absolute w-24 h-24 bg-rose-400 rounded-full blur-xl opacity-60 -top-4 -left-4 animate-[spin_10s_linear_infinite]" />
              <div className="absolute w-32 h-32 bg-accent rounded-full blur-xl opacity-60 bottom-0 right-0 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Wireframe simple lines */}
              <div className="absolute inset-2 border border-white/40 rounded-full" style={{ transform: 'rotateX(60deg)' }} />
              <div className="absolute inset-2 border border-white/40 rounded-full" style={{ transform: 'rotateX(60deg) rotateY(90deg)' }} />

              {/* Center Logo */}
              <div className="font-black text-2xl tracking-tighter text-slate-800 mix-blend-overlay drop-shadow-lg scale-150">KRISCEL</div>
            </div>
          </div>

          {/* Orbit track ring (Freeform faint pencil style) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[420px] md:h-[420px] border-[1.5px] border-dashed border-gray-400/30 rounded-full pointer-events-none z-0" />

          {/* Orbit Node Container */}
          {mounted && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[360px] md:h-[360px] pointer-events-none z-20 animate-[spin_60s_linear_infinite]">
              {FREEFORM_NODES.map((node, i) => {
                const radiusX = window.innerWidth < 768 ? 120 : 180;
                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-start justify-center pointer-events-none"
                    style={{ rotate: `${i * 60}deg` }}
                  >
                    <div
                      className="flex flex-col items-center justify-center pointer-events-auto transform-gpu"
                      style={{ rotate: `-${(i * 60)}deg`, marginTop: -radiusX }}
                    >
                      <div className="animate-[spin_60s_linear_infinite_reverse]">

                        {/* --- RENDER FREEFORM ELEMENT TYPES --- */}

                        {node.type === "sticky-yellow" && (
                          <div className={`freeform-item ${node.rotation} relative w-32 md:w-40 aspect-[4/3] bg-[#fff8b0] p-3 shadow-[2px_10px_20px_rgba(0,0,0,0.1),_inset_0_-20px_30px_rgba(0,0,0,0.02)] transition-transform hover:scale-105 hover:-rotate-1 cursor-pointer pointer-events-auto`}>
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-white/40 backdrop-blur-md shadow-sm transform -rotate-2" />
                            <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">{node.title}</h4>
                            <p className="font-handwriting text-brand-navy text-base md:text-xl leading-tight">{node.desc}</p>
                          </div>
                        )}

                        {node.type === "crop-card" && (
                          <div className={`freeform-item ${node.rotation} relative w-48 md:w-64 bg-white/80 backdrop-blur-xl p-6 shadow-xl cursor-pointer pointer-events-auto`}>
                            <div className="crop-marks" />
                            <div className="crop-marks-bottom" />
                            <h4 className="font-black text-slate-400 text-sm md:text-lg uppercase tracking-widest mb-3">{node.title}</h4>
                            <h4 className="font-handwriting text-pink-500 text-3xl md:text-5xl leading-none">{node.desc}</h4>
                          </div>
                        )}

                        {node.type === "pill-badge" && (
                          <div className={`freeform-item ${node.rotation} px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-[0_10px_20px_rgba(16,185,129,0.3)] border-2 border-white cursor-pointer pointer-events-auto flex items-center gap-2`}>
                            <img src="https://i.pravatar.cc/100?img=5" className="w-8 h-8 rounded-full border-2 border-white" alt="Avatar" />
                            <span className="font-bold text-white text-lg">{node.title}</span>
                            {/* Doodled Arrow attached */}
                            <svg className="absolute -right-16 top-10 w-20 h-20 text-slate-800 -rotate-12 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                              <path d="M10,10 Q50,40 90,80 M75,85 L90,80 L80,60" />
                            </svg>
                          </div>
                        )}

                        {node.type === "sticky-pink" && (
                          <div className={`freeform-item ${node.rotation} relative w-40 md:w-52 aspect-square bg-[#ffc4d9] p-4 md:p-6 shadow-[2px_10px_20px_rgba(0,0,0,0.1)] transition-transform hover:scale-105 hover:rotate-1 cursor-pointer pointer-events-auto flex flex-col justify-center`}>
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-md shadow-sm transform rotate-2" />
                            <h4 className="font-bold text-slate-800 text-lg md:text-xl mb-2">{node.title}</h4>
                            <p className="font-handwriting text-slate-800 text-xl md:text-3xl leading-tight">{node.desc}</p>
                          </div>
                        )}

                        {node.type === "doodle" && (
                          <div className="freeform-item pointer-events-auto relative w-32 h-32 flex items-center justify-center">
                            <svg className="w-full h-full text-accent" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
                              <path d="M40,100 C40,40 160,40 160,100 C160,160 40,160 40,100" strokeDasharray="10 15" />
                              <path d="M80,100 L100,120 L130,80" />
                            </svg>
                            <div className="absolute -bottom-8 font-handwriting text-accent text-3xl whitespace-nowrap rotate-6 drop-shadow-sm pointer-events-none">Verified! ✨</div>
                          </div>
                        )}

                        {node.type === "sticky-blue" && (
                          <div className={`freeform-item ${node.rotation} relative w-36 md:w-48 aspect-[4/3] bg-[#dbeafe] p-3 md:p-4 shadow-[2px_10px_20px_rgba(0,0,0,0.1)] transition-transform hover:scale-105 hover:rotate-2 cursor-pointer pointer-events-auto`}>
                            <h4 className="font-bold text-slate-800 text-base md:text-lg mb-1">{node.title}</h4>
                            <p className="font-handwriting text-brand-navy text-xl md:text-2xl leading-tight">{node.desc}</p>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
