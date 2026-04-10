"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Search, Users, 
  MessageSquare, Star, Zap, ArrowLeft, Plus, Minus, 
  Globe, Shield, ThumbsUp, AlertCircle
} from 'lucide-react';
import LogoBadges from '@/components/LogoBadges';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What is Online Reputation Management (ORM)?",
    answer: "Online Reputation Management (ORM) is the practice of monitoring, influencing, and managing the digital reputation of a brand or individual. It involves promoting positive content and addressing negative feedback or reviews to ensure a favorable online image."
  },
  {
    question: "Why is ORM important for my business?",
    answer: "ORM is crucial because most customers research businesses online before making a purchase. A positive reputation builds trust and credibility, while negative search results or reviews can drive potential customers away."
  },
  {
    question: "How do you handle negative reviews?",
    answer: "We address negative reviews by responding professionally and transparently, encouraging positive customer feedback, and implementing strategies to highlight your brand's strengths and successful track record."
  },
  {
    question: "How long does it take to see results from ORM?",
    answer: "Improving an online reputation can take anywhere from a few months to a year, depending on the severity of the negative content and the competitiveness of the search results. Consistency is key to long-term success."
  },
  {
    question: "What are the key benefits of professional ORM?",
    answer: "Key benefits include improved brand credibility, increased customer trust, better search engine rankings for positive content, and a more resilient brand image that can withstand occasional negative feedback."
  },
  {
    question: "Can ORM help remove negative content from the web?",
    answer: "While it's difficult to completely 'erase' content unless it violates platform guidelines, ORM focuses on pushing negative content down in search results by promoting positive, high-authority content that accurately reflects your brand."
  },
  {
    question: "Do you monitor brand mentions across social media?",
    answer: "Yes, our ORM services include active monitoring of your brand across social media, review sites, and news platforms to ensure you stay informed and can respond quickly to any emerging sentiment."
  },
  {
    question: "Is ORM a one-time service?",
    answer: "No, reputation management is an ongoing process. As your business grows and interacts with more customers, continuous monitoring and positive content strategy are essential to maintain a stellar digital image."
  },
  {
    question: "Which is the best ORM company in India?",
    answer: "The best ORM company is one that offers a proactive approach, combines SEO expertise with professional communication, and provides transparent reporting on reputation improvements and sentiment analysis."
  },
  {
    question: "How should I choose an ORM service provider?",
    answer: "Choose a provider based on their experience with brand sentiment, their technical SEO capabilities, their ability to create high-quality positive content, and their commitment to ethical reputation management practices."
  }
];

const benefits = [
  {
    title: "Brand Monitoring",
    desc: "Active tracking of your brand mentions across the web to stay informed and respond instantly.",
    icon: <Search className="text-accent" size={24} />
  },
  {
    title: "Review Management",
    desc: "Strategic handling of customer feedback to build trust and highlight your brand's service excellence.",
    icon: <Star className="text-amber-500" size={24} />
  },
  {
    title: "Negative Content Suppression",
    desc: "We promote high-quality positive content to ensure negative results are pushed out of the spotlight.",
    icon: <Shield className="text-emerald-500" size={24} />
  },
  {
    title: "Search Result Optimization",
    desc: "Ensuring the first page of search results for your brand name reflects your true professional identity.",
    icon: <Globe className="text-accent" size={24} />
  },
  {
    title: "Crisis Management",
    desc: "Proactive communication strategies to protect your brand during challenging situations or PR issues.",
    icon: <AlertCircle className="text-rose-500" size={24} />
  },
  {
    title: "Credibility Building",
    desc: "Strategic content creation and third-party validation to establish you as a trusted leader in your field.",
    icon: <ThumbsUp className="text-accent" size={24} />
  }
];

const KriscelFeatures = [
  {
    title: "Comprehensive Brand Sentiment Analysis",
    desc: "We provide detailed insights into how your brand is perceived online, identifying both risks and opportunities."
  },
  {
    title: "Proactive Positive PR",
    desc: "Our team crafts and distributes positive stories and achievements that showcase your brand's true value."
  },
  {
    title: "Shielded Search Results",
    desc: "We build a 'reputation firewall' of high-authority profiles and content that protects your brand image 24/7."
  },
  {
    title: "Expert Review Response Team",
    desc: "Our communication specialists handle feedback with the perfect balance of professionalism and empathy."
  },
  {
    title: "Real-Time Reputation Alerts",
    desc: "Stay ahead of the narrative with instant notifications whenever your brand is mentioned anywhere online."
  },
  {
    title: "Data-Driven Recovery Strategies",
    desc: "If your brand has faced challenges, we implement proven multi-channel strategies to restore and exceed previous trust levels."
  }
];

