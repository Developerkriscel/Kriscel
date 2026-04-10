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
  Activity, Repeat, Layers, Clock, Award, ShieldAlert
} from 'lucide-react';
import LogoBadges from '@/components/LogoBadges';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What is business automation software?",
    answer: "Business automation software is a digital solution that automates repetitive tasks, workflows, and business processes. It helps organizations streamline operations, reduce manual work, improve accuracy, and increase overall productivity across different departments."
  },
  {
    question: "Why do businesses need automation software?",
    answer: "Businesses need automation software to reduce operational costs, eliminate manual errors, and improve efficiency. Automation allows organizations to streamline workflows, accelerate task completion, and focus more on strategic growth and customer experience."
  },
  {
    question: "What processes can be automated?",
    answer: "Many processes can be automated including sales workflows, HR processes, finance operations, inventory management, customer support, approvals, and reporting tasks. Automation software helps businesses manage these processes efficiently."
  },
  {
    question: "How does automation improve productivity?",
    answer: "Business automation software improves productivity, reduces manual workload, enhances data accuracy and provides real-time insights through automated workflows and reporting tools."
  },
  {
    question: "What should I look for in an automation platform?",
    answer: "A strong business automation platform should include workflow automation, task management, reporting dashboards, integration with CRM and ERP systems, role-based access controls, and cloud accessibility."
  },
  {
    question: "Can automation software connect with other tools?",
    answer: "Yes, modern business automation platforms integrate with existing tools such as CRM systems, ERP software, accounting platforms, and ecommerce applications to streamline business operations."
  },
  {
    question: "Which industries benefit the most from automation?",
    answer: "Industries such as manufacturing, retail, ecommerce, healthcare, logistics, finance, and service-based businesses benefit significantly from business automation because they handle large operational workflows."
  },
  {
    question: "Is business automation suitable for small businesses?",
    answer: "Yes, business automation is suitable for small businesses because it helps them streamline operations, reduce manual workload, and improve productivity without requiring large teams."
  },
  {
    question: "What makes Kriscel Tech the right choice for automation?",
    answer: "The best business automation software for businesses in India is one that provides workflow automation, real-time reporting, integration capabilities, and scalable process management, which are all focus areas of Kriscel Tech solutions."
  },
  {
    question: "How should I choose the right automation partner?",
    answer: "Businesses should choose automation software that offers scalability, system integrations, reporting tools, automation features, and cloud-based accessibility to support long-term operational growth."
  }
];

const benefits = [
  {
    title: "Reduce Operational Costs",
    desc: "Eliminate repetitive manual work and streamline workflows to save time, reduce labor costs, and minimize errors.",
    icon: <Globe className="text-accent" size={24} />
  },
  {
    title: "Enhance Data Accuracy",
    desc: "Ensure precise, reliable reporting with automated data checks, script‑based validations, and AI‑powered logic.",
    icon: <Cpu className="text-emerald-500" size={24} />
  },
  {
    title: "Speed Up Decision‑Making",
    desc: "Get real‑time dashboards, automated reports, and instant insights that help teams make faster, smarter decisions.",
    icon: <TrendingUp className="text-accent" size={24} />
  },
  {
    title: "Increase Workflow Transparency",
    desc: "Gain complete visibility of every process—from data entry to report generation—with centralized tracking and live status updates.",
    icon: <SearchCode className="text-accent" size={24} />
  },
  {
    title: "Boost Team Productivity",
    desc: "Automate routine tasks, simplify approvals, and free up your team to focus on high‑value work instead of manual operations.",
    icon: <MousePointer2 className="text-rose-500" size={24} />
  },
  {
    title: "Improve Reporting Efficiency",
    desc: "Generate daily, weekly, or monthly business reports automatically—no manual work, no delays.",
    icon: <BarChart3 className="text-amber-500" size={24} />
  }
];

