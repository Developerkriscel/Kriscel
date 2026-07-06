import HeroSection from "@/components/HeroSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import AboutPreview from "@/components/AboutPreview";
import ConnectivityHub from "@/components/ConnectivityHub";
import AIPowerhouse from "@/components/AIPowerhouse";
import PersonaSection from "@/components/PersonaSection";
import StickyScrollSection from "@/components/StickyScrollSection";
import ParallaxSection from "@/components/ParallaxSection";
import IndustriesSection from "@/components/IndustriesSection";
import GlobeConnectivity from "@/components/GlobeConnectivity";
import ServicesPreview from "@/components/ServicesPreview";
import FAQ from "@/components/FAQ";
import SectionReveal from "@/components/SectionReveal";
import CustomCursor from "@/components/CustomCursor";
import DynamicBackground from "@/components/DynamicBackground";
import StatTickerCTA from "@/components/StatTickerCTA";
import ServiceWorkflowTicker from "@/components/ServiceWorkflowTicker";

export default function Home() {
  return (
    <div className="w-full flex flex-col relative">
      <CustomCursor />
      <DynamicBackground />
      <HeroSection />
      <SectionReveal><ConnectivityHub /></SectionReveal>
      <ServiceWorkflowTicker />
      <div className="relative z-10 bg-white">
        <SectionReveal><AboutPreview /></SectionReveal>
        <SectionReveal><AIPowerhouse /></SectionReveal>
        <SectionReveal><PersonaSection /></SectionReveal>
        <StickyScrollSection />
        <SectionReveal><ParallaxSection /></SectionReveal>
        <ClientsMarquee />
        <SectionReveal><IndustriesSection /></SectionReveal>
        <SectionReveal><GlobeConnectivity /></SectionReveal>
        <SectionReveal><ServicesPreview /></SectionReveal>
        <StatTickerCTA />
        <SectionReveal><FAQ /></SectionReveal>
      </div>
    </div>
  );
}
