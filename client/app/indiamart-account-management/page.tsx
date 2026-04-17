"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ShoppingBag, Store, TrendingUp, 
  BarChart, Search, Zap, ArrowLeft, Plus, Minus, 
  ShieldCheck, Globe, Rocket, MessageCircle
} from 'lucide-react';
import LogoBadges from '@/components/LogoBadges';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What is IndiaMART account management?",
    answer: "IndiaMART account management is a professional service that helps businesses set up, optimize, and manage their IndiaMART seller profiles. It involves product listing, catalog optimization, lead management, and performance tracking to maximize sales and visibility."
  },
  {
    question: "Why should I use professional IndiaMART management?",
    answer: "Professional management ensures your products rank higher in IndiaMART search results, increases your TrustSeal score, and helps you respond to buy leads more effectively, ultimately leading to higher conversion rates."
  },
  {
    question: "How do you improve my product visibility on IndiaMART?",
    answer: "We optimize your product titles, descriptions, and keywords with high-intent search terms. We also ensure your catalog is complete with high-quality images and relevant technical specifications to attract more buyers."
  },
  {
    question: "Can you help me manage Buy Leads?",
    answer: "Yes, our service includes active monitoring and filtering of Buy Leads to ensure you focus on the most relevant and high-potential inquiries, saving you time and increasing your sales efficiency."
  },
  {
    question: "What are the key benefits of this service?",
    answer: "Key benefits include increased product reach, higher lead generation, improved brand credibility on IndiaMART, professional catalog presentation, and expert support for account growth."
  },
  {
    question: "How long does it take to see an increase in sales?",
    answer: "While results can vary, most businesses see improved visibility and lead flow within the first 2-4 weeks of professional account optimization and active management."
  },
  {
    question: "Do you handle product uploading?",
    answer: "Yes, we handle the complete process of uploading your products, ensuring each listing is optimized with the correct category, attributes, and high-quality visuals for maximum impact."
  },
  {
    question: "Is IndiaMART management suitable for all industries?",
    answer: "IndiaMART is exceptionally effective for B2B industries, manufacturing, wholesale, and industrial supplies. Our strategies are tailored to the specific search behavior of buyers in your industry."
  },
  {
    question: "Which is the best IndiaMART account management company?",
    answer: "The best provider is one that offers end-to-end support, from cataloging to lead management, while focusing on measurable growth in visibility and business inquiries."
  },
  {
    question: "How should I choose a management partner?",
    answer: "Choose a partner with a deep understanding of the IndiaMART ecosystem, a proven track record of growing seller accounts, and a focus on both technical optimization and lead quality."
  }
];

const benefits = [
  {
    title: "Catalog Optimization",
    desc: "Professional product listing with high-quality images and keyword-optimized descriptions to attract buyers.",
    icon: <ShoppingBag className="text-red-500" size={24} />
  },
  {
    title: "Lead Management",
    desc: "Active monitoring and sorting of buy leads to ensure you connect with high-potential customers instantly.",
    icon: <MessageCircle className="text-accent" size={24} />
  },
  {
    title: "Visibility Boost",
    desc: "Strategic keyword targeting to ensure your products appear at the top of IndiaMART search results.",
    icon: <Search className="text-emerald-500" size={24} />
  },
  {
    title: "TrustSeal Building",
    desc: "Assistance in completing profile requirements and building a trustworthy image to attract serious buyers.",
    icon: <ShieldCheck className="text-amber-500" size={24} />
  },
  {
    title: "Performance Reports",
    desc: "Regular updates on lead flow, product views, and account growth metrics to track your success.",
    icon: <BarChart className="text-rose-500" size={24} />
  },
  {
    title: "Competitive Analysis",
    desc: "Insights into competitor pricing and listings to ensure your business stays ahead in your category.",
    icon: <Globe className="text-accent" size={24} />
  }
];

const KriscelFeatures = [
  {
    title: "Expert IndiaMART Listing Management",
    desc: "We ensure your products are listed in exactly the right categories with optimized technical data for search."
  },
  {
    title: "Buy Lead Filtering & Alerts",
    desc: "Receive instant notifications for relevant leads while we filter out low-potential inquiries for you."
  },
  {
    title: "Professional Catalog Presentation",
    desc: "Our team ensures your digital storefront looks professional, high-quality, and ready for business."
  },
  {
    title: "Strategy for Account Growth",
    desc: "We provide complete support to grow your account visibility and reach new geographic territories."
  },
  {
    title: "Data-Driven Topic Research",
    desc: "We use advanced tools to identify the exact keywords B2B buyers are using to find your products."
  },
  {
    title: "Dedicated Account Specialists",
    desc: "Our experts actively manage your IndiaMART presence, ensuring consistent performance and timely updates."
  }
];

