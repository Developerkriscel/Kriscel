"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Search, TrendingUp, Globe, 
  BarChart3, MousePointer2, Cpu, LineChart, ShieldCheck, 
  Settings, Zap, ArrowLeft, Plus, Minus, SearchCode,
  ShoppingCart, PackageCheck, Boxes, Megaphone, Presentation, ListChecks
} from 'lucide-react';
import LogoBadges from '@/components/LogoBadges';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What are e-commerce services?",
    answer: "E-commerce services are solutions that help businesses sell products or services online. These services include online store development, marketplace integration, product listing management, payment gateway setup, and digital marketing for e-commerce platforms."
  },
  {
    question: "Do you handle end-to-end e-commerce management?",
    answer: "Yes — from account creation to catalog uploads, order management, ads, and growth strategy, we offer complete end-to-end e-commerce management."
  },
  {
    question: "What do e-commerce solutions typically include?",
    answer: "E-commerce solutions typically include online store development, marketplace account setup, product catalog management, payment integration, order management, advertising campaigns, and performance analytics."
  },
  {
    question: "How do e-commerce services improve sales?",
    answer: "E-commerce services improve sales by optimizing product listings, improving website performance, targeting potential buyers through marketing campaigns, and enhancing the online shopping experience."
  },
  {
    question: "Which platforms do you manage?",
    answer: "Common platforms used in e-commerce services include Amazon, Flipkart, Shopify, WooCommerce, and other online marketplaces or website-based stores where businesses sell products online."
  },
  {
    question: "Can e-commerce services help small businesses?",
    answer: "Yes, e-commerce services allow small businesses to reach customers online, promote products through digital platforms, and compete with larger brands without requiring a physical retail presence."
  },
  {
    question: "What makes a good e-commerce website?",
    answer: "A good e-commerce website should include secure payment options, mobile-friendly design, fast loading speed, easy navigation, product search functionality, and a smooth checkout process."
  },
  {
    question: "What makes the best e-commerce service provider?",
    answer: "The best e-commerce service provider offers end-to-end solutions including store development, marketplace management, digital marketing, and ongoing optimization to help businesses grow their online sales."
  },
  {
    question: "How should I choose an e-commerce service partner?",
    answer: "Businesses should choose an e-commerce service provider based on experience, expertise in online marketplaces, technical capabilities, marketing strategies, and proven results in managing e-commerce operations."
  }
];

const benefits = [
  {
    title: "Account Audit & Strategy",
    desc: "Current performance, listings, ads, pricing, ranking & competition deep analysis + actionable growth strategy.",
    icon: <Search className="text-accent" size={24} />
  },
  {
    title: "Listing & Optimization",
    desc: "SEO-based titles, bullet points, descriptions, keywords, A+ content, and high-quality cataloging.",
    icon: <ListChecks className="text-emerald-500" size={24} />
  },
  {
    title: "Order Management",
    desc: "Stock monitoring, order handling, dispatch coordination, and rapid out-of-stock prevention.",
    icon: <PackageCheck className="text-accent" size={24} />
  },
  {
    title: "Ads Management (PPC)",
    desc: "Amazon/Flipkart ads setup, campaign optimization, keyword bidding, ACoS control & daily sales boost.",
    icon: <TrendingUp className="text-accent" size={24} />
  },
  {
    title: "Pricing & Promotions",
    desc: "Lightning Deals, coupons, targeted offers, pricing strategies & buy box optimization to scale fast.",
    icon: <Globe className="text-amber-500" size={24} />
  },
  {
    title: "Daily Support & Resolution",
    desc: "Seller support issues, listing deactivation fixes, platform compliance, claims & operational support.",
    icon: <ShieldCheck className="text-rose-500" size={24} />
  }
];

const KriscelFeatures = [
  {
    title: "Results-Driven Strategy",
    desc: "We build data-backed e-commerce strategies that deliver real outcomes — higher sales, better visibility, and scalable marketplace conversions."
  },
  {
    title: "Customized Store Solutions",
    desc: "Every business is unique, so we create tailored e-commerce solutions that match your exact goals, product category, and platform requirements."
  },
  {
    title: "Multi-Platform Experience",
    desc: "Our experts bring years of operational experience managing high-traffic stores across Amazon, Flipkart, Meesho, Shopify, and more."
  },
  {
    title: "Transparent Reporting & Analytics",
    desc: "Stay fully updated with clear reports, performance insights, listing analytics, and data-backed recommendations to track store dominance."
  },
  {
    title: "Dedicated Account Support",
    desc: "Our dedicated managers ensure smooth day-to-day operations, rapid issue resolution, and continuous technical optimization for zero downtime."
  },
  {
    title: "Scalable Growth Framework",
    desc: "Whether you’re a new seller starting out or an established brand, our scalable strategies help your business capture new revenue milestones rapidly."
  }
];

