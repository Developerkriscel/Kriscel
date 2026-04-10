"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Target, Repeat, Rocket } from "lucide-react";

const stats = [
  { icon: <TrendingUp size={16} className="text-emerald-400" />, text: "📈 500% Guaranteed Business Hike" },
  { icon: <Rocket size={16} className="text-rose-400" />, text: "🚀 Your Business, Our Automation" },
  { icon: <Zap size={16} className="text-amber-400" />, text: "⚡ Connect With Us & Dominate" },
  { icon: <Target size={16} className="text-accent" />, text: "🎯 Rapid ROI Scaling Across Channels" },
  { icon: <Repeat size={16} className="text-accent" />, text: "🔁 10x Operational Speed Unlocked" }
];

// Duplicate strings so marquee is continuous and seamless
const doubledStats = [...stats, ...stats, ...stats, ...stats];

export default function StatTickerCTA() {
  return (
    <section className="relative flex items-center justify-between w-full h-16 sm:h-[84px] bg-[#020617] border-t border-b border-white/5 overflow-hidden z-[100]">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute top-0 right-1/4 w-[20%] h-full bg-gradient-to-r from-transparent via-accent0/10 to-transparent blur-md" />
        <div className="absolute top-0 left-1/4 w-[20%] h-full bg-gradient-to-r from-transparent via-accent0/10 to-transparent blur-md" />
      </div>

      {/* Ticker Container (Takes remaining space) */}
      <div className="relative flex-1 h-full flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] z-10 lg:pr-10">
        <motion.div
           className="flex items-center whitespace-nowrap gap-10 sm:gap-16 pl-10"
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
           {doubledStats.map((stat, idx) => (
             <div key={idx} className="flex items-center gap-2 group cursor-default">
                {stat.icon}
                <span className="text-[10px] sm:text-[13px] font-black group-hover:text-white transition-colors text-white/80 uppercase tracking-[0.15em]">{stat.text}</span>
             </div>
           ))}
        </motion.div>
      </div>

      {/* Sticky Right Side Block (The Action Trigger) */}
      <div className="relative z-20 flex bg-[#020617]/95 backdrop-blur-xl h-full items-center px-4 md:px-8 border-l border-white/10 shadow-[-20px_0_30px_rgba(2,6,23,0.9)] shrink-0">
          
          <div className="hidden xl:flex flex-col items-end mr-6 text-right">
             <span className="text-[9px] uppercase font-black tracking-[0.3em] text-accent mb-1 border border-accent/20 px-2 py-0.5 rounded-full bg-accent/5">Multiply Leads</span>
             <span className="text-xs font-bold text-white tracking-widest whitespace-nowrap">Click Here to Launch Process</span>
          </div>

          <Link href="/contact" className="group relative inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-3.5 bg-white text-slate-950 rounded-full font-black text-[9px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
             
             {/* Button shine animation overlay */}
             <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-slate-950/10 to-transparent pointer-events-none" />
             
             Scale Your Business Today
             <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
      </div>
      
    </section>
  );
}
