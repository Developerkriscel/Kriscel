"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, MapPin, Search, Star, 
  Map, Phone, Zap, ArrowLeft, Plus, Minus, Navigation2, 
  Store, Globe, Award
} from 'lucide-react';
import LogoBadges from '@/components/LogoBadges';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What is GMB creation service?",
    answer: "A Google My Business (GMB) creation service helps businesses set up and optimize their Google Business Profile. This ensures that your business appears correctly on Google Maps and Search, making it easier for local customers to find you."
  },
  {
    question: "Why is Google My Business important for my local business?",
    answer: "GMB is essential for local SEO. It increases your visibility in local search results, provides potential customers with important information like your address, phone number, and hours, and allows you to build trust through customer reviews."
  },
  {
    question: "What information is needed to create a GMB profile?",
    answer: "You'll need your business name, category, physical address (or service area), phone number, website URL, and business hours. Photos of your business and a description are also highly recommended for better engagement."
  },
  {
    question: "How long does it take for a GMB profile to become active?",
    answer: "Once the profile is created and verified (usually via a postcard or phone), it typically takes a few days to a week to appear in search results. Optimization is an ongoing process to maintain high rankings."
  },
  {
    question: "What are the key benefits of GMB optimization?",
    answer: "Key benefits include improved local search rankings, higher visibility on Google Maps, increased website traffic, more phone calls and store visits, and the ability to showcase positive customer reviews."
  },
  {
    question: "Can GMB help attract more customers?",
    answer: "Yes, GMB is one of the most effective ways to attract local customers. By appearing in the 'Local Pack' on Google, you are often the first choice for users searching for services in your area."
  },
  {
    question: "Is GMB creation free?",
    answer: "Google provides the platform for free, but professional GMB services like ours help ensure your profile is optimized correctly, follows all guidelines, and ranks competitively against other local businesses."
  },
  {
    question: "How often should I update my GMB profile?",
    answer: "Regular updates are important. You should post updates, respond to reviews, add new photos, and ensure your business hours are always accurate, especially during holidays."
  },
  {
    question: "Which is the best GMB creation service in India?",
    answer: "The best service is one that provides comprehensive profile setup, verification assistance, keyword optimization, and ongoing management to ensure your business stays visible and attractive to local users."
  },
  {
    question: "How should I choose a GMB service provider?",
    answer: "Choose a provider with a deep understanding of local SEO, experience in profile verification, a focus on review management, and a track record of helping businesses rank higher in local search results."
  }
];

const benefits = [
  {
    title: "Local Search Visibility",
    desc: "Appear in the Google 'Local Pack' when customers search for services near your physical location.",
    icon: <Search className="text-orange-500" size={24} />
  },
  {
    title: "Google Maps Presence",
    desc: "Ensure your business is easily discoverable on Google Maps with accurate address and directions.",
    icon: <MapPin className="text-red-500" size={24} />
  },
  {
    title: "Trust & Credibility",
    desc: "Build authority through verified business information and positive customer reviews showcased directly on Google.",
    icon: <Award className="text-amber-500" size={24} />
  },
  {
    title: "Direct Customer Interaction",
    desc: "Allow customers to call, message, or visit your website with one click from their mobile devices.",
    icon: <Phone className="text-emerald-500" size={24} />
  },
  {
    title: "Updated Business Insights",
    desc: "See how many people found you, requested directions, or called your business directly from your profile.",
    icon: <Zap className="text-accent" size={24} />
  },
  {
    title: "Review Management",
    desc: "Strategic assistance in managing and responding to customer reviews to maintain a stellar online reputation.",
    icon: <Star className="text-yellow-500" size={24} />
  }
];

const KriscelFeatures = [
  {
    title: "Expert Profile Setup & Verification",
    desc: "We ensure your business profile is set up correctly and verified quickly to start attracting customers immediately."
  },
  {
    title: "Keyword Optimized Description",
    desc: "Our local SEO experts write compelling descriptions that help you rank higher for relevant search terms in your area."
  },
  {
    title: "High-Quality Media Integration",
    desc: "We upload professional photos and videos to make your business look attractive and trustworthy to potential visitors."
  },
  {
    title: "Regular Post & Offer Management",
    desc: "Keep your audience engaged with regular updates on products, services, and special offers directly on your profile."
  },
  {
    title: "Ongoing Profile Monitoring",
    desc: "We monitor your GMB profile to protect it from unauthorized changes and ensure all information stays accurate."
  },
  {
    title: "Local Competitor Analysis",
    desc: "Stay ahead of nearby businesses with our insights into local search trends and competitor performance."
  }
];

