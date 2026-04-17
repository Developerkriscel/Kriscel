"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Palette, Layout, Eye, 
  Smartphone, Zap, ArrowLeft, Plus, Minus, Layers, 
  Sparkles, MousePointer2, Monitor, PenTool
} from 'lucide-react';
import LogoBadges from '@/components/LogoBadges';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What web designing services do you provide?",
    answer: "We offer professional web designing services including UI/UX design, responsive website design, custom layout creation, landing page design, and website redesigning to enhance your brand's digital presence."
  },
  {
    question: "Why is professional web design important?",
    answer: "Professional web design builds first-impression trust, improves user engagement, and ensures your brand looks credible. A well-designed site also improves navigation, leading to better conversion rates and customer satisfaction."
  },
  {
    question: "Do you design mobile-responsive websites?",
    answer: "Yes, all our designs are mobile-first and fully responsive, ensuring your website looks stunning and functions perfectly on smartphones, tablets, and desktops."
  },
  {
    question: "What is UI/UX design?",
    answer: "UI (User Interface) design focuses on the visual elements of a website, while UX (User Experience) design focus on the overall feel of the experience and how easy it is for users to achieve their goals on your site."
  },
  {
    question: "How long does the web design process take?",
    answer: "A typical web design project takes 1-3 weeks depending on the number of pages and complexity. We work closely with you to ensure the final design perfectly matches your brand vision."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we specialize in modernizing outdated websites with fresh, contemporary designs that improve both aesthetics and performance for modern users."
  },
  {
    question: "Will my website design be unique?",
    answer: "Absolutely. We create custom designs tailored to your specific brand identity and business goals, ensuring you stand out from your competitors."
  },
  {
    question: "Do you use modern design tools?",
    answer: "We use industry-leading tools like Figma and Adobe Creative Suite to create high-fidelity mockups and interactive prototypes before moving to development."
  },
  {
    question: "Which is the best web designing company in Delhi?",
    answer: "The best company is one that combines creative artistic vision with a deep understanding of user behavior and conversion optimization to build websites that look great and work effectively."
  },
  {
    question: "How should I choose a web design partner?",
    answer: "Choose a partner by reviewing their portfolio, understanding their design process, reading client testimonials, and ensuring they have a strong grasp of both aesthetics and technical usability."
  }
];

const benefits = [
  {
    title: "UI/UX Excellence",
    desc: "We follow industry-leading design principles to create interfaces that are beautiful and intuitive.",
    icon: <Palette className="text-rose-500" size={24} />
  },
  {
    title: "Responsive Layouts",
    desc: "Your website will automatically adjust its design for a seamless experience on any device.",
    icon: <Smartphone className="text-emerald-500" size={24} />
  },
  {
    title: "High-Fidelity Prototyping",
    desc: "See and interact with your website design before we write a single line of code.",
    icon: <PenTool className="text-accent" size={24} />
  },
  {
    title: "Visual Storytelling",
    desc: "Use stunning visuals and layouts to communicate your brand's unique story effectively.",
    icon: <Sparkles className="text-amber-500" size={24} />
  },
  {
    title: "Conversion Optimization",
    desc: "Strategic design elements placed to guide users towards your desired business actions.",
    icon: <Zap className="text-accent" size={24} />
  },
  {
    title: "Modern Aesthetics",
    desc: "Stay ahead of trends with clean, contemporary designs that rival the best in your industry.",
    icon: <Monitor className="text-accent" size={24} />
  }
];

const KriscelFeatures = [
  {
    title: "Professional Web Designing Services",
    desc: "We build responsive and SEO-friendly websites that grow your business through professional solutions."
  },
  {
    title: "Custom Creative Strategy",
    desc: "Every design starts with a deep understanding of your brand, target audience, and business goals."
  },
  {
    title: "User-Centered Experience",
    desc: "We focus on creating paths that make it easy for your customers to find what they need and convert."
  },
  {
    title: "Interactive Prototypes",
    desc: "We provide interactive mockups so you can experience the flow of your new site during the design phase."
  },
  {
    title: "Scalable Design System",
    desc: "We create reusable design tokens and components that ensure consistency as your platform grows."
  },
  {
    title: "Optimized Visual Assets",
    desc: "All design elements are optimized for fast loading times without compromising on visual quality."
  }
];