const KriscelFeatures = [
  {
    title: "Data‑Driven Automation Strategy",
    desc: "We build automation workflows backed by real‑time data, ensuring every process runs efficiently and delivers measurable business impact."
  },
  {
    title: "AI‑Powered Process Optimization",
    desc: "Our intelligent systems identify bottlenecks, streamline repetitive tasks, and optimize your operations for maximum productivity and accuracy."
  },
  {
    title: "Transparent Performance Reporting",
    desc: "Get complete visibility with real‑time dashboards that show workflow status, report updates, CRM sync logs, and overall process performance."
  },
  {
    title: "Conversion‑Optimized Automation Flows",
    desc: "We design smart, user‑friendly automation paths that improve data accuracy, accelerate approvals, and enhance output quality."
  },
  {
    title: "Dedicated Automation Support",
    desc: "Our experts provide continuous assistance, ensuring smooth performance, fast troubleshooting, and ongoing process improvements."
  },
  {
    title: "Seamless Integrations",
    desc: "Whether you’re a small business or a growing enterprise, our solutions scale effortlessly—helping you automate more processes as your business expands."
  }
];

export default function BusinessAutomation() {
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
                Scalable Systems
              </div>
              <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-[0.95] uppercase mb-4">
                Business <br className="hidden md:block" />
                Automation <span className="text-accent italic font-serif leading-normal normal-case mt-1 text-3xl md:text-4xl lg:text-5xl block">Strategy.</span>
              </h1>
              <p className="hero-element text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-6">
                Automate your entire workflow with intelligent systems that reduce manual effort. Increase accuracy, save time, and accelerate business growth effortlessly.
              </p>

              <div className="hero-element mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Tech Synergy</p>
                <LogoBadges type="all" />
              </div>
              
              <div className="hero-element flex flex-wrap gap-3">
                <Link href="/contact" className="group px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2">
                  Get Free Consultation
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
                      src="/images/automation-hero.png" 
                      alt="Business Automation"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Subtle Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl shadow-xl animate-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg">
                        <Activity size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">Live Workflow</p>
                        <p className="text-[12px] font-bold text-slate-800">Efficiency Peak</p>
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
              Streamline Operations. <br className="hidden md:block"/> Maximize Output.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal-grid">
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent transition-all">
                  <Repeat className="text-accent" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Workflow Automation</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Automate daily operations and reduce manual effort for faster and smoother business processes.</p>
            </div>
            
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-50 transition-all">
                  <Layers className="text-emerald-600" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Smart Integration</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Connect multiple systems and tools to create a seamless and efficient digital workflow.</p>
            </div>

            <div className="reveal-card col-span-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all border border-white/5">
                  <LineChart className="text-white" size={20} />
               </div>
               <h4 className="text-base font-bold text-white mb-2">Real-Time Insights</h4>
               <p className="text-slate-300 text-sm font-medium leading-relaxed">Monitor performance with live data dashboards for smarter and faster decision-making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GRID BENEFITS */}
      <section className="relative bg-slate-950 py-10 flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full mb-6 relative z-10 text-center md:text-left reveal-item">
           <h2 className="text-xs font-black text-accent tracking-[0.2em] uppercase mb-2">Core Benefits</h2>
           <p className="text-2xl md:text-4xl font-black text-white tracking-tight max-w-xl leading-[1.05]">
             Comprehensive strategies to scale your efficiency.
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
              Stop Losing Money on Manual Processes
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto mb-6 leading-relaxed">
              Automate repetitive tasks, eliminate errors, and streamline workflows across your entire business today.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-3 bg-white text-accent rounded-full font-black text-xs shadow-md hover:scale-105 transition-all items-center gap-2 uppercase tracking-widest">
              Automate Your Business
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
               <p className="text-slate-500 text-sm font-medium">Everything you need to know about our business automation platform.</p>
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
         <div className="text-slate-100 text-[10vw] font-black tracking-tighter leading-[0.7] select-none opacity-50">AUTOMATE</div>
         <div className="mt-[-2vw] relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-[0.9]">Ready to Scale <br /> Your Operations?</h2>
            <Link href="/contact" className="group px-8 py-3 bg-slate-950 text-white rounded-full font-black text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2">
               Optimize My Workouts
               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </main>
  );
}
