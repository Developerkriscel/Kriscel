"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Briefcase, Users, MessageSquare, LayoutDashboard, LogOut, Newspaper, Layers, Settings2, Globe } from "lucide-react";
import ProtectedAdmin from "@/components/ProtectedAdmin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("kriscel_admin_token");
    router.push("/admin/login");
  };

  return (
    <ProtectedAdmin>
      <div className="min-h-screen bg-slate-950 text-slate-50 flex font-sans">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-800 bg-slate-950/50 backdrop-blur-xl flex flex-col">
          <div className="p-6 border-b border-slate-800">
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">Kriscel Admin</h1>
            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">Command Center</p>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all hover:translate-x-1">
              <LayoutDashboard size={18} className="text-accent" /> Overview
            </Link>
            <Link href="/admin/jobs" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all hover:translate-x-1">
              <Briefcase size={18} className="text-emerald-400" /> Job Postings
            </Link>
            <Link href="/admin/applications" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all hover:translate-x-1">
              <Users size={18} className="text-amber-400" /> Applicants
            </Link>
            <Link href="/admin/messages" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all hover:translate-x-1">
              <MessageSquare size={18} className="text-rose-400" /> Inbox
            </Link>
            <Link href="/admin/insights" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all hover:translate-x-1">
              <Newspaper size={18} className="text-accent" /> Blogs
            </Link>
            <Link href="/admin/services" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all hover:translate-x-1">
              <Layers size={18} className="text-pink-400" /> Services CMS
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all hover:translate-x-1">
              <Settings2 size={18} className="text-accent" /> Settings
            </Link>
            <Link href="/admin/seo" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all hover:translate-x-1">
              <Globe size={18} className="text-violet-400" /> SEO Management
            </Link>
          </nav>

          <div className="p-4 border-t border-slate-800 space-y-2">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-colors"
            >
              <LogOut size={18} /> Logout
            </button>
            <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <LayoutDashboard size={18} /> Main Site
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8 md:p-12 max-w-7xl mx-auto h-full relative">
             {children}
          </div>
        </main>
      </div>
    </ProtectedAdmin>
  );
}
