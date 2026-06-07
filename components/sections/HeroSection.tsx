"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Magnet } from "@/components/animations/Magnet";
import { ContactButton } from "@/components/ui/ContactButton";
import { profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      <div className="noise-layer absolute inset-0 -z-10" />

      <div className="relative z-20 px-6 pt-6 md:px-10 md:pt-8">
        <FadeIn y={-20}>
          <nav className="flex items-center justify-between text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:text-lg lg:text-[1.4rem]">
            <a href="#sobre-mi" className="transition duration-200 hover:opacity-70">Sobre mí</a>
            <a href="#servicios" className="transition duration-200 hover:opacity-70">Servicios</a>
            <a href="#proyectos" className="transition duration-200 hover:opacity-70">Proyectos</a>
            <a href="#contacto" className="transition duration-200 hover:opacity-70">Contacto</a>
          </nav>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-6 overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hola, soy Vidal
          </h1>
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <Magnet>
          <div className="relative mx-auto aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1c1c1c] via-[#0C0C0C] to-black">
            <div className="absolute inset-x-8 top-8 h-56 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-[#0C0C0C]/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center px-10 text-center">
              <div>
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-4xl font-black text-white backdrop-blur-xl md:h-40 md:w-40 md:text-5xl">BV</div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Espacio para foto</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">Luego colocamos tu imagen aquí.</p>
              </div>
            </div>
          </div>
        </Magnet>
      </FadeIn>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]">
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
