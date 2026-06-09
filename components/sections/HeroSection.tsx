"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Magnet } from "@/components/animations/Magnet";
import { ContactButton } from "@/components/ui/ContactButton";
import { profile, navLinks } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] flex-col overflow-x-clip bg-[#0C0C0C] selection:bg-zinc-800 selection:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.04),transparent_50%)] pointer-events-none" />
      <div className="relative z-20 px-6 pt-8 md:px-12 md:pt-12">
        <FadeIn y={-20}>
          <nav className="flex items-center justify-between gap-4 text-[0.65rem] md:text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-300 hover:text-[#D7E2EA]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-20 md:mt-10 overflow-hidden px-6 md:px-12">
        <FadeIn delay={0.15} y={30}>
          <h1 className="text-center text-[clamp(4.5rem,12vw,14rem)] font-bold uppercase leading-[0.85] tracking-tighter text-[#D7E2EA]">
            Hola, soy <br className="md:hidden" /> Vidal
          </h1>
        </FadeIn>
      </div>

      <FadeIn delay={0.3} y={20} className="absolute left-1/2 top-1/2 z-10 w-[240px] -translate-x-1/2 -translate-y-1/3 sm:w-[280px] md:top-[50%] md:w-[360px] lg:w-[400px]">
        <Magnet padding={50} strength={4}>
          <div className="group relative mx-auto aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#111111] shadow-2xl transition-all duration-500 hover:border-zinc-700">
            <div className="absolute -inset-x-20 -top-20 h-40 bg-zinc-600/10 blur-[60px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-80 transition-opacity duration-500 group-hover:opacity-100">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0C0C0C] border border-zinc-800 text-2xl font-light text-zinc-300 md:h-28 md:w-28 md:text-4xl">
                BV
              </div>
              <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">
                Tu Foto Aquí
              </p>
            </div>
          </div>
        </Magnet>
      </FadeIn>

      <div className="relative z-20 mt-auto flex flex-col items-center justify-between gap-8 px-6 pb-12 md:flex-row md:items-end md:px-12 md:pb-12">
        <FadeIn delay={0.4} y={20}>
          <p className="max-w-[280px] text-center text-sm font-light leading-relaxed text-zinc-400 md:text-left md:text-base">
            {profile.intro}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Hablemos" />
        </FadeIn>
      </div>
    </section>
  );
}