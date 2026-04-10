"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover effects
    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 3, backgroundColor: "rgba(67, 56, 202, 0.1)", mixBlendMode: "difference", duration: 0.3 });
    };
    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "rgba(67, 56, 202, 1)", mixBlendMode: "normal", duration: 0.3 });
    };

    const interactiveElements = document.querySelectorAll("button, a, .group");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
    />
  );
}
