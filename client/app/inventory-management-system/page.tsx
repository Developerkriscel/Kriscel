"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  BarChart3,
  Globe,
  TrendingUp,
  Box,
  BrainCircuit,
  Settings,
  Database,
  Users,
  Activity,
  Plus,
  Minus,
  ArrowLeft,
  Server,
  PackageCheck,
  PackageSearch,
  ShoppingCart,
  Zap,
  ShieldCheck,
  RefreshCw,
  Wallet,
  Smartphone,
  Package
} from 'lucide-react';
import LogoBadges from '@/components/LogoBadges';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What is an Inventory Management System (IMS)?",
    answer: "An Inventory Management System (IMS) is a software solution that tracks inventory levels, orders, sales, and deliveries. It automates the process of managing stock across multiple channels, preventing overstocking and stockouts while providing real-time data insights."
  },
  {
    question: "Why is an inventory management system important for businesses?",
    answer: "It eliminates manual errors, optimizes cash flow, and ensures that you always have the right products available. An IMS turns chaotic, scattered data into a centralized dashboard, allowing you to scale efficiently and make data-driven decisions."
  },
  {
    question: "Can it manage inventory across multiple sales channels?",
    answer: "Yes. Modern inventory management systems synchronize stock levels seamlessly across offline stores, Amazon, Flipkart, Shopify, your own website, and other distribution channels to prevent overselling."
  },
  {
    question: "How does inventory management software reduce business costs?",
    answer: "By minimizing dead stock, preventing expensive emergency restocks, optimizing storage space, and reducing the labor costs associated with manual tracking and data entry."
  },
  {
    question: "What features should a good inventory management system have?",
    answer: "Key features include real-time stock tracking, automated reordering, multi-channel synchronization, comprehensive reporting, barcode scanning integration, and seamless API connectivity with your existing ERP or CRM."
  },
  {
    question: "Which is the best inventory management software for businesses in India?",
    answer: "The best software depends on your specific needs, but Kriscel Tech offers a highly customizable, robust, and scalable IMS tailored specifically for Indian businesses, solving complex multi-warehouse and GST billing challenges."
  },
  {
    question: "Which companies provide inventory management software in India?",
    answer: "Many IT and software companies provide IMS solutions, including ZoHo, Tally, and custom software developers. Kriscel Tech stands out by offering fully bespoke, enterprise-level solutions without the massive ongoing licensing overheads of generic platforms."
  },
  {
    question: "How do I choose the best inventory management software for my business?",
    answer: "Look for software that seamlessly integrates with your existing workflows, scales with your growth, offers robust real-time analytics, and provides excellent local technical support and training."
  },
  {
    question: "Who should use an inventory management system?",
    answer: "Any business that handles physical goods needs an IMS. This includes manufacturers, wholesalers, distributors, retail chains, e-commerce brands, and dropshippers who want to streamline their supply chain operations."
  },
  {
    question: "How does an inventory management system improve warehouse efficiency?",
    answer: "It optimizes picking routes, automates low-stock alerts, supports barcode/QR scanning for instant audits, and provides a clear map of where every single SKU is located within your facility."
  }
];

const benefits = [
  {
    title: "Real-Time Stock Tracking",
    desc: "Get instant visibility into your inventory levels, movements, and stock status across all locations.",
    icon: <Activity className="text-accent" size={24} />
  },
  {
    title: "Reduced Stockouts",
    desc: "Maintain the right balance of inventory to meet customer demand without excess storage costs.",
    icon: <BarChart3 className="text-emerald-500" size={24} />
  },
  {
    title: "Automated Reordering",
    desc: "Set smart reorder points and let the system automatically generate purchase orders when stock runs low.",
    icon: <RefreshCw className="text-accent" size={24} />
  },
  {
    title: "Multi-Channel Sync",
    desc: "Easily manage inventory across multiple sales channels like Amazon, Flipkart, Shopify, and your own website.",
    icon: <Globe className="text-accent" size={24} />
  },
  {
    title: "Enhanced Accuracy",
    desc: "Eliminate manual errors in stock updates and reporting with automated tracking and barcode integration.",
    icon: <ShieldCheck className="text-rose-500" size={24} />
  },
  {
    title: "Cash Flow Management",
    desc: "Optimize inventory investment by reducing dead stock and improving turnover rates.",
    icon: <Wallet className="text-amber-500" size={24} />
  }
];

const KriscelFeatures = [
  {
    title: "Real-Time Production Tracking",
    desc: "Stay ahead of the game with live dashboards, automated alerts, and progress tracking for every production batch."
  },
  {
    title: "Inventory & Raw Material Management",
    desc: "Manage inventory effortlessly with automatic stock updates, low-stock alerts, and supplier coordination."
  },
  {
    title: "Workforce & Task Management",
    desc: "Optimize labor allocation with smart workforce scheduling, task prioritization, and performance tracking."
  },
  {
    title: "Intelligent Production Scheduling",
    desc: "Reduce downtime with AI-driven scheduling that predicts bottlenecks and optimizes production cycles."
  },
  {
    title: "Performance Analytics & Reporting",
    desc: "Make data-driven decisions with automated reports, customizable KPIs, and real-time insights."
  },
  {
    title: "Seamless Integration with Existing Systems",
    desc: "Our IMS integrates smoothly with: ERP Systems (SAP, Microsoft Dynamics), CRM Platforms (HubSpot), Google Sheets & Cloud Solutions."
  }
];

