"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Suppress "target null" warnings globally (especially for dynamic/conditional elements)
    gsap.config({ nullTargetWarn: false });

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expoOut
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 2,
    });lenisRef.current = lenis;

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP Ticker for better performance
    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Set scroll position to top on refresh
    window.scrollTo(0, 0);

    // Bulletproof fix for GSAP ScrollTrigger collisions:
    // Watch for ANY height changes (e.g. late-loading images) and refresh GSAP.
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    
    if (typeof document !== 'undefined') {
      resizeObserver.observe(document.body);
    }

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
      resizeObserver.disconnect();
    };
  }, []);

  return <div className="flex flex-col min-h-screen">{children}</div>;
}
