"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionReveal({ children }: { children: React.ReactNode }) {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!revealRef.current) return;
    const ctx = gsap.context(() => {
      if (!revealRef.current) return;
      gsap.fromTo(revealRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: revealRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, revealRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={revealRef} className="relative overflow-hidden">
      {children}
    </div>
  );
}
