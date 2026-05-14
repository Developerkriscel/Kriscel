"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Network, 
  Settings2, 
  Users, 
  Zap,
  ArrowRight,
  FileSpreadsheet,
  MessageSquare,
  Mail,
  Store,
  Wallet,
  Cpu,
  Globe,
  Truck,
  ShieldCheck,
  TrendingUp,
  Activity,
  Sparkles
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STORY_STEPS = [
  {
    id: "manual",
    title: "The Manual Mess",
    subtitle: "Losing Time & Growth",
    label: "01",
    accent: "rose",
    desc: ["Paper registers", "scattered Excel files", "confusion", "growth bottleneck"],
    full_desc: "Paper registers and scattered Excel files create confusion and slow down your growth. When your sales and inventory are managed manually, you lose the **speed** needed to compete in a modern market.",
    visual_type: "isolation"
  },
  {
    id: "inventory",
    title: "Smart Inventory",
    subtitle: "Live Stock Tracking",
    label: "02",
    accent: "blue",
    desc: ["100% accuracy", "warehouses", "live tracking", "zero wastage"],
    full_desc: "Stop the guesswork. Get **100% accuracy** in your warehouses. Our live tracking system ensures you always know what's in stock, reducing wastage and making sure you never lose a customer again.",
    visual_type: "inventory"
  },
  {
    id: "leads",
    title: "Automated Sales",
    subtitle: "24/7 Inquiry Sync",
    label: "03",
    accent: "emerald",
    desc: ["WhatsApp sync", "automated system", "instant follow-up", "nurture leads"],
    full_desc: "Don't let customer leads get lost in **WhatsApp chats**. We sync all your inquiries from social media and calls into one automated system that follows up instantly, even while you sleep.",
    visual_type: "leads"
  },
  {
    id: "production",
    title: "Factory to Office",
    subtitle: "Absolute Connectivity",
    label: "04",
    accent: "indigo",
    desc: ["Factory floor", "real-time monitoring", "staff output", "single screen"],
    full_desc: "Connect your **factory floor** to your head office. Monitor raw materials, staff work hours, and daily production output in one single, high-fidelity screen. No more manual updates required.",
    visual_type: "connector"
  },
  {
    id: "finance",
    title: "Easy Accounting",
    subtitle: "Clean Cash Flow",
    label: "05",
    accent: "amber",
    desc: ["GST billing", "automated reminders", "profit and loss", "financial strength"],
    full_desc: "Manage your **GST billing** and payments without the headache. Automated reminders and expense tracking give you absolute clarity on your profit and loss, ensuring your business stays financially strong.",
    visual_type: "logic"
  },
  {
    id: "talent",
    title: "Staff & Tasks",
    subtitle: "Precision Control",
    label: "06",
    accent: "cyan",
    desc: ["Scale team", "task delegation", "attendance tools", "boosting performance"],
    full_desc: "Scale your team without the management stress. Our **automated task delegation** and attendance tools help your staff stay focused on their targets, boosting your company's overall performance.",
    visual_type: "hr"
  },
  {
    id: "insight",
    title: "Owner's Dashboard",
    subtitle: "Business Vantage",
    label: "07",
    accent: "violet",
    desc: ["Lead with facts", "business health", "regional sales", "mobile access"],
    full_desc: "Lead with **facts**. Our centralized dashboard gives you a complete view of your business health—from top-selling products to daily regional sales—available on your phone from anywhere.",
    visual_type: "dashboard"
  },
  {
    id: "scale",
    title: "Global Growth",
    subtitle: "Ready for the World",
    label: "08",
    accent: "accent",
    desc: ["International market", "digital foundation", "local success", "global empire"],
    full_desc: "Expanding your business to the **international market** requires a strong digital foundation. We provide the technology and the plan to help you scale your local success into a global empire.",
    visual_type: "engine"
  }
];

