"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Mail, User, Clock, Download, Loader2 } from "lucide-react";
import { API_URL } from "@/lib/api";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [exporting, setExporting] = useState(false);

  const fetchMessages = async () => {
    try {
      const res = await fetch(`${API_URL}/contact`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("kriscel_admin_token")}` }
      });
      if (res.ok) {
        const json = await res.json();
        setMessages(json.data);
      }
    } catch (e) { console.error(e); }
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      const token = localStorage.getItem("kriscel_admin_token");
      const res = await fetch(`${API_URL}/contact/export`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Export failed");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `kriscel-contacts-${new Date().toISOString().split("T")[0]}.xlsx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Export error:", e);
    } finally {
      setExporting(false);
    }
  };

  useEffect(() => { fetchMessages(); }, []);

  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-20">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <MessageSquare className="text-rose-400" /> Let's Talk Inbox
          </h2>
          <p className="text-slate-400 mt-1">Review contact inquiries across your SaaS platform.</p>
        </div>

        {/* Export Button */}
        <button
          onClick={handleExport}
          disabled={exporting || messages.length === 0}
          className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-emerald-900/30 whitespace-nowrap"
        >
          {exporting ? (
            <><Loader2 size={16} className="animate-spin" /> Exporting...</>
          ) : (
            <><Download size={16} className="group-hover:-translate-y-0.5 transition-transform" /> Export to Excel</>
          )}
        </button>
      </div>

      {messages.length === 0 ? (
         <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center shadow-2xl">
           <MessageSquare size={48} className="text-slate-700 mx-auto mb-4" />
           <p className="text-slate-500">No new messages in your inbox.</p>
         </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {messages.map((msg: any) => (
            <div key={msg._id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl hover:border-rose-500/30 transition-colors group relative overflow-hidden">
               {/* Accent glow on hover */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl group-hover:bg-rose-500/10 transition-colors pointer-events-none"></div>
               
               <div className="flex justify-between items-start border-b border-slate-800/50 pb-4 mb-4">
                 <div>
                   <h3 className="text-lg font-bold text-white mb-1">{msg.subject}</h3>
                   <div className="flex items-center gap-4 text-xs text-slate-400">
                     <span className="flex items-center gap-1"><User size={12} className="text-accent" /> {msg.name}</span>
                     <a href={`mailto:${msg.email}`} className="hover:text-white transition-colors flex items-center gap-1"><Mail size={12} className="text-rose-400" />{msg.email}</a>
                   </div>
                 </div>
                 <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-md border border-slate-800 shrink-0 ml-2">
                   <Clock size={10} /> {new Date(msg.createdAt).toLocaleDateString('en-IN')}
                 </span>
               </div>
               
               <div className="text-sm text-slate-300 leading-relaxed font-medium">
                 {msg.message}
               </div>

               {msg.requirement && (
                 <div className="mt-4 pt-4 border-t border-slate-800/50 text-xs text-slate-400">
                   <strong className="text-slate-300">Requirement:</strong> {msg.requirement}
                 </div>
               )}

               {msg.phone && (
                 <div className="mt-4 pt-4 border-t border-slate-800/50 text-xs text-slate-400">
                   <strong className="text-slate-300">Phone:</strong> {msg.phone}
                 </div>
               )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
