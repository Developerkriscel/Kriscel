"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Users2, Handshake, Trophy } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  {
    target: 3487,
    suffix: "+",
    label: "Happy Customers",
    icon: <Users2 size={28} className="text-gray-900" />,
  },
  {
    target: 20,
    suffix: "+",
    label: "Team Members",
    icon: <Users size={28} className="text-gray-900" />,
  },
  {
    target: 2387,
    suffix: "+",
    label: "Project Completed",
    icon: <Handshake size={28} className="text-gray-900" />,
  },
  {
    target: 10,
    suffix: " +",
    label: "Year Experience",
    icon: <Trophy size={28} className="text-gray-900" />,
  },
];

export default function GrowthStats() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // 1. Staggered Entrance Animation
      gsap.from(".stat-card", {
        y: 40,
        opacity: 0,
        scale: 0.9,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".stat-grid",
          start: "top 85%",
        }
      });

      // 2. Stats numbers counter animation
      const statElements = containerRef.current?.querySelectorAll(".stat-number");
      statElements?.forEach((stat: any, i: number) => {
        const targetValue = STATS[i].target;
        gsap.fromTo(stat, 
          { innerText: 0 },
          { 
            innerText: targetValue, 
            duration: 2.5, 
            snap: { innerText: 1 },
            ease: "expo.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
            }
          }
        );
      });

      // 3. Interactive Premium Canvas (Subtle Particle Field)
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const c = canvas.getContext("2d")!;
        let w: number, h: number;
        let particles: any[] = [];
        const particleCount = 60;

        const resize = () => {
          if (!containerRef.current) return;
          w = canvas.width = window.innerWidth;
          h = canvas.height = containerRef.current.offsetHeight;
        };

        class Particle {
          x: number; y: number; size: number; moveX: number; moveY: number;
          constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.size = Math.random() * 2 + 1;
            this.moveX = (Math.random() - 0.5) * 0.5;
            this.moveY = (Math.random() - 0.5) * 0.5;
          }
          update() {
            this.x += this.moveX;
            this.y += this.moveY;
            if (this.x > w) this.x = 0; if (this.x < 0) this.x = w;
            if (this.y > h) this.y = 0; if (this.y < 0) this.y = h;
          }
          draw() {
            c.beginPath();
            c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            c.fillStyle = "rgba(0, 0, 0, 0.03)";
            c.fill();
          }
        }

        const init = () => {
          particles = [];
          for (let i = 0; i < particleCount; i++) particles.push(new Particle());
        };

        const animate = () => {
          c.clearRect(0, 0, w, h);
          particles.forEach(p => {
            p.update();
            p.draw();
          });
          requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        resize();
        init();
        animate();
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-16 px-6 bg-white relative overflow-hidden">
      {/* Premium Interactive Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
           <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-2">Proven Excellence</h2>
           <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
             Scale Your <span className="bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent italic">Impact.</span>
           </h3>
        </div>

        <div className="stat-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
           {STATS.map((stat, i) => (
             <div key={i} className="stat-card flex flex-col items-center text-center group">
               {/* Premium Circular Icon Container */}
               <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-500 relative bg-white">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
                  <div className="relative z-10 transition-transform duration-500 group-hover:rotate-12 scale-75 md:scale-90">
                    {stat.icon}
                  </div>
               </div>

               {/* Statistics Content */}
               <p className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-1 flex items-baseline">
                 <span className="stat-number">{stat.target}</span>
                 <span className="text-gray-400 text-2xl ml-0.5">{stat.suffix}</span>
               </p>
               <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 leading-tight">
                 {stat.label}
               </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
