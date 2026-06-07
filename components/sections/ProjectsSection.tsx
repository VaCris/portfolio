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
      <div className={`${className} overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]`}>
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
    <div className={`${className} flex items-center justify-center rounded-[40px] bg-[#D7E2EA]/10 text-center sm:rounded-[50px] md:rounded-[60px]`}>
      <p className="px-8 text-sm font-medium uppercase tracking-widest opacity-70">
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
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh]">
      <motion.article
        className="sticky overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 text-[#D7E2EA] sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{ top: `calc(6rem + ${index * 28}px)`, scale }}
      >
        <div className="mb-6 grid gap-5 md:grid-cols-[0.3fr_0.35fr_1fr_auto] md:items-end">
          <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-sm font-medium uppercase tracking-widest opacity-70">
            Proyecto
          </p>
          <div>
            <h3 className="text-[clamp(2rem,5vw,5.2rem)] font-black uppercase leading-none tracking-tight">
              {project.name}
            </h3>
            <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed opacity-70 md:text-base">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10 sm:px-8"
              >
                Live Project
              </a>
            ) : null}
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10 sm:px-8"
              >
                Repo
              </a>
            ) : null}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-[0.4fr_0.6fr]">
          <div className="grid gap-3">
            <ProjectImage project={project} className="h-[clamp(130px,16vw,230px)]" />
            <ProjectImage project={project} className="h-[clamp(160px,22vw,340px)]" muted />
          </div>
          <ProjectImage project={project} className="h-[clamp(300px,40vw,590px)]" large />
        </div>
      </motion.article>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32">
      <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
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
