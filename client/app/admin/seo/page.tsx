"use client";

import React, { useState, useEffect } from 'react';
import { 
  Save, Search, Globe, Image as ImageIcon, 
  ExternalLink, Trash2, Plus, CheckCircle2, 
  AlertCircle, AlertTriangle, Eye, Settings2,
  ChevronRight, Info, TrendingUp
} from 'lucide-react';
import { API_URL } from '@/lib/api';

interface SEOSetting {
  _id?: string;
  pagePath: string;
  title: string;
  targetKeyword: string;
  metaDescription: string;
  keywords: string[];
  ogImage: string;
  canonicalUrl: string;
  noIndex: boolean;
  lastUpdated?: string;
}

interface SEORecommendation {
  id: string;
  level: 'critical' | 'warning' | 'good';
  label: string;
  action: string;
  suggestion?: string;
  field: keyof SEOSetting;
}

export default function SEOPage() {
  const [seoList, setSeoList] = useState<SEOSetting[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [selectedPage, setSelectedPage] = useState<SEOSetting | null>(null);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const getSEORecommendations = (page: SEOSetting): SEORecommendation[] => {
    const recs: SEORecommendation[] = [];
    if (!page) return recs;

    const { title, metaDescription, targetKeyword, ogImage, canonicalUrl } = page;
    const kw = targetKeyword?.toLowerCase() || '';

    // Title Checks
    if (!title) {
      recs.push({ id: 't1', level: 'critical', label: 'Missing Title', action: 'Set a page title', field: 'title' });
    } else {
      if (title.length < 40) recs.push({ id: 't2', level: 'warning', label: 'Title too short', action: 'Extend to 40-60 chars', field: 'title', suggestion: title + " | Best Digital Marketing Agency in Delhi" });
      if (title.length > 60) recs.push({ id: 't3', level: 'warning', label: 'Title too long', action: 'Shorten to under 60 chars', field: 'title' });
      if (kw && !title.toLowerCase().includes(kw)) recs.push({ id: 't4', level: 'critical', label: 'Keyword Missing in Title', action: `Add "${targetKeyword}" to title`, field: 'title' });
    }

    // Description Checks
    if (!metaDescription) {
      recs.push({ id: 'd1', level: 'critical', label: 'Missing Description', action: 'Write a meta description', field: 'metaDescription' });
    } else {
      if (metaDescription.length < 120) recs.push({ id: 'd2', level: 'warning', label: 'Description too short', action: 'Extend to 120-160 chars', field: 'metaDescription' });
      if (metaDescription.length > 160) recs.push({ id: 'd3', level: 'warning', label: 'Description too long', action: 'Shorten under 160 chars', field: 'metaDescription' });
      if (kw && !metaDescription.toLowerCase().includes(kw)) recs.push({ id: 'd4', level: 'warning', label: 'Keyword Missing in Description', action: `Add "${targetKeyword}" to description`, field: 'metaDescription' });
    }

    // Media & Technical
    if (!ogImage) recs.push({ id: 'm1', level: 'warning', label: 'Missing OG Image', action: 'Add social share image', field: 'ogImage', suggestion: '/images/og-default.png' });
    if (!canonicalUrl) recs.push({ id: 'c1', level: 'warning', label: 'No Canonical URL', action: 'Set canonical tag', field: 'canonicalUrl', suggestion: `https://kriscel.com${page.pagePath}` });

    return recs;
  };

  const calculateScore = (recs: SEORecommendation[]) => {
    if (!selectedPage) return 0;
    const weights = { critical: 20, warning: 5, good: 0 };
    const deductions = recs.reduce((acc, r) => acc + weights[r.level], 0);
    return Math.max(0, 100 - deductions);
  };

  const applyRecommendation = (rec: SEORecommendation) => {
    if (!selectedPage || !rec.suggestion) return;
    setSelectedPage({ ...selectedPage, [rec.field]: rec.suggestion });
  };

  useEffect(() => {
    fetchSEO();
  }, []);

  const fetchSEO = async () => {
    try {
      const token = localStorage.getItem('kriscel_admin_token');
      const res = await fetch(`${API_URL}/seo`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const result = await res.json();
      if (result.success) {
        setSeoList(result.data);
      }
    } catch (err) {
      console.error('Failed to fetch SEO settings', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!selectedPage) return;
    setSaving(true);
    setMessage({ type: '', text: '' });
    try {
      const token = localStorage.getItem('kriscel_admin_token');
      const res = await fetch(`${API_URL}/seo`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(selectedPage)
      });
      const result = await res.json();
      if (result.success) {
        setMessage({ type: 'success', text: 'SEO metadata updated successfully!' });
        fetchSEO();
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to update SEO' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Server error occurred' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this SEO setting?')) return;
    try {
      const token = localStorage.getItem('kriscel_admin_token');
      const res = await fetch(`${API_URL}/seo/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const result = await res.json();
      if (result.success) {
        fetchSEO();
        if (selectedPage?._id === id) setSelectedPage(null);
      }
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  const addNewPage = () => {
    const newPage: SEOSetting = {
      pagePath: '',
      title: '',
      targetKeyword: '',
      metaDescription: '',
      keywords: [],
      ogImage: '',
      canonicalUrl: '',
      noIndex: false
    };
    setSelectedPage(newPage);
  };

  const filteredList = seoList.filter(s => 
    s.pagePath.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">SEO Management</h1>
          <p className="text-slate-400 text-sm mt-1">Optimize how your website appears across search engines and social media.</p>
        </div>
        <button
          onClick={addNewPage}
          className="flex items-center gap-2 bg-accent hover:bg-accent text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-brand-navy/20"
        >
          <Plus size={18} />
          New Page Meta
        </button>
      </div>

      {message.text && (
        <div className={`p-4 rounded-xl flex items-center gap-3 border ${
          message.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' : 'bg-rose-500/10 border-rose-500/50 text-rose-400'
        }`}>
          {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <p className="text-sm font-bold">{message.text}</p>
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Page List */}
        <div className="xl:col-span-4 space-y-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-accent transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search pages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-accent transition-all text-white placeholder:text-slate-600"
            />
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden max-h-[600px] overflow-y-auto custom-scrollbar">
            {loading ? (
              <div className="p-12 text-center text-slate-500 uppercase text-[10px] font-black tracking-widest animate-pulse">Loading routes...</div>
            ) : filteredList.length === 0 ? (
              <div className="p-12 text-center text-slate-500 text-sm italic">No pages found matching your search.</div>
            ) : (
              <div className="divide-y divide-slate-800/50">
                {filteredList.map((item) => (
                  <button
                    key={item._id}
                    onClick={() => setSelectedPage(item)}
                    className={`w-full p-5 text-left transition-all hover:bg-slate-800/50 flex items-center justify-between group ${selectedPage?._id === item._id ? 'bg-accent/10 border-l-4 border-l-accent' : 'border-l-4 border-l-transparent'}`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-2 h-2 rounded-full ${item.noIndex ? 'bg-rose-500' : 'bg-emerald-500'}`} />
                        <h3 className="text-xs font-black text-white truncate uppercase tracking-tight">{item.pagePath === '/' ? 'Home Page' : item.pagePath.split('/').pop()?.replace(/-/g, ' ')}</h3>
                      </div>
                      <p className="text-[10px] font-medium text-slate-500 font-mono truncate">{item.pagePath}</p>
                    </div>
                    <ChevronRight size={16} className={`text-slate-700 transition-transform ${selectedPage?._id === item._id ? 'translate-x-1 text-accent' : 'group-hover:translate-x-1'}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Editor & Preview */}
        <div className="xl:col-span-8 space-y-8">
          {selectedPage ? (
            <>
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-8 space-y-10 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <Settings2 size={24} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">Route Content</span>
                      <h2 className="text-xl font-bold text-white tracking-tight uppercase">{selectedPage.pagePath || 'New Configuration'}</h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {selectedPage._id && (
                      <button onClick={() => handleDelete(selectedPage._id!)} className="p-2.5 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all"><Trash2 size={18} /></button>
                    )}
                    <button 
                      onClick={handleSave} 
                      disabled={saving}
                      className="px-6 py-2.5 bg-accent hover:bg-accent text-white rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-brand-navy/20 disabled:opacity-50"
                    >
                      {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save size={18} />}
                      {saving ? 'Processing...' : 'Save Meta Data'}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Relative URL Path</label>
                        <input 
                          type="text" 
                          value={selectedPage.pagePath}
                          onChange={(e) => setSelectedPage({...selectedPage, pagePath: e.target.value})}
                          placeholder="/solutions/web-design"
                          className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:border-accent transition-all text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Target Keyword (Main Goal)</label>
                        <div className="relative">
                          <TrendingUp className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={16} />
                          <input 
                            type="text" 
                            value={selectedPage.targetKeyword}
                            onChange={(e) => setSelectedPage({...selectedPage, targetKeyword: e.target.value})}
                            placeholder="e.g. digital marketing agency"
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:border-accent transition-all text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                       <div className="flex justify-between items-center px-1">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">SEO Meta Title</label>
                          <span className={`text-[10px] font-bold ${selectedPage.title.length > 60 ? 'text-rose-400' : 'text-slate-600'}`}>{selectedPage.title.length}/60</span>
                       </div>
                       <input 
                        type="text" 
                        value={selectedPage.title}
                        onChange={(e) => setSelectedPage({...selectedPage, title: e.target.value})}
                        placeholder="Dynamic Page Title | Kriscel Technologies"
                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:border-accent transition-all text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                       <div className="flex justify-between items-center px-1">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Meta Description</label>
                          <span className={`text-[10px] font-bold ${selectedPage.metaDescription.length > 160 ? 'text-rose-400' : 'text-slate-600'}`}>{selectedPage.metaDescription.length}/160</span>
                       </div>
                       <textarea 
                        value={selectedPage.metaDescription}
                        onChange={(e) => setSelectedPage({...selectedPage, metaDescription: e.target.value})}
                        rows={4}
                        placeholder="Page summary for search results..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:border-accent transition-all text-white resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">LSI Keywords (Comma Sep)</label>
                          <input 
                            type="text" 
                            value={selectedPage.keywords.join(', ')}
                            onChange={(e) => setSelectedPage({...selectedPage, keywords: e.target.value.split(',').map(s => s.trim())})}
                            placeholder="seo, digital marketing, delhi"
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:border-accent transition-all text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">OG Share Image URL</label>
                          <div className="relative">
                            <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                            <input 
                              type="text" 
                              value={selectedPage.ogImage}
                              onChange={(e) => setSelectedPage({...selectedPage, ogImage: e.target.value})}
                              placeholder="/images/og-default.png"
                              className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:border-accent transition-all text-white"
                            />
                          </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Canonical URL</label>
                          <input 
                            type="text" 
                            value={selectedPage.canonicalUrl}
                            onChange={(e) => setSelectedPage({...selectedPage, canonicalUrl: e.target.value})}
                            placeholder="https://kriscel.com..."
                            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:border-accent transition-all text-white"
                          />
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-slate-950 rounded-2xl border border-slate-800 self-end h-[58px]">
                          <input 
                            type="checkbox" 
                            checked={selectedPage.noIndex}
                            onChange={(e) => setSelectedPage({...selectedPage, noIndex: e.target.checked})}
                            className="w-4 h-4 rounded accent-indigo-500"
                            id="noIndex"
                          />
                          <label htmlFor="noIndex" className="text-[10px] font-bold text-slate-300 cursor-pointer uppercase tracking-widest">NoIndex (Private)</label>
                        </div>
                    </div>
                  </div>

                  {/* Audit Sidebar */}
                  <div className="md:col-span-4 space-y-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                       <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">SEO Health</span>
                          {(() => {
                            const recs = getSEORecommendations(selectedPage);
                            const score = calculateScore(recs);
                            return (
                              <span className={`text-xl font-black ${score > 80 ? 'text-emerald-500' : score > 50 ? 'text-amber-500' : 'text-rose-500'}`}>
                                {score}%
                              </span>
                            );
                          })()}
                       </div>
                       
                       <div className="space-y-3">
                          {getSEORecommendations(selectedPage).map(rec => (
                            <div key={rec.id} className={`p-3 rounded-xl border flex flex-col gap-2 ${
                              rec.level === 'critical' ? 'bg-rose-500/5 border-rose-500/20' : 'bg-amber-500/5 border-amber-500/20'
                            }`}>
                               <div className="flex items-start gap-2">
                                  {rec.level === 'critical' ? <AlertCircle size={14} className="text-rose-500 mt-0.5" /> : <AlertTriangle size={14} className="text-amber-500 mt-0.5" />}
                                  <div className="flex-1">
                                     <p className="text-[10px] font-black uppercase tracking-tight text-white leading-tight">{rec.label}</p>
                                     <p className="text-[10px] font-medium text-slate-400 mt-0.5 line-clamp-2">{rec.action}</p>
                                  </div>
                               </div>
                               {rec.suggestion && (
                                 <button 
                                  onClick={() => applyRecommendation(rec)}
                                  className="w-full py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[9px] font-black uppercase tracking-widest text-accent rounded-lg transition-all"
                                 >
                                    Apply Suggestion
                                 </button>
                               )}
                            </div>
                          ))}
                          {getSEORecommendations(selectedPage).length === 0 && (
                            <div className="p-8 text-center text-slate-500 space-y-2">
                               <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mx-auto">
                                  <CheckCircle2 size={20} />
                               </div>
                               <p className="text-[10px] font-bold uppercase tracking-widest">Page Optimized</p>
                            </div>
                          )}
                       </div>
                    </div>
                    
                    <div className="p-4 bg-accent/5 border border-accent/10 rounded-2xl">
                       <p className="text-[9px] text-slate-500 leading-relaxed font-medium">
                         <span className="text-accent font-bold uppercase">Manual Approval Required:</span> Suggestions aren't applied automatically. Click "Apply" to update your metadata before saving.
                       </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LIVE PREVIEW SECTION */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-accent">
                      <Eye size={20} />
                    </div>
                    <h2 className="text-lg font-black text-slate-900 tracking-tight uppercase">Google Search Preview</h2>
                  </div>
                  {selectedPage.title.length > 70 && (
                    <div className="flex items-center gap-2 text-rose-500 text-[10px] font-black uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full">
                       <AlertTriangle size={12} /> Title too long
                    </div>
                  )}
                </div>

                <div className="max-w-xl py-6">
                   <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 mb-1 group cursor-pointer">
                         <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                            <Globe size={14} className="text-slate-500" />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-xs text-slate-700 leading-tight">Kriscel Technologies</span>
                            <span className="text-[10px] text-slate-400 leading-tight">https://kriscel.com {selectedPage.pagePath}</span>
                         </div>
                      </div>
                      <h3 className="text-[20px] text-[#1a0dab] font-medium leading-tight mb-1 hover:underline cursor-pointer">
                        {selectedPage.title || 'Untitled Page - Meta Title Required'}
                      </h3>
                      <p className="text-sm text-[#4d5156] leading-snug line-clamp-2">
                        {selectedPage.metaDescription || 'No description provided. Search engines will attempt to find text on your page, which may not be optimized for conversion.'}
                      </p>
                   </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl flex gap-4">
                  <Info className="text-accent shrink-0" size={20} />
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    This is a simulation. Actual search results may vary based on keywords, device, and regional ranking factors. Use <span className="text-accent font-bold">concise</span> and <span className="text-accent font-bold">actionable</span> language for better click-through rates.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="h-[600px] bg-slate-900/30 border-2 border-dashed border-slate-800 rounded-[2.5rem] flex flex-col items-center justify-center text-center p-12">
               <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center text-slate-600 mb-6 font-black text-2xl">?</div>
               <h3 className="text-xl font-bold text-slate-400 mb-2 tracking-tight uppercase">Select a page to optimize</h3>
               <p className="text-slate-500 text-sm max-w-sm font-medium">Choose a route from the list on the left or create a new one to begin your SEO overhaul.</p>
               <button onClick={addNewPage} className="mt-8 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-xs transition-all uppercase tracking-[0.2em]">Create New Route Metadata</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
