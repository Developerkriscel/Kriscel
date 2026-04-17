"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Code2, Globe, Laptop, 
  Smartphone, Zap, ArrowLeft, Plus, Minus, Layers, 
  ShieldCheck, Cpu, Database, Layout
} from 'lucide-react';
import LogoBadges from '@/components/LogoBadges';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What web development services do you offer?",
    answer: "We offer comprehensive web development services including custom website development, e-commerce solutions, web application development, CMS integration, and responsive design to ensure your site works perfectly on all devices."
  },
  {
    question: "Why is professional web development important?",
    answer: "A professionally developed website provides a better user experience, faster loading times, improved security, and better search engine rankings. It serves as the digital face of your business and a powerful tool for lead generation."
  },
  {
    question: "Which technologies do you use for development?",
    answer: "We use modern, high-performance technologies including React, Next.js, Node.js, and specialized platforms for e-commerce and automation to build scalable and secure web solutions."
  },
  {
    question: "How long does it take to develop a website?",
    answer: "The timeline depends on the complexity and features of the project. A standard business website usually takes 2-4 weeks, while more complex web applications or e-commerce sites can take longer."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes, every website we build is fully responsive, meaning it will automatically adjust its layout and features for a seamless experience on smartphones, tablets, and desktops."
  },
  {
    question: "Do you provide website maintenance and support?",
    answer: "Yes, we offer ongoing maintenance and support services to ensure your website stays up-to-date, secure, and performs at its best as your business grows."
  },
  {
    question: "Can you help with e-commerce website development?",
    answer: "Absolutely. We specialize in building robust, secure, and user-friendly e-commerce platforms designed to showcase your products and drive sales effortlessly."
  },
  {
    question: "Will my website be SEO-friendly?",
    answer: "Yes, we build websites with SEO best practices from the ground up, including fast load times, clean code, and proper heading structures to help you rank better in search results."
  },
  {
    question: "Which is the best web development company in Delhi?",
    answer: "The best company is one that combines technical expertise with a deep understanding of business goals, delivering custom solutions that are not only visualy stunning but also high-performing and scalable."
  },
  {
    question: "How should I choose a web development partner?",
    answer: "Choose a partner based on their portfolio of work, technical capabilities, communication style, and their ability to provide end-to-end solutions from design to deployment and beyond."
  }
];

const benefits = [
  {
    title: "Custom Development",
    desc: "We build tailored web solutions that align perfectly with your unique business requirements and goals.",
    icon: <Code2 className="text-accent" size={24} />
  },
  {
    title: "Responsive Design",
    desc: "Ensuring your website looks and performs beautifully across all screens, from mobile to desktop.",
    icon: <Smartphone className="text-emerald-500" size={24} />
  },
  {
    title: "SEO-Friendly Architecture",
    desc: "Clean code and fast performance built-in to give your website the best start in search engine results.",
    icon: <Globe className="text-accent" size={24} />
  },
  {
    title: "Performance Optimization",
    desc: "Lightning-fast load times designed to reduce bounce rates and keep your visitors engaged longer.",
    icon: <Zap className="text-amber-500" size={24} />
  },
  {
    title: "Scalable Solutions",
    desc: "Websites and applications built to grow alongside your business, handling increased traffic and complexity.",
    icon: <Database className="text-rose-500" size={24} />
  },
  {
    title: "Secure Infrastructure",
    desc: "Implementing the latest security standards to protect your data and ensure customer trust at all times.",
    icon: <ShieldCheck className="text-accent" size={24} />
  }
];

const KriscelFeatures = [
  {
    title: "Professional Web Development Services",
    desc: "We build responsive and SEO-friendly websites that strengthen your online presence and drive business growth."
  },
  {
    title: "Full-Stack Technical Expertise",
    desc: "From front-end aesthetics to back-end logic, our developers handle every layer of your application with precision."
  },
  {
    title: "Modern UI/UX Standards",
    desc: "We follow industry-leading design principles to create interfaces that are not only beautiful but also intuitive to use."
  },
  {
    title: "Agile Development Workflow",
    desc: "Our process ensures transparency, regular updates, and timely delivery of your web project without compromises."
  },
  {
    title: "E-commerce & Integration",
    desc: "Seamlessly integrate payments, CRMs, and automation tools into your website for a unified business operations hub."
  },
  {
    title: "Post-Launch Growth Support",
    desc: "We stay with you after launch to provide updates, security patches, and performance optimizations as you scale."
  }
];