export default function GMBCreation() {
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
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-50 rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-red-50/80 rounded-full blur-[100px] opacity-70"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[50vh] flex flex-col justify-center pt-28 pb-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <Link href="/solutions" className="hero-element inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-orange-600 hover:text-orange-800 transition-colors mb-6 uppercase group bg-orange-50 px-3 py-1.5 rounded-full">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Back to Solutions
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="col-span-1 lg:col-span-8 flex flex-col items-start text-left">
              <div className="hero-element inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                Local Visibility Experts
              </div>
              <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-[0.95] uppercase mb-4">
                GMB Creation Service in Delhi | Boost Local Business Visibility
              </h1>
              <p className="hero-element text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-6">
                Professional GMB Creation Service in Delhi to help your business appear on Google Maps & Search, boost local visibility, and attract new customers instantly.
              </p>

              <div className="hero-element mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Local Sync</p>
                <LogoBadges type="ads" />
              </div>
              
              <div className="hero-element flex flex-wrap gap-3">
                <Link href="/contact" className="group px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2">
                  Boost My Visibility
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#what-we-do" className="px-6 py-2.5 rounded-full font-black text-xs text-slate-950 hover:bg-slate-50 transition-colors border border-slate-200">
                  See Our Steps
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-4 relative hero-element">
               <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] overflow-hidden group">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-red-500/10 mix-blend-overlay z-10" />
                    <img 
                      src="/images/gmb-hero.png" 
                      alt="GMB Creation & Optimization"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Subtle Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl shadow-xl animate-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                        <MapPin size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">Live Status</p>
                        <p className="text-[12px] font-bold text-slate-800">Profile Optimized</p>
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
            <h2 className="text-xs font-black text-orange-600 tracking-[0.2em] uppercase mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-[0.95]">
              Be Found Exactly <br className="hidden md:block"/> Where You Are.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal-grid">
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-orange-50 transition-all">
                  <Store className="text-orange-600" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Profile Optimization</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Ensure your business information is accurate and optimized to rank high for nearby customer searches.</p>
            </div>
            
            <div className="reveal-card col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-red-50 transition-all">
                  <Navigation2 className="text-red-600" size={20} />
               </div>
               <h4 className="text-base font-bold text-slate-950 mb-2">Local Map Visibility</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">Increase store visits and calls by appearing correctly on Google Maps with precise location data.</p>
            </div>

            <div className="reveal-card col-span-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all border border-white/5">
                  <Star className="text-white" size={20} />
               </div>
               <h4 className="text-base font-bold text-white mb-2">Review Management</h4>
               <p className="text-slate-300 text-sm font-medium leading-relaxed">Build unbeatable trust in your local community by managing and growing your five-star user feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL ROTATING CARDS - BENEFITS */}
      <section className="relative bg-slate-950 py-10 flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full mb-6 relative z-10 text-center md:text-left reveal-item">
           <h2 className="text-xs font-black text-orange-400 tracking-[0.2em] uppercase mb-2">Local Foundations</h2>
           <p className="text-2xl md:text-4xl font-black text-white tracking-tight max-w-xl leading-[1.05]">
             Connect with customers in your neighborhood.
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
              Your Customers are Searching <br className="hidden md:block"/> — Will They Find You?
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto mb-6 leading-relaxed">
              If your business isn't optimized for local search, you're losing customers to nearby competitors every single hour.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-3 bg-white text-accent rounded-full font-black text-xs shadow-md hover:scale-105 transition-all items-center gap-2 uppercase tracking-widest">
              Boost My Visibility
              <ArrowRight size={14} />
            </Link>
         </div>
      </section>

      {/* WHY CHOOSE KRISCEL TECH */}
      <section className="relative z-10 py-10 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10 reveal-item">
               <h2 className="text-xs font-black text-orange-600 tracking-[0.2em] uppercase mb-2">The Kriscel Advantage</h2>
               <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[0.95]">
                  Why Choose Kriscel Tech?
               </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 reveal-grid">
               {KriscelFeatures.map((feature, idx) => (
                  <div key={idx} className="reveal-card flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                        <CheckCircle2 className="text-orange-600" size={16} />
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
               <h2 className="text-xs font-black text-orange-600 tracking-[0.2em] uppercase mb-2">Knowledge Base</h2>
               <h3 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight mb-4">
                  Frequently Asked Questions
               </h3>
               <p className="text-slate-500 text-sm font-medium">Everything you need to know about GMB creation and optimization.</p>
            </div>

            <div className="space-y-3 reveal-item">
               {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-300 shadow-sm">
                     <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full px-5 py-4 text-left flex justify-between items-center bg-transparent"
                     >
                        <span className="font-bold text-slate-900 pr-6 text-xs md:text-sm">{faq.question}</span>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === idx ? 'bg-orange-50 text-orange-600' : 'bg-slate-50 text-slate-400'}`}>
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
         <div className="text-slate-100 text-[10vw] font-black tracking-tighter leading-[0.7] select-none opacity-50">LOCATION</div>
         <div className="mt-[-2vw] relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-[0.9]">Ready to Get <br /> More Store Visits?</h2>
            <Link href="/contact" className="group px-8 py-3 bg-slate-950 text-white rounded-full font-black text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2">
               Get Started Today
               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </main>
  );
}
