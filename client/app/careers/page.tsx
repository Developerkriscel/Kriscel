"use client";

import type { Metadata } from "next";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Search, MapPin, Briefcase, Filter, ArrowRight } from "lucide-react";
import { API_URL } from "@/lib/api";

export default function CareersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${API_URL}/jobs?status=Active`);
        if (res.ok) {
          const json = await res.json();
          setJobs(json.data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      if (!containerRef.current) return;
      const ctx = gsap.context(() => {
        gsap.from(".job-card", {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
        });
        
        // Freeform floating elements
        gsap.to(".floating-orb-1", { y: -30, x: 20, rotation: 10, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".floating-orb-2", { y: 40, x: -30, rotation: -15, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [jobs]);

  const filteredJobs = jobs.filter((job: any) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || job.description.toLowerCase().includes(search.toLowerCase());
    const matchesDept = department === "All" || job.department === department;
    return matchesSearch && matchesDept;
  });

  const departments = ["All", ...Array.from(new Set(jobs.map((j: any) => j.department)))];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fafafa] pt-32 pb-24 overflow-hidden relative">
      {/* Apple Freeform Inspired Background */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="floating-orb-1 absolute top-[10%] left-[5%] w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="floating-orb-2 absolute top-[30%] right-[10%] w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-bold tracking-widest text-slate-500 uppercase mb-6 backdrop-blur-md">
            Join Kriscel Tech
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-6">
            Career
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            We are looking for passionate builders, designers, and engineers to craft the next generation of business automation.
          </p>
        </header>

        {/* Framer-style Glass Filter Bar */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-12 flex flex-col md:flex-row gap-4 sticky top-24 z-30">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search roles, keywords..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-slate-900 outline-none focus:ring-2 ring-accent/10 transition-all font-medium"
            />
          </div>
          <div className="relative md:w-64">
             <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
             <select 
               value={department}
               onChange={(e) => setDepartment(e.target.value)}
               className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-slate-900 outline-none focus:ring-2 ring-accent/10 transition-all font-medium appearance-none cursor-pointer"
             >
               {departments.map((dep, i) => (
                 <option key={i} value={dep}>{dep}</option>
               ))}
             </select>
          </div>
        </div>

        {/* Job Listings Grid */}
        {jobs.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 border-4 border-accent/10 border-t-accent rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-slate-500 font-medium">Loading opportunities...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-24 bg-white/50 rounded-3xl border border-white backdrop-blur-sm">
            <Briefcase size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-700">No matching roles</h3>
            <p className="text-slate-500">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job: any) => (
              <Link href={`/careers/${job._id}`} key={job._id} className="job-card group bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-accent/20 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100%] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-accent/5 text-accent text-[11px] font-bold uppercase tracking-widest rounded-full">{job.department}</span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[11px] font-bold uppercase tracking-widest rounded-full">{job.type}</span>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-accent transition-colors">{job.title}</h3>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
                  <MapPin size={16} /> {job.location}
                </div>
                
                <p className="text-slate-500 text-sm line-clamp-2 mb-8">{job.description}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-bold text-slate-900 group-hover:text-accent transition-colors flex items-center gap-2">
                    View full details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
