import { SERVICES_DATA } from "@/lib/data";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data = SERVICES_DATA[slug as keyof typeof SERVICES_DATA];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
            Our Enterprise Services
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-foreground leading-tight">
            {data.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-10">
            {data.description}
          </p>
          
          <div className="space-y-4 mb-12">
            {data.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-foreground font-medium">
                <CheckCircle2 className="text-accent" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Link href="/contact" className="inline-block px-8 py-4 bg-foreground text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-foreground/10">
            {data.cta}
          </Link>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl -z-10" />
          <div className="glass rounded-3xl p-10 border-white/40 shadow-xl aspect-square flex items-center justify-center bg-white/50">
             <div className="text-center font-black text-6xl opacity-5 text-accent uppercase -rotate-12 select-none">
                {data.title}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
