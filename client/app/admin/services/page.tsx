"use client";

import { useEffect, useState } from "react";
import { PlusCircle, Trash2, Edit2, Layers, ExternalLink } from "lucide-react";
import Link from "next/link";
import ProtectedAdmin from "@/components/ProtectedAdmin";
import { API_URL } from "@/lib/api";

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      const res = await fetch(`${API_URL}/services/admin/all`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("kriscel_admin_token")}` }
      });
      if (res.ok) {
        const json = await res.json();
        setServices(json.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchServices(); }, []);

  const deleteService = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service page? This action cannot be undone.")) return;
    try {
      await fetch(`${API_URL}/services/${id}`, { 
        method: "DELETE",
        headers: { "Authorization": `Bearer ${localStorage.getItem("kriscel_admin_token")}` }
      });
      fetchServices();
    } catch (e) { console.error(e); }
  };

  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <Layers className="text-pink-400" /> Services CMS
          </h2>
          <p className="text-slate-400 mt-1 flex items-center gap-2"> Manage dynamic pages and layout settings.</p>
        </div>
        <Link 
          href="/admin/services/new"
          className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide flex items-center gap-2 transition-colors shadow-lg shadow-pink-500/20"
        >
          <PlusCircle size={18} /> Create New Service
        </Link>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-950/50 border-b border-slate-800">
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Title / Slug</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Category</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Theme</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-500 animate-pulse">Loading Services...</td>
              </tr>
            ) : services.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-500">No dynamic services found. Create your first one!</td>
              </tr>
            ) : services.map((svc: any) => (
              <tr key={svc._id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                <td className="p-4">
                  <p className="font-bold text-white">{svc.title}</p>
                  <p className="text-xs text-slate-400 mt-1 font-mono">/{svc.slug}</p>
                </td>
                <td className="p-4 text-sm text-slate-300">
                  <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md text-xs font-medium">{svc.category}</span>
                </td>
                <td className="p-4">
                  <span className="flex items-center gap-2 text-xs font-medium text-slate-300 capitalize">
                    <span className={`w-3 h-3 rounded-full bg-${svc.themeColor || 'blue'}-500 shadow-sm border border-slate-700`}></span>
                    {svc.themeColor || 'blue'}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${svc.status === 'published' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                    {svc.status || 'draft'}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <Link href={`/${svc.slug}`} target="_blank" className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors inline-block" title="View Live Page">
                    <ExternalLink size={16} />
                  </Link>
                  <Link href={`/admin/services/${svc._id}`} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors inline-block" title="Edit Data">
                    <Edit2 size={16} />
                  </Link>
                  <button onClick={() => deleteService(svc._id)} className="p-2 text-rose-400 hover:bg-rose-400/10 rounded-lg transition-colors inline-block" title="Delete Service">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