export default function WebDesigning() {
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
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-rose-50 rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-pink-50/80 rounded-full blur-[100px] opacity-70"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[50vh] flex flex-col justify-center pt-28 pb-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <Link href="/solutions" className="hero-element inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-rose-600 hover:text-rose-800 transition-colors mb-6 uppercase group bg-rose-50 px-3 py-1.5 rounded-full">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Back to Solutions
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="col-span-1 lg:col-span-8 flex flex-col items-start text-left">
              <div className="hero-element inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                Design Driven
              </div>
              <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-[0.95] uppercase mb-4">
                Professional Web Designing Service in Delhi | Kriscel tech
              </h1>
              <p className="hero-element text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-6">
                Top web designing services in Delhi to build responsive & SEO-friendly websites. Grow your business with professional website solutions that wow your customers.
              </p>

              <div className="hero-element mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Creative Stack</p>
                <LogoBadges type="all" />
              </div>
              
              <div className="hero-element flex flex-wrap gap-3">
                <Link href="/contact" className="group px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2">
                  Design My Site
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#what-we-do" className="px-6 py-2.5 rounded-full font-black text-xs text-slate-950 hover:bg-slate-50 transition-colors border border-slate-200">
                  Explore Portfolios
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-4 relative hero-element">
               <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] overflow-hidden group">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-transparent to-pink-500/10 mix-blend-overlay z-10" />
                    <img 
                      src="/images/web-design-hero.png" 
                      alt="Web Designing"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Subtle Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl shadow-xl animate-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                        <Palette size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">Live Design</p>
                        <p className="text-[12px] font-bold text-slate-800">Visual Impact Active</p>
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
            <h2 className="text-xs font-black text-rose-600 tracking-[0.2em] uppercase mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-[0.95]">
              Visual Excellence <br className="hidden md:block"/> at Scale.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal-grid">
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-rose-50 transition-all">
                  <Layout className="text-rose-600" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">UI/UX Strategy</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">We focus on the user journey, ensuring every design element helps your customers achieve their goals intuitively.</p>
            </div>
            
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent transition-all">
                  <Layers className="text-accent" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Modern Layouts</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Using the latest design systems to create websites that are visually stunning and professionally organized.</p>
            </div>

            <div className="reveal-card col-span-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all border border-white/5">
                  <Sparkles className="text-white" size={20} />
               </div>
               <h4 className="text-base font-bold text-white mb-2">Brand Consistency</h4>
               <p className="text-slate-300 text-sm font-medium leading-relaxed">Every color, font, and image is chosen to perfectly represent your unique brand identity and mission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL ROTATING CARDS - BENEFITS */}
      <section className="relative bg-slate-950 py-10 flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full mb-6 relative z-10 text-center md:text-left reveal-item">
           <h2 className="text-xs font-black text-rose-400 tracking-[0.2em] uppercase mb-2">Design Foundations</h2>
           <p className="text-2xl md:text-4xl font-black text-white tracking-tight max-w-xl leading-[1.05]">
             Crafting digital experiences that inspire and convert.
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
              Your Design is Your <br className="hidden md:block"/> 24/7 Sales Pitch.
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto mb-6 leading-relaxed">
              In the first 3 seconds, a user decides if they trust your brand based on design alone. Let's make sure you win every time.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-3 bg-white text-accent rounded-full font-black text-xs shadow-md hover:scale-105 transition-all items-center gap-2 uppercase tracking-widest">
              Design My Site
              <ArrowRight size={14} />
            </Link>
         </div>
      </section>

      {/* WHY CHOOSE KRISCEL TECH */}
      <section className="relative z-10 py-10 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10 reveal-item">
               <h2 className="text-xs font-black text-rose-600 tracking-[0.2em] uppercase mb-2">The Kriscel Advantage</h2>
               <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[0.95]">
                  Premium Creative Direction.
               </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 reveal-grid">
               {KriscelFeatures.map((feature, idx) => (
                  <div key={idx} className="reveal-card flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                        <CheckCircle2 className="text-rose-600" size={16} />
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
               <h2 className="text-xs font-black text-rose-600 tracking-[0.2em] uppercase mb-2">Knowledge Base</h2>
               <h3 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight mb-4">
                  Frequently Asked Questions
               </h3>
               <p className="text-slate-500 text-sm font-medium">Everything you need to know about professional web designing.</p>
            </div>

            <div className="space-y-3 reveal-item">
               {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-300 shadow-sm">
                     <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full px-5 py-4 text-left flex justify-between items-center bg-transparent"
                     >
                        <span className="font-bold text-slate-900 pr-6 text-xs md:text-sm">{faq.question}</span>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === idx ? 'bg-rose-50 text-rose-600' : 'bg-slate-50 text-slate-400'}`}>
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
         <div className="text-slate-100 text-[10vw] font-black tracking-tighter leading-[0.7] select-none opacity-50">DESIGN</div>
         <div className="mt-[-2vw] relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-[0.9]">Ready to Redefine <br /> Your Visual Identity?</h2>
            <Link href="/contact" className="group px-8 py-3 bg-slate-950 text-white rounded-full font-black text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2">
               Get Started Today
               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </main>
  );
}