export default function OnlineReputationManagement() {
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
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-emerald-50/80 rounded-full blur-[100px] opacity-70"></div>
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
                Trust & Authority
              </div>
              <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-[0.95] uppercase mb-4">
                Online Reputation <br className="hidden md:block" />
                Management <span className="text-accent italic font-serif leading-normal normal-case mt-1 text-3xl md:text-4xl lg:text-5xl block">Guardian.</span>
              </h1>
              <p className="hero-element text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-6">
                Protect your brand image and build unbeatable trust. Our ORM experts monitor, manage, and influence your digital narrative to ensure a stellar reputation across every platform.
              </p>

              <div className="hero-element mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Trust Synergy</p>
                <LogoBadges type="social" />
              </div>
              
              <div className="hero-element flex flex-wrap gap-3">
                <Link href="/contact" className="group px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2">
                  Check My Reputation
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#what-we-do" className="px-6 py-2.5 rounded-full font-black text-xs text-slate-950 hover:bg-slate-50 transition-colors border border-slate-200">
                  Explore Defense Strategies
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-4 relative hero-element">
               <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] overflow-hidden group">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-accent/10 mix-blend-overlay z-10" />
                    <img 
                      src="/images/orm-hero.png" 
                      alt="Online Reputation Management"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Subtle Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl shadow-xl animate-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                        <ShieldCheck size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">Brand Status</p>
                        <p className="text-[12px] font-bold text-slate-800">Excellent Sentiment</p>
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
              Total Command Over <br className="hidden md:block"/> Your Brand Sentiment.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal-grid">
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent transition-all">
                  <Shield size={20} className="text-accent" />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Brand Credibility</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Improve your digital trustworthiness through handling negative reviews and promoting your brand's core values.</p>
            </div>
            
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-50 transition-all">
                  <ThumbsUp size={20} className="text-emerald-600" />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Positive Engagement</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Interacting with followers, building community, and turning insights into impact for long-term customer loyalty.</p>
            </div>

            <div className="reveal-card col-span-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all border border-white/5">
                  <Zap size={20} className="text-white" />
               </div>
               <h4 className="text-base font-bold text-white mb-2">Real-Time Insights</h4>
               <p className="text-slate-300 text-sm font-medium leading-relaxed">Maximize your reputation ROI with data-driven strategies that target the right platforms and boost your credibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GRID BENEFITS */}
      <section className="relative bg-slate-950 py-10 flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full mb-6 relative z-10 text-center md:text-left reveal-item">
           <h2 className="text-xs font-black text-accent tracking-[0.2em] uppercase mb-2">ORM Foundations</h2>
           <p className="text-2xl md:text-4xl font-black text-white tracking-tight max-w-xl leading-[1.05]">
             The pillar of digital trust and professional authority.
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
              Your Reputation Is <br className="hidden md:block"/> Your Currency.
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto mb-6 leading-relaxed">
              In the age of search, what people see about you defines your success. Take control of your digital narrative before someone else does.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-3 bg-white text-accent rounded-full font-black text-xs shadow-md hover:scale-105 transition-all items-center gap-2 uppercase tracking-widest">
              Protect My Brand
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
                  Proactive Brand Defense.
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
               <p className="text-slate-500 text-sm font-medium">Everything you need to know about managing your digital reputation.</p>
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
         <div className="text-slate-100 text-[10vw] font-black tracking-tighter leading-[0.7] select-none opacity-50">TRUST</div>
         <div className="mt-[-2vw] relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-[0.9]">Ready to Restore <br /> Your Brand Legacy?</h2>
            <Link href="/contact" className="group px-8 py-3 bg-slate-950 text-white rounded-full font-black text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2">
               Get My Free Sentiment Scan
               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </main>
  );
}