export default function SolutionsFullPage() {
  const [mounted, setMounted] = useState(false);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      STORY_STEPS.forEach((_, i) => {
        const section = sectionsRef.current[i];
        if (!section) return;

        const textContent = section.querySelector(".section-text");
        const visualContent = section.querySelector(".section-visual");
        const highlightElements = section.querySelectorAll(".text-highlight");

        gsap.fromTo(textContent, 
          { x: i % 2 === 0 ? -30 : 30, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 40%",
              toggleActions: "play reverse play reverse"
            }
          }
        );

        // Highlight animation
        gsap.fromTo(highlightElements, 
          { backgroundSize: "0% 100%" },
          { 
            backgroundSize: "100% 100%", 
            duration: 0.8, 
            stagger: 0.1,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "bottom 45%",
              toggleActions: "play reverse play reverse"
            }
          }
        );

        gsap.fromTo(visualContent, 
          { x: i % 2 === 0 ? 50 : -50, opacity: 0, scale: 0.98 },
          { 
            x: 0, 
            opacity: 1, 
            scale: 1,
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 50%",
              toggleActions: "play reverse play reverse"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return <div className="min-h-screen bg-white" />;

  const getAccentColor = (accent: string) => {
    switch (accent) {
      case "rose": return "text-rose-500 bg-rose-50 border-rose-100";
      case "blue": return "text-accent bg-accent/5 border-accent/20";
      case "emerald": return "text-emerald-500 bg-emerald-50 border-emerald-100";
      case "indigo": return "text-brand-navy bg-brand-navy/5 border-brand-navy/10";
      case "amber": return "text-amber-500 bg-amber-50 border-amber-100";
      case "cyan": return "text-accent bg-accent border-accent/5";
      case "violet": return "text-violet-500 bg-violet-50 border-violet-100";
      case "accent": return "text-accent bg-accent/10 border-accent/20";
      default: return "text-slate-500 bg-slate-50 border-slate-100";
    }
  };

  const wrapHighlights = (text: string, words: string[], accent: string) => {
    const parts = text.split(new RegExp(`(${words.join('|')})`, 'gi'));
    return parts.map((part, index) => {
      const match = words.find(w => w.toLowerCase() === part.toLowerCase());
      if (match) {
        return (
          <span 
            key={index} 
            className={`text-highlight relative font-bold px-1 py-0.5 rounded text-slate-900 bg-gradient-to-r ${accent === 'accent' || accent === 'blue' ? 'from-accent/20 to-brand-navy/10' : accent === 'indigo' ? 'from-brand-navy/20 to-accent/10' : `from-${accent}-100 to-${accent}-50`} bg-no-repeat bg-[length:0%_100%] transition-all hover:text-white hover:from-slate-900 hover:to-slate-900`}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const renderVisual = (type: string, accent: string) => {
    const glassStyle = `relative w-full h-[280px] md:h-[350px] bg-white flex items-center justify-center rounded-[2rem] border-[1px] border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-500 hover:shadow-xl`;
    
    switch (type) {
      case "isolation":
        return (
          <div className={glassStyle}>
             <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
             <div className="flex flex-col gap-4 items-center scale-90">
                <div className="flex gap-4">
                   <motion.div animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity }} className="w-12 h-16 bg-white border border-slate-100 rounded-lg shadow-sm flex flex-col p-2 gap-1">
                      <div className="h-1 w-full bg-slate-100 rounded" />
                      <div className="h-1 w-2/3 bg-rose-50 rounded" />
                   </motion.div>
                </div>
                <div className="font-['Caveat'] text-rose-400 text-xl font-bold tracking-tight">Complexity</div>
             </div>
          </div>
        );
      case "inventory":
        return (
          <div className={glassStyle}>
             <div className="w-[85%] h-[82%] bg-slate-50/50 rounded-2xl p-5 flex flex-col gap-4 border border-white scale-95">
                 <div className="flex justify-between items-center">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg shadow-accent/30"><Store size={16} /></div>
                    <div className="text-[7px] font-black text-accent uppercase tracking-widest">Optimized Hub</div>
                 </div>
                <div className="flex-1 space-y-2">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="h-7 bg-white rounded-lg px-3 flex items-center justify-between border border-accent/50 shadow-sm">
                         <div className="w-20 h-1.5 bg-slate-100 rounded-full" />
                         <Truck size={12} className="text-accent/50" />
                      </div>
                   ))}
                </div>
             </div>
          </div>
        );
      case "leads":
        return (
          <div className={glassStyle}>
             <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
             <div className="relative flex flex-col items-center gap-6 scale-90">
                <div className="flex gap-6">
                   <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} className="bg-emerald-500 p-4 rounded-2xl shadow-lg text-white">
                      <MessageSquare size={28} />
                   </motion.div>
                   <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="bg-white border-2 border-emerald-500 p-4 rounded-2xl shadow-md text-emerald-500">
                      <Mail size={28} />
                   </motion.div>
                </div>
                <div className="px-6 py-2 bg-emerald-500 text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em]">Active Sync</div>
             </div>
          </div>
        );
      case "connector":
        return (
          <div className={`${glassStyle} bg-slate-900 border-none`}>
             <div className="relative w-44 h-44 flex items-center justify-center scale-90">
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-accent/20 rounded-full" />
                 <div className="relative z-10 w-24 h-24 bg-accent rounded-3xl shadow-[0_15px_40px_rgba(67,56,202,0.3)] flex items-center justify-center border border-white/10">
                    <Network className="text-white" size={40} />
                 </div>
             </div>
          </div>
        );
      case "logic":
        return (
          <div className={glassStyle}>
             <div className="w-[85%] bg-white rounded-2xl border border-slate-50 p-5 flex flex-col gap-4 scale-95">
                <div className="flex items-center gap-4 pb-4 border-b border-slate-50">
                   <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600"><Wallet size={20} /></div>
                   <div className="flex flex-col">
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Financial Engine</span>
                      <span className="text-lg font-black text-slate-950">Profitable</span>
                   </div>
                </div>
                <div className="space-y-3">
                   {[1, 2].map(i => (
                     <div key={i} className={`h-10 bg-amber-50/20 border border-amber-50 rounded-lg p-3 flex items-center justify-between`}>
                        <div className="w-20 h-1.5 bg-slate-100 rounded-full" />
                        <TrendingUp size={16} className="text-amber-500" />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        );
      case "hr":
        return (
          <div className={glassStyle}>
             <div className="flex flex-col items-center gap-8 scale-90">
                <div className="flex -space-x-3">
                   {[1, 2, 3].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-white shadow-md flex items-center justify-center overflow-hidden"><Users size={20} className="text-accent" /></div>)}
                </div>
                <div className="flex flex-col items-center gap-3">
                   <div className="px-5 py-1.5 bg-accent border border-accent/5 text-accent rounded-full text-[9px] font-black uppercase tracking-widest">Team Performance</div>
                   <div className="flex gap-1.5 h-8 items-end">
                      {[0.4, 0.8, 0.3, 0.9, 0.5].map((h, i) => <div key={i} className="w-2 bg-accent rounded-full" style={{ height: `${h * 100}%` }} />)}
                   </div>
                </div>
             </div>
          </div>
        );
      case "dashboard":
        return (
          <div className={`${glassStyle} bg-slate-900 border-none`}>
             <div className="w-[90%] h-[85%] bg-slate-800/80 rounded-2xl border border-white/5 backdrop-blur-3xl p-6 flex flex-col justify-between scale-95">
                <div className="text-[8px] font-bold text-violet-400 uppercase tracking-widest">Strategic View</div>
                <div className="flex-1 mt-6 border-b border-white/5 pb-2">
                   <svg className="w-full h-full" viewBox="0 0 100 40"><path d="M0,35 Q20,32 40,34 T100,2" fill="none" stroke="#8b5cf6" strokeWidth="2.5" /></svg>
                </div>
                <div className="text-lg font-black text-white tracking-tighter">VANTAGE 360&deg;</div>
             </div>
          </div>
        );
      case "engine":
        return (
          <div className={`${glassStyle} bg-accent shadow-xl border-none`}>
             <div className="flex flex-col items-center gap-8 scale-90 text-white">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center"><Globe className="text-accent animate-spin-slow" size={40} /></div>
                <Link href="/contact" className="px-8 py-2.5 bg-white text-accent rounded-full font-black text-xs shadow-lg hover:scale-105 transition-all uppercase tracking-widest">Scale Now</Link>
             </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <main className="bg-white text-slate-900 pt-24 pb-48 overflow-x-hidden">
      {/* Narrative Headline - Downscaled */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 mb-20 relative">
         <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-2 mb-6">
               <div className="h-px w-10 bg-accent" />
               <span className="text-accent font-black tracking-[0.4em] uppercase text-[9px] md:text-[10px]">Architecting Excellence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[0.95] mb-8 uppercase">
               Your Digital <br />
               <span className="text-accent italic font-serif leading-normal">Empire.</span>
            </h1>
            <p className="text-sm md:text-lg text-slate-400 font-medium max-w-lg mx-auto leading-relaxed">
               Welcome to the evolution of your business. Below is the 8-chapter blueprint of how we transform your manual daily grind into a high-performance automated engine.
            </p>
         </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-20 md:space-y-32">
        {STORY_STEPS.map((step, i) => (
          <section 
            key={step.id}
            ref={el => { sectionsRef.current[i] = el; }}
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 min-h-[40vh] relative`}
          >
            {/* Soft Background Glow - Downscaled */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-radial bg-gradient-to-b ${accentColorToGradientMap[step.accent]} opacity-20 blur-[100px] pointer-events-none rounded-full`} />

            {/* Premium Text Content - Downscaled */}
            <div className="section-text w-full lg:w-1/2 flex flex-col gap-5 relative z-10 group cursor-default">
               <div className={`inline-flex items-center justify-center w-10 h-10 rounded-2xl border-2 font-black text-sm shadow-md transition-all group-hover:scale-110 ${getAccentColor(step.accent)}`}>
                  {step.label}
               </div>
               <div className="flex flex-col gap-1">
                  <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${getAccentColor(step.accent).split(' ')[0]}`}>Chapter {step.label}</span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[0.9] uppercase transition-colors group-hover:text-accent">
                     {step.title} <br className="hidden md:block" />
                     <span className="text-accent italic font-serif leading-normal normal-case block mt-0.5 text-xl md:text-3xl lg:text-4xl">{step.subtitle}</span>
                  </h3>
               </div>
               <p className="text-xs md:text-base lg:text-lg text-slate-500 font-medium leading-[1.6] max-w-sm transition-all group-hover:text-slate-900">
                  {wrapHighlights(step.full_desc, step.desc, step.accent)}
               </p>
            </div>

            {/* High-Impact Visual Canvas - Downscaled */}
            <div className="section-visual w-full lg:w-1/2 h-auto relative z-10 [perspective:2000px] transition-transform duration-700 hover:scale-[1.02]">
               {renderVisual(step.visual_type, step.accent)}
            </div>
          </section>
        ))}
      </div>

      {/* Global CTA - Downscaled */}
      <section className="mt-40 flex flex-col items-center text-center px-6 relative overflow-hidden">
         <div className="text-slate-100 text-[15vw] font-black tracking-tighter leading-[0.7] select-none opacity-20 filter grayscale">EMPIRE</div>
         <div className="mt-[-5vw] relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight uppercase leading-[0.9]">Ready to Build <br /> Your Chapter?</h2>
            <Link href="/contact" className="group px-10 py-3.5 bg-slate-950 text-white rounded-full font-black text-base shadow-xl hover:scale-105 transition-all flex items-center gap-3">
               Start Today
               <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
         </div>
      </section>

      <style jsx global>{`
        .text-highlight { display: inline; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </main>
  );
}

const accentColorToGradientMap: Record<string, string> = {
  rose: "from-rose-50/50 to-white",
  blue: "from-accent/5 to-white",
  emerald: "from-emerald-50/50 to-white",
  indigo: "from-brand-navy/5 to-white",
  amber: "from-amber-50/50 to-white",
  cyan: "from-accent/50 to-white",
  violet: "from-violet-50/50 to-white",
  accent: "from-accent/5 to-white"
};
