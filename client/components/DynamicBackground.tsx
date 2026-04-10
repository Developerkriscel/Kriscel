"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const COLORS = [
  "#ffffff", // Hero
  "#f8fafc", // About
  "#f0f9ff", // AI Powerhouse
  "#ffffff", // Persona
  "#fdf4ff", // Sticky Scroll (managed internally but we keep it sync'd)
  "#ffffff", // Parallax
  "#f1f5f9", // Industries
  "#020617", // Globe (dark shift)
  "#ffffff", // Stats
  "#f9fafb", // Insights
  "#ffffff", // Featured Work
];

export default function DynamicBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-triggered background color shifts
    const sections = [
      { color: "#ffffff", start: "top top" },       // Hero
      { color: "#f8fafc", start: "top 20%" },      // About
      { color: "#f0f9ff", start: "top 20%" },      // AI Powerhouse
      { color: "#ffffff", start: "top 20%" },      // Persona
      { color: "#fdf4ff", start: "top 20%" },      // Sticky Scroll
      { color: "#020617", start: "top 20%" },      // Globe (Dark Mode Shift)
      { color: "#ffffff", start: "top 20%" },      // Stats
    ];

    if (!bgRef.current) return;
    const ctx = gsap.context(() => {
      if (!bgRef.current) return;
      // Mouse Glow Follow
      const handleMouseMove = (e: MouseEvent) => {
        gsap.to(glowRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 1.5,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Global Scroll Color Shift
      const mainDiv = document.querySelector("main") || document.body;
      
      // Since we are in a fixed bg, we animate the bgRef's backgroundColor
      // We'll use the markers or generic triggers from page sections
      const pageSections = document.querySelectorAll("section");
      pageSections.forEach((section, i) => {
        if (i < COLORS.length) {
          gsap.to(bgRef.current, {
            backgroundColor: COLORS[i],
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              scrub: 2, // Slower, more atmospheric scrub
            }
          });
        }
      });

      // Tech Grid Animation
      gsap.to(".tech-grid", {
        backgroundPosition: "100px 100px",
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }, bgRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={bgRef} className="fixed inset-0 -z-20 w-full h-full pointer-events-none transition-colors duration-1000">
      {/* Base Tech Grid */}
      <div className="tech-grid absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(37,99,235,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.2)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Moving Glow */}
      <div 
        ref={glowRef}
        className="absolute w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-60"
      />

      {/* Subtle Mesh Gradients */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/50 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-slate-50/50 rounded-full blur-[100px] animate-[pulse_8s_infinite]" />
    </div>
  );
}
