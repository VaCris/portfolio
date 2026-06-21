import { HeroSection } from "../features/hero/components/HeroSection/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA] selection:bg-zinc-800 selection:text-white">
      <HeroSection />
      <MarqueeSection />

      <div className="relative z-10 space-y-24 py-24">
        <AboutSection />
        <TechStackSection />
      </div>

      <ExperienceSection />

      <ProjectsSection />

      <CTASection />
    </main>
  );
}