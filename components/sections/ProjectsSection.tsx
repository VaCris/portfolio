"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="w-full py-28 border-t border-zinc-900 bg-[#0C0C0C]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn y={20}>
          <p className="text-xs font-mono tracking-widest text-zinc-600 uppercase mb-3">

          </p>
          <h2 className="text-3xl font-bold text-[#D7E2EA] mb-16 tracking-tight">
            Proyectos
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.15} y={30}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-900 bg-[#111111]/40 p-6 transition-all duration-500 hover:border-zinc-700/60 hover:bg-[#111111]/80">

                <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-900">
                      <span className="text-sm font-mono text-zinc-600 uppercase tracking-widest">
                        API Backend
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-[#D7E2EA] mb-3 tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.stack.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/50">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-[#D7E2EA] transition-colors hover:text-white"
                      >
                        Ver sitio ↗
                      </a>
                    )}
                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300"
                      >
                        Código ↗
                      </a>
                    )}
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