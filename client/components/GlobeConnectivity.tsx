"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Users, Users2, Handshake, Trophy } from "lucide-react";

const STATS = [
  {
    target: 3487,
    suffix: "+",
    label: "Happy Customers",
    icon: <Users2 size={24} className="text-accent" />,
  },
  {
    target: 20,
    suffix: "+",
    label: "Team Members",
    icon: <Users size={24} className="text-accent" />,
  },
  {
    target: 2387,
    suffix: "+",
    label: "Project Completed",
    icon: <Handshake size={24} className="text-accent" />,
  },
  {
    target: 10,
    suffix: " +",
    label: "Year Experience",
    icon: <Trophy size={24} className="text-accent" />,
  },
];

export default function GlobeConnectivity() {
  const containerRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      if (ringRef.current) {
// ... same content
      }

      // Kriscel Branding Glow Pulse
      gsap.to(".brand-text-3d", {
        opacity: 0.9,
        scale: 1.05,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.from(".connect-dot", {
        scale: 0,
        opacity: 0,
        stagger: {
          each: 0.2,
          repeat: -1,
          yoyo: true
        },
        duration: 2,
        ease: "power2.inOut"
      });

      // Stats numbers counter animation
      const statElements = containerRef.current?.querySelectorAll(".stat-number");
      statElements?.forEach((stat: any, i: number) => {
        const targetValue = STATS[i].target;
        gsap.fromTo(stat, 
          { innerText: 0 },
          { 
            innerText: targetValue, 
            duration: 2.5, 
            snap: { innerText: 1 },
            ease: "expo.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
            }
          }
        );
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [mounted]);

    return (
    <section ref={containerRef} className="py-6 md:py-10 bg-[#020617] text-white relative overflow-hidden [perspective:1200px]">
      {/* Background Image with improved blend */}
      <div className="absolute inset-0 -z-10 bg-slate-950">
        <img src="/images/tech-bg-1.jpeg" alt="" className="w-full h-full object-cover opacity-20 mix-blend-screen" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-transparent to-[#020617]/90" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
        <div className="text-center lg:text-left">
           <h2 className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-2 drop-shadow-sm">Digital Solutions Provider</h2>
           <h3 className="text-3xl lg:text-5xl font-black tracking-tighter mb-4 leading-[1.0] lg:leading-[0.9] drop-shadow-xl">
             Empowering<br /><span className="bg-gradient-to-r from-accent via-accent to-indigo-400 bg-clip-text text-transparent italic">Brands.</span><br />Globally.
           </h3>
           <p className="text-xs md:text-sm text-slate-400 max-w-sm mx-auto lg:mx-0 mb-4 md:mb-6 font-medium leading-relaxed">
             Accredited and recognized for delivering innovative, result-driven solutions.
           </p>
           
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 border-t border-white/10 pt-6">
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start group">
                   <div className="w-10 h-10 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center mb-3 transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-110 shadow-[0_0_20px_rgba(67,56,202,0.1)]">
                      <div className="scale-75 text-accent">{stat.icon}</div>
                   </div>
                   <p className="text-2xl md:text-3xl font-black text-white tracking-tight">
                     <span className="stat-number">{stat.target}</span>
                     <span className="text-accent text-sm ml-0.5">{stat.suffix}</span>
                   </p>
                   <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 leading-tight">
                     {stat.label}
                   </p>
                </div>
              ))}
           </div>
        </div>

        {/* Visual: Premium 3D Globe Ring */}
        <div className="relative aspect-square flex items-center justify-center w-full max-w-[320px] mx-auto lg:ml-auto lg:mr-0 [preserve-3d]">
          <div className="absolute inset-0 border border-accent/10 rounded-full animate-[spin_40s_linear_infinite] opacity-50" />
          <div className="absolute inset-12 border border-accent/20 rounded-full animate-[spin_25s_linear_infinite_reverse] opacity-60" />
          
          {/* Central KRISCEL Brand - Maximum Visibility & Highlight */}
          <div className="brand-text-3d text-center font-black text-5xl md:text-8xl text-white opacity-100 absolute select-none tracking-tighter filter blur-[0.5px] group-hover:blur-0 transition-all duration-700 [transform:translateZ(50px)] drop-shadow-[0_0_35px_rgba(67,56,202,0.9)] bg-gradient-to-r from-white via-accent/50 to-white bg-clip-text">
            KRISCEL
          </div>

          <div ref={ringRef} className="w-[110%] h-[110%] border border-accent/10 rounded-full flex items-center justify-center [transform-style:preserve-3d]">
              <div className="w-[85%] h-[85%] border border-accent/5 rounded-full animate-[spin_35s_linear_infinite_reverse] opacity-40" />
              
              {mounted && (
                <>
                  {/* Decorative "Dots" representing locations */}
                  {[...Array(14)].map((_, i) => (
                    <div 
                      key={i} 
                      className="connect-dot absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(67,56,202,0.9)]"
                      style={{
                        top: `${50 + (40 + Math.random() * 5) * Math.sin(i * Math.PI / 7)}%`,
                        left: `${50 + (40 + Math.random() * 5) * Math.cos(i * Math.PI / 7)}%`,
                        transform: `translateZ(${Math.random() * 40}px)`
                      }}
                    />
                  ))}

                  {/* High Depth Orbiting Particles */}
                  {[...Array(25)].map((_, i) => (
                    <div 
                      key={`p-${i}`} 
                      className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        transform: `translateZ(${Math.random() * 60 - 30}px)`,
                        animationDelay: `${Math.random() * 3}s`
                      }}
                    />
                  ))}

                  <div className="w-40 h-40 bg-accent/10 rounded-full blur-[80px] animate-pulse absolute" />
                  
                  {/* Dynamic Connection Lines with Perspective */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100">
                    {[...Array(14)].map((_, i) => {
                      const x2 = 50 + 42 * Math.cos(i * Math.PI / 7);
                      const y2 = 50 + 42 * Math.sin(i * Math.PI / 7);
                      return (
                        <line 
                          key={`g-line-${i}`}
                          x1="50" y1="50" 
                          x2={x2} y2={y2} 
                          stroke="rgba(67,56,202,0.3)" 
                          strokeWidth="0.15" 
                          strokeDasharray="2,2"
                        />
                      );
                    })}
                  </svg>
                </>
              )}
           </div>
        </div>
      </div>
    </section>
  );
}
