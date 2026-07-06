"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
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

const showcaseCards = [
  {
    title: "Kriscel Tech Agency Website",
    subtitle:
      "A high-performance agency website showcasing automation, AI solutions, software development, and digital transformation.",
    description:
      "This brand platform demonstrates expertise across automation, software development, AI integration, and digital marketing using advanced animations, conversion-focused layouts, and strategic hierarchy.",
    image: "/images/kriscel-agency-showcase.png",
    meta: "Showcase Website",
    accent: "from-accent/20 to-indigo-500/10",
    link: "https://kriscel.com/",
    tags: [
      "Service ecosystem presentation",
      "AI & automation showcase",
      "Interactive animations",
      "Lead generation funnels",
      "React.js",
      "GSAP",
      "Framer Motion",
      "Tailwind CSS",
    ],
  },
  {
    title: "Symo Developers",
    subtitle:
      "A premium real estate and property development website designed to showcase residential and commercial projects through modern architecture-inspired design and conversion-focused user experiences.",
    description:
      "Symo Developers was created to establish a strong digital presence for a real estate and construction brand. The site communicates trust, quality craftsmanship, and project excellence while generating qualified leads from potential buyers and investors through large visual sections, project highlights, and clear calls-to-action.",
    image: "/images/showcase/symo-developers-home-v2.png",
    meta: "Property Website",
    accent: "from-amber-400/20 to-yellow-500/10",
    link: "https://symo-devlopers.vercel.app/",
    tags: [
      "Property showcase sections",
      "Modern architectural UI",
      "Lead generation forms",
      "Trust-building company overview",
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "Lisha Engineers",
    subtitle:
      "An infrastructure and construction website designed to present engineering credibility through a bold hero section, clear service navigation, and a trust-first visual style.",
    description:
      "The page highlights large-scale civil work with a strong brand message, combining project-driven storytelling, structured navigation, and a high-impact visual layout to communicate experience across roads, metros, flyovers, bridges, and highways.",
    image: "/images/showcase/lisha-engineers-home-new.png",
    meta: "Infrastructure Website",
    accent: "from-slate-400/20 to-blue-500/10",
    link: "https://lisha-engineers-8zrk.onrender.com/",
    tags: [
      "Construction brand presentation",
      "Engineering credibility",
      "Hero-led storytelling",
      "Project showcase layout",
      "Trust-focused UI",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Kriscel EV",
    subtitle:
      "A premium electric scooter and bike website designed to showcase modern mobility, performance, and a futuristic brand experience.",
    description:
      "Kriscel EV presents electric scooters and bikes through a bold hero section, high-contrast visuals, and conversion-focused navigation that highlights range, charging, and test ride booking.",
    image: "/images/showcase/kriscel-ev-home.png",
    meta: "Electric Mobility Website",
    accent: "from-slate-300/20 to-cyan-500/10",
    link: "https://kriscel-ev-o82g.onrender.com/",
    tags: [
      "Electric vehicle hero showcase",
      "Premium mobility branding",
      "Feature-rich product sections",
      "Call-to-action focused layout",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "Modern UI",
    ],
  },
  {
    title: "Shoes Manufacturers Website",
    subtitle:
      "A modern B2B footwear manufacturing platform built to attract wholesalers, distributors, and international buyers.",
    description:
      "This experience emphasizes manufacturing expertise, production quality, and scalability through visual storytelling, factory highlights, and interactive product displays.",
    image: "/images/showcase/shoes-manufacturers-home-v2.png",
    meta: "Footwear Manufacturing",
    accent: "from-stone-400/20 to-amber-500/10",
    link: "https://shoes-manufacturers.onrender.com/",
    mediaClassName: "relative h-[165px] sm:h-[185px] overflow-hidden bg-[#f7ebd2]",
    imageClassName: "object-cover object-top",
    imageHoverClassName: "group-hover:scale-[1.05]",
    useNativeImage: true,
    tags: [
      "Manufacturing process showcase",
      "Product catalog",
      "Factory capability sections",
      "Inquiry generation forms",
      "React.js",
      "GSAP",
      "Tailwind CSS",
      "Node.js",
    ],
  },
  {
    title: "Jewelry E-Commerce Website",
    subtitle:
      "A luxury jewelry showcase designed to elevate premium products through immersive visuals and refined shopping journeys.",
    description:
      "Built to create a high-end digital presence for a jewelry brand, the layout focuses on luxury, craftsmanship, and exclusivity through elegant typography, premium spacing, and smooth interaction design.",
    image: "/images/showcase/jewellery-ecommerce-home.png",
    meta: "Luxury E-Commerce",
    accent: "from-stone-200/20 to-amber-300/10",
    link: "https://jewellery-09ej.onrender.com/",
    tags: [
      "Luxury UI design",
      "Product showcase galleries",
      "Smooth GSAP animations",
      "Mobile-first responsive design",
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "Luxury Watches Website",
    subtitle:
      "A premium watch brand website focused on craftsmanship, heritage, and product excellence.",
    description:
      "The design showcases luxury timepieces through cinematic product presentation, smooth transitions, and high-end aesthetics that feel elevated and timeless.",
    image: "/images/showcase/kriscel-watches-home.png",
    meta: "Luxury Watches",
    accent: "from-stone-300/20 to-amber-400/10",
    link: "https://kriscel-watches.onrender.com/",
    tags: [
      "Luxury product displays",
      "Product collections",
      "Scroll storytelling",
      "Premium animations",
      "React.js",
      "GSAP",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Cookie Haven",
    subtitle:
      "A premium cookies website showcasing handcrafted cookies through mouth-watering visuals and modern design.",
    description:
      "Cookie Haven presents signature cookies and featured collections through an attractive, engaging digital experience that highlights freshness, quality, and brand personality.",
    image: "/images/showcase/cookie-haven-home-v2.png",
    meta: "Bakery E-Commerce",
    accent: "from-amber-200/20 to-orange-400/10",
    link: "https://cookies-o829.onrender.com/",
    mediaClassName: "relative h-[165px] sm:h-[185px] overflow-hidden bg-[#f7ebd2]",
    imageClassName: "object-cover object-top",
    imageHoverClassName: "group-hover:scale-[1.05]",
    overlayClassName: "bg-transparent",
    useNativeImage: true,
    tags: [
      "Cookie showcase sections",
      "Featured product collections",
      "Modern bakery UI",
      "Smooth scroll animations",
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "Fire Safety Website",
    subtitle:
      "A professional corporate website for the fire protection industry focused on trust, compliance, and lead generation.",
    description:
      "The platform presents a fire safety company as an industry leader through structured information architecture, clear service categorization, and trust-focused design.",
    image: "/images/showcase/fire-safety-home.png",
    meta: "Fire Protection",
    accent: "from-red-400/20 to-orange-500/10",
    link: "https://fire-safety-website.onrender.com/",
    tags: [
      "Service showcases",
      "Compliance information",
      "Product catalogs",
      "Quote request system",
      "React.js",
      "GSAP",
      "Tailwind CSS",
      "Form Integration",
    ],
  },
  {
    title: "Vidhi Satya Law Associates",
    subtitle:
      "A professional legal services website designed to establish authority, trust, and credibility.",
    description:
      "The platform communicates legal expertise through a structured interface, intuitive navigation, and a trust-focused design system that helps clients find the right information quickly.",
    image: "/images/showcase/vidhi-satya-home-v1.png",
    meta: "Legal Services",
    accent: "from-emerald-400/20 to-lime-500/10",
    link: "https://vidhisatya.com/",
    tags: [
      "Legal service showcase",
      "Attorney profiles",
      "Consultation forms",
      "Professional UI design",
      "React.js",
      "Responsive Design",
      "SEO Optimization",
      "Form Integrations",
    ],
  },
  {
    title: "Indian Foods",
    subtitle:
      "A vibrant restaurant website celebrating authentic Indian cuisine through engaging food presentation, modern UI design, and seamless customer interaction.",
    description:
      "Indian Foods was developed to create a compelling online presence for an Indian food brand. The platform showcases traditional dishes, culturally inspired storytelling, and intuitive navigation to create a memorable experience that reflects the richness of Indian cuisine while improving customer engagement and food exploration.",
    image: "/images/showcase/indian-foods-home-v1.png",
    meta: "Restaurant Website",
    accent: "from-orange-400/20 to-amber-500/10",
    link: "https://indian-foods-malvika.vercel.app/",
    tags: [
      "Interactive menu sections",
      "Food showcase galleries",
      "Mobile-first experience",
      "Customer engagement sections",
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "Restaurant Royale",
    subtitle:
      "A premium restaurant website showcasing culinary experiences through immersive food visuals and elegant layouts.",
    description:
      "Restaurant Royale presents signature dishes, dining atmosphere, and menu discovery through a modern, visually rich restaurant experience.",
    image: "/images/showcase/restaurant-royale-home-v1.png",
    meta: "Restaurant Website",
    accent: "from-rose-400/20 to-orange-500/10",
    link: "https://restaurants-mjrx.onrender.com/",
    tags: [
      "Food showcase sections",
      "Interactive menu presentation",
      "Featured dishes display",
      "Contact and reservation sections",
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "Handicrafts Heritage",
    subtitle:
      "A handcrafted products showcase website highlighting traditional artistry through elegant visuals and a modern user experience.",
    description:
      "Handicrafts Heritage presents handmade products and artisan collections through a clean, premium layout that strengthens brand credibility and visual storytelling.",
    image: "/images/showcase/handicrafts-heritage-home-v1.png",
    meta: "Handicrafts Website",
    accent: "from-amber-400/20 to-stone-500/10",
    link: "https://handicrafts-3789.onrender.com/",
    tags: [
      "Handicraft product showcase sections",
      "Artisan collection displays",
      "Modern handcrafted-inspired UI",
      "Smooth scroll animations",
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
];

type ShowcaseCardData = (typeof showcaseCards)[number] & {
  mediaClassName?: string;
  imageClassName?: string;
  imageHoverClassName?: string;
  overlayClassName?: string;
  useNativeImage?: boolean;
};

function ShowcaseCard({
  card,
  onHoverChange,
}: {
  card: ShowcaseCardData;
  onHoverChange?: (isHovering: boolean) => void;
}) {
  const imageClassName = card.imageClassName ?? "object-cover";
  const imageHoverClassName = card.imageHoverClassName ?? "group-hover:scale-[1.05]";
  const overlayClassName =
    card.overlayClassName ?? "bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent";
  const mediaClassName = card.mediaClassName ?? "relative h-[165px] sm:h-[185px] overflow-hidden bg-gradient-to-br";
  const useNativeImage = card.useNativeImage ?? false;

  return (
    <article
      className="reveal-card relative shrink-0 w-[54vw] sm:w-[280px] lg:w-[340px] rounded-[1.1rem] bg-slate-50 border border-slate-100 shadow-[0_14px_34px_-18px_rgba(0,0,0,0.15)] overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:z-20 hover:shadow-[0_24px_48px_-14px_rgba(0,0,0,0.24)] cursor-pointer"
      data-showcase-link={card.link ?? ""}
      onPointerEnter={() => onHoverChange?.(true)}
      onPointerLeave={() => onHoverChange?.(false)}
    >
      <div className={`${mediaClassName} ${card.mediaClassName ? "" : card.accent}`}>
        {useNativeImage ? (
          // Native image avoids Next/Image optimization issues for this specific screenshot asset.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={card.image}
            alt={card.title}
            className={`${imageClassName} absolute inset-0 h-full w-full transition-transform duration-700 ${imageHoverClassName}`}
          />
        ) : (
          <Image
            src={card.image}
            alt={card.title}
            fill
            className={`${imageClassName} transition-transform duration-700 ${imageHoverClassName}`}
            sizes="(max-width: 640px) 62vw, (max-width: 1024px) 330px, 430px"
          />
        )}
        <div className={`absolute inset-0 ${overlayClassName}`} />
        <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-slate-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {card.meta}
        </div>
      </div>

      <div className="h-[205px] p-2 sm:p-2.5 bg-white flex flex-col overflow-hidden">
        <h4 className="h-[20px] overflow-hidden whitespace-nowrap text-ellipsis text-sm sm:text-base font-black text-slate-950 tracking-tight mb-1">
          {card.title}
        </h4>
        <p className="h-[34px] overflow-hidden text-slate-500 text-[10px] sm:text-[11px] leading-relaxed mb-1.5 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {card.subtitle}
        </p>
        <p className="h-[50px] overflow-hidden text-slate-500 text-[10px] sm:text-[11px] leading-relaxed mb-2 [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
          {card.description}
        </p>
        <div className="h-[48px] shrink-0 flex flex-wrap content-start gap-1 mb-2 overflow-hidden">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[8px] sm:text-[9px] text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[8px] font-black uppercase tracking-[0.16em] text-slate-400">
            Horizontal showcase
          </span>
          {card.link ? (
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-[11px] font-black text-accent"
            >
              Explore
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-accent">
              Explore
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

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
  const showcaseTrackRef = useRef<HTMLDivElement>(null);
  const showcaseFirstSetRef = useRef<HTMLDivElement>(null);
  const showcaseViewportRef = useRef<HTMLDivElement>(null);
  const showcaseAnimationRef = useRef<number | null>(null);
  const showcaseOffsetRef = useRef(0);
  const showcaseSpeedRef = useRef(0.55);
  const showcasePauseUntilRef = useRef(0);
  const showcaseDragRef = useRef({
    isDragging: false,
    hasMoved: false,
    startX: 0,
    startOffset: 0,
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const applyShowcaseOffset = () => {
    const track = showcaseTrackRef.current;
    const firstSet = showcaseFirstSetRef.current;
    const setWidth = firstSet?.offsetWidth ?? 0;

    if (!track || setWidth === 0) return;

    if (showcaseOffsetRef.current <= -setWidth) {
      showcaseOffsetRef.current += setWidth;
    }

    if (showcaseOffsetRef.current > 0) {
      showcaseOffsetRef.current -= setWidth;
    }

    gsap.set(track, { x: showcaseOffsetRef.current });
  };

  const handleShowcaseHoverChange = (isHovering: boolean) => {
    showcaseSpeedRef.current = isHovering ? 0.14 : 0.55;
  };

  const getShowcaseCards = () => {
    const firstSet = showcaseFirstSetRef.current;
    if (!firstSet) return [];

    return Array.from(firstSet.querySelectorAll("article")) as HTMLElement[];
  };

  const getCenteredShowcaseIndex = () => {
    const viewport = showcaseViewportRef.current;
    const cards = getShowcaseCards();

    if (!viewport || cards.length === 0) return 0;

    const viewportRect = viewport.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  const snapShowcaseToIndex = (targetIndex: number) => {
    const viewport = showcaseViewportRef.current;
    const cards = getShowcaseCards();
    const targetCard = cards[targetIndex];

    if (!viewport || !targetCard) return;

    const viewportRect = viewport.getBoundingClientRect();
    const targetRect = targetCard.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;
    const targetCenter = targetRect.left + targetRect.width / 2;

    showcaseOffsetRef.current += viewportCenter - targetCenter;
    showcasePauseUntilRef.current = Date.now() + 900;
    applyShowcaseOffset();
  };

  const getShowcaseStep = () => {
    const cards = getShowcaseCards();
    if (cards.length < 2) return cards[0]?.offsetWidth ?? 340;

    return cards[1].offsetLeft - cards[0].offsetLeft;
  };

  const nudgeShowcase = (direction: "left" | "right") => {
    const track = showcaseTrackRef.current;
    const firstSet = showcaseFirstSetRef.current;
    const setWidth = firstSet?.offsetWidth ?? 0;
    const step = getShowcaseStep();

    if (!track || step === 0) return;

    if (setWidth > 0) {
      if (direction === "right" && showcaseOffsetRef.current - step <= -setWidth) {
        showcaseOffsetRef.current += setWidth;
        applyShowcaseOffset();
      }

      if (direction === "left" && showcaseOffsetRef.current + step > 0) {
        showcaseOffsetRef.current -= setWidth;
        applyShowcaseOffset();
      }
    }

    const targetOffset =
      direction === "left"
        ? showcaseOffsetRef.current + step
        : showcaseOffsetRef.current - step;

    showcasePauseUntilRef.current = Date.now() + 1200;
    gsap.killTweensOf(showcaseOffsetRef);
    gsap.to(showcaseOffsetRef, {
      current: targetOffset,
      duration: 0.45,
      ease: "power2.out",
      onUpdate: applyShowcaseOffset,
      onComplete: applyShowcaseOffset,
    });
  };

  const openShowcaseCard = (link?: string) => {
    if (!link) return;

    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleShowcasePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.target instanceof Element && event.target.closest("a, button")) return;

    showcaseDragRef.current = {
      isDragging: true,
      hasMoved: false,
      startX: event.clientX,
      startOffset: showcaseOffsetRef.current,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleShowcasePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!showcaseDragRef.current.isDragging) return;

    if (Math.abs(event.clientX - showcaseDragRef.current.startX) > 6) {
      showcaseDragRef.current.hasMoved = true;
    }

    showcaseOffsetRef.current =
      showcaseDragRef.current.startOffset + event.clientX - showcaseDragRef.current.startX;
    applyShowcaseOffset();
  };

  const endShowcaseDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!showcaseDragRef.current.isDragging) return;

    const shouldOpenCard = !showcaseDragRef.current.hasMoved;
    showcaseDragRef.current.isDragging = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (shouldOpenCard) {
      const elementAtRelease = document.elementFromPoint(event.clientX, event.clientY);
      const cardElement = elementAtRelease?.closest("[data-showcase-link]") as HTMLElement | null;
      openShowcaseCard(cardElement?.dataset.showcaseLink);
    }
  };

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

  useEffect(() => {
    if (!mounted) return;

    const animateShowcase = () => {
      if (!showcaseDragRef.current.isDragging && Date.now() >= showcasePauseUntilRef.current) {
        showcaseOffsetRef.current -= showcaseSpeedRef.current;
        applyShowcaseOffset();
      }

      showcaseAnimationRef.current = requestAnimationFrame(animateShowcase);
    };

    showcaseAnimationRef.current = requestAnimationFrame(animateShowcase);

    return () => {
      if (showcaseAnimationRef.current !== null) {
        cancelAnimationFrame(showcaseAnimationRef.current);
      }
    };
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

      {/* HORIZONTAL SHOWCASE */}
      <section className="relative z-10 py-12 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8 reveal-item">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="text-xs font-black text-accent tracking-[0.2em] uppercase mb-2">Featured Builds</h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-[0.95]">
                Our Work. One Swipe Away.
              </h3>
            </div>
          </div>
        </div>

        <div ref={showcaseViewportRef} className="relative max-w-[100vw] mx-auto px-6">
          <div
            className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
            onPointerDown={handleShowcasePointerDown}
            onPointerMove={handleShowcasePointerMove}
            onPointerUp={endShowcaseDrag}
            onPointerCancel={endShowcaseDrag}
          >
            <div className="pointer-events-none absolute inset-y-1/2 left-0 right-0 z-20 hidden md:flex -translate-y-1/2 items-center justify-between px-2 lg:px-4">
              <button
                type="button"
                onClick={() => nudgeShowcase("left")}
                aria-label="Show previous web development project"
                className="pointer-events-auto -ml-2 h-14 w-14 rounded-full border border-slate-200 bg-white/95 backdrop-blur-md text-slate-950 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] transition-all hover:-translate-x-0.5 hover:border-accent hover:text-accent hover:shadow-lg active:scale-95 flex items-center justify-center"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => nudgeShowcase("right")}
                aria-label="Show next web development project"
                className="pointer-events-auto -mr-2 h-14 w-14 rounded-full bg-slate-950 text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] transition-all hover:translate-x-0.5 hover:bg-accent hover:shadow-lg active:scale-95 flex items-center justify-center"
              >
                <ArrowRight size={20} />
              </button>
            </div>

            <div
              ref={showcaseTrackRef}
              className="flex w-max gap-4 will-change-transform"
            >
              <div ref={showcaseFirstSetRef} className="flex w-max gap-4">
                {showcaseCards.map((card, idx) => (
                  <ShowcaseCard
                    key={`set-a-${idx}`}
                    card={card}
                    onHoverChange={handleShowcaseHoverChange}
                  />
                ))}
              </div>
              <div className="flex w-max gap-4" aria-hidden="true">
                {showcaseCards.map((card, idx) => (
                  <ShowcaseCard
                    key={`set-b-${idx}`}
                    card={card}
                    onHoverChange={handleShowcaseHoverChange}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center px-6 reveal-item">
          <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-3.5 text-sm font-black text-white shadow-[0_14px_30px_-12px_rgba(2,6,23,0.65)] transition-all hover:-translate-y-0.5 hover:scale-105 hover:bg-accent">
            Build My Platform
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
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
