"use client";

import InsightsSection from "@/components/InsightsSection";
import SectionReveal from "@/components/SectionReveal";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <SectionReveal>
        <InsightsSection />
      </SectionReveal>
    </div>
  );
}
