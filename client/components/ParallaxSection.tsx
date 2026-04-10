"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


export default function ParallaxSection() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      
      gsap.from(".parallax-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <div 
        ref={bgRef}
        className="absolute top-[-20%] left-0 w-full h-[140%] -z-10"
      >
        <img 
          src="/images/blue_glass_abstract.png" 
          alt="Parallax Background" 
          className="w-full h-full object-cover opacity-60 grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="parallax-text text-5xl md:text-8xl font-black tracking-tighter text-foreground mb-8">
          ENHANCE<br /><span className="text-accent underline decoration-accent/20">VISIBILITY.</span>
        </h2>
        <p className="parallax-text text-xl md:text-2xl text-muted font-medium leading-relaxed">
          Break the silos and gain unprecedented insights into your business operations with our integrated AI intelligence.
        </p>
      </div>
    </section>
  );
}
