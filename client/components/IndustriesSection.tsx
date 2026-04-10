"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingCart, Factory, Laptop, Pill, Landmark, Globe } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INDUSTRIES = [
  {
    id: "retail",
    icon: <ShoppingCart className="w-7 h-7" />,
    title: "Retail & Commerce",
    desc: "From neighborhood stores to global e-commerce portals.",
    color: "from-accent to-accent",
    label: "Commerce Excellence"
  },
  {
    id: "manufacturing",
    icon: <Factory className="w-7 h-7" />,
    title: "Factories & Industrial",
    desc: "Empowering local manufacturing with smart automation.",
    color: "from-orange-600 to-amber-500",
    label: "Production Mastery"
  },
  {
    id: "it",
    icon: <Laptop className="w-7 h-7" />,
    title: "Tech & Digital Solutions",
    desc: "Innovative software designed for the next billion users.",
    color: "from-accent to-violet-500",
    label: "Digital Innovation"
  },
  {
    id: "healthcare",
    icon: <Pill className="w-7 h-7" />,
    title: "Health & Pharmaceutics",
    desc: "Accessible and modern digital health for everyone.",
    color: "from-emerald-600 to-teal-400",
    label: "Life Sciences Expert"
  },
  {
    id: "finance",
    icon: <Landmark className="w-7 h-7" />,
    title: "Banking & Fintech",
    desc: "Expanding financial reach through secure technology.",
    color: "from-slate-700 to-slate-900",
    label: "Fiscal Depth"
  },
  {
    id: "multisector",
    icon: <Globe className="w-7 h-7" />,
    title: "Multisector Mastery",
    desc: "Deep expertise across diverse and growing domains.",
    color: "from-rose-600 to-pink-500",
    label: "Strategic Growth"
  },
];

const IndustryCard = ({ industry }: { industry: typeof INDUSTRIES[0] }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-56 w-full group cursor-pointer"
    >
      <div
        style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-500 group-hover:bg-white/80 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
      >
        <div className={`absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 blur-[40px] pointer-events-none`} />

        <div className="p-6 flex flex-col items-center justify-center text-center h-full">
          <div
            style={{ transform: "translateZ(60px)" }}
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}
          >
            {industry.icon}
          </div>

          <div className="mt-4" style={{ transform: "translateZ(50px)" }}>
            <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-gray-400 group-hover:text-accent transition-colors duration-300">
              {industry.label}
            </span>
            <h4 className="text-lg font-bold text-gray-900 mt-1">{industry.title}</h4>
            <p className="text-[12px] text-gray-500 mt-2 leading-tight opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              {industry.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".industry-card-wrap", {
        y: 40,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 px-6 bg-[#fafafa] relative overflow-hidden flex flex-col items-center"
      style={{ perspective: "1200px" }}
    >
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-[0.4em] mb-3">
            Diverse Domain Expertise & Depth
          </h2>
          <h3 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight relative inline-block">
            Driving <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900">Multisector Growth</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {INDUSTRIES.map((industry) => (
            <div key={industry.id} className="industry-card-wrap">
              <IndustryCard industry={industry} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-40">
          {["Local Commerce", "Manufacturing Excellence", "Next-Gen Tech Solutions", "Healthcare Innovation", "Financial Inclusion"].map((tag) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-gray-900 whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Cinematic Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/5/20 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-orange-100/20 to-transparent blur-[100px] pointer-events-none" />
    </section>
  );
}