export default function InventoryManagementSystem() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    setMounted(true);
    
    // Smooth scroll for anchor tags
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetElement = e.currentTarget as HTMLAnchorElement;
        const target = document.querySelector(targetElement.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      // Hero Animations (Loads once on mount)
      gsap.fromTo(".hero-element", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: "power2.out" }
      );

      // Section Titles and Generic Elements (Animate IN and OUT securely)
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
              start: "top 95%",      // Trigger when element's top is 95% down screen
              end: "bottom 5%",      // Untrigger when element's bottom is 5% from top
              toggleActions: "play reverse play reverse", // Animate IN and OUT both directions!
            }
          }
        );
      });

      // Grid Card Staggers (Animate IN and OUT)
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
      
      {/* Dynamic Background Noise/Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-accent/80 rounded-full blur-[100px] opacity-70"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[50vh] flex flex-col justify-center pt-28 pb-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <Link href="/services" className="hero-element inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-accent hover:text-brand-navy transition-colors mb-6 uppercase group bg-accent px-3 py-1.5 rounded-full">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="col-span-1 lg:col-span-8 flex flex-col items-start text-left">
              <div className="hero-element inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                Enterprise Grade
              </div>
              <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-[0.95] uppercase mb-4">
                Inventory <br className="hidden md:block" />
                Management <span className="text-accent italic font-serif leading-normal normal-case mt-1 text-3xl md:text-4xl lg:text-5xl block">System.</span>
              </h1>
              <p className="hero-element text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-6">
                Streamline your operations with our advanced Inventory Management System—boost efficiency, optimize workflows, and deliver results faster than ever.
              </p>
              
              <div className="hero-element mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Sync Channels</p>
                <LogoBadges type="marketplace" />
              </div>
              
              <div className="hero-element flex flex-wrap gap-3">
                <Link href="/contact" className="group px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2">
                  Book a Demo
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#what-we-do" className="px-6 py-2.5 rounded-full font-black text-xs text-slate-950 hover:bg-slate-50 transition-colors border border-slate-200">
                  Explore Features
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-4 relative hero-element">
               <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] overflow-hidden group">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/10 mix-blend-overlay z-10" />
                    <img 
                      src="/images/inventory-hero.png" 
                      alt="Inventory Management System"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Subtle Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl shadow-xl animate-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg">
                        <Package size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">Live Status</p>
                        <p className="text-[12px] font-bold text-slate-800">Optimized Ops</p>
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
              Total Command Over <br className="hidden md:block"/> Your Supply Chain.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal-grid">
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent transition-all">
                  <BrainCircuit className="text-accent" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">AI-Driven Inventory Management</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Efficiently tracks, manages, and controls stock across multiple sales channels and warehouses dynamically.</p>
            </div>
            
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-50 transition-all">
                  <Activity className="text-emerald-600" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Real-Time Visibility & Accuracy</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Maintains absolute accurate inventory levels, & provides real-time supply chain insights straight to your dashboard.</p>
            </div>

            <div className="reveal-card col-span-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all border border-white/5">
                  <TrendingUp className="text-white" size={20} />
               </div>
               <h4 className="text-base font-bold text-white mb-2">Improved Efficiency & Profitability</h4>
               <p className="text-slate-300 text-sm font-medium leading-relaxed">Streamlines all ground operations, slashes carrying costs, and instantly enhances your overall business performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL ROTATING CARDS - BENEFITS */}
      <section className="relative bg-slate-950 py-10 flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full mb-6 relative z-10 text-center md:text-left reveal-item">
           <h2 className="text-xs font-black text-accent tracking-[0.2em] uppercase mb-2">Benefits of Our IMS</h2>
           <p className="text-2xl md:text-4xl font-black text-white tracking-tight max-w-xl leading-[1.05]">
             Showcase all your automation solutions in a clean layout.
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
              Still Managing Inventory in <br className="hidden md:block"/> Excel or Manually?
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto mb-6 leading-relaxed">
              Manual tracking leads to stock errors, delayed orders, and lost sales. Automate your inventory and gain real-time control before your competitors do.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-3 bg-white text-accent rounded-full font-black text-xs shadow-md hover:scale-105 transition-all items-center gap-2 uppercase tracking-widest">
              Automate Now
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
               <p className="text-slate-500 text-sm font-medium">Everything you need to know about our Inventory Management System.</p>
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
         <div className="text-slate-100 text-[10vw] font-black tracking-tighter leading-[0.7] select-none opacity-50">SYSTEMS</div>
         <div className="mt-[-2vw] relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-[0.9]">Ready to Scale <br /> Your Operations?</h2>
            <Link href="/contact" className="group px-8 py-3 bg-slate-950 text-white rounded-full font-black text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2">
               Get Started Today
               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </main>
  );
}
