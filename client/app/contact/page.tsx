"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle2, XCircle, ArrowRight, Clock, Loader2, ChevronDown, ChevronRight } from "lucide-react";
import { API_URL } from "../../lib/api";
import { mergeDynamicServices, SOLUTIONS_COLS, type DynamicServiceOption, type SolutionColumns } from "@/lib/solution-options";

// Real-time email validator
const validateEmail = (email: string) => {
  const re = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", requirement: "", subject: "", message: "" });
  const [requirementOptions, setRequirementOptions] = useState<SolutionColumns>(SOLUTIONS_COLS);
  const [requirementOpen, setRequirementOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [emailStatus, setEmailStatus] = useState<"idle" | "valid" | "invalid">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const requirementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`${API_URL}/services`)
      .then((res) => {
        if (!res.ok) throw new Error("API down");
        return res.json();
      })
      .then((data) => {
        if (data?.success && data.data) {
          setRequirementOptions(mergeDynamicServices(data.data as DynamicServiceOption[]));
        }
      })
      .catch(() => {
        setRequirementOptions(SOLUTIONS_COLS);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (requirementRef.current && !requirementRef.current.contains(event.target as Node)) {
        setRequirementOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEmailChange = (val: string) => {
    setFormData(prev => ({ ...prev, email: val }));
    if (val.length === 0) { setEmailStatus("idle"); return; }
    setEmailStatus(validateEmail(val) ? "valid" : "invalid");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (emailStatus !== "valid") { setErrorMsg("Please enter a valid email address."); return; }
    if (!formData.requirement) { setErrorMsg("Please select your requirement."); return; }
    setErrorMsg("");
    setStatus("loading");
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", requirement: "", subject: "", message: "" });
        setEmailStatus("idle");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  const selectRequirement = (requirement: string) => {
    setFormData({ ...formData, requirement });
    setRequirementOpen(false);
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent focus:bg-white/8 focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-sm font-medium";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Hero Split */}
      <div className="relative min-h-screen flex flex-col lg:flex-row">

        {/* ── Left Panel: Dark Image + Info ── */}
        <div className="relative lg:w-[45%] lg:min-h-screen flex flex-col justify-between overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image src="/images/contact-hero.png" alt="Kriscel Office" fill className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full px-8 md:px-12 pt-36 pb-12 justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 border border-accent/25 px-3 py-1.5 rounded-full bg-accent/5">
                  Get in Touch
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
                  Contact Us
                </h1>
                <p className="text-slate-400 text-base leading-relaxed max-w-xs">
                  Tell us about your business. We'll tell you exactly how we'll scale it — with automation, marketing, and digital strategy.
                </p>
              </motion.div>

              {/* Stats Strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-12 grid grid-cols-3 gap-4"
              >
                {[
                  { val: "500%", label: "Growth Rate" },
                  { val: "200+", label: "Projects Delivered" },
                  { val: "5★", label: "Avg Rating" },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/8 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-accent">{s.val}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 space-y-4"
            >
              {[
                { icon: <Phone size={16} className="text-accent" />, label: "+91 8985419420" },
                { icon: <Mail size={16} className="text-accent" />, label: "Info@kriscel.com" },
                { icon: <Clock size={16} className="text-accent" />, label: "Mon–Sat, 10am–7pm IST" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">{item.icon}</div>
                  <span className="text-sm text-slate-300 font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Right Panel: Premium Form ── */}
        <div className="lg:w-[55%] flex items-center justify-center px-6 py-20 lg:py-0 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-xl"
          >
            {status === "success" ? (
              <div className="text-center py-20">
                <CheckCircle2 size={64} className="text-emerald-400 mx-auto mb-6" />
                <h2 className="text-3xl font-black tracking-tight text-white mb-4">Message Sent!</h2>
                <p className="text-slate-400 mb-8">We've received your inquiry and will be in touch within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-black text-sm hover:scale-105 transition-transform">
                  Send Another <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">Start the conversation</h2>
                  <p className="text-slate-500 text-sm">All fields marked are required. We respond within 24h.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name + Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Full Name *</label>
                      <input required type="text" placeholder="Rahul Sharma" className={inputClass} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Email Address *</label>
                      <div className="relative">
                        <input
                          required
                          type="email"
                          placeholder="you@company.com"
                          className={`${inputClass} pr-10 ${emailStatus === "valid" ? "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20" : emailStatus === "invalid" ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/20" : ""}`}
                          value={formData.email}
                          onChange={e => handleEmailChange(e.target.value)}
                        />
                        {emailStatus === "valid" && <CheckCircle2 size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400" />}
                        {emailStatus === "invalid" && <XCircle size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-400" />}
                      </div>
                      {emailStatus === "invalid" && (
                        <p className="text-xs text-rose-400 mt-1 font-medium">Please enter a valid email (e.g. name@domain.com)</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" className={inputClass} value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  </div>

                  {/* Requirement */}
                  <div ref={requirementRef} className="relative">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Requirement *</label>
                    <button
                      type="button"
                      onClick={() => setRequirementOpen((open) => !open)}
                      className={`${inputClass} flex items-center justify-between text-left ${formData.requirement ? "text-white" : "text-white/30"} ${requirementOpen ? "border-accent bg-white/8 ring-2 ring-accent/20" : ""}`}
                      aria-expanded={requirementOpen}
                    >
                      <span>{formData.requirement || "Select your requirement"}</span>
                      <ChevronDown size={18} className={`shrink-0 text-slate-500 transition-transform ${requirementOpen ? "rotate-180 text-accent" : ""}`} />
                    </button>

                    <div
                      className={`absolute top-full right-0 z-[80] mt-2 w-[min(820px,calc(100vw-3rem))] bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 transition-all duration-300 origin-top text-left ${requirementOpen ? "opacity-100 scale-100 visible translate-y-0" : "opacity-0 scale-95 invisible -translate-y-2 pointer-events-none"}`}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {requirementOptions.map((column, idx) => (
                          <div key={idx} className="flex flex-col gap-10 min-w-[220px]">
                            {column.map((category, cIdx) => (
                              <div key={cIdx} className="flex flex-col">
                                <button
                                  type="button"
                                  onClick={() => selectRequirement(category.title)}
                                  className="text-left text-xs font-black tracking-[0.2em] text-accent uppercase mb-4 border-b border-gray-100 pb-2 hover:text-brand-navy transition-colors block"
                                >
                                  {category.title}
                                </button>
                                <ul className="flex flex-col gap-3">
                                  {category.links.map((item, i) => (
                                    <li key={`${item.href}-${i}`}>
                                      <button
                                        type="button"
                                        onClick={() => selectRequirement(`${category.title} > ${item.name}`)}
                                        className="text-gray-600 hover:text-accent hover:translate-x-1 flex items-center gap-2 transition-all text-[13px] group text-left"
                                      >
                                        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300">
                                          <ChevronRight size={12} className="text-accent" />
                                        </span>
                                        {item.name}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                    <input
                      tabIndex={-1}
                      required
                      value={formData.requirement}
                      onChange={() => {}}
                      className="sr-only"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Subject *</label>
                    <input required type="text" placeholder="How can we help?" className={inputClass} value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Message *</label>
                    <textarea required rows={5} placeholder="Tell us about your business goals..." className={`${inputClass} resize-none`} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                  </div>

                  {/* Error */}
                  {errorMsg && (
                    <div className="flex items-center gap-2 text-rose-400 text-sm font-medium bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
                      <XCircle size={16} className="shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading" || emailStatus === "invalid"}
                    className="w-full group relative flex items-center justify-center gap-3 bg-accent text-white font-black text-sm uppercase tracking-widest py-4 rounded-2xl hover:bg-accent/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-[1.01] overflow-hidden"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    {status === "loading" ? (
                      <><Loader2 size={18} className="animate-spin" /> Sending your message...</>
                    ) : (
                      <>Send Message <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-600">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors underline">Privacy Policy</Link>.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
