"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Magnet } from "@/components/animations/Magnet";
import { profile, navLinks } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] flex-col overflow-x-hidden bg-background selection:bg-zinc-800 selection:text-white isolate overscroll-x-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.04),transparent_50%)] pointer-events-none" />
      <div className="relative z-20 px-6 pt-8 md:px-12 md:pt-12">
        <FadeIn y={-20}>
          <nav aria-label="Navegación principal" className="flex items-center justify-between gap-4 text-[0.65rem] md:text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors duration-300 hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-20 md:mt-10 overflow-hidden px-6 md:px-12">
        <FadeIn delay={0.15} y={30}>
          <p className="mb-5 text-center text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 md:text-sm">
            {profile.role}
          </p>
          <h1 className="text-center text-[clamp(4.5rem,12vw,14rem)] font-bold uppercase leading-[0.85] tracking-tighter text-foreground">
            Hola, soy <br className="md:hidden" /> Vidal
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm font-light leading-relaxed text-zinc-400 md:text-base">
            React · TypeScript · Next.js
          </p>
        </FadeIn>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 w-[240px] -translate-x-1/2 -translate-y-1/3 sm:w-[280px] md:top-[50%] md:w-[360px] lg:w-[400px] overflow-hidden">
        <FadeIn delay={0.3} y={20}>
          <Magnet padding={50} strength={4}>
            <div className="group relative mx-auto aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#111111] shadow-2xl transition-all duration-500 hover:border-zinc-700">
              <div className="absolute -inset-x-20 -top-20 h-40 bg-zinc-600/10 blur-[60px]" />
              {profile.image ? (
                <img
                  src={profile.image}
                  alt={`Foto de perfil de ${profile.name}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-80">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-background border border-zinc-800 text-2xl font-light text-zinc-300 md:h-28 md:w-28 md:text-4xl">
                    BV
                  </div>
                </div>
              )}
            </div>
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex flex-col items-center justify-between gap-8 px-6 pb-12 md:flex-row md:items-end md:px-12 md:pb-12">
        <FadeIn delay={0.4} y={20}>
          <p className="max-w-[360px] text-center text-sm font-light leading-relaxed text-zinc-400 md:text-left md:text-base">
            {profile.intro}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            <Magnet padding={20} strength={2}>
              <a href="#proyectos" className="rounded-full border border-zinc-700 px-5 py-3 text-xs font-mono uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-foreground hover:text-background">
                Ver proyectos
              </a>
            </Magnet>
            <Magnet padding={20} strength={2}>
              <a href="#contacto" className="rounded-full border border-zinc-800 px-5 py-3 text-xs font-mono uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:border-zinc-600 hover:text-foreground">
                Contactarme
              </a>
            </Magnet>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}