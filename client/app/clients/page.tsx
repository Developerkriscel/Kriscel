"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BarChart3,
  Globe,
  Cpu,
  ShoppingCart,
  Search,
  Code2,
  ArrowUpRight,
  Quote,
  Building2,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Factory,
  Zap,
  Wifi,
  GraduationCap,
  Home,
  Utensils,
  Star,
  Users,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

/* ─── DATA ─── */
const services = [
  {
    icon: Cpu,
    title: "Business Automation",
    desc: "Transforming manual chaos into high-speed digital engines. We build the architecture that runs your company automatically.",
    color: "#6366f1",
    link: "/solutions",
    subOptions: [
      "Inventory Systems",
      "CRM Development",
      "MIS Reporting",
      "Workflow Logic"
    ]
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    desc: "Strategic growth through data-driven engagement. We synchronize your brand's voice across every global digital channel.",
    color: "#10b981",
    link: "/solutions",
    subOptions: [
      "SEO & SMO",
      "Content Strategy",
      "Lead Generation",
      "Ad Optimization"
    ]
  },
  {
    icon: Users,
    title: "Recruitment",
    desc: "Architecting the human capital needed to scale. We source, vet, and integrate the world-class talent your business deserves.",
    color: "#8b5cf6",
    link: "/solutions",
    subOptions: [
      "IT Staffing",
      "Executive Search",
      "HR Portals",
      "Staff Retention"
    ]
  },
];

const industries = [
  { icon: Cpu, name: "Technology & IT" },
  { icon: Utensils, name: "FMCG" },
  { icon: HeartPulse, name: "Healthcare & Pharma" },
  { icon: Landmark, name: "Finance & Banking" },
  { icon: ShoppingBag, name: "Retail & E-Commerce" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Zap, name: "Energy & Utilities" },
  { icon: Wifi, name: "Telecommunications" },
  { icon: GraduationCap, name: "Education & E-Learning" },
  { icon: Home, name: "Real Estate" },
];

