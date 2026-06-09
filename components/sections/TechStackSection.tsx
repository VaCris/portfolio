"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { TechIcon } from "@/components/ui/TechIcon"; // ¡Volvemos a traer tus iconos!
import { techGroups } from "@/data/portfolio";

export function TechStackSection() {
  return (
    <section id="tecnologias" className="w-full pb-28 bg-[#0C0C0C]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn y={20}>
          <p className="text-xs font-mono tracking-widest text-zinc-600 uppercase mb-12">
            stack tecnológico
          </p>
        </FadeIn>

        <div className="space-y-12">
          {techGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.1} y={20}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 border-t border-zinc-900 pt-8 group/section">

                {/* Categoría */}
                <div className="md:col-span-1">
                  <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider transition-colors group-hover/section:text-zinc-400">
                    {group.title}
                  </h3>
                </div>

                {/* Tecnologías con Iconos */}
                <div className="md:col-span-3">
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-800 bg-[#111111] transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800/50"
                      >
                        {/* Contenedor del icono con un tamaño controlado */}
                        <div className="flex h-5 w-5 items-center justify-center opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                          <TechIcon name={item} className="h-full w-full" />
                        </div>
                        <span className="text-sm font-medium text-zinc-400 transition-colors duration-300 group-hover:text-[#D7E2EA]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}