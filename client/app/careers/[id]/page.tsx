"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { API_URL } from "../../../lib/api";

export default function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const [job, setJob] = useState<any>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [isUploadingResume, setIsUploadingResume] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", resumeUrl: "", portfolioUrl: "", coverLetter: ""
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`${API_URL}/jobs/${unwrappedParams.id}`);
        if (res.ok) {
          const json = await res.json();
          setJob(json.data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchJob();
  }, [unwrappedParams.id]);

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingResume(true);
    const formDataUpload = new FormData();
    formDataUpload.append("resume", file);

    try {
      const res = await fetch(`${API_URL}/upload/resume`, {
        method: "POST",
        body: formDataUpload,
      });

      if (res.ok) {
        const data = await res.json();
        setFormData({ ...formData, resumeUrl: data.url });
      }
    } catch (err) {
      console.error("Resume upload failed", err);
    } finally {
      setIsUploadingResume(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplying(true);
    try {
      const payload = {
        ...formData,
        jobId: job._id,
        jobTitle: job.title
      };
      
      const res = await fetch(`${API_URL}/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        setSubmitSuccess(true);
      }
    } catch (e) {
      console.error(e);
    }
    setIsApplying(false);
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-[#fafafa] pt-32 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
           <div className="w-16 h-16 border-4 border-accent/10 border-t-accent rounded-full animate-spin mb-4"></div>
           <p className="text-slate-400 font-medium tracking-widest uppercase text-xs">Loading Job Details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-24">
      {/* Freeform pattern matching the portal */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-accent/5 to-transparent blur-3xl rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Link href="/careers" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors mb-12">
          <ArrowLeft size={16} /> Back to all roles
        </Link>

        {submitSuccess ? (
          <div className="bg-white border border-emerald-100 rounded-[2rem] p-12 text-center shadow-xl shadow-emerald-500/5 animate-in zoom-in-95 duration-500">
             <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} className="text-emerald-500" />
             </div>
             <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">Application Sent!</h2>
             <p className="text-slate-500 text-lg max-w-md mx-auto mb-8">
               Thank you for applying to the <strong>{job.title}</strong> role. Our team will review your profile and reach out shortly.
             </p>
             <Link href="/careers" className="inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
               Explore More Roles
             </Link>
          </div>
        ) : (
          <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] animate-in slide-in-from-bottom-8 duration-700">
             <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 bg-accent/5 text-accent text-xs font-bold uppercase tracking-widest rounded-full">{job.department}</span>
                <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest rounded-full">{job.type}</span>
                <span className="px-4 py-1.5 bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-1"><MapPin size={12}/> {job.location}</span>
             </div>

             <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">
               {job.title}
             </h1>

             <div className="prose prose-slate prose-lg max-w-none mb-12">
               <h3 className="text-xl font-bold text-slate-900 mb-4">About the Role</h3>
               <p className="text-slate-600 font-medium leading-relaxed">{job.description}</p>
               
               <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Requirements</h3>
               <ul className="space-y-3">
                 {job.requirements.map((req: string, idx: number) => (
                   <li key={idx} className="flex items-start gap-3 text-slate-600 font-medium">
                     <CheckCircle2 size={20} className="text-accent mt-0.5 shrink-0" />
                     {req}
                   </li>
                 ))}
               </ul>
             </div>

             <div className="border-t border-slate-100 pt-12 mt-12 bg-slate-50/50 -mx-8 md:-mx-12 px-8 md:px-12 pb-4 -mb-4 rounded-b-[2rem]">
                <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <Briefcase className="text-accent" /> Apply for this position
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">First Name *</label>
                      <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-accent focus:ring-2 ring-accent/10 outline-none transition-all shadow-sm" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Last Name *</label>
                      <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-accent focus:ring-2 ring-accent/10 outline-none transition-all shadow-sm" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Email Address *</label>
                      <input required type="email" className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-accent focus:ring-2 ring-accent/10 outline-none transition-all shadow-sm" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Phone Number *</label>
                      <input required type="tel" className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-accent focus:ring-2 ring-accent/10 outline-none transition-all shadow-sm" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                       <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Resume / CV *</label>
                       <div className="flex flex-col sm:flex-row gap-4">
                         <div className="flex-1">
                           <input 
                             required 
                             type="url" 
                             placeholder="Link to Google Drive, Dropbox, etc." 
                             className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-accent focus:ring-2 ring-accent/10 outline-none transition-all shadow-sm text-sm" 
                             value={formData.resumeUrl} 
                             onChange={e => setFormData({...formData, resumeUrl: e.target.value})} 
                           />
                         </div>
                         <div className="flex items-center">
                           <span className="text-slate-400 font-bold text-xs uppercase px-2">Or</span>
                           <label className={`cursor-pointer px-6 py-4 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-md whitespace-nowrap ${isUploadingResume ? 'bg-slate-100 text-slate-400' : 'bg-white border border-slate-200 text-slate-700 hover:border-accent hover:text-accent'}`}>
                              {isUploadingResume ? (
                                <div className="w-5 h-5 border-2 border-slate-300 border-t-accent rounded-full animate-spin"></div>
                              ) : (
                                <Briefcase size={18} className="text-accent" />
                              )}
                              {isUploadingResume ? "Uploading..." : "Upload File"}
                              <input 
                                type="file" 
                                className="hidden" 
                                accept=".pdf,.doc,.docx" 
                                onChange={handleResumeUpload}
                                disabled={isUploadingResume}
                              />
                           </label>
                         </div>
                       </div>
                       {formData.resumeUrl && formData.resumeUrl.includes('/uploads/') && (
                         <p className="mt-2 text-xs font-bold text-emerald-600 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                           <CheckCircle2 size={14} /> Resume uploaded successfully
                         </p>
                       )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Portfolio Link</label>
                      <input type="url" placeholder="GitHub, LinkedIn, Personal Site" className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-accent focus:ring-2 ring-accent/10 outline-none transition-all shadow-sm" value={formData.portfolioUrl} onChange={e => setFormData({...formData, portfolioUrl: e.target.value})} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Cover Letter (Optional)</label>
                    <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-accent focus:ring-2 ring-accent/10 outline-none transition-all shadow-sm" placeholder="Tell us why you'd be a great fit..." value={formData.coverLetter} onChange={e => setFormData({...formData, coverLetter: e.target.value})}></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isApplying}
                    className={`w-full py-4 rounded-xl text-white font-bold tracking-wide transition-all shadow-xl ${isApplying ? 'bg-accent cursor-not-allowed' : 'bg-accent hover:bg-brand-navy hover:-translate-y-1 hover:shadow-accent/30'}`}
                  >
                    {isApplying ? "Submitting Application..." : "Submit Application"}
                  </button>
                </form>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
