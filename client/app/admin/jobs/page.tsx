"use client";

import { useEffect, useState } from "react";
import { PlusCircle, Trash2, Edit2, Briefcase } from "lucide-react";
import { API_URL } from "@/lib/api";

export default function AdminJobs() {
  const [jobs, setJobs] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    title: "", department: "", location: "", type: "Full-time", description: "", requirements: ""
  });

  const getHeaders = () => {
    const token = localStorage.getItem("kriscel_admin_token");
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };
  };

  const fetchJobs = async () => {
    try {
      const res = await fetch(`${API_URL}/jobs`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("kriscel_admin_token")}` }
      });
      if (res.ok) {
        const json = await res.json();
        setJobs(json.data);
      }
    } catch (e) { console.error(e); }
  };

  useEffect(() => { fetchJobs(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const reqArray = formData.requirements.split(',').map(r => r.trim());
      const payload = { ...formData, requirements: reqArray };
      const res = await fetch(`${API_URL}/jobs`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setIsAdding(false);
        setFormData({ title: "", department: "", location: "", type: "Full-time", description: "", requirements: "" });
        fetchJobs();
      }
    } catch (e) { console.error(e); }
  };

  const deleteJob = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job?")) return;
    try {
      await fetch(`${API_URL}/jobs/${id}`, { 
        method: "DELETE",
        headers: { "Authorization": `Bearer ${localStorage.getItem("kriscel_admin_token")}` }
      });
      fetchJobs();
    } catch (e) { console.error(e); }
  };

  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <Briefcase className="text-emerald-400" /> Job Postings
          </h2>
          <p className="text-slate-400 mt-1">Manage active career opportunities.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
        >
          <PlusCircle size={18} /> {isAdding ? "Cancel" : "Post New Job"}
        </button>
      </div>

      {isAdding && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8 shadow-2xl animate-in slide-in-from-top-4">
          <h3 className="text-lg font-bold text-white mb-6">Create New Job Posting</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Job Title</label>
                <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-emerald-500 outline-none transition-colors" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Senior Frontend Engineer" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Department</label>
                <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-emerald-500 outline-none transition-colors" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} placeholder="e.g. Engineering" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Location</label>
                <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-emerald-500 outline-none transition-colors" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} placeholder="e.g. Remote, NY" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Employment Type</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-emerald-500 outline-none transition-colors appearance-none" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Description</label>
              <textarea required rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-emerald-500 outline-none transition-colors" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Job description..."></textarea>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Requirements (Comma separated)</label>
              <textarea required rows={3} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-emerald-500 outline-none transition-colors" value={formData.requirements} onChange={e => setFormData({...formData, requirements: e.target.value})} placeholder="React, Next.js, 5+ years experience..."></textarea>
            </div>
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg text-sm font-bold tracking-wide w-full transition-colors mt-4">
              Publish Job
            </button>
          </form>
        </div>
      )}

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-950/50 border-b border-slate-800">
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Role</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Department</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Location</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-500">No job postings found. Create one above.</td>
              </tr>
            ) : jobs.map((job: any) => (
              <tr key={job._id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                <td className="p-4">
                  <p className="font-bold text-white">{job.title}</p>
                  <p className="text-xs text-slate-400">{job.type}</p>
                </td>
                <td className="p-4 text-sm text-slate-300">
                  <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded-md text-xs">{job.department}</span>
                </td>
                <td className="p-4 text-sm text-slate-300">{job.location}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${job.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-500/10 text-slate-400 border border-slate-500/20'}`}>
                    {job.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => deleteJob(job._id)} className="p-2 text-rose-400 hover:bg-rose-400/10 rounded-lg transition-colors inline-block" title="Delete Job">
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
