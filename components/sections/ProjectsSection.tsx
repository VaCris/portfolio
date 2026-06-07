"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

type ProjectPanelProps = {
  project: Project;
  index: number;
  total: number;
};

function ProjectImage({
  project,
  className,
  muted,
  large,
}: {
  project: Project;
  className: string;
  muted?: boolean;
  large?: boolean;
}) {
  if (project.image) {
    return (
      <div className={`${className} overflow-hidden rounded-2xl md:rounded-[2rem]`}>
        <img
          src={project.image}
          alt={project.imageAlt}
          className={`h-full w-full object-cover ${muted ? "opacity-60 grayscale" : ""} ${large ? "scale-105" : ""}`}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className={`${className} flex items-center justify-center rounded-2xl bg-[#D7E2EA]/10 text-center md:rounded-[2rem]`}>
      <p className="px-8 text-xs font-medium uppercase tracking-widest opacity-70 md:text-sm">
        Backend API
      </p>
    </div>
  );
}

function ProjectPanel({ project, index, total }: ProjectPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.018;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="min-h-[620px] py-6 md:h-[78vh] md:min-h-[680px]">
      <motion.article
        className="sticky overflow-hidden rounded-[28px] border border-[#D7E2EA]/70 bg-[#0C0C0C] p-4 text-[#D7E2EA] sm:rounded-[34px] sm:p-5 md:rounded-[42px] md:p-6"
        style={{ top: `calc(4.5rem + ${index * 18}px)`, scale }}
      >
        <div className="mb-5 grid gap-4 md:grid-cols-[90px_120px_1fr_auto] md:items-end">
          <span className="text-[clamp(2.2rem,6vw,5.5rem)] font-black leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-xs font-medium uppercase tracking-widest opacity-70 md:text-sm">
            Proyecto
          </p>
          <div>
            <h3 className="text-[clamp(1.7rem,4vw,4rem)] font-black uppercase leading-[0.95] tracking-tight">
              {project.name}
            </h3>
            <p className="mt-2 max-w-2xl text-xs font-light leading-relaxed opacity-70 sm:text-sm md:text-[0.95rem]">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#D7E2EA] px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10 md:px-5 md:py-2.5"
              >
                Live
              </a>
            ) : null}
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#D7E2EA] px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10 md:px-5 md:py-2.5"
              >
                Repo
              </a>
            ) : null}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-[0.38fr_0.62fr]">
          <div className="grid gap-3">
            <ProjectImage project={project} className="h-[110px] sm:h-[140px] md:h-[170px]" />
            <ProjectImage project={project} className="h-[130px] sm:h-[170px] md:h-[230px]" muted />
          </div>
          <ProjectImage project={project} className="h-[250px] sm:h-[320px] md:h-[415px]" large />
        </div>
      </motion.article>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="relative z-10 -mt-6 rounded-t-[32px] bg-[#0C0C0C] px-4 py-16 sm:px-6 sm:py-20 md:-mt-10 md:rounded-t-[44px] md:px-10 md:py-24">
      <h2 className="hero-heading mb-10 text-center text-[clamp(3rem,9vw,7.5rem)] font-black uppercase leading-none tracking-tight md:mb-14">
        Project
      </h2>

      <div className="mx-auto max-w-6xl">
        {projects.map((project, index) => (
          <ProjectPanel
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
