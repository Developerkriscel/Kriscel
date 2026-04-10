"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";

const TOTAL_FRAMES = 240;

const FRAME_PATH = (i: number) =>
  `/robot-hand/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const frameRef = useRef({ current: 1 });
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload all robot hand frames
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let count = 0;
    imagesRef.current = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = FRAME_PATH(i);
      img.onload = img.onerror = () => {
        count++;
        if (count === TOTAL_FRAMES) setLoaded(true);
      };
      imagesRef.current.push(img);
    }
  }, []);

  // Canvas draw + GSAP Animations
  useEffect(() => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    const section = containerRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const drawFrame = (index: number) => {
      const img = imagesRef.current[Math.max(0, Math.round(index) - 1)];
      if (!img?.complete || !img.naturalWidth) return;
      const W = window.innerWidth;
      const H = window.innerHeight;
      const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      const x = (W - img.naturalWidth * scale) / 2;
      const y = (H - img.naturalHeight * scale) / 2;
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
    };

    drawFrame(1);

    if (!containerRef.current) return;
    const gsapCtx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1.5,
        ease: "expo.out"
      });

      // Mouse Parallax for other elements if needed - currently none for hero text as it's centered


      // 3. Canvas Frame Scrub Timeline
      gsap.to(frameRef.current, {
        current: TOTAL_FRAMES,
        snap: { current: 1 },
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8, // Increased from 0.2 for much smoother interpolation over mousewheel scroll
          onUpdate: (self) => {
            const frame = Math.max(1, Math.round(self.progress * TOTAL_FRAMES));
            drawFrame(frame);
          },
        },
      });

      // 4. ScrollTrigger 3D Zoom (Freeform Board Zoom-out)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });
      
      if (textRef.current) {
        scrollTl.to(textRef.current, {
          y: "-40vh",
          scale: 0.8,
          opacity: 0,
          ease: "power2.inOut"
        }, 0);
      }
      
      return () => {
      };
    }, containerRef);
    
    return () => {
      gsapCtx.revert();
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [loaded]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black w-full" id="hero-freeform">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center [perspective:2000px] bg-black">
        
        {/* ── 8K Robot Hand Canvas (Hardware Accelerated, No Native CSS Filters) ── */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block z-0"
          style={{ imageRendering: "auto" }}
        />

        {/* Deep immersive gradients OVER canvas to blend it seamlessly without heavy filter costs */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/40 to-black/30 z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-navy/30 via-transparent to-black pointer-events-none z-0" />
        {/* Replaced heavy blur-[150px] with performant native radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.15),transparent_60%)] pointer-events-none z-0" />

        {/* Central Typography Focused on Business Automation */}
        <div ref={textRef} className="relative z-50 flex flex-col items-center justify-center text-center px-4 pt-40 md:pt-48 max-w-[1000px] pointer-events-none">

           
           <h1 className="hero-text text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-white leading-[0.95] mb-8 drop-shadow-2xl">
             Business <br className="hidden sm:block"/>
             <span className="relative inline-block mt-2">
               <span className="absolute -inset-2 bg-gradient-to-r from-accent/30 via-brand-navy/30 to-accent/30 blur-2xl rounded-full"></span>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent relative z-10 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                 Automation Chaos
               </span>
             </span>
           </h1>
           
           <p className="hero-text text-lg md:text-2xl text-slate-200 max-w-3xl leading-relaxed mb-12 font-medium tracking-tight drop-shadow-lg p-4 bg-black/20 backdrop-blur-sm rounded-3xl border border-white/5">
            No shortcuts. No fake promises <br />
            Just real execution — manual to fully automated
           </p>
           
           <div className="hero-text pointer-events-auto flex flex-col sm:flex-row gap-5 items-center">
              <Link href="/contact" className="px-8 py-4.5 bg-white text-slate-950 font-black rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] tracking-wide text-sm">
                START AUTOMATING
              </Link>
              <Link href="#solutions-scroll" className="px-8 py-4.5 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 backdrop-blur-xl tracking-wide text-sm bg-black/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                EXPLORE PLATFORM
              </Link>
           </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-80 mix-blend-screen drop-shadow-xl">
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white shadow-black">Scroll To Experience</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-white to-transparent rounded-full shadow-lg" />
        </div>


        {/* ─── Clean White Loader ─── */}
        {!loaded && (
          <div className="absolute inset-0 z-[100] bg-white flex flex-col items-center justify-center">
            
            {/* Logo + Revolving Ring */}
            <div className="relative flex items-center justify-center w-28 h-28">
              
              {/* Spinning Arc */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ animation: 'spin 1.2s linear infinite' }}
                viewBox="0 0 112 112"
                fill="none"
              >
                <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                {/* Track */}
                <circle cx="56" cy="56" r="50" stroke="#e5e7eb" strokeWidth="4" />
                {/* Moving Arc */}
                <circle
                  cx="56" cy="56" r="50"
                   stroke="var(--color-accent, #4338ca)"
                   strokeWidth="4"
                   strokeLinecap="round"
                   strokeDasharray="78 236"
                   strokeDashoffset="0"
                 />
               </svg>

              {/* Logo centered inside ring */}
              <img
                src="/images/kriscel-logo.png"
                alt="Kriscel"
                className="w-14 h-14 object-contain select-none"
              />
            </div>

            {/* Loading text */}
            <p className="mt-6 text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 animate-pulse">
              Loading
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
