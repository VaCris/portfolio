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

      <div className="space-y-24 border-t border-white/10 pt-12">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="group grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
              <span className="text-sm font-bold text-cyan-300">
                0{index + 1}
              </span>

              <h3 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white transition group-hover:text-cyan-100 md:text-6xl">
                {project.name}
              </h3>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
                {project.description}
              </p>

              <p className="mt-6 max-w-md text-sm font-semibold leading-6 text-slate-300">
                {project.stack}
              </p>
            </div>

            <div className="relative min-h-[18rem] overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-800 via-slate-950 to-black md:min-h-[24rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_38%)]" />
              <div className="absolute inset-x-8 top-8 h-40 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="relative h-full min-h-[18rem] w-full object-cover md:min-h-[24rem]"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="relative flex h-full min-h-[18rem] items-center justify-center px-8 text-center md:min-h-[24rem]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                      Espacio para imagen
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Usa una captura en public/projects/{project.name.toLowerCase().replaceAll(" ", "-")}.webp
                    </p>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
