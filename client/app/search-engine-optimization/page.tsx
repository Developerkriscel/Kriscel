"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Search, TrendingUp, Globe, 
  BarChart3, MousePointer2, Cpu, LineChart, ShieldCheck, 
  Settings, Zap, ArrowLeft, Plus, Minus, SearchCode 
} from 'lucide-react';
import LogoBadges from '@/components/LogoBadges';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What is Search Engine Optimization (SEO)?",
    answer: "Search engine optimization (SEO) is the process of improving a website’s visibility in search engine results. It involves optimizing website content, technical structure, and backlinks so that search engines can better understand the website and rank it higher for relevant keywords."
  },
  {
    question: "Why is SEO important for my business?",
    answer: "SEO is important because it helps businesses increase their online visibility, attract targeted website traffic, and generate leads organically. A well-optimized website can rank higher in search results and bring long-term business growth without relying only on paid ads."
  },
  {
    question: "What are the different types of SEO?",
    answer: "The main types of SEO include on-page SEO, off-page SEO, and technical SEO. On-page SEO focuses on optimizing content and keywords, off-page SEO focuses on backlinks and authority building, while technical SEO improves website performance and crawlability."
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO usually takes around three to six months to start showing noticeable improvements in rankings and traffic. The timeline depends on factors such as website competition, content quality, backlink profile, and technical optimization."
  },
  {
    question: "What are the key benefits of Search Engine Optimization?",
    answer: "SEO helps websites increase organic traffic, improve search engine rankings, enhance brand credibility, and generate more leads or sales. It also provides long-term online visibility compared to short-term paid advertising campaigns."
  },
  {
    question: "What services are included in professional SEO?",
    answer: "SEO services typically include keyword research, website audit, on-page optimization, technical SEO improvements, link building, content optimization, and performance tracking through analytics and reporting."
  },
  {
    question: "Can SEO help local businesses grow?",
    answer: "Yes, SEO can help local businesses grow by optimizing their websites for local searches. Local SEO strategies such as Google Business Profile optimization, location-based keywords, and local citations help businesses appear in nearby search results."
  },
  {
    question: "Is SEO beneficial for small businesses?",
    answer: "Yes, SEO is highly beneficial for small businesses because it helps them compete online, attract local customers, and increase website visibility without requiring large advertising budgets."
  },
  {
    question: "Which is the best SEO company in India?",
    answer: "The best SEO company for businesses in India is one that provides comprehensive SEO services including keyword research, technical optimization, content strategy, and link building while focusing on long-term search engine ranking improvements."
  },
  {
    question: "How should I choose an SEO service provider?",
    answer: "Businesses should choose an SEO service provider based on experience, proven results, transparency in reporting, ethical SEO practices, and customized strategies tailored to their industry and goals."
  }
];

const benefits = [
  {
    title: "On-Page SEO",
    desc: "Individual page optimization to improve search engine rankings and attract target visitors.",
    icon: <Globe className="text-accent" size={24} />
  },
  {
    title: "Technical SEO",
    desc: "Ensures search engines can properly crawl and index your website with optimal site speed and mobile-friendliness.",
    icon: <Cpu className="text-emerald-500" size={24} />
  },
  {
    title: "Off-Page SEO",
    desc: "Build your website’s authority through external signals like high-quality backlinks and brand mentions.",
    icon: <TrendingUp className="text-accent" size={24} />
  },
  {
    title: "Local SEO",
    desc: "Appear in location-based search results and attract customers directly from your local area.",
    icon: <SearchCode className="text-accent" size={24} />
  },
  {
    title: "Keyword Optimization",
    desc: "Strategic targeting of high-intent keywords to convert searchers into loyal customers.",
    icon: <MousePointer2 className="text-rose-500" size={24} />
  },
  {
    title: "Data Insights",
    desc: "Drive decisions based on comprehensive analytics and performance tracking for continuous ROI.",
    icon: <BarChart3 className="text-amber-500" size={24} />
  }
];

