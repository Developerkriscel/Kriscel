"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const CLIENTS = [
  { name: "KALINGA PREMIUM", src: "/images/clients/kalinga.png" },
  { name: "KRISHNA OVERSEAS", src: "/images/clients/koi.webp" },
  { name: "OM RESOURCES", src: "/images/clients/om-resources.png" },
  { name: "CHUKDE", src: "/images/clients/chukde.png" },
  { name: "MALVIKA PRIDE INDIA", src: "/images/clients/malvika-pride-india.png" },
  { name: "SAFECORD", src: "/images/clients/safecord.png" },
  { name: "MITRAS", src: "/images/clients/mitras.png" },
  { name: "DWAO", src: "/images/clients/dwao.png" },
  { name: "JIVO", src: "/images/clients/jivo.png" },
  { name: "PRIUS", src: "/images/clients/prius.webp" },
];

export default function ClientsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(".marquee-content", {
        xPercent: -50,
        repeat: -1,
        duration: 38,
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const displayClients = [...CLIENTS, ...CLIENTS];

  return (
    <section ref={marqueeRef} className="py-16 md:py-24 bg-slate-950 overflow-hidden relative border-y border-white/5">
      <div className="absolute top-0 bottom-0 left-0 w-28 md:w-56 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-28 md:w-56 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="w-full text-center mb-12 relative z-20">
        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
          Our Esteemed Clients
        </h2>
        <p className="mt-3 text-xs md:text-sm font-bold text-white/60 uppercase tracking-[0.25em]">
          Supporting business growth across India and international markets
        </p>
      </div>

      <div className="flex w-max marquee-content items-start">
        {displayClients.map((client, i) => (
          <div key={`${client.name}-${i}`} className="group relative flex w-48 md:w-60 flex-col items-center justify-start px-5">
            <div className="absolute inset-x-6 top-6 h-24 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex h-28 w-28 md:h-36 md:w-36 items-center justify-center rounded-full bg-white shadow-[0_18px_45px_-22px_rgba(0,0,0,0.45)] ring-4 ring-emerald-900/30 transition-transform duration-500 group-hover:scale-105">
              <Image
                src={client.src}
                alt={client.name}
                width={128}
                height={128}
                className="h-[74px] w-[74px] md:h-[92px] md:w-[92px] object-contain"
              />
            </div>
            <span className="mt-5 text-center text-[10px] md:text-xs font-black text-white/80 uppercase tracking-[0.18em]">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
