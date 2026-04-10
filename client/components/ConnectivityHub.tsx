"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Zap, Shield, BarChart3, Cloud, Settings, Layers,
  Search, Share2, Megaphone, MapPin, FileText, Code, Palette, ShieldCheck, Store,
  UserPlus, Users, Package, Target, ChevronLeft, ChevronRight
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface NodeCard {
  icon: React.ReactNode;
  label: string;
  color: string;
  glow: string;
  href: string;
}

interface GlobeConfig {
  id: string;
  href: string;
  title: React.ReactNode;
  tagline: string;
  nodes: NodeCard[];
}

const GLOBES: GlobeConfig[] = [
  {
    id: "kriscel-core",
    href: "/business-automation",
    title: <span className="text-white font-black text-xs md:text-xl tracking-tighter text-center w-full block">KRISCEL</span>,
    tagline: "Automate your Business System with us",
    nodes: [
      { icon: <Shield className="text-violet-400" />, label: "Production Management System", color: "from-violet-500/40 to-purple-600/40", glow: "rgba(139, 92, 246, 0.3)", href: "/production-management-system" },
      { icon: <Zap className="text-accent" />, label: "HR Management System", color: "from-accent/40 to-accent/40", glow: "rgba(67, 56, 202, 0.3)", href: "/hr-management-system" },
      { icon: <Settings className="text-accent" />, label: "Purchase Management System", color: "from-accent/40 to-accent/40", glow: "rgba(67, 56, 202, 0.3)", href: "/purchase-management-system" },
      { icon: <BarChart3 className="text-emerald-400" />, label: "Inventory Management System", color: "from-emerald-500/40 to-teal-600/40", glow: "rgba(16, 185, 129, 0.3)", href: "/inventory-management-system" },
      { icon: <Layers className="text-amber-400" />, label: "Account Management System", color: "from-amber-400/40 to-orange-500/40", glow: "rgba(251, 191, 36, 0.3)", href: "/account-management-system" },
      { icon: <Cloud className="text-pink-400" />, label: "Employee Task Management System", color: "from-pink-500/40 to-rose-600/40", glow: "rgba(244, 114, 182, 0.3)", href: "/employee-task-management-system" },
    ]
  },
  {
    id: "digital-marketing",
    href: "/digital-marketing",
    title: <span className="text-white font-black text-xs md:text-xl tracking-tight text-center leading-tight w-full block">Digital<br/>Marketing</span>,
    tagline: "Automate your Marketing with us",
    nodes: [
      { icon: <Search className="text-accent" />, label: "Search Engine Optimization (SEO)", color: "from-accent/40 to-accent/40", glow: "rgba(67, 56, 202, 0.3)", href: "/search-engine-optimization" },
      { icon: <Share2 className="text-violet-400" />, label: "Social media optimization (SMO)", color: "from-violet-500/40 to-purple-600/40", glow: "rgba(139, 92, 246, 0.3)", href: "/social-media-optimization" },
      { icon: <Megaphone className="text-amber-400" />, label: "Paid Ads Management", color: "from-amber-400/40 to-orange-500/40", glow: "rgba(251, 191, 36, 0.3)", href: "/paid-ads-management" },
      { icon: <MapPin className="text-emerald-400" />, label: "GMB Creation", color: "from-emerald-500/40 to-teal-600/40", glow: "rgba(16, 185, 129, 0.3)", href: "/gmb-creation" },
      { icon: <FileText className="text-accent" />, label: "Content Marketing", color: "from-accent/40 to-accent/40", glow: "rgba(67, 56, 202, 0.3)", href: "/content-marketing" },
      { icon: <Code className="text-pink-400" />, label: "Web Development", color: "from-pink-500/40 to-rose-600/40", glow: "rgba(244, 114, 182, 0.3)", href: "/web-development" },
      { icon: <Palette className="text-yellow-400" />, label: "Web Designing", color: "from-yellow-400/40 to-amber-500/40", glow: "rgba(250, 204, 21, 0.3)", href: "/web-designing" },
      { icon: <ShieldCheck className="text-teal-400" />, label: "Online reputation Management", color: "from-teal-400/40 to-emerald-500/40", glow: "rgba(45, 212, 191, 0.3)", href: "/online-reputation-management" },
      { icon: <Store className="text-orange-400" />, label: "Indiamart Account Management", color: "from-orange-400/40 to-red-500/40", glow: "rgba(249, 115, 22, 0.3)", href: "/indiamart-account-management" },
    ]
  },
  {
    id: "ecommerce-services",
    href: "/ecommerce-services",
    title: <span className="text-white font-black text-xs md:text-xl tracking-tight text-center leading-tight w-full block">Ecommerce<br/>Services</span>,
    tagline: "Automate your Ecommerce with us",
    nodes: [
      { icon: <UserPlus className="text-accent" />, label: "Account Creation", color: "from-accent/40 to-accent/40", glow: "rgba(67, 56, 202, 0.3)", href: "/account-creation" },
      { icon: <Users className="text-violet-400" />, label: "Account Management", color: "from-violet-500/40 to-purple-600/40", glow: "rgba(139, 92, 246, 0.3)", href: "/account-management" },
      { icon: <Package className="text-amber-400" />, label: "Catalog Management", color: "from-amber-400/40 to-orange-500/40", glow: "rgba(251, 191, 36, 0.3)", href: "/catalog-management" },
      { icon: <Target className="text-emerald-400" />, label: "ADS Campaign Management", color: "from-emerald-500/40 to-teal-600/40", glow: "rgba(16, 185, 129, 0.3)", href: "/ads-campaign-management" },
    ]
  }
];

