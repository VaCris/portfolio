"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { profile } from "@/data/portfolio";

export function CTASection() {
  return (
    <section id="contacto" className="w-full pt-32 pb-12 border-t border-zinc-900 bg-[#0C0C0C]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn y={20}>
          <p className="text-xs font-mono tracking-widest text-zinc-600 uppercase mb-8">
            ¿qué sigue?
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#D7E2EA] mb-8 tracking-tighter">
            Trabajemos juntos.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Actualmente estoy abierto a nuevas oportunidades. Si tienes un proyecto en mente, buscas un desarrollador para tu equipo o simplemente quieres conectar, mi bandeja de entrada está abierta.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-[#D7E2EA] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#ffffff] transition-all duration-300 hover:bg-white hover:scale-105"
            >
              Enviar Mensaje
            </a>

            <div className="flex gap-6 mt-4 sm:mt-0">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-mono uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#D7E2EA]"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-mono uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#D7E2EA]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-32 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-[10px] md:text-xs font-mono text-zinc-600">
          © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </p>
        <p className="text-[10px] md:text-xs font-mono text-zinc-600 uppercase tracking-widest">
          Next.js • Tailwind CSS • Framer Motion
        </p>
      </div>
    </section>
  );
}