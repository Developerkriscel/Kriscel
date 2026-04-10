"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Megaphone, MonitorPlay, ShoppingCart, Cpu } from "lucide-react";

// The narrative sequence the user requested
const workflowSteps = [
  { icon: <Code size={16} className="text-accent" />, text: "1. Build Your Web Presence" },
  { icon: <Megaphone size={16} className="text-violet-400" />, text: "2. SEO & Digital Marketing" },
  { icon: <MonitorPlay size={16} className="text-rose-400" />, text: "3. Targeted Paid Ads (PPC)" },
  { icon: <ShoppingCart size={16} className="text-amber-400" />, text: "4. E-Commerce Scaling" },
  { icon: <Cpu size={16} className="text-emerald-400" />, text: "5. Full Business Automation" }
];

// Duplicate strings so marquee is continuous and seamless
const doubledWorkflow = [...workflowSteps, ...workflowSteps, ...workflowSteps, ...workflowSteps];

export default function ServiceWorkflowTicker() {
  return (
    <section className="relative flex items-center justify-between w-full h-16 sm:h-[72px] bg-slate-50 border-y border-gray-200 overflow-hidden z-[40]">
      
      {/* Subtle modern light background lighting */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-1/4 w-[20%] h-full bg-gradient-to-r from-transparent via-accent0/10 to-transparent blur-md" />
        <div className="absolute top-0 left-1/4 w-[20%] h-full bg-gradient-to-r from-transparent via-violet-500/10 to-transparent blur-md" />
      </div>

      {/* Ticker Container */}
      <div className="relative flex-1 h-full flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] z-10 lg:pr-10">
        <motion.div
           className="flex items-center whitespace-nowrap gap-8 sm:gap-14 pl-10"
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
           {/* Add a leading intro text before the loop starts for context */}
           <div className="flex items-center mr-4">
              <span className="text-[10px] sm:text-xs font-black text-slate-800 uppercase tracking-widest italic pr-6 border-r border-slate-300">
                End-To-End Growth Cycle
              </span>
           </div>

           {doubledWorkflow.map((step, idx) => (
             <div key={idx} className="flex items-center gap-2 group cursor-default">
                {step.icon}
                <span className="text-[10px] sm:text-[12px] font-black group-hover:text-accent transition-colors text-slate-600 uppercase tracking-[0.1em]">
                  {step.text}
                </span>
                
                {/* Arrow connecting the sequence naturally */}
                <ArrowRight size={12} className="text-slate-300 ml-4 hidden sm:block" />
             </div>
           ))}
        </motion.div>
      </div>

      {/* Sticky Right Side Block (The Action Trigger) */}
      <div className="relative z-20 flex bg-white/95 backdrop-blur-xl h-full items-center px-4 md:px-6 border-l border-gray-100 shadow-[-15px_0_30px_rgba(0,0,0,0.03)] shrink-0">
          
          <div className="hidden xl:flex flex-col items-end mr-6 text-right">
             <span className="text-[8px] uppercase font-black tracking-[0.2em] text-slate-400 mb-0.5">We Handle Every Step</span>
             <span className="text-[11px] font-bold text-slate-900 tracking-wider whitespace-nowrap">From Website to Full Automation</span>
          </div>

          <Link href="/contact" className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-full font-black text-[9px] sm:text-[10px] uppercase tracking-[0.15em] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
             
             {/* Button shine animation overlay */}
             <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
             
             Start Today
             <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
      </div>
      
    </section>
  );
}
