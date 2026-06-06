import { projects } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle
        eyebrow="Portfolio"
        title="Proyectos con enfoque funcional."
        description="Una selección de productos web donde combino interfaces limpias, consumo de APIs, lógica de negocio y estructura mantenible."
      />

      <div className="divide-y divide-white/10 border-y border-white/10">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="group grid gap-8 py-10 transition md:grid-cols-[120px_1fr_260px] md:items-center"
          >
            <span className="text-sm font-bold text-cyan-300">
              0{index + 1}
            </span>

            <div>
              <h3 className="text-3xl font-black tracking-[-0.04em] text-white transition group-hover:text-cyan-100 md:text-5xl">
                {project.name}
              </h3>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                {project.description}
              </p>
            </div>

            <p className="text-sm font-semibold leading-6 text-slate-300 md:text-right">
              {project.stack}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
