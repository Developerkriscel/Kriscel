"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES_DATA, SOLUTIONS_DATA } from "@/lib/data";
import {
  ArrowUpRight,
  Layers,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Cpu,
  BarChart3,
  Globe,
  ShoppingCart,
  Search,
  Code2,
  Users,
  FileText,
  Megaphone,
  MapPin,
  Monitor,
  Palette,
  BookOpen,
  Target,
  UserPlus,
  CreditCard,
  Package,
  ClipboardList,
  Factory,
  Briefcase,
  HeartHandshake,
} from "lucide-react";
import LogoBadges from '@/components/LogoBadges';

gsap.registerPlugin(ScrollTrigger);

/* ─── ICON MAP ─── */
const iconMap: Record<string, any> = {
  inventory: Package,
  "employee-task": ClipboardList,
  production: Factory,
  account: Briefcase,
  hr: Users,
  purchase: CreditCard,
  ecommerce: ShoppingCart,
  indiamart: Globe,
  seo: Search,
  orm: HeartHandshake,
  ppc: Target,
  smo: Megaphone,
  "content-marketing": BookOpen,
  "gmb-creation": MapPin,
  "web-development": Code2,
  "web-designing": Palette,
  "catalog-management": FileText,
  "ads-campaign": BarChart3,
  recruitment: UserPlus,
  "account-creation": Monitor,
};

/* ─── COLOR MAP ─── */
const colorMap: Record<string, string> = {
  inventory: "#6366f1",
  "employee-task": "#8b5cf6",
  production: "#06b6d4",
  account: "#f59e0b",
  hr: "#ec4899",
  purchase: "#10b981",
  ecommerce: "#f97316",
  indiamart: "#3b82f6",
  seo: "#10b981",
  orm: "#6366f1",
  ppc: "#ef4444",
  smo: "#8b5cf6",
  "content-marketing": "#14b8a6",
  "gmb-creation": "#f59e0b",
  "web-development": "#ec4899",
  "web-designing": "#06b6d4",
  "catalog-management": "#6366f1",
  "ads-campaign": "#ef4444",
  recruitment: "#3b82f6",
  "account-creation": "#10b981",
};

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const automationRef = useRef<HTMLDivElement>(null);
  const digitalRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-anim") || [],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 1, ease: "power3.out" }
      );
    }

    // Automation cards
    if (automationRef.current) {
      gsap.fromTo(
        automationRef.current.querySelectorAll(".svc-card") || [],
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: automationRef.current, start: "top 80%" },
        }
      );
    }

    // Digital cards
    if (digitalRef.current) {
      gsap.fromTo(
        digitalRef.current.querySelectorAll(".svc-card") || [],
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: digitalRef.current, start: "top 80%" },
        }
      );
    }

    // CTA
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 85%" },
        }
      );
    }
  }, []);

  const servicesEntries = Object.entries(SERVICES_DATA);
  const solutionsEntries = Object.entries(SOLUTIONS_DATA);

  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] pt-40 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(99,102,241,0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(6,182,212,0.05) 0%, transparent 50%), #fafafa",
        }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="hero-anim inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-600 mb-8 shadow-sm">
            <Sparkles size={16} className="text-accent" />
            {servicesEntries.length + solutionsEntries.length}+ Expert
            Solutions
          </div>
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-gray-950 leading-[0.95] mb-6">
            Our Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-violet-500 to-accent">
              & Solutions
            </span>
          </h1>
          <p className="hero-anim text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
            High-performance engineering, digital marketing, and management
            systems to streamline your operations, enhance visibility, and drive
            sustainable growth.
          </p>

          <div className="hero-anim mb-4 flex justify-center">
            <LogoBadges type="all" />
          </div>
        </div>
      </section>

      {/* ─── BUSINESS AUTOMATION ─── */}
      <section ref={automationRef} className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/5">
              <Cpu size={20} className="text-accent" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Business Automation
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gray-950 mb-4">
            Management Systems
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mb-14">
            Intelligent software solutions to automate workflows, track
            resources, and optimize operations end-to-end.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesEntries.map(([slug, svc]) => {
              const Icon = iconMap[slug] || Layers;
              const color = colorMap[slug] || "#6366f1";
              return (
                <div
                  key={slug}
                  className="svc-card group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={26} style={{ color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[15px] mb-5 flex-1">
                    {svc.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.slice(0, 3).map((f, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2
                          size={14}
                          style={{ color }}
                          className="shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-colors group/link"
                    style={{ color }}
                  >
                    {svc.cta}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover/link:opacity-100 transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── DIGITAL MARKETING & SOLUTIONS ─── */}
      <section
        ref={digitalRef}
        className="py-24 px-6"
        style={{ background: "linear-gradient(180deg, #fafafa 0%, white 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-100">
              <BarChart3 size={20} className="text-violet-600" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-500">
              Digital Marketing & Solutions
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gray-950 mb-4">
            Growth & Visibility
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mb-14">
            Expert-driven strategies designed for seamless user interactions,
            unmatched satisfaction, and measurable business growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsEntries.map(([slug, svc]) => {
              const Icon = iconMap[slug] || Layers;
              const color = colorMap[slug] || "#8b5cf6";
              return (
                <div
                  key={slug}
                  className="svc-card group bg-white hover:bg-white border border-gray-100 hover:border-gray-200 rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={26} style={{ color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[15px] mb-5 flex-1">
                    {svc.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.slice(0, 3).map((f, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2
                          size={14}
                          style={{ color }}
                          className="shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-colors group/link"
                    style={{ color }}
                  >
                    {svc.cta}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover/link:opacity-100 transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                </div>
              );
            })}
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
            Ready to Transform
            <br />
            Your Operations?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10 font-medium">
            From automation to digital growth — we deliver end-to-end solutions
            tailored for your business domain.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-gray-950 rounded-full font-bold text-base hover:bg-gray-100 transition-colors shadow-lg shadow-black/10 flex items-center gap-2"
            >
              Get Started Today
              <ChevronRight size={18} />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-bold text-base hover:bg-white/20 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