export default function WebDevelopment() {
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
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-slate-100 rounded-full blur-[100px] opacity-70"></div>
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
                Architecture First
              </div>
              <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-[0.95] uppercase mb-4">
                Top Web Development Services in Delhi NCR | Kriscel tech
              </h1>
              <p className="hero-element text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-6">
                Strengthen your online presence with professional, responsive, and SEO-friendly web development. We build high-performance platforms designed for sustainable growth.
              </p>

              <div className="hero-element mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Enterprise Stack</p>
                <LogoBadges type="all" />
              </div>
              
              <div className="hero-element flex flex-wrap gap-3">
                <Link href="/contact" className="group px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2">
                  Build My Platform
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#what-we-do" className="px-6 py-2.5 rounded-full font-black text-xs text-slate-950 hover:bg-slate-50 transition-colors border border-slate-200">
                  Explore Tech Stack
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-4 relative hero-element">
               <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] overflow-hidden group">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/10 mix-blend-overlay z-10" />
                    <img 
                      src="/images/web-dev-hero.png" 
                      alt="Web Development"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Subtle Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl shadow-xl animate-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg">
                        <Code2 size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">Live Build</p>
                        <p className="text-[12px] font-bold text-slate-800">Scaling Infrastructure</p>
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
              Future-Proof <br className="hidden md:block"/> Digital Platforms.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal-grid">
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent transition-all">
                  <Laptop className="text-accent" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Responsive Web Apps</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">We create high-performance web applications that deliver a seamless experience on any device, anywhere.</p>
            </div>
            
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-50 transition-all">
                  <Cpu className="text-emerald-600" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Scalable Solutions</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Built for growth. Our platforms handle increased traffic and complexity without sacrificing speed or security.</p>
            </div>

            <div className="reveal-card col-span-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all border border-white/5">
                  <Layers className="text-white" size={20} />
               </div>
               <h4 className="text-base font-bold text-white mb-2">Modern Tech Stack</h4>
               <p className="text-slate-300 text-sm font-medium leading-relaxed">Leveraging the latest in web technology to build secure, SEO-optimized, and visually stunning digital products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL ROTATING CARDS - BENEFITS */}
      <section className="relative bg-slate-950 py-10 flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full mb-6 relative z-10 text-center md:text-left reveal-item">
           <h2 className="text-xs font-black text-accent tracking-[0.2em] uppercase mb-2">Technical Foundations</h2>
           <p className="text-2xl md:text-4xl font-black text-white tracking-tight max-w-xl leading-[1.05]">
             Engineered for speed, scale, and customer trust.
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
              Your Website is Your <br className="hidden md:block"/> Most Powerful Employee.
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto mb-6 leading-relaxed">
              If it's slow, outdated, or hard to use, it's costing you customers every minute. Let's build a platform that works as hard as you do.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-3 bg-white text-accent rounded-full font-black text-xs shadow-md hover:scale-105 transition-all items-center gap-2 uppercase tracking-widest">
              Build My Platform
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
                  Expert Web Engineering.
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
               <p className="text-slate-500 text-sm font-medium">Everything you need to know about our web development process.</p>
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
         <div className="text-slate-100 text-[10vw] font-black tracking-tighter leading-[0.7] select-none opacity-50">DEVELOP</div>
         <div className="mt-[-2vw] relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-[0.9]">Ready to Build <br /> Your Digital Future?</h2>
            <Link href="/contact" className="group px-8 py-3 bg-slate-950 text-white rounded-full font-black text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2">
               Get Started Today
               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </main>
  );
}
