"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Magnet } from "@/components/animations/Magnet";
import { ContactButton } from "@/components/ui/ContactButton";
import { profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-[760px] flex-col overflow-x-clip bg-[#0C0C0C] md:h-screen">
      <div className="noise-layer absolute inset-0 -z-10" />

      <div className="relative z-20 px-5 pt-5 sm:px-6 md:px-10 md:pt-8">
        <FadeIn y={-20}>
          <nav className="flex items-center justify-between gap-4 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#D7E2EA] sm:text-xs md:text-sm lg:text-base">
            <a href="#sobre-mi" className="transition duration-200 hover:opacity-70">Sobre mí</a>
            <a href="#servicios" className="transition duration-200 hover:opacity-70">Servicios</a>
            <a href="#proyectos" className="transition duration-200 hover:opacity-70">Proyectos</a>
            <a href="#contacto" className="transition duration-200 hover:opacity-70">Contacto</a>
          </nav>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-8 overflow-hidden sm:mt-6 md:mt-2">
        <FadeIn delay={0.15} y={32}>
          <h1 className="hero-heading mx-auto max-w-[1600px] text-center text-[clamp(4.2rem,11.5vw,13.5rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
            Hola, soy Vidal
          </h1>
        </FadeIn>
      </div>

      <FadeIn delay={0.45} y={24} className="absolute left-1/2 top-[45%] z-10 w-[220px] -translate-x-1/2 -translate-y-1/2 sm:top-[48%] sm:w-[280px] md:top-[53%] md:w-[340px] lg:w-[390px] xl:w-[430px]">
        <Magnet padding={90} strength={6}>
          <div className="relative mx-auto aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1c1c1c] via-[#0C0C0C] to-black shadow-2xl shadow-black/50">
            <div className="absolute inset-x-8 top-8 h-40 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-[#0C0C0C]/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
              <div>
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-3xl font-black text-white backdrop-blur-xl md:h-32 md:w-32 md:text-4xl">BV</div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 md:text-sm">Espacio para foto</p>
                <p className="mt-3 text-xs leading-5 text-slate-400 md:text-sm">Luego colocamos tu imagen aquí.</p>
              </div>
            </div>
          </div>
        </Magnet>
      </FadeIn>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-6 px-5 pb-6 sm:px-6 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[170px] text-[clamp(0.7rem,1vw,1.05rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[300px]">
            {profile.intro}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
}
