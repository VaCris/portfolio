import { projects } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="Portfolio" title="Proyectos destacados" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
          >
            <h3 className="text-2xl font-bold text-white">{project.name}</h3>
            <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
            <p className="mt-5 text-sm font-semibold text-cyan-400">
              {project.stack}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
