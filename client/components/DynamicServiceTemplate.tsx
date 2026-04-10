"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, ArrowLeft, Plus, Minus, CheckCircle2 } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Safe dynamic icon loader
const DynamicIcon = ({ name, className, size = 24 }: { name: string, className?: string, size?: number }) => {
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.Target;
  return <IconComponent className={className} size={size} />;
};

export default function DynamicServiceTemplate({ data }: { data: any }) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    setMounted(true);
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetElement = e.currentTarget as HTMLAnchorElement;
        const target = document.querySelector(targetElement.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-element", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: "power2.out" }
      );

      gsap.utils.toArray('.reveal-item').forEach((item: any) => {
        gsap.fromTo(item, 
          { y: 20, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.5, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 95%",
              end: "bottom 5%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });

      gsap.utils.toArray('.reveal-grid').forEach((grid: any) => {
        const cards = grid.querySelectorAll('.reveal-card');
        gsap.fromTo(cards,
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out",
            scrollTrigger: {
              trigger: grid,
              start: "top 95%",
              end: "bottom 5%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [mounted, data]); // Re-run if data changes (e.g. in live preview)

  if (!mounted || !data) return <div className="min-h-screen bg-white" />;

  const tColor = data.themeColor || 'blue';
  
  // Dynamic tailwind classes based on theme
  const getThemeClasses = (type: string) => {
    switch(tColor) {
      case 'rose':
        if(type === 'bg1') return 'bg-[#fff1f2]';
        if(type === 'bg2') return 'bg-[rgba(253,242,248,0.8)]';
        if(type === 'text') return 'text-rose-600';
        if(type === 'textHover') return 'hover:text-rose-800';
        if(type === 'bgSoft') return 'bg-[#fff1f2]';
        if(type === 'border') return 'border-[#ffe4e6]';
        break;
      case 'emerald':
        if(type === 'bg1') return 'bg-[#ecfdf5]';
        if(type === 'bg2') return 'bg-[rgba(240,253,244,0.8)]';
        if(type === 'text') return 'text-emerald-600';
        if(type === 'textHover') return 'hover:text-emerald-800';
        if(type === 'bgSoft') return 'bg-[#ecfdf5]';
        if(type === 'border') return 'border-[#d1fae5]';
        break;
      case 'indigo':
        if(type === 'bg1') return 'bg-[rgba(4,30,66,0.05)]';
        if(type === 'bg2') return 'bg-[rgba(4,30,66,0.1)]';
        if(type === 'text') return 'text-brand-navy';
        if(type === 'textHover') return 'hover:text-slate-900';
        if(type === 'bgSoft') return 'bg-[rgba(4,30,66,0.1)]';
        if(type === 'border') return 'border-[rgba(4,30,66,0.2)]';
        break;
      default: // blue/brand accent
        if(type === 'bg1') return 'bg-[rgba(67,56,202,0.05)]';
        if(type === 'bg2') return 'bg-[rgba(67,56,202,0.1)]';
        if(type === 'text') return 'text-accent';
        if(type === 'textHover') return 'hover:text-brand-navy';
        if(type === 'bgSoft') return 'bg-[rgba(67,56,202,0.1)]';
        if(type === 'border') return 'border-[rgba(67,56,202,0.2)]';
        break;
    }
    return '';
  };

  return (
    <main ref={containerRef} className="bg-white text-slate-900 pb-10 overflow-x-hidden selection:bg-accent selection:text-white">
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute -top-[20%] -left-[10%] w-[50%] h-[50%] ${getThemeClasses('bg1')} rounded-full blur-[120px] opacity-70`}></div>
        <div className={`absolute top-[20%] -right-[10%] w-[40%] h-[40%] ${getThemeClasses('bg2')} rounded-full blur-[100px] opacity-70`}></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[50vh] flex flex-col justify-center pt-28 pb-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <Link href="/solutions" className={`hero-element inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest ${getThemeClasses('text')} ${getThemeClasses('textHover')} transition-colors mb-6 uppercase group ${getThemeClasses('bgSoft')} px-3 py-1.5 rounded-full`}>
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Back to Solutions
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="col-span-1 lg:col-span-8 flex flex-col items-start text-left">
              <div className="hero-element inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                {data.tagline || "Solutions"}
              </div>
              <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-[0.95] uppercase mb-4">
                {data.title && data.title.split(' ').map((word: string, i: number) => (
                  <React.Fragment key={i}>
                    {word} {i === Math.floor(data.title.split(' ').length / 2) && <br className="hidden md:block" />}
                  </React.Fragment>
                ))}
                <span className="text-accent italic font-serif leading-normal normal-case mt-1 text-3xl md:text-4xl lg:text-5xl block">{data.titleHighlight || "Solutions."}</span>
              </h1>
              <p className="hero-element text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-6 whitespace-pre-line">
                {data.description}
              </p>
              
              <div className="hero-element flex flex-wrap gap-3">
                <Link href="/contact" className="group px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2">
                  Get Started
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#what-we-do" className="px-6 py-2.5 rounded-full font-black text-xs text-slate-950 hover:bg-slate-50 transition-colors border border-slate-200">
                  See Our Strategy
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-4 relative hero-element">
               <div className="relative w-full aspect-square bg-white rounded-3xl border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden flex items-center justify-center group">
                 <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                 <div className="relative z-10 w-2/3 h-2/3 flex items-center justify-center">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-slate-100 rounded-full" />
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className={`absolute inset-6 border ${getThemeClasses('border')} rounded-full`} />
                    <div className="relative bg-white/50 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-sm group-hover:scale-105 transition-transform duration-500">
                      <DynamicIcon name={data.heroIconName || 'Target'} size={32} className={getThemeClasses('text')} />
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      {data.whatWeDo && data.whatWeDo.length > 0 && (
        <section id="what-we-do" className="relative z-10 py-10 bg-slate-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-left mb-8 max-w-xl reveal-item">
              <h2 className={`text-xs font-black ${getThemeClasses('text')} tracking-[0.2em] uppercase mb-2`}>What We Do</h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-[0.95]">
                Turn Insights into <br className="hidden md:block"/> Real Impact.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal-grid">
              {data.whatWeDo.map((item: any, idx: number) => (
                <div key={idx} className={`reveal-card col-span-1 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group ${idx === 2 ? 'bg-slate-950 relative overflow-hidden' : 'bg-white p-6 rounded-2xl'}`}>
                   {idx === 2 ? (
                     <>
                        <div className={`absolute top-0 right-0 w-32 h-32 ${getThemeClasses('bgSoft').replace('50', '500/20')} rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none`}></div>
                        <div className="p-6 h-full flex flex-col justify-start">
                          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all border border-white/5">
                             <DynamicIcon name={item.iconName} size={20} className="text-white" />
                          </div>
                          <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                          <p className="text-slate-300 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                     </>
                   ) : (
                     <>
                        <div className={`w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 ${getThemeClasses('bgSoft').replace('bg-', 'group-hover:bg-')} transition-all`}>
                           <DynamicIcon name={item.iconName} size={20} className={getThemeClasses('text')} />
                        </div>
                        <h4 className="text-base font-bold text-slate-950 mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                     </>
                   )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HORIZONTAL ROTATING CARDS - BENEFITS */}
      {data.benefits && data.benefits.length > 0 && (
        <section className="relative bg-slate-950 py-10 flex flex-col justify-center overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full mb-6 relative z-10 text-center md:text-left reveal-item">
             <h2 className={`text-xs font-black ${getThemeClasses('text').replace('600', '400')} tracking-[0.2em] uppercase mb-2`}>Foundations</h2>
             <p className="text-2xl md:text-4xl font-black text-white tracking-tight max-w-xl leading-[1.05]">
               Designed for sustainable business growth.
             </p>
          </div>

          <div className="max-w-6xl mx-auto px-6 w-full">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal-grid">
               {data.benefits.map((benefit: any, idx: number) => (
                  <div key={idx} className="reveal-card w-full h-[240px] bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:bg-slate-800 hover:border-slate-700 transition-all shadow-md">
                     <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 shadow-sm">
                       <DynamicIcon name={benefit.iconName} size={24} className="text-white/70" />
                     </div>
                     <div>
                       <div className="text-2xl font-black text-white/5 mb-2 leading-none hidden lg:block">0{idx + 1}</div>
                       <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{benefit.title}</h3>
                       <p className="text-slate-400 font-medium leading-relaxed text-xs">{benefit.desc}</p>
                     </div>
                  </div>
               ))}
             </div>
          </div>
        </section>
      )}

      {/* MID PAGE CTA */}
      <section className="relative z-10 py-12 bg-accent reveal-item">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase leading-[1.05] mb-4">
              Stop Guessing, Start <br className="hidden md:block"/> Scaling Today.
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto mb-6 leading-relaxed">
              Don't compromise on efficiency. Connect with our expert team and completely revolutionize your business workflow.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-3 bg-white text-accent rounded-full font-black text-xs shadow-md hover:scale-105 transition-all items-center gap-2 uppercase tracking-widest">
              Launch Now
              <ArrowRight size={14} />
            </Link>
         </div>
      </section>

      {/* WHY CHOOSE KRISCEL TECH */}
      {data.features && data.features.length > 0 && (
        <section className="relative z-10 py-10 bg-white">
           <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-10 reveal-item">
                 <h2 className={`text-xs font-black ${getThemeClasses('text')} tracking-[0.2em] uppercase mb-2`}>The Kriscel Advantage</h2>
                 <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[0.95]">
                    Why Choose Our Service?
                 </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 reveal-grid">
                 {data.features.map((feature: any, idx: number) => (
                    <div key={idx} className="reveal-card flex gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                          <CheckCircle2 className={getThemeClasses('text')} size={16} />
                       </div>
                       <div>
                          <h4 className="text-base font-bold text-slate-950 mb-1">{feature.title}</h4>
                          <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* FAQS SECTION */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="relative z-10 py-10 bg-slate-50 border-t border-slate-100">
           <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-8 reveal-item">
                 <h2 className={`text-xs font-black ${getThemeClasses('text')} tracking-[0.2em] uppercase mb-2`}>Knowledge Base</h2>
                 <h3 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight mb-4">
                    Frequently Asked Questions
                 </h3>
                 <p className="text-slate-500 text-sm font-medium">Everything you need to know about our service.</p>
              </div>

              <div className="space-y-3 reveal-item">
                 {data.faqs.map((faq: any, idx: number) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-300 shadow-sm">
                       <button 
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full px-5 py-4 text-left flex justify-between items-center bg-transparent"
                       >
                          <span className="font-bold text-slate-900 pr-6 text-xs md:text-sm">{faq.question}</span>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === idx ? getThemeClasses('bgSoft') + ' ' + getThemeClasses('text') : 'bg-slate-50 text-slate-400'}`}>
                             {openFaq === idx ? <Minus size={14} /> : <Plus size={14} />}
                          </div>
                       </button>
                       <AnimatePresence>
                          {openFaq === idx && (
                             <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="px-5 pb-4 text-slate-500 font-medium leading-relaxed text-xs md:text-sm"
                             >
                                {faq.answer}
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </div>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* FINAL GLOBAL CTA */}
      <section className="mt-12 flex flex-col items-center text-center px-6 relative overflow-hidden pb-8 reveal-item">
         <div className="text-slate-100 text-[10vw] font-black tracking-tighter leading-[0.7] select-none opacity-50">GROW</div>
         <div className="mt-[-2vw] relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-[0.9]">Ready to Upgrade <br /> Your Business?</h2>
            <Link href="/contact" className="group px-8 py-3 bg-slate-950 text-white rounded-full font-black text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2">
               Get Started Today
               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </main>
  );
}
