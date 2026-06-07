"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

type ProjectSpreadProps = {
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

function ProjectSpread({ project, index, total }: ProjectSpreadProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bookScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.92]);
  const bookY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [110, 0, 0, -90]);
  const bookOpacity = useTransform(scrollYProgress, [0, 0.08, 0.9, 1], [0.35, 1, 1, 0.4]);
  const pageRotate = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [-32, 0, 0, 32]);
  const pageX = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [-52, 0, 0, 52]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0.9, 0.35, 0.35, 0.9]);
  const progressWidth = useTransform(scrollYProgress, [0.18, 0.82], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative min-h-[760px] py-10 md:h-[110vh] md:min-h-[860px]">
      <motion.div
        className="sticky top-16 mx-auto max-w-6xl [perspective:1800px] md:top-20"
        style={{ scale: bookScale, y: bookY, opacity: bookOpacity }}
      >
        <div className="relative mx-auto h-[660px] max-w-6xl md:h-[720px]">
          <div className="absolute -inset-8 rounded-[56px] bg-[radial-gradient(circle_at_center,rgba(215,226,234,0.14),transparent_62%)] blur-2xl" />

          <div className="absolute left-1/2 top-0 z-20 hidden h-full w-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-black/70 via-[#D7E2EA]/20 to-black/70 shadow-[0_0_50px_rgba(0,0,0,0.8)] md:block" />
          <div className="absolute left-1/2 top-8 z-30 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-[#D7E2EA]/35 md:block" />

          <motion.article
            className="relative z-10 grid h-full overflow-hidden rounded-[34px] border border-[#D7E2EA]/40 bg-[#121212] text-[#D7E2EA] shadow-[0_45px_140px_rgba(0,0,0,0.72)] md:grid-cols-2 md:rounded-[48px]"
            style={{ rotateY: pageRotate, x: pageX, transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-r from-black/70 via-transparent to-black/70"
              style={{ opacity: shadowOpacity }}
            />

            <div className="relative flex flex-col justify-between bg-[#151515] p-6 md:p-9 lg:p-11">
              <div className="absolute inset-y-0 right-0 hidden w-20 bg-gradient-to-l from-black/55 to-transparent md:block" />

              <div className="relative z-10">
                <div className="mb-8 flex items-start justify-between gap-6">
                  <span className="text-[clamp(3.5rem,8vw,8rem)] font-black leading-none text-[#D7E2EA]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="text-right">
                    <p className="text-xs font-medium uppercase tracking-[0.28em] opacity-55">
                      Página
                    </p>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] opacity-80">
                      {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </p>
                  </div>
                </div>

                <h3 className="max-w-[520px] text-[clamp(2.2rem,5vw,5.7rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">
                  {project.name}
                </h3>

                <p className="mt-6 max-w-xl text-sm font-light leading-relaxed opacity-70 md:text-base">
                  {project.description}
                </p>

                <p className="mt-6 max-w-md text-xs font-medium uppercase leading-6 tracking-[0.16em] opacity-55">
                  {project.stack}
                </p>
              </div>

              <div className="relative z-10 mt-8">
                <div className="mb-5 h-px w-full bg-[#D7E2EA]/20" />
                <div className="flex flex-wrap gap-3">
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
            </div>

            <div className="relative bg-[#0C0C0C] p-4 md:p-6 lg:p-7">
              <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-black/70 to-transparent md:block" />
              <div className="grid h-full min-h-[380px] gap-4 md:min-h-0 md:grid-cols-[0.42fr_0.58fr]">
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[26px] bg-[#D7E2EA]/10 shadow-[inset_0_0_0_1px_rgba(215,226,234,0.12)] md:rounded-[34px]">
                    <ProjectVisual project={project} muted />
                  </div>
                  <div className="overflow-hidden rounded-[26px] bg-[#D7E2EA]/10 shadow-[inset_0_0_0_1px_rgba(215,226,234,0.12)] md:rounded-[34px]">
                    <ProjectVisual project={project} />
                  </div>
                </div>

                <div className="overflow-hidden rounded-[30px] bg-[#D7E2EA]/10 shadow-[inset_0_0_0_1px_rgba(215,226,234,0.12)] md:rounded-[42px]">
                  <ProjectVisual project={project} />
                </div>
              </div>
            </div>
          </motion.article>

          <div className="absolute bottom-[-32px] left-1/2 z-30 h-1 w-[min(520px,70vw)] -translate-x-1/2 overflow-hidden rounded-full bg-[#D7E2EA]/15">
            <motion.div className="h-full rounded-full bg-[#D7E2EA]" style={{ width: progressWidth }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="relative z-10 -mt-6 overflow-hidden rounded-t-[32px] bg-[#0C0C0C] px-4 py-16 sm:px-6 sm:py-20 md:-mt-10 md:rounded-t-[44px] md:px-10 md:py-24">
      <div className="mx-auto mb-14 max-w-6xl md:mb-20">
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/60">
          Vertical project book
        </p>
        <h2 className="hero-heading text-center text-[clamp(3rem,9vw,7.5rem)] font-black uppercase leading-none tracking-tight">
          Proyectos
        </h2>
      </div>

      <div className="mx-auto max-w-6xl">
        {projects.map((project, index) => (
          <ProjectSpread
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
