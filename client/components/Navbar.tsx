"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { API_URL } from "@/lib/api";

const SOLUTIONS_COLS = [
  [
    {
      title: "Business Automation",
      href: "/business-automation",
      links: [
        { name: "Inventory Management System", href: "/inventory-management-system" },
        { name: "Production Management System", href: "/production-management-system" },
        { name: "Purchase Management System", href: "/purchase-management-system" },
        { name: "HR Management System", href: "/hr-management-system" },
        { name: "Employee Task Management System", href: "/employee-task-management-system" },
        { name: "Account Management System", href: "/account-management-system" },
      ]
    }
  ],
  [
    {
      title: "Digital Marketing",
      href: "/digital-marketing",
      links: [
        { name: "Search Engine Optimization (SEO)", href: "/search-engine-optimization" },
        { name: "Social media optimization (SMO)", href: "/social-media-optimization" },
        { name: "Paid Ads Management", href: "/paid-ads-management" },
        { name: "GMB Creation", href: "/gmb-creation" },
        { name: "Content Marketing", href: "/content-marketing" },
        { name: "Web Development", href: "/web-development" },
        { name: "Web Designing", href: "/web-designing" },
        { name: "Online reputation Management", href: "/online-reputation-management" },
        { name: "Indiamart Account Management", href: "/indiamart-account-management" },
      ]
    }
  ],
  [
    {
      title: "Ecommerce Services",
      href: "/ecommerce-services",
      links: [
        { name: "Account Creation", href: "/account-creation" },
        { name: "Account Management", href: "/account-management" },
        { name: "Catalog Management", href: "/catalog-management" },
        { name: "ADS Campaign Management", href: "/ads-campaign-management" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Recruitment", href: "/recruitment" }
      ]
    }
  ]
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [dynamicSolutions, setDynamicSolutions] = useState(SOLUTIONS_COLS);

  useEffect(() => {
    fetch(`${API_URL}/services`)
      .then(res => {
        if (!res.ok) throw new Error('API down');
        return res.json();
      })
      .then(data => {
        if(data && data.success && data.data) {
          const newCols = JSON.parse(JSON.stringify(SOLUTIONS_COLS));
          data.data.forEach((svc: any) => {
             let found = false;
             for (let col = 0; col < newCols.length; col++) {
               for (let block = 0; block < newCols[col].length; block++) {
                 if (newCols[col][block].title === svc.category) {
                   newCols[col][block].links.push({ name: svc.title, href: `/${svc.slug}` });
                   found = true;
                 }
               }
             }
             if(!found && svc.category) {
               newCols[2].push({ title: svc.category, links: [{ name: svc.title, href: `/${svc.slug}` }] });
             }
          });
          setDynamicSolutions(newCols);
        }
      })
      .catch(err => console.error("Error fetching dynamic services", err));
  }, []);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <>
      <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-4 md:px-6 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center h-12 md:h-14">
            <Image
              src="/images/kriscel-logo.png"
              alt="Kriscel Tech"
              width={160}
              height={40}
              priority
              className="h-full w-auto scale-[3.5] transition-transform origin-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 transition-colors duration-300">
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>

            {/* Solutions Dropdown Trigger */}
            <div
              className="relative py-4"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href="/solutions"
                className={`flex items-center gap-1 transition-colors ${activeDropdown === 'solutions' ? 'text-accent' : 'hover:text-accent'}`}
              >
                Solutions <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </Link>

              {/* Solutions Mega Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-max bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 transition-all duration-300 origin-top ${activeDropdown === 'solutions' ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'}`}
              >
                <div className="grid grid-cols-3 gap-12 text-left">
                  {dynamicSolutions.map((column, idx) => (
                    <div key={idx} className="flex flex-col gap-10 min-w-[220px]">
                      {column.map((category, cIdx) => (
                        <div key={cIdx} className="flex flex-col">
                          {category.href ? (
                            <Link href={category.href} className="text-xs font-black tracking-[0.2em] text-accent uppercase mb-4 border-b border-gray-100 pb-2 hover:text-brand-navy transition-colors block">
                              {category.title}
                            </Link>
                          ) : (
                             <h4 className="text-xs font-black tracking-[0.2em] text-accent uppercase mb-4 border-b border-gray-100 pb-2">
                               {category.title}
                             </h4>
                          )}
                          <ul className="flex flex-col gap-3">
                            {category.links.map((item, i) => (
                              <li key={i}>
                                <Link href={item.href} className="text-gray-600 hover:text-accent hover:translate-x-1 flex items-center gap-2 transition-all text-[13px] group">
                                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300"><ChevronRight size={12} className="text-accent" /></span>
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <Link href="/clients" className="hover:text-accent transition-colors">Clients</Link>
            <Link href="/blogs" className="hover:text-accent transition-colors text-accent font-bold">Blogs</Link>
            <Link href="/careers" className="hover:text-accent transition-colors">Careers</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden md:inline-block px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:bg-gray-800 transition-colors duration-300 shadow-md">
              Let&apos;s Talk
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-foreground/5 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-start pt-24 pb-8 px-6 animate-in fade-in duration-200 overflow-y-auto">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl bg-foreground/5 text-foreground"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>

          <div className="w-full flex flex-col gap-6 text-center">
            <Link href="/about" onClick={() => setMobileOpen(false)} className="text-2xl font-bold text-foreground hover:text-accent transition-colors">About</Link>

            {/* Mobile Solutions Accordion */}
            <div className="flex flex-col items-center w-full border-y border-gray-100 py-2">
              <Link 
                href="/solutions"
                onClick={(e) => {
                   // If they click Exactly on the word Solutions, go to page. 
                   // If they click near the icon, just toggle.
                   // Actually, for mobile, it's better to just navigate if they tap.
                   setMobileOpen(false);
                }}
                className="text-2xl font-bold text-foreground hover:text-accent flex items-center justify-center gap-2 w-full transition-colors"
              >
                Solutions
              </Link>
              <button
                onClick={() => setMobileDropdown(mobileDropdown === 'solutions' ? null : 'solutions')}
                className="absolute right-0 p-2"
              >
                <ChevronDown size={20} className={`transition-transform ${mobileDropdown === 'solutions' ? 'rotate-180 text-accent' : ''}`} />
              </button>

              {mobileDropdown === 'solutions' && (
                <div className="w-full flex flex-col gap-6 mt-6 animate-in slide-in-from-top-4 duration-300 text-left px-4">
                  {dynamicSolutions.flat().map((cat, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      {cat.href ? (
                        <Link 
                          href={cat.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-[10px] font-bold tracking-widest text-accent uppercase hover:text-brand-navy transition-colors"
                        >
                          {cat.title}
                        </Link>
                      ) : (
                        <span className="text-[10px] font-bold tracking-widest text-accent uppercase">{cat.title}</span>
                      )}
                      {cat.links.map((link, i) => (
                        <Link
                          key={i}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-[15px] font-medium text-gray-600 hover:text-accent py-1"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>


            <Link href="/clients" onClick={() => setMobileOpen(false)} className="text-2xl font-bold text-foreground hover:text-accent transition-colors">Clients</Link>
            <Link href="/blogs" onClick={() => setMobileOpen(false)} className="text-2xl font-bold text-accent transition-colors">Blogs</Link>
            <Link href="/careers" onClick={() => setMobileOpen(false)} className="text-2xl font-bold text-foreground hover:text-accent transition-colors">Careers</Link>
          </div>

          <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-8 px-8 py-3 bg-accent text-white font-bold rounded-full text-lg shadow-xl shadow-accent/20">
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </>
  );
}
