"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, Trash2, ArrowLeft, Save, RefreshCcw, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import DynamicServiceTemplate from "@/components/DynamicServiceTemplate";
import { API_URL } from "@/lib/api";

const THEMES = ['blue', 'indigo', 'rose', 'emerald', 'cyan', 'amber', 'violet'];
const CATEGORIES = ['Business Automation', 'Digital Marketing', 'Ecommerce Services', 'Services', 'Other'];

export default function ServiceEditor({ initialData = null, isEdit = false }: { initialData?: any, isEdit?: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "Example Title",
    titleHighlight: "Solutions.",
    slug: "example-slug",
    category: "Other",
    tagline: "Performance First",
    description: "Write your SEO friendly description here.",
    themeColor: "blue",
    heroIconName: "Target",
    status: "published",
    whatWeDo: [],
    benefits: [],
    features: [],
    faqs: []
  });

  // Populate form if Edit mode
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleArrayChange = (field: string, index: number, key: string, value: string) => {
    const updated = [...(formData as any)[field]];
    updated[index][key] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const addArrayItem = (field: string, template: any) => {
    const updated = [...(formData as any)[field], template];
    setFormData({ ...formData, [field]: updated });
  };

  const removeArrayItem = (field: string, index: number) => {
    const updated = [...(formData as any)[field]];
    updated.splice(index, 1);
    setFormData({ ...formData, [field]: updated });
  };

  const generateSlug = () => {
    if(!formData.title) return;
    const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    setFormData({...formData, slug: slug + (formData.titleHighlight ? `-${formData.titleHighlight.toLowerCase().replace(/[^a-z0-9]+/g, '')}` : '')});
  };

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = isEdit ? `${API_URL}/services/${initialData._id}` : `${API_URL}/services`;
      const method = isEdit ? "PUT" : "POST";
      
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("kriscel_admin_token")}`
        },
        body: JSON.stringify(formData)
      });
      
      const json = await res.json();
      if (res.ok) {
        alert(`Service successfully ${isEdit ? 'updated' : 'created'}!`);
        router.push("/admin/services");
      } else {
        alert(`Error: ${json.error}`);
      }
    } catch(err) {
      console.error(err);
      alert("Something went wrong saving the service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-[85vh] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      
      {/* LEFT COMPONENT: EDITOR FORM */}
      <div className="w-full lg:w-1/2 h-full flex flex-col border-r border-slate-800 bg-slate-900 overflow-hidden">
        
        {/* Editor Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-950 flex justify-between items-center shrink-0">
           <div className="flex items-center gap-4">
              <Link href="/admin/services" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg">
                <ArrowLeft size={18} />
              </Link>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                 <LayoutTemplate className="text-pink-400" size={18} />
                 {isEdit ? "Edit Service" : "New Service Builder"}
              </h2>
           </div>
           <button 
             onClick={onSave}
             disabled={loading}
             className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white px-5 py-2 rounded-lg text-sm font-bold tracking-wide flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/10"
           >
             {loading ? <RefreshCcw size={16} className="animate-spin" /> : <Save size={16} />} 
             {isEdit ? "Update Live" : "Publish"}
           </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-8 custom-scrollbar">
          
          {/* Main Info */}
          <section className="space-y-4">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">Page Meta & SEO</h3>
             
             <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">MAIN TITLE (e.g. SEO)</label>
                  <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none transition-colors text-sm" />
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">HIGHLIGHT WORD (e.g. Services.)</label>
                  <input type="text" value={formData.titleHighlight} onChange={e => setFormData({...formData, titleHighlight: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none transition-colors text-sm" />
               </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="flex items-center justify-between text-xs font-bold text-slate-400 mb-1">
                    URL SLUG
                    <button type="button" onClick={generateSlug} className="text-[10px] text-pink-400 hover:underline flex items-center gap-1"><RefreshCcw size={10}/> Auto</button>
                 </label>
                 <input type="text" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none transition-colors text-sm font-mono" />
               </div>
               <div>
                 <label className="block text-xs font-bold text-slate-400 mb-1">NAVIGATION CATEGORY</label>
                 <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none transition-colors text-sm appearance-none">
                    {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                 </select>
               </div>
             </div>
             
             <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">PAGE DESCRIPTION</label>
                <textarea rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none transition-colors text-sm"></textarea>
             </div>
          </section>

          {/* Design Aesthetics */}
          <section className="space-y-4">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">Aesthetics</h3>
             <div className="grid grid-cols-3 gap-4">
               <div className="col-span-1">
                 <label className="block text-xs font-bold text-slate-400 mb-1">TAGLINE</label>
                 <input type="text" value={formData.tagline} onChange={e => setFormData({...formData, tagline: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none transition-colors text-sm" placeholder="e.g. Growth Experts" />
               </div>
               <div className="col-span-1">
                 <label className="block text-xs font-bold text-slate-400 mb-1">HERO ICON NAME</label>
                 <input type="text" value={formData.heroIconName} onChange={e => setFormData({...formData, heroIconName: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none transition-colors text-sm" placeholder="e.g. Target, Rocket" />
               </div>
               <div className="col-span-1">
                 <label className="block text-xs font-bold text-slate-400 mb-1">THEME COLOR</label>
                 <select value={formData.themeColor} onChange={e => setFormData({...formData, themeColor: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none transition-colors text-sm appearance-none capitalize">
                    {THEMES.map(t => <option key={t} value={t}>{t}</option>)}
                 </select>
               </div>
             </div>
          </section>

          {/* What We Do Cards */}
          <section className="space-y-4">
             <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">3x "What We Do" Cards (Optional)</h3>
                <button type="button" onClick={() => addArrayItem('whatWeDo', { title: 'New Card', desc: 'Description.', iconName: 'Star' })} className="text-xs font-bold text-pink-400 hover:text-pink-300 flex flex-center gap-1"><PlusCircle size={14}/> Add Card</button>
             </div>
             {formData.whatWeDo.map((item: any, i: number) => (
                <div key={i} className="bg-slate-950 border border-slate-800 p-4 rounded-xl relative group">
                   <button type="button" onClick={() => removeArrayItem('whatWeDo', i)} className="absolute top-2 right-2 text-slate-600 hover:text-rose-400"><Trash2 size={16}/></button>
                   <div className="grid grid-cols-2 gap-3 pr-8">
                     <input type="text" value={item.title} onChange={e => handleArrayChange('whatWeDo', i, 'title', e.target.value)} className="bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white" placeholder="Title" />
                     <input type="text" value={item.iconName} onChange={e => handleArrayChange('whatWeDo', i, 'iconName', e.target.value)} className="bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white" placeholder="Lucide Icon Name" />
                     <input type="text" value={item.desc} onChange={e => handleArrayChange('whatWeDo', i, 'desc', e.target.value)} className="col-span-2 bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white" placeholder="Short description" />
                   </div>
                </div>
             ))}
          </section>

          {/* Benefits Grid */}
          <section className="space-y-4">
             <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Horizontal Benefits Row</h3>
                <button type="button" onClick={() => addArrayItem('benefits', { title: 'New Benefit', desc: 'Description.', iconName: 'Star' })} className="text-xs font-bold text-pink-400 hover:text-pink-300 flex flex-center gap-1"><PlusCircle size={14}/> Add Benefit</button>
             </div>
             {formData.benefits.map((item: any, i: number) => (
                <div key={i} className="bg-slate-950 border border-slate-800 p-4 rounded-xl relative group">
                   <button type="button" onClick={() => removeArrayItem('benefits', i)} className="absolute top-2 right-2 text-slate-600 hover:text-rose-400"><Trash2 size={16}/></button>
                   <div className="grid grid-cols-2 gap-3 pr-8">
                     <input type="text" value={item.title} onChange={e => handleArrayChange('benefits', i, 'title', e.target.value)} className="bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white" placeholder="Title" />
                     <input type="text" value={item.iconName} onChange={e => handleArrayChange('benefits', i, 'iconName', e.target.value)} className="bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white" placeholder="Lucide Icon Name" />
                     <input type="text" value={item.desc} onChange={e => handleArrayChange('benefits', i, 'desc', e.target.value)} className="col-span-2 bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white" placeholder="Short description" />
                   </div>
                </div>
             ))}
          </section>

          {/* Features Checkbox */}
          <section className="space-y-4">
             <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Features List (Checkmarks)</h3>
                <button type="button" onClick={() => addArrayItem('features', { title: 'New Feature', desc: 'Detail' })} className="text-xs font-bold text-pink-400 hover:text-pink-300 flex flex-center gap-1"><PlusCircle size={14}/> Add Feature</button>
             </div>
             {formData.features.map((item: any, i: number) => (
                <div key={i} className="bg-slate-950 border border-slate-800 p-3 rounded-lg flex items-center gap-3">
                   <input type="text" value={item.title} onChange={e => handleArrayChange('features', i, 'title', e.target.value)} className="flex-1 bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white" placeholder="Feature Title" />
                   <input type="text" value={item.desc} onChange={e => handleArrayChange('features', i, 'desc', e.target.value)} className="flex-[2] bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white" placeholder="Feature Description" />
                   <button type="button" onClick={() => removeArrayItem('features', i)} className="text-slate-600 hover:text-rose-400"><Trash2 size={16}/></button>
                </div>
             ))}
          </section>

          {/* FAQs List */}
          <section className="space-y-4">
             <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">FAQs</h3>
                <button type="button" onClick={() => addArrayItem('faqs', { question: 'Question?', answer: 'Answer.' })} className="text-xs font-bold text-pink-400 hover:text-pink-300 flex flex-center gap-1"><PlusCircle size={14}/> Add FAQ</button>
             </div>
             {formData.faqs.map((item: any, i: number) => (
                <div key={i} className="bg-slate-950 border border-slate-800 p-3 rounded-lg relative">
                   <button type="button" onClick={() => removeArrayItem('faqs', i)} className="absolute top-3 right-3 text-slate-600 hover:text-rose-400"><Trash2 size={16}/></button>
                   <input type="text" value={item.question} onChange={e => handleArrayChange('faqs', i, 'question', e.target.value)} className="w-[calc(100%-30px)] bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white mb-2 font-bold" placeholder="Question" />
                   <textarea rows={2} value={item.answer} onChange={e => handleArrayChange('faqs', i, 'answer', e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-sm text-slate-300" placeholder="Answer" />
                </div>
             ))}
          </section>

        </div>
      </div>

      {/* RIGHT COMPONENT: LIVE PREVIEW CONTAINER */}
      <div className="hidden lg:flex flex-col w-1/2 h-full bg-white relative">
         <div className="absolute top-0 left-0 right-0 h-10 bg-slate-100 border-b border-slate-200 z-50 flex items-center justify-center pointer-events-none drop-shadow-sm">
           <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2"><LayoutTemplate size={12}/> Live Preview Engine Active</span>
         </div>
         {/* Live Preview Wrapper */}
         <div className="w-full h-full overflow-y-auto overflow-x-hidden pt-10">
            {/* Pointer events roughly none to avoid accidentally clicking links and leaving editor */}
            <div className="pointer-events-none w-[200%] origin-top-left scale-50"> 
               <DynamicServiceTemplate data={formData} />
            </div>
         </div>
      </div>

    </div>
  );
}