const testimonials = [
  {
    text: "Working with Kriscel has been an outstanding experience. Their advanced digital solutions and business automation tools have significantly enhanced our performance. We look forward to reaching even greater milestones together.",
    author: "Harish Mehtani",
    role: "CEO, TechVision India",
    rating: 5,
  },
  {
    text: "The experience of working with Kriscel has been incredibly fulfilling. Our operations are now more efficient thanks to their business automation tool and digital solutions. They are very dedicated and hardworking.",
    author: "Sanjay Kapoor",
    role: "Operations Head, NexGen Corp",
    rating: 5,
  },
  {
    text: "Kriscel has been a game-changer in automation and digital innovation. Their innovative solutions have streamlined our operations, boosted efficiency, and helped us stay ahead in a fast-evolving market.",
    author: "Priya Sharma",
    role: "Director, CloudFirst Solutions",
    rating: 5,
  },
  {
    text: "Kriscel has transformed our digital growth with powerful SEO services. Their strategies improved rankings, boosted visibility, and drove quality traffic, keeping us ahead in a fast-changing market.",
    author: "Fire Industrial Equipment",
    role: "pelletburnerindia.in",
    rating: 5,
  },
  {
    text: "Kriscel has added great value to our operations with their smart automation and digital solutions. Their quality, efficiency, potential and support make them a trusted technology partner.",
    author: "Rajesh Gupta",
    role: "Founder, SmartRetail",
    rating: 5,
  },
  {
    text: "Kriscel has revolutionized our digital growth through their powerful SEO and e-commerce marketing services. Their strategies have boosted our rankings, increased visibility, and driven high-quality traffic.",
    author: "Vikram Patel",
    role: "CMO, GlobalTrade Co.",
    rating: 5,
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Industries Served" },
  { value: "98%", label: "Client Retention" },
];

/* ─── COMPONENT ─── */
export default function ClientsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current?.querySelectorAll(".hero-anim") || [],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: "power3.out" }
    );

    // Services cards
    gsap.fromTo(
      servicesRef.current?.querySelectorAll(".service-card") || [],
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
      }
    );

    // Industries
    gsap.fromTo(
      industriesRef.current?.querySelectorAll(".industry-chip") || [],
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.06,
        duration: 0.5,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: industriesRef.current,
          start: "top 80%",
        },
      }
    );

    // Testimonials
    gsap.fromTo(
      testimonialsRef.current?.querySelectorAll(".testimonial-card") || [],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
        },
      }
    );

    // Partners
    gsap.fromTo(
      partnersRef.current?.querySelectorAll(".partner-card") || [],
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: partnersRef.current,
          start: "top 80%",
        },
      }
    );

    // Stats counter animation
    gsap.fromTo(
      statsRef.current?.querySelectorAll(".stat-item") || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
      }
    );

    // CTA
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] pt-40 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(6,182,212,0.06) 0%, transparent 50%), #fafafa",
        }}
      >
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="hero-anim inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-600 mb-8 shadow-sm">
            <Building2 size={16} className="text-accent" />
            Trusted by 50+ Businesses Worldwide
          </div>
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-gray-950 leading-[0.95] mb-6">
            Our Partners
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-violet-500 to-accent">
              & Success Stories
            </span>
          </h1>
          <p className="hero-anim text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            At Kriscel, innovation meets efficiency. We are a leading business automation,
            digital marketing, e-commerce, and recruitment solutions provider — helping
            businesses streamline operations and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section ref={statsRef} className="py-12 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section ref={servicesRef} className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">
              What We Deliver
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-gray-950 mb-4">
              Our Core Solutions
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Expert-driven strategies designed for seamless user interactions
              and unmatched satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="service-card group relative bg-white border border-gray-100 rounded-3xl p-10 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] flex flex-col h-full"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
                    style={{ background: `${service.color}15`, border: `1px solid ${service.color}20` }}
                  >
                    <Icon size={30} style={{ color: service.color }} />
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-950 mb-4 tracking-tight uppercase flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight
                      size={20}
                      className="text-gray-300 group-hover:text-gray-400 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed text-base mb-8 font-medium">
                    {service.desc}
                  </p>

                  <div className="mt-auto">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 px-1">Capabilities</div>
                    <div className="grid grid-cols-2 gap-2">
                       {service.subOptions.map((opt, idx) => (
                         <div key={idx} className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-[11px] font-bold text-gray-600 transition-all hover:bg-white hover:border-accent/5 hover:text-accent group-hover:shadow-sm">
                            {opt}
                         </div>
                       ))}
                    </div>
                  </div>

                  <div
                    className="absolute top-0 left-10 right-10 h-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-all transition-duration-500"
                    style={{ background: service.color }}
                  />
                  <Link href={service.link} className="absolute inset-0" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── NEW: STRATEGIC PARTNERS ─── */}
      <section ref={partnersRef} className="py-24 px-6 bg-slate-950 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="partner-card text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-accent mb-4">
              Building Success Together
            </p>
            <h2 className="partner-card text-4xl md:text-6xl font-black tracking-[-0.03em] text-white mb-6">
              Our Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-fuchsia-400 to-accent">Partners</span>
            </h2>
            <p className="partner-card text-lg text-slate-400 max-w-xl mx-auto font-medium">
              We take pride in collaborating with industry-leading brands to architect digital excellence and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "KALINGA PREMIUM", src: "/images/clients/kalinga.png", color: "#ef4444" },
              { name: "KRISHNA OVERSEAS", src: "/images/clients/koi.webp", color: "#a855f7" },
              { name: "OM RESOURCES", src: "/images/clients/om-resources.png", color: "#14b8a6" },
              { name: "CHUKDE", src: "/images/clients/chukde.png", color: "#f97316" },
              { name: "MALVIKA PRIDE INDIA", src: "/images/clients/malvika-pride-india.png", color: "#eab308" },
              { name: "SAFECORD", src: "/images/clients/safecord.png", color: "#06b6d4" },
              { name: "MITRAS", src: "/images/clients/mitras.png", color: "#f97316" },
              { name: "DWAO", src: "/images/clients/dwao.png", color: "#64748b" },
              { name: "JIVO", src: "/images/clients/jivo.png", color: "#22c55e" },
              { name: "PRIUS", src: "/images/clients/prius.webp", color: "#f59e0b" }
            ].map((client, i) => (
              <div 
                key={i}
                className="partner-card group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] overflow-hidden"
              >
                {/* RGB Glow Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${client.color}, transparent 70%)` }}
                />
                
                <div className="relative mb-6 transition-all duration-700 brightness-110">
                  <Image 
                    src={client.src} 
                    alt={client.name} 
                    width={160} 
                    height={60} 
                    className="h-16 w-auto object-contain"
                  />
                </div>
                
                <h3 className="relative text-[10px] md:text-xs font-black text-slate-500 group-hover:text-white uppercase tracking-[0.2em] transition-colors duration-500">
                  {client.name}
                </h3>

                {/* Corner Accent */}
                <div 
                  className="absolute top-0 right-0 w-12 h-12 opacity-20"
                  style={{ background: `radial-gradient(circle at top right, ${client.color}, transparent 70%)` }}
                />
              </div>
            ))}
            
            {/* CTA Card */}
            <div className="partner-card group relative bg-gradient-to-br from-accent to-violet-600 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-xl shadow-accent0/20">
               <div className="text-white font-black text-lg mb-2 uppercase tracking-tighter italic">Grow With Us</div>
               <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-4">Start your journey</p>
               <Link href="/contact" className="p-3 bg-white text-accent rounded-full hover:scale-110 transition-transform">
                  <ArrowUpRight size={20} strokeWidth={3} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section
        ref={industriesRef}
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(180deg, #fafafa 0%, white 50%, #fafafa 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-500 mb-4">
            Broad Industry Knowledge
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-gray-950 mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-14">
            Expert solutions tailored for various business domains across the
            globe.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="industry-chip group flex items-center gap-3 px-6 py-4 bg-white border border-gray-100 rounded-2xl hover:border-accent/10 hover:bg-accent/50 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                >
                  <Icon
                    size={20}
                    className="text-gray-400 group-hover:text-accent transition-colors"
                  />
                  <span className="text-[15px] font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                    {ind.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section ref={testimonialsRef} className="py-24 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">
              Client Voices
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Real testimonials from businesses we've helped transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card group bg-gray-900/60 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-500 hover:bg-gray-900/80"
              >
                <Quote
                  size={32}
                  className="text-accent/30 mb-4"
                  strokeWidth={1.5}
                />
                <p className="text-gray-300 leading-relaxed text-[15px] mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <div className="border-t border-white/5 pt-4">
                  <div className="font-bold text-white text-sm">{t.author}</div>
                  <div className="text-xs text-gray-500 font-medium">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT / WHO WE ARE ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">
                About Kriscel
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gray-950 mb-6 leading-tight">
                Where Innovation
                <br />
                Meets Efficiency
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Welcome to Kriscel, where innovation meets efficiency! We
                are a leading business automation, digital marketing, e-commerce,
                and recruitment solutions provider, helping businesses streamline
                operations, enhance visibility, and drive sustainable growth in
                today's fast-evolving digital landscape.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our team of experts blends cutting-edge automation tools, smart
                integrations, and result-driven digital solutions to empower
                businesses with seamless workflows, increased efficiency, and
                scalable success.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-950 text-white rounded-full font-bold text-sm hover:bg-accent transition-all duration-300 shadow-xl hover:shadow-accent0/20"
              >
                Learn More About Us
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-accent/5 via-violet-50 to-accent border border-gray-100 p-10 flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <Image 
                    src="/images/kriscel-logo.png" 
                    alt="Kriscel" 
                    width={180} 
                    height={180} 
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-2">
                  Kriscel Tech Pvt. Ltd.
                </div>
                <p className="text-sm text-gray-500 font-medium max-w-[260px]">
                  Never hesitate to sacrifice the excellent in order to pursue
                  the great.
                </p>
              </div>
              {/* Floating accents */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-2xl blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-2xl blur-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        ref={ctaRef}
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-white mb-6 leading-tight">
            Ready to Elevate
            <br />
            Your Business?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10 font-medium">
            Consult with us today and take the first step toward superior
            engagement, sustainable growth, and digital excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-gray-950 rounded-full font-black text-lg hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center gap-2"
            >
              Get Started Today
              <ArrowUpRight size={20} />
            </Link>
            <Link
              href="/about"
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
