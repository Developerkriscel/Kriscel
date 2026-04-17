"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Megaphone, Target, MousePointerClick, 
  BarChart4, Globe, ArrowLeft, Plus, Minus, LayoutGrid, 
  ShieldCheck, Search, Users, LineChart, DollarSign, Zap 
} from 'lucide-react';
import LogoBadges from '@/components/LogoBadges';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What is paid ads management?",
    answer: "Paid ads management is the process of creating, monitoring, and optimizing advertising campaigns on platforms like Google, Facebook, Instagram, and LinkedIn. It focuses on reaching the right audience at the right time to achieve specific marketing goals like leads or sales."
  },
  {
    question: "Why should my business use paid advertising?",
    answer: "Paid ads provide immediate visibility, targeted reach, and measurable results. It allows businesses to get in front of potential customers quickly, drive high-intent traffic, and scale marketing efforts based on performance."
  },
  {
    question: "Which platforms are best for paid ads?",
    answer: "The choice depends on your audience. Google Ads is great for search intent, while Facebook and Instagram are excellent for visual storytelling and demographics. LinkedIn is the preferred choice for B2B targeting."
  },
  {
    question: "How do you measure the success of a paid ads campaign?",
    answer: "We track key performance indicators (KPIs) such as Click-Through Rate (CTR), Cost Per Click (CPC), conversion rate, and Return on Ad Spend (ROAS) to ensure your budget is delivering maximum value."
  },
  {
    question: "What services are included in paid ads management?",
    answer: "Our services include account setup, keyword research, ad copy creation, audience targeting, landing page optimization, A/B testing, and weekly performance reporting."
  },
  {
    question: "How much budget do I need for paid ads?",
    answer: "Budgets vary by industry and goals. We work with businesses of all sizes to create a strategy that maximizes results, whether you're starting small or ready to scale globally."
  },
  {
    question: "How long does it take to see results from paid ads?",
    answer: "Unlike SEO, paid ads can generate traffic and leads almost instantly once campaigns are live. However, peak performance is usually reached after 2-4 weeks of data-driven optimization."
  },
  {
    question: "Can paid ads help with brand awareness?",
    answer: "Yes, display and video ads are highly effective for building brand visibility and keeping your business top-of-mind for potential customers throughout their buying journey."
  },
  {
    question: "Which is the best paid ads management service in India?",
    answer: "The best provider is one that combines data-driven strategies with creative excellence, ensuring every rupee spent contributes to your business growth through high-quality leads and sales."
  },
  {
    question: "How should I choose a partner for paid ads management?",
    answer: "Look for experience across multiple platforms, transparency in reporting, a focus on ROI rather than just clicks, and a collaborative approach to understanding your unique business goals."
  }
];

const benefits = [
  {
    title: "Google Ads Strategy",
    desc: "Target high-intent searchers at the exact moment they are looking for your products or services.",
    icon: <Target className="text-accent" size={24} />
  },
  {
    title: "Social Media Ads",
    desc: "Reach your ideal demographics on Facebook, Instagram, and LinkedIn with visually compelling campaigns.",
    icon: <Megaphone className="text-emerald-500" size={24} />
  },
  {
    title: "Conversion Optimization",
    desc: "We don't just drive clicks; we optimize every touchpoint to ensure visitors turn into paying customers.",
    icon: <MousePointerClick className="text-accent" size={24} />
  },
  {
    title: "A/B Testing",
    desc: "Continuous testing of headlines, visuals, and CTAs to find the high-performing combinations for your brand.",
    icon: <Zap className="text-accent" size={24} />
  },
  {
    title: "Detailed Reporting",
    desc: "Weekly insights into your ad spend, performance metrics, and actionable recommendations for growth.",
    icon: <BarChart4 className="text-rose-500" size={24} />
  },
  {
    title: "High ROI Focus",
    desc: "Every campaign is designed with one goal: maximizing your return on investment through smarter spending.",
    icon: <DollarSign className="text-amber-500" size={24} />
  }
];

const KriscelFeatures = [
  {
    title: "Result-Driven Paid Ads Management",
    desc: "Get campaigns optimized for reach, conversions, and ROI. From Google Ads to social media, we deliver measurable leads."
  },
  {
    title: "Intelligent Audience Targeting",
    desc: "Pinpoint your perfect customer based on behavior, interests, and demographics to ensure your ads are seen by those who matter."
  },
  {
    title: "Real-Time Campaign Optimization",
    desc: "We actively monitor and adjust your campaigns to capitalize on trends and eliminate wasted spend instantly."
  },
  {
    title: "High-Converting Ad Creative",
    desc: "Our team designs visuals and writes copy that captures attention and compels your audience to take action."
  },
  {
    title: "Transparent Performance Dashboards",
    desc: "Stay informed with clear visibility into your ad spend and campaign results through our custom reporting tools."
  },
  {
    title: "Scalable Growth Framework",
    desc: "Whether you're starting small or ready to scale, our strategies adapt to your business needs and growth trajectory."
  }
];

