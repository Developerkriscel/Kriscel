"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Briefcase, Users, MessageSquare, Globe, ArrowRight } from "lucide-react";
import { API_URL } from "@/lib/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ jobs: 0, apps: 0, msgs: 0, seo: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("kriscel_admin_token");
      const headers = { "Authorization": `Bearer ${token}` };

      try {
        const [jobsRes, appsRes, msgsRes, seoRes] = await Promise.all([
          fetch(`${API_URL}/jobs`, { headers }).catch(() => null),
          fetch(`${API_URL}/applications`, { headers }).catch(() => null),
          fetch(`${API_URL}/contact`, { headers }).catch(() => null),
          fetch(`${API_URL}/seo`, { headers }).catch(() => null),
        ]);
        
        const jobs = jobsRes && jobsRes.ok ? await jobsRes.json() : { data: [] };
        const apps = appsRes && appsRes.ok ? await appsRes.json() : { data: [] };
        const msgs = msgsRes && msgsRes.ok ? await msgsRes.json() : { data: [] };
        const seo = seoRes && seoRes.ok ? await seoRes.json() : { data: [] };

        setStats({
          jobs: jobs.data?.length || 0,
          apps: apps.data?.length || 0,
          msgs: msgs.data?.length || 0,
          seo: seo.data?.length || 0
        });
      } catch (e) {
        console.error("Failed to fetch stats", e);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
      <header className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">System Overview</h2>
        <p className="text-slate-400 mt-2">Monitor your entire platform infrastructure from one place.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-emerald-500/50 transition-colors shadow-2xl shadow-black/50">
           <div className="absolute -top-4 -right-4 p-6 opacity-5 group-hover:scale-110 transition-transform duration-500">
             <Briefcase size={120} />
           </div>
           <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Active Jobs</p>
           <h3 className="text-5xl font-black text-white tracking-tighter">{stats.jobs}</h3>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-amber-500/50 transition-colors shadow-2xl shadow-black/50">
           <div className="absolute -top-4 -right-4 p-6 opacity-5 group-hover:scale-110 transition-transform duration-500">
             <Users size={120} />
           </div>
           <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Pending Applicants</p>
           <h3 className="text-5xl font-black text-white tracking-tighter">{stats.apps}</h3>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-rose-500/50 transition-colors shadow-2xl shadow-black/50">
           <div className="absolute -top-4 -right-4 p-6 opacity-5 group-hover:scale-110 transition-transform duration-500">
             <MessageSquare size={120} />
           </div>
           <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Unread Messages</p>
           <h3 className="text-5xl font-black text-white tracking-tighter">{stats.msgs}</h3>
        </div>

        <Link href="/admin/seo" className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-violet-500/50 transition-colors shadow-2xl shadow-black/50 block">
           <div className="absolute -top-4 -right-4 p-6 opacity-5 group-hover:scale-110 transition-transform duration-500">
             <Globe size={120} />
           </div>
           <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">SEO Optimized Pages</p>
           <h3 className="text-5xl font-black text-white tracking-tighter">{stats.seo}</h3>
           <div className="mt-4 flex items-center gap-2 text-violet-400 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Manage Metadata <ArrowRight size={12} />
           </div>
        </Link>
      </div>
      
      {/* Visual Apple/Framer Decorator */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
    </div>
  );
}
