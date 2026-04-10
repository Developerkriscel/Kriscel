"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOTAL_FRAMES = 240;
const FRAME_PATH = (index: number) =>
  `/sequence/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;

const BIO_LINES = [
  { label: "ROLE", value: "Creative Developer & Brand Experience Director" },
  { label: "FOCUS", value: "Ultra-Premium Web Design · Next.js · Framer Motion" },
  { label: "CRAFT", value: "Advanced Scroll Storytelling · 3D Product Interactions" },
  { label: "CLIENTS", value: "Global Tech Brands · Enterprise · Series B+" },
];

export default function CreativeDirector() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef({ current: 0 });
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload all frames
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let loadedCount = 0;
    imagesRef.current = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) setLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) setLoaded(true);
      };
      imagesRef.current.push(img);
    }
  }, []);

  // Draw frames on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
      );
      const x = (canvas.width - img.naturalWidth * scale) / 2;
      const y = (canvas.height - img.naturalHeight * scale) / 2;
      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
    };

    // Draw the first frame immediately on load
    drawFrame(0);

    if (!sectionRef.current) return;
    const ctx2 = gsap.context(() => {
      const animation = gsap.to(frameRef.current, {
        current: TOTAL_FRAMES - 1,
        snap: { current: 1 },
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: () => {
            drawFrame(Math.round(frameRef.current.current));
          },
        },
      });

      // Text reveal
      const items = textRef.current?.querySelectorAll(".bio-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      return () => {
        animation.scrollTrigger?.kill();
      };
    }, sectionRef);

    return () => ctx2.revert();
  }, [loaded]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "400vh" }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Canvas — full bleed image sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ display: "block" }}
        />

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none z-10" />

        {/* Content overlay */}
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6">
            <span className="inline-block text-xs tracking-[0.3em] font-mono text-accent uppercase border border-accent/30 rounded-full px-4 py-1.5 backdrop-blur-sm bg-accent/5">
              Awwwards Nominee · Creative Direction
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-4">
            Where{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Precision
            </span>
            <br />
            Meets Craft.
          </h2>

          <p className="text-base md:text-lg text-white/60 mb-12 max-w-lg leading-relaxed font-light">
            Kriscel operates at the intersection of engineering precision and
            brand storytelling — crafting premium digital experiences that move
            markets.
          </p>

          {/* Bio rows */}
          <div ref={textRef} className="space-y-4">
            {BIO_LINES.map(({ label, value }) => (
              <div
                key={label}
                className="bio-item flex items-start gap-4 group"
              >
                <span className="text-[10px] tracking-[0.25em] font-mono text-accent/70 uppercase w-16 pt-0.5 flex-shrink-0">
                  {label}
                </span>
                <div className="flex-1 h-px bg-white/10 mt-3 mx-2 group-hover:bg-accent/40 transition-colors duration-300" />
                <span className="text-sm md:text-base font-medium text-white/90 text-right leading-snug max-w-xs">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-sm font-semibold text-white group"
            >
              <span className="relative overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  Explore Our Work
                </span>
                <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full text-accent">
                  Explore Our Work
                </span>
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Frame counter — subtle detail */}
        <div className="absolute bottom-8 right-8 z-20 font-mono text-xs text-white/20 tracking-widest">
          KRISCEL · INNOVATION
        </div>

        {/* Loading state */}
        {!loaded && (
          <div className="absolute inset-0 z-30 bg-black flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
              <span className="text-white/40 text-xs font-mono tracking-widest">
                LOADING EXPERIENCE
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