export default function PaidAdsManagement() {
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
  }, [mounted]);

  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <main ref={containerRef} className="bg-white text-slate-900 pb-10 overflow-x-hidden selection:bg-accent selection:text-white">
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-accent/80 rounded-full blur-[100px] opacity-70"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[50vh] flex flex-col justify-center pt-28 pb-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <Link href="/solutions" className="hero-element inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-accent hover:text-brand-navy transition-colors mb-6 uppercase group bg-accent px-3 py-1.5 rounded-full">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Back to Solutions
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="col-span-1 lg:col-span-8 flex flex-col items-start text-left">
              <div className="hero-element inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                Performance Marketing
              </div>
              <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-[0.95] uppercase mb-4">
                Paid Ads Management Services in Delhi | Drive Targeted Leads
              </h1>
              <p className="hero-element text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-6">
                Maximize ROI with data-driven Paid Ads Management in Delhi NCR. From Pay-per-click to targeted display campaigns, we deliver precision marketing.
              </p>
              
              <div className="hero-element mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Ad Networks</p>
                <LogoBadges type="ads" />
              </div>
              
              <div className="hero-element flex flex-wrap gap-3">
                <Link href="/contact" className="group px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2">
                  Drive Targeted Leads
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#what-we-do" className="px-6 py-2.5 rounded-full font-black text-xs text-slate-950 hover:bg-slate-50 transition-colors border border-slate-200">
                  See Our Results
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-4 relative hero-element">
               <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] overflow-hidden group">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/10 mix-blend-overlay z-10" />
                    <img 
                      src="/images/paid-ads-hero.png" 
                      alt="Paid Ads Management"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Subtle Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl shadow-xl animate-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg">
                        <Target size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">Live ROI</p>
                        <p className="text-[12px] font-bold text-slate-800">Campaign Scaling</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section id="what-we-do" className="relative z-10 py-10 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-left mb-8 max-w-xl reveal-item">
            <h2 className="text-xs font-black text-accent tracking-[0.2em] uppercase mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-[0.95]">
              Total Command Over <br className="hidden md:block"/> Your Ad Spend.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal-grid">
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent transition-all">
                  <Megaphone className="text-accent" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Multi-Platform Strategy</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">From Google Ads to Social Media campaigns, we create unified strategies optimized for conversions and growth.</p>
            </div>
            
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent transition-all">
                  <MousePointerClick className="text-accent" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Intelligent Tracking</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Pinpoint exactly where your leads come from. We monitor and optimize your campaigns to eliminate wasted spend instantly.</p>
            </div>

            <div className="reveal-card col-span-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all border border-white/5">
                  <BarChart4 className="text-white" size={20} />
               </div>
               <h4 className="text-base font-bold text-white mb-2">Transparent ROI</h4>
               <p className="text-slate-300 text-sm font-medium leading-relaxed">Get detailed dashboards with live metrics, ensuring complete visibility into your project's progress and profitability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL ROTATING CARDS - BENEFITS */}
      <section className="relative bg-slate-950 py-10 flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full mb-6 relative z-10 text-center md:text-left reveal-item">
           <h2 className="text-xs font-black text-accent tracking-[0.2em] uppercase mb-2">Performance Foundations</h2>
           <p className="text-2xl md:text-4xl font-black text-white tracking-tight max-w-xl leading-[1.05]">
             Maximizing every rupee of your marketing budget.
           </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal-grid">
             {benefits.map((benefit, idx) => (
                <div key={idx} className="reveal-card w-full h-[240px] bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:bg-slate-800 hover:border-slate-700 transition-all shadow-md">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 shadow-sm">
                     {benefit.icon}
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

      {/* MID PAGE CTA */}
      <section className="relative z-10 py-12 bg-accent reveal-item">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase leading-[1.05] mb-4">
              Stop Guessing, Start <br className="hidden md:block"/> Scale Your Business
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto mb-6 leading-relaxed">
              Every financial mistake in advertising is losing you money. Gain accuracy, speed, and real-time insights with Kriscel Tech.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-3 bg-white text-accent rounded-full font-black text-xs shadow-md hover:scale-105 transition-all items-center gap-2 uppercase tracking-widest">
              Get Real Time Insights
              <ArrowRight size={14} />
            </Link>
         </div>
      </section>

      {/* WHY CHOOSE KRISCEL TECH */}
      <section className="relative z-10 py-10 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10 reveal-item">
               <h2 className="text-xs font-black text-accent tracking-[0.2em] uppercase mb-2">The Kriscel Advantage</h2>
               <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[0.95]">
                  Why Choose Kriscel Tech?
               </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 reveal-grid">
               {KriscelFeatures.map((feature, idx) => (
                  <div key={idx} className="reveal-card flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                        <CheckCircle2 className="text-accent" size={16} />
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

      {/* FAQS SECTION */}
      <section className="relative z-10 py-10 bg-slate-50 border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8 reveal-item">
               <h2 className="text-xs font-black text-accent tracking-[0.2em] uppercase mb-2">Knowledge Base</h2>
               <h3 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight mb-4">
                  Frequently Asked Questions
               </h3>
               <p className="text-slate-500 text-sm font-medium">Insights and strategies for professional ad management.</p>
            </div>

            <div className="space-y-3 reveal-item">
               {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-300 shadow-sm">
                     <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full px-5 py-4 text-left flex justify-between items-center bg-transparent"
                     >
                        <span className="font-bold text-slate-900 pr-6 text-xs md:text-sm">{faq.question}</span>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === idx ? 'bg-accent text-accent' : 'bg-slate-50 text-slate-400'}`}>
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

      {/* FINAL GLOBAL CTA */}
      <section className="mt-12 flex flex-col items-center text-center px-6 relative overflow-hidden pb-8 reveal-item">
         <div className="text-slate-100 text-[10vw] font-black tracking-tighter leading-[0.7] select-none opacity-50">ADS</div>
         <div className="mt-[-2vw] relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-[0.9]">Ready to Maximize <br /> Your ROI?</h2>
            <Link href="/contact" className="group px-8 py-3 bg-slate-950 text-white rounded-full font-black text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2">
               Get Started Today
               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </main>
  );
}
