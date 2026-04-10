"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const CLIENTS = [
  { name: "KRISHNA OVERSEAS (KOI)", src: "/images/clients/koi.webp" },
  { name: "KALINGA PREMIUM", src: "/images/clients/kalinga.png" },
  { name: "SAFE CORD", src: "/images/clients/safecord.png" },
  { name: "FIRE INDUSTRIAL (PELLET)", src: "/images/clients/pellet.webp" },
  { name: "PRIUS AUTO", src: "/images/clients/prius.webp" },
  { name: "GLOBAL PARTNER", src: "/images/clients/global.webp" },
  { name: "JIVO WELLNESS", src: "/images/clients/jivo.png" },
  { name: "PAL ENGINEERING", src: "/images/clients/pal.avif" }
];

export default function ClientsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".marquee-content", {
        xPercent: -50,
        repeat: -1,
        duration: 35,
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const displayClients = [...CLIENTS, ...CLIENTS];

  return (
    <section ref={marqueeRef} className="py-20 md:py-32 bg-slate-950 overflow-hidden relative border-y border-white/5 flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-accent/5 blur-[120px] pointer-events-none" />
      
      {/* Fade masks for smooth entry/exit */}
      <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
      
      <div className="w-full text-center mb-16 z-20 relative">
          <p className="text-[10px] md:text-xs font-black text-accent tracking-[0.4em] uppercase px-4 text-center">
            Trusted by Global Industry Leaders
          </p>
      </div>

      <div className="flex w-max marquee-content items-center">
        {displayClients.map((client, i) => (
          <div key={i} className="group relative flex items-center justify-center px-16 md:px-28">
            {/* Colorful RGB Glow behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-fuchsia-500 to-accent opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative filter grayscale brightness-125 opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out cursor-pointer">
              <Image 
                src={client.src} 
                alt={client.name} 
                width={180} 
                height={60} 
                className="h-12 md:h-16 w-auto object-contain"
              />
              {/* Tooltip on hover */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">{client.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
