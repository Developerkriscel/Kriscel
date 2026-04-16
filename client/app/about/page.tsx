import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kriscel tech – Your Partner in Growth & Innovation",
  description: "Discover the story of Krisceltech. With a focus on Marketing, Recruitment & E-Commerce, we are committed to helping companies grow with trust",
};

export default function AboutPage() {
  return (
    <div className="min-h-[80vh] pt-40 px-6 flex flex-col items-center bg-background relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="max-w-4xl mx-auto w-full text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-foreground">About <span className="text-accent">Kriscel</span>.</h1>
        <p className="text-lg md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto">
          We are a team of passionate engineers, designers, and strategists dedicated to delivering high-performance digital solutions. By merging cutting-edge technology with premium aesthetics, we help businesses establish a dominant digital footprint.
        </p>
      </div>
    </div>
  );
}
