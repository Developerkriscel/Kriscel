"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity, but a typical premium website build takes between 4-8 weeks from discovery to launch."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide comprehensive maintenance and scaling support packages to ensure your platform remains high-performing and secure."
  },
  {
    question: "Can you integrate with our existing CRM/Backend?",
    answer: "Absolutely. We specialize in building custom integrations and headless architectures that sync perfectly with your existing tech stack."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our core stack includes Next.js, React, Node.js, Express, MongoDB, and AWS, combined with modern animation tools like GSAP and Three.js."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-xs md:text-sm font-bold text-accent uppercase tracking-[0.4em] mb-4">Support</h2>
          <h3 className="text-3xl md:text-6xl font-black text-foreground tracking-tighter leading-tight">
            Frequently Asked<br /><span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">Questions.</span>
          </h3>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-amber-100/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:shadow-orange-200/30 transition-shadow bg-white/70 backdrop-blur-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left transition-colors hover:bg-gray-50/50"
              >
                <span className="text-xl font-bold text-foreground">{faq.question}</span>
                {openIndex === i ? <Minus className="text-accent" /> : <Plus className="text-accent" />}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-96" : "max-h-0"}`}
              >
                <div className="px-8 pb-8 pt-0 text-muted leading-relaxed text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