export default function EcommerceServices() {
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
                Revenue Growth
              </div>
              <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-[0.95] uppercase mb-4">
                E-Commerce <br className="hidden md:block" />
                Management <span className="text-accent italic font-serif leading-normal normal-case mt-1 text-3xl md:text-4xl lg:text-5xl block">Solutions.</span>
              </h1>
              <p className="hero-element text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-6">
                We build powerful, fast, and conversion-focused online stores designed to attract customers, deliver a seamless shopping experience, and consistently boost online sales.
              </p>

              <div className="hero-element mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Marketplace Domination</p>
                <LogoBadges type="all" />
              </div>
              
              <div className="hero-element flex flex-wrap gap-3">
                <Link href="/contact" className="group px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2">
                  Fix My Online Store
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#what-we-do" className="px-6 py-2.5 rounded-full font-black text-xs text-slate-950 hover:bg-slate-50 transition-colors border border-slate-200">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-4 relative hero-element">
               <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] overflow-hidden group">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/10 mix-blend-overlay z-10" />
                    <img 
                      src="/images/ecommerce-hero.png" 
                      alt="E-commerce Services"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Subtle Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl shadow-xl animate-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg">
                        <ShoppingCart size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">Order Volume</p>
                        <p className="text-[12px] font-bold text-slate-800">Sales Optimized</p>
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
              Seamless Shopping. <br className="hidden md:block"/> Guaranteed Transactions.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 reveal-grid">
            <Link href="/account-creation" className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent transition-all">
                  <Presentation className="text-accent" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2 group-hover:text-accent transition-colors">Account Creation</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Streamline the setup on platforms, ensuring accurate brand consistency and fast onboarding.</p>
            </Link>
            
            <Link href="/account-management" className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-50 transition-all">
                  <ShieldCheck className="text-emerald-600" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2 group-hover:text-emerald-600 transition-colors">Account Management</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Continuous technical monitoring, tracking, and timely seller lifecycle updates to ensure massive scaling.</p>
            </Link>

            <Link href="/catalog-management" className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-50 transition-all">
                  <Boxes className="text-amber-600" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2 group-hover:text-amber-600 transition-colors">Catalog Management</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Organize, update, and manage catalogs across high-traffic seller platforms utilizing A+ structure.</p>
            </Link>

            <Link href="/ads-campaign-management" className="reveal-card col-span-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all border border-white/5">
                  <Megaphone className="text-white" size={20} />
               </div>
               <h4 className="text-base font-bold text-white mb-2 group-hover:text-accent transition-colors">ADS Campaign Management</h4>
               <p className="text-slate-300 text-sm font-medium leading-relaxed">Execute and optimize PPC advertising campaigns to drive targeted purchase intent directly safely.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* GRID BENEFITS */}
      <section className="relative bg-slate-950 py-10 flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full mb-6 relative z-10 text-center md:text-left reveal-item">
           <h2 className="text-xs font-black text-accent tracking-[0.2em] uppercase mb-2">Our Process</h2>
           <p className="text-2xl md:text-4xl font-black text-white tracking-tight max-w-xl leading-[1.05]">
             How we engineer and grow your scalable E-commerce dominance.
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
              Getting Traffic to Your Store But No Sales?
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto mb-6 leading-relaxed">
              We optimize your e-commerce store, streamline the user experience, and implement powerful conversion strategies to turn visitors into active paying customers.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-3 bg-white text-accent rounded-full font-black text-xs shadow-md hover:scale-105 transition-all items-center gap-2 uppercase tracking-widest">
              Consult E-commerce Experts
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
               <p className="text-slate-500 text-sm font-medium">Everything you need to know about dominating online marketplaces.</p>
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
         <div className="text-slate-100 text-[10vw] font-black tracking-tighter leading-[0.7] select-none opacity-50">ECOMMERCE</div>
         <div className="mt-[-2vw] relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-[0.9]">Ready to <br /> Multiply Sales?</h2>
            <Link href="/contact" className="group px-8 py-3 bg-slate-950 text-white rounded-full font-black text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2">
               Optimize My Growth
               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </main>
  );
}
