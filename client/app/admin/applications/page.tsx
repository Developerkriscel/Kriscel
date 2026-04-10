"use client";

import { useEffect, useState } from "react";
import { Users, FileText, Link as LinkIcon, Download } from "lucide-react";
import { API_URL } from "../../../lib/api";

export default function AdminApplications() {
  const [applications, setApplications] = useState([]);

  const fetchApps = async () => {
    try {
      const res = await fetch(`${API_URL}/applications`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("kriscel_admin_token")}` }
      });
      if (res.ok) {
        const json = await res.json();
        setApplications(json.data);
      }
    } catch (e) { console.error(e); }
  };

  useEffect(() => { fetchApps(); }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`${API_URL}/applications/${id}`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("kriscel_admin_token")}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setApplications(apps => apps.map((app: any) => app._id === id ? { ...app, status: newStatus } : app) as any);
      }
    } catch (e) { console.error(e); }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Reviewed': return 'bg-accent/10 text-accent border-accent/20';
      case 'Accepted': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Rejected': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <Users className="text-amber-400" /> Applicant Pipeline
        </h2>
        <p className="text-slate-400 mt-1">Review and manage incoming career applications.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-950/50 border-b border-slate-800">
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Applicant</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Role Applied</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Documents</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Review Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">No applications received yet.</td>
              </tr>
            ) : applications.map((app: any) => (
              <tr key={app._id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                <td className="p-4">
                  <p className="font-bold text-white text-sm">{app.firstName} {app.lastName}</p>
                  <a href={`mailto:${app.email}`} className="text-xs text-accent hover:text-accent block">{app.email}</a>
                  <p className="text-xs text-slate-500 mt-0.5">{app.phone}</p>
                </td>
                <td className="p-4 text-sm font-medium text-slate-300">{app.jobTitle}</td>
                <td className="p-4 space-y-2">
                  <a href={app.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors bg-slate-800/50 px-3 py-1.5 rounded-md w-max border border-slate-700">
                    <FileText size={14} className="text-accent" /> Resume / CV
                  </a>
                  {app.portfolioUrl && (
                     <a href={app.portfolioUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors bg-slate-800/50 px-3 py-1.5 rounded-md w-max border border-slate-700">
                      <LinkIcon size={14} className="text-fuchsia-400" /> Portfolio
                    </a>
                  )}
                </td>
                <td className="p-4">
                  <select 
                    value={app.status} 
                    onChange={(e) => updateStatus(app._id, e.target.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold outline-none border appearance-none cursor-pointer transition-colors backdrop-blur-sm ${getStatusColor(app.status)} focus:ring-2 ring-accent0/50`}
                  >
                    <option value="Pending" className="bg-slate-900 text-white">Pending</option>
                    <option value="Reviewed" className="bg-slate-900 text-white">Reviewed</option>
                    <option value="Accepted" className="bg-slate-900 text-white">Accepted</option>
                    <option value="Rejected" className="bg-slate-900 text-white">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