export default function ConnectivityHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeGlobeIndex, setActiveGlobeIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNextGlobe = () => {
    if (isAnimating) return;
    triggerTransition(() => {
      setActiveGlobeIndex((prev) => (prev + 1) % GLOBES.length);
    });
  };

  const handlePrevGlobe = () => {
    if (isAnimating) return;
    triggerTransition(() => {
      setActiveGlobeIndex((prev) => (prev - 1 + GLOBES.length) % GLOBES.length);
    });
  };

  const triggerTransition = (updateStateCallback: () => void) => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      setIsAnimating(true);
      // Fade out everything
      gsap.to(".module-card, .connection-line, .hub-core-content", {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          updateStateCallback();
          // Provide slight delay for DOM update
          setTimeout(() => {
            gsap.fromTo(".hub-core-content",
              { scale: 0.5, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)" }
            );
            gsap.fromTo(".module-card",
              { scale: 0, opacity: 0, y: 20 },
              { scale: 1, opacity: 1, y: 0, stagger: 0.05, duration: 0.6, ease: "power3.out" }
            );
            gsap.fromTo(".connection-line",
              { opacity: 0 },
              { opacity: 0.8, stagger: 0.05, duration: 0.6, ease: "power2.out", onComplete: () => setIsAnimating(false) }
            );
            gsap.fromTo(".hub-global-tagline",
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
            );
          }, 50);
        }
      });
    }, containerRef.current!);
    return () => ctx.revert();
  };

  // Auto-switching every 3 seconds
  useEffect(() => {
    if (!mounted || isAnimating) return;
    const interval = setInterval(() => {
      handleNextGlobe();
    }, 3000);
    return () => clearInterval(interval);
  }, [mounted, isAnimating, activeGlobeIndex]);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      // 1. Reveal Center Hub
      gsap.fromTo(".hub-core",
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      // 2. Reveal Cards One by One in Circle
      gsap.fromTo(".module-card",
        { scale: 0, opacity: 0, y: 30 },
        {
          scale: 1, opacity: 1, y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      );

      // 3. Reveal Connection Lines (Simple Opacity Fade)
      gsap.fromTo(".connection-line",
        { opacity: 0 },
        {
          opacity: 0.8,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      );

      // Ambient Motion for Cards
      gsap.to(".module-card", {
        y: "random(-8, 8)",
        x: "random(-5, 5)",
        repeat: -1,
        yoyo: true,
        duration: "random(3, 5)",
        ease: "sine.inOut"
      });

    }, containerRef.current!);

    return () => ctx.revert();
  }, [mounted]);

  const activeGlobe = GLOBES[activeGlobeIndex];

  return (
    <section ref={containerRef} className="relative w-full min-h-[800px] py-32 flex items-center justify-center overflow-hidden px-4 md:px-6 bg-[#020617]">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <img src="/images/tech-bg-3.jpeg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="z-10 text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-white/60 font-semibold text-[10px] uppercase tracking-[0.2em]">Connected Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.9]">
            Unified Hub for<br />
            <span className="bg-gradient-to-r from-accent via-accent to-brand-navy bg-clip-text text-transparent italic">Seamless Services.</span>
          </h2>
        </div>

        {/* Multi-Globe Interactive Container */}
        <div className="relative w-full flex items-center justify-center px-4 sm:px-8 md:px-12">
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrevGlobe}
            className="absolute left-0 md:left-4 z-30 p-2 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent transition-all text-white backdrop-blur-xl group disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Hub Container */}
          <div className="relative w-full max-w-[320px] md:max-w-4xl aspect-square md:aspect-video flex flex-col items-center justify-center scale-90 md:scale-100">

            {/* Master SVG for Connection Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {mounted && activeGlobe.nodes.map((_, i) => {
                const totalNodes = activeGlobe.nodes.length;
                const angle = (i * (360 / totalNodes)) * (Math.PI / 180);
                const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
                // Scale out dynamically avoiding overlapping edges
                const baseRadius = isMobile ? 40 : (totalNodes > 6 ? 44 : 38);
                
                const x2 = 50 + baseRadius * Math.cos(angle);
                const y2 = 50 + baseRadius * Math.sin(angle);

                return (
                  <line
                    key={`line-${activeGlobe.id}-${i}`}
                    className="connection-line"
                    x1="50" y1="50"
                    x2={x2} y2={y2}
                    stroke="var(--color-accent)"
                    strokeWidth="1"
                    strokeDasharray="4,6"
                    style={{ opacity: 0 }}
                  />
                );
              })}
            </svg>

            {/* Central Core */}
            <div ref={hubRef} className="hub-core relative w-24 h-24 md:w-48 md:h-48 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-3xl shadow-[0_0_80px_rgba(34,211,238,0.2)] border border-white/10 z-20">
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-2 border border-dashed border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <Link href={activeGlobe.href} className="hub-core-content w-16 h-16 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-brand-navy via-brand-navy to-accent flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-500 z-10 pointer-events-auto cursor-pointer">
                {activeGlobe.title}
              </Link>
            </div>

            {/* Module Cards */}
            {mounted && activeGlobe.nodes.map((module, i) => {
              const totalNodes = activeGlobe.nodes.length;
              const angle = (i * (360 / totalNodes)) * (Math.PI / 180);
              const isMobile = window.innerWidth < 768;
              const baseRadius = isMobile ? 40 : (totalNodes > 6 ? 44 : 38);
              
              const left = 50 + baseRadius * Math.cos(angle);
              const top = 50 + baseRadius * Math.sin(angle);

              return (
                <div
                  key={`${activeGlobe.id}-${i}`}
                  className="module-card absolute group z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <Link href={module.href}>
                    <div className="relative flex items-center gap-2 md:gap-4 p-2 md:p-4 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-xl md:rounded-2xl hover:border-accent/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:-translate-y-1 transition-all duration-300 w-[140px] md:w-[240px] cursor-pointer">
                      {/* Custom Glow based on module type */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 rounded-xl md:rounded-2xl transition-opacity`} />

                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors">
                        <div className="scale-75 md:scale-100">{module.icon}</div>
                      </div>

                      <div className="flex flex-col min-w-0">
                        <span className="text-white font-bold text-[9px] md:text-sm leading-tight tracking-tight break-words">
                          {module.label}
                        </span>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          <span className="text-[6px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold">Active</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handleNextGlobe}
            className="absolute right-0 md:right-4 z-30 p-2 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent transition-all text-white backdrop-blur-xl group disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isAnimating}
          >
            <ChevronRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Indicator dots & Dynamic Global Tagline */}
        <div className="flex flex-col items-center justify-center gap-8 mt-12 z-20">
          <div className="hub-global-tagline text-center">
             <p className="text-white/60 font-black text-xs md:text-sm uppercase tracking-[0.4em] mb-4">
                {activeGlobe.tagline}
             </p>
             <div className="h-0.5 w-12 bg-accent mx-auto rounded-full" />
          </div>

          <div className="hidden md:flex items-center justify-center gap-3">
            {GLOBES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!isAnimating && i !== activeGlobeIndex) {
                    triggerTransition(() => setActiveGlobeIndex(i));
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeGlobeIndex ? "w-8 bg-accent" : "w-2 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Go to globe ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

