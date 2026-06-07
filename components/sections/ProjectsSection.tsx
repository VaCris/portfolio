"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

type ProjectPageProps = {
  project: Project;
  index: number;
  total: number;
};

function ProjectVisual({ project, muted = false }: { project: Project; muted?: boolean }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt}
        className={`h-full w-full object-cover ${muted ? "opacity-45 grayscale" : ""}`}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#D7E2EA]/10 text-center">
      <p className="px-8 text-xs font-medium uppercase tracking-[0.25em] opacity-60">
        Backend API
      </p>
    </div>
  );
}

function ProjectPage({ project, index, total }: ProjectPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0.94, 1, 1, 0.96]);
  const rotateX = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [8, 0, 0, -8]);
  const y = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [70, 0, 0, -44]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.9, 1], [0.55, 1, 1, 0.75]);

  return (
    <div ref={ref} className="min-h-[720px] py-8 md:h-[92vh] md:min-h-[760px]">
      <motion.article
        className="sticky top-20 mx-auto max-w-6xl origin-top overflow-hidden rounded-[32px] border border-[#D7E2EA]/40 bg-[#111111] text-[#D7E2EA] shadow-[0_40px_120px_rgba(0,0,0,0.55)] md:rounded-[44px]"
        style={{ scale, rotateX, y, opacity, transformPerspective: 1200 }}
      >
        <div className="grid min-h-[600px] md:grid-cols-[72px_0.88fr_1.12fr]">
          <aside className="hidden border-r border-[#D7E2EA]/20 bg-[#D7E2EA]/[0.04] md:flex md:flex-col md:items-center md:justify-between md:py-8">
            <span className="text-sm font-medium uppercase tracking-[0.35em] opacity-60 [writing-mode:vertical-rl]">
              Page {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-24 w-px bg-[#D7E2EA]/30" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] opacity-50 [writing-mode:vertical-rl]">
              {total} Projects
            </span>
          </aside>

          <div className="relative flex flex-col justify-between border-b border-[#D7E2EA]/15 p-6 md:border-b-0 md:border-r md:p-8 lg:p-10">
            <div>
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="text-[clamp(3rem,8vw,7rem)] font-black leading-none opacity-95">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-[#D7E2EA]/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] opacity-70">
                  Proyecto
                </span>
              </div>

              <h3 className="text-[clamp(2rem,4.6vw,4.8rem)] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                {project.name}
              </h3>

              <p className="mt-5 max-w-xl text-sm font-light leading-relaxed opacity-70 md:text-base">
                {project.description}
              </p>

              <p className="mt-6 max-w-md text-xs font-medium uppercase leading-6 tracking-[0.16em] opacity-60">
                {project.stack}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#D7E2EA] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0C0C0C] transition hover:scale-[1.02]"
                >
                  Ver sitio
                </a>
              ) : null}

              {project.repositoryUrl ? (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#D7E2EA]/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-[#D7E2EA]/10"
                >
                  Repositorio
                </a>
              ) : null}
            </div>
          </div>

          <div className="relative bg-[#0C0C0C] p-4 md:p-5 lg:p-6">
            <div className="absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-black/50 to-transparent md:block" />
            <div className="grid h-full min-h-[360px] gap-4 md:min-h-[560px] md:grid-cols-[0.42fr_0.58fr]">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[24px] bg-[#D7E2EA]/10 md:rounded-[32px]">
                  <ProjectVisual project={project} muted />
                </div>
                <div className="overflow-hidden rounded-[24px] bg-[#D7E2EA]/10 md:rounded-[32px]">
                  <ProjectVisual project={project} />
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] bg-[#D7E2EA]/10 md:rounded-[38px]">
                <ProjectVisual project={project} />
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="relative z-10 -mt-6 rounded-t-[32px] bg-[#0C0C0C] px-4 py-16 sm:px-6 sm:py-20 md:-mt-10 md:rounded-t-[44px] md:px-10 md:py-24">
      <div className="mx-auto mb-12 max-w-6xl md:mb-16">
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/60">
          Project book
        </p>
        <h2 className="hero-heading text-center text-[clamp(3rem,9vw,7.5rem)] font-black uppercase leading-none tracking-tight">
          Proyectos
        </h2>
      </div>

      <div className="mx-auto max-w-6xl [perspective:1200px]">
        {projects.map((project, index) => (
          <ProjectPage
            key={project.name}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