const KriscelFeatures = [
  {
    title: "Real-Time SEO Performance Tracking",
    desc: "Stay ahead of the competition with live dashboards, automated keyword tracking, and instant performance alerts."
  },
  {
    title: "Keyword & Content Strategy Management",
    desc: "Manage your SEO campaigns effortlessly with intelligent keyword targeting, content optimization, and competitor insights."
  },
  {
    title: "Technical & On-Page Optimization",
    desc: "We handle site speed, mobile optimization, metadata, and link structure for peak website performance."
  },
  {
    title: "AI-Powered SEO Scheduling",
    desc: "Leverage AI-driven analytics to plan content updates, backlink campaigns, and SEO audits at the right time."
  },
  {
    title: "Performance Analytics & Reporting",
    desc: "Make data-driven decisions with automated SEO reports, real-time analytics, and customizable KPIs to track organic growth."
  },
  {
    title: "Scalable Integrated Solutions",
    desc: "Kriscel Tech integrates seamlessly with Google Analytics, Search Console, SEMrush, Ahrefs, HubSpot, and more."
  }
];

export default function SearchEngineOptimization() {
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
                ROI Focused SEO
              </div>
              <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-[0.95] uppercase mb-4">
                Top SEO Services Provider in Delhi NCR | Trusted Digital Experts
              </h1>
              <p className="hero-element text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-6">
                Attract high-quality organic traffic and dominate search results with our professional SEO services. Improve rankings, drive targeted leads, and stay ahead of competitors.
              </p>

              <div className="hero-element mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Ranking Synergy</p>
                <LogoBadges type="ads" />
              </div>
              
              <div className="hero-element flex flex-wrap gap-3">
                <Link href="/contact" className="group px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2">
                  Get Free SEO Audit
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#what-we-do" className="px-6 py-2.5 rounded-full font-black text-xs text-slate-950 hover:bg-slate-50 transition-colors border border-slate-200">
                  Explore Strategies
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-4 relative hero-element">
               <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] overflow-hidden group">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/10 mix-blend-overlay z-10" />
                    <img 
                      src="/images/seo-hero.png" 
                      alt="Search Engine Optimization"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Subtle Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl shadow-xl animate-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg">
                        <Search size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">Live Rankings</p>
                        <p className="text-[12px] font-bold text-slate-800">Traffic Peak</p>
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
              Dominate Your <br className="hidden md:block"/> Search Category.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal-grid">
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent transition-all">
                  <TrendingUp className="text-accent" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Keyword & Content Strategy</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Manage your SEO campaigns with intelligent keyword targeting and content optimization for maximum reach.</p>
            </div>
            
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-50 transition-all">
                  <Settings className="text-emerald-600" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Technical & On-Page Optimization</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">We handle every technical detail - from site speed to mobile optimization — ensuring your website performs for users and bots.</p>
            </div>

            <div className="reveal-card col-span-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all border border-white/5">
                  <LineChart className="text-white" size={20} />
               </div>
               <h4 className="text-base font-bold text-white mb-2">Performance Analytics & Reporting</h4>
               <p className="text-slate-300 text-sm font-medium leading-relaxed">Make data-driven decisions with automated SEO reports and real-time analytics to track organic growth and ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GRID BENEFITS */}
      <section className="relative bg-slate-950 py-10 flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full mb-6 relative z-10 text-center md:text-left reveal-item">
           <h2 className="text-xs font-black text-accent tracking-[0.2em] uppercase mb-2">SEO Foundations</h2>
           <p className="text-2xl md:text-4xl font-black text-white tracking-tight max-w-xl leading-[1.05]">
             Comprehensive strategies to scale your organic presence.
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
              Your Competitors Are Ranking — Are You?
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto mb-6 leading-relaxed">
              If your website isn’t on the first page of Google, your competitors are capturing your customers. Let's fix that today.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-3 bg-white text-accent rounded-full font-black text-xs shadow-md hover:scale-105 transition-all items-center gap-2 uppercase tracking-widest">
              Get Your Free SEO Audit
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
                  Why Partner with Kriscel?
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
               <p className="text-slate-500 text-sm font-medium">Everything you need to know about our SEO strategies and results.</p>
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
         <div className="text-slate-100 text-[10vw] font-black tracking-tighter leading-[0.7] select-none opacity-50">RANKING</div>
         <div className="mt-[-2vw] relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-[0.9]">Ready to Claim <br /> the First Page?</h2>
            <Link href="/contact" className="group px-8 py-3 bg-slate-950 text-white rounded-full font-black text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2">
               Analyze My Website
               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </main>
  );
}
