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

  const bookScale = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0.86, 1, 1, 0.88]);
  const bookY = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [120, 0, 0, -120]);
  const bookOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.25, 1, 1, 0.25]);
  const pageRotate = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [-36, 0, 0, 36]);
  const pageX = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [-70, 0, 0, 70]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0.95, 0.32, 0.32, 0.95]);
  const progressWidth = useTransform(scrollYProgress, [0.18, 0.82], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative h-[120vh] min-h-[860px] md:h-[140vh] md:min-h-[940px]">
      <motion.div
        className="sticky top-0 flex h-screen items-center justify-center [perspective:2000px]"
        style={{ scale: bookScale, y: bookY, opacity: bookOpacity }}
      >
        <div className="relative h-[calc(100vh-4rem)] w-full max-w-[1500px] px-3 sm:px-6 md:h-[calc(100vh-5rem)] md:px-10">
          <div className="absolute inset-x-10 top-1/2 h-[70vh] -translate-y-1/2 rounded-[64px] bg-[radial-gradient(circle_at_center,rgba(215,226,234,0.14),transparent_62%)] blur-3xl" />

          <div className="absolute left-1/2 top-8 z-30 hidden h-[calc(100%-4rem)] w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-black/75 via-[#D7E2EA]/20 to-black/75 shadow-[0_0_80px_rgba(0,0,0,0.9)] md:block" />
          <div className="absolute left-1/2 top-16 z-40 hidden h-[calc(100%-8rem)] w-px -translate-x-1/2 bg-[#D7E2EA]/35 md:block" />

          <motion.article
            className="relative z-10 grid h-full overflow-hidden rounded-[34px] border border-[#D7E2EA]/40 bg-[#121212] text-[#D7E2EA] shadow-[0_55px_160px_rgba(0,0,0,0.78)] md:grid-cols-2 md:rounded-[56px]"
            style={{ rotateY: pageRotate, x: pageX, transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-r from-black/75 via-transparent to-black/75"
              style={{ opacity: shadowOpacity }}
            />

            <div className="relative flex flex-col justify-between bg-[#151515] p-6 sm:p-8 md:p-10 lg:p-14">
              <div className="absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black/60 to-transparent md:block" />

              <div className="relative z-10">
                <div className="mb-8 flex items-start justify-between gap-6 md:mb-10">
                  <span className="text-[clamp(3.5rem,9vw,9rem)] font-black leading-none text-[#D7E2EA]">
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

                <h3 className="max-w-[620px] text-[clamp(2.4rem,5.2vw,6rem)] font-black uppercase leading-[0.86] tracking-[-0.075em]">
                  {project.name}
                </h3>

                <p className="mt-6 max-w-xl text-sm font-light leading-relaxed opacity-70 md:text-base lg:text-lg">
                  {project.description}
                </p>

                <p className="mt-6 max-w-md text-xs font-medium uppercase leading-6 tracking-[0.16em] opacity-55 md:text-sm">
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

            <div className="relative bg-[#0C0C0C] p-4 sm:p-5 md:p-7 lg:p-8">
              <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-black/75 to-transparent md:block" />
              <div className="grid h-full gap-4 md:grid-cols-[0.42fr_0.58fr]">
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[26px] bg-[#D7E2EA]/10 shadow-[inset_0_0_0_1px_rgba(215,226,234,0.12)] md:rounded-[36px]">
                    <ProjectVisual project={project} muted />
                  </div>
                  <div className="overflow-hidden rounded-[26px] bg-[#D7E2EA]/10 shadow-[inset_0_0_0_1px_rgba(215,226,234,0.12)] md:rounded-[36px]">
                    <ProjectVisual project={project} />
                  </div>
                </div>

                <div className="overflow-hidden rounded-[30px] bg-[#D7E2EA]/10 shadow-[inset_0_0_0_1px_rgba(215,226,234,0.12)] md:rounded-[46px]">
                  <ProjectVisual project={project} />
                </div>
              </div>
            </div>
          </motion.article>

          <div className="absolute bottom-3 left-1/2 z-40 h-1 w-[min(620px,72vw)] -translate-x-1/2 overflow-hidden rounded-full bg-[#D7E2EA]/15 md:bottom-4">
            <motion.div className="h-full rounded-full bg-[#D7E2EA]" style={{ width: progressWidth }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="relative z-10 -mt-6 overflow-hidden rounded-t-[32px] bg-[#0C0C0C] py-16 sm:py-20 md:-mt-10 md:rounded-t-[44px] md:py-24">
      <div className="mx-auto mb-8 max-w-6xl px-5 sm:px-8 md:mb-0 md:px-10">
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/60">
          Full screen project book
        </p>
        <h2 className="hero-heading text-center text-[clamp(3rem,9vw,7.5rem)] font-black uppercase leading-none tracking-tight">
          Proyectos
        </h2>
      </div>

      <div>
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