export default function IndiamartAccountManagement() {
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
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-red-50 rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-accent/80 rounded-full blur-[100px] opacity-70"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[50vh] flex flex-col justify-center pt-28 pb-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <Link href="/solutions" className="hero-element inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-red-600 hover:text-red-800 transition-colors mb-6 uppercase group bg-red-50 px-3 py-1.5 rounded-full">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Back to Solutions
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="col-span-1 lg:col-span-8 flex flex-col items-start text-left">
              <div className="hero-element inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                B2B Growth Experts
              </div>
              <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-[0.95] uppercase mb-4">
                Indiamart Account Management Service in Delhi | Kriscel tech
              </h1>
              <p className="hero-element text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-6">
                Dominate the IndiaMART marketplace and boost your B2B sales. Our specialized account management helps you rank higher, attract quality leads, and build professional storefronts.
              </p>

              <div className="hero-element mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Merchant Synergy</p>
                <LogoBadges type="marketplace" />
              </div>
              
              <div className="hero-element flex flex-wrap gap-3">
                <Link href="/contact" className="group px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2">
                  Boost My Sales
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-accent/10 mix-blend-overlay z-10" />
                    <img 
                      src="/images/indiamart-hero.png" 
                      alt="IndiaMart & JustDial Marketing"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Subtle Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl shadow-xl animate-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                        <Store size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">Live Status</p>
                        <p className="text-[12px] font-bold text-slate-800">Top-Tier Merchant</p>
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
            <h2 className="text-xs font-black text-red-600 tracking-[0.2em] uppercase mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-[0.95]">
              Total Command Over <br className="hidden md:block"/> Your IndiaMART Growth.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal-grid">
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-red-50 transition-all">
                  <TrendingUp className="text-red-600" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Visibility Optimization</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Increase your visibility in Delhi and across India through professional account growth strategies tailored for IndiaMART.</p>
            </div>
            
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent transition-all">
                  <Zap className="text-accent" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Buy Lead Conversion</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Maximize your lead conversion with professional follow-up structures and strategic filtering of inquiries.</p>
            </div>

            <div className="reveal-card col-span-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all border border-white/5">
                  <Rocket className="text-white" size={20} />
               </div>
               <h4 className="text-base font-bold text-white mb-2">Scalable Solutions</h4>
               <p className="text-slate-300 text-sm font-medium leading-relaxed">Whether a growing startup or a recognized industrial brand, we help you scale your B2B presence with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL ROTATING CARDS - BENEFITS */}
      <section className="relative bg-slate-950 py-10 flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full mb-6 relative z-10 text-center md:text-left reveal-item">
           <h2 className="text-xs font-black text-red-400 tracking-[0.2em] uppercase mb-2">Growth Foundations</h2>
           <p className="text-2xl md:text-4xl font-black text-white tracking-tight max-w-xl leading-[1.05]">
             Value-driven strategies for high-volume B2B marketplace.
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
              Your Buyers are on IndiaMART <br className="hidden md:block"/> — Will They Find You?
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto mb-6 leading-relaxed">
              In the competitive B2B market, visibility is everything. Turn your profile into a leads-generating machine today.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-3 bg-white text-accent rounded-full font-black text-xs shadow-md hover:scale-105 transition-all items-center gap-2 uppercase tracking-widest">
              Grow My Account Now
              <ArrowRight size={14} />
            </Link>
         </div>
      </section>

      {/* WHY CHOOSE KRISCEL TECH */}
      <section className="relative z-10 py-10 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10 reveal-item">
               <h2 className="text-xs font-black text-red-600 tracking-[0.2em] uppercase mb-2">The Kriscel Advantage</h2>
               <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[0.95]">
                  Expert IndiaMART Strategy.
               </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 reveal-grid">
               {KriscelFeatures.map((feature, idx) => (
                  <div key={idx} className="reveal-card flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                        <CheckCircle2 className="text-red-600" size={16} />
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
               <h2 className="text-xs font-black text-red-600 tracking-[0.2em] uppercase mb-2">Knowledge Base</h2>
               <h3 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight mb-4">
                  Frequently Asked Questions
               </h3>
               <p className="text-slate-500 text-sm font-medium">Insights and strategies for professional IndiaMART management.</p>
            </div>

            <div className="space-y-3 reveal-item">
               {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-300 shadow-sm">
                     <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full px-5 py-4 text-left flex justify-between items-center bg-transparent"
                     >
                        <span className="font-bold text-slate-900 pr-6 text-xs md:text-sm">{faq.question}</span>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === idx ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-400'}`}>
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
         <div className="text-slate-100 text-[10vw] font-black tracking-tighter leading-[0.7] select-none opacity-50">MARKET</div>
         <div className="mt-[-2vw] relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-[0.9]">Ready to Redefine <br /> Your B2B Reach?</h2>
            <Link href="/contact" className="group px-8 py-3 bg-slate-950 text-white rounded-full font-black text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2">
               Grow My Account Today
               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </main>
  );
}
