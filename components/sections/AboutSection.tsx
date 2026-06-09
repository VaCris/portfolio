"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="w-full pt-28 pb-12 bg-[#0C0C0C]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn y={20}>
          <p className="text-xs font-mono tracking-widest text-zinc-600 uppercase mb-8">
            sobre mí
          </p>
          <h2 className="text-2xl md:text-4xl font-light text-[#D7E2EA] leading-relaxed tracking-tight">
            {profile.summary}
          </h2>
        </FadeIn>
      </div>
    </section>
  );
}