import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="w-full py-28 border-t border-zinc-900 bg-[#0C0C0C]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Subtítulo técnico sutil */}
        <p className="text-xs font-mono tracking-widest text-zinc-600 uppercase mb-3">

        </p>
        <h2 className="text-3xl font-bold text-[#D7E2EA] mb-16 tracking-tight">
          Experiencia Profesional
        </h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group"
            >
              {/* Columna de Fechas */}
              <div className="md:col-span-1">
                <span className="text-sm font-mono text-zinc-500 block transition-colors group-hover:text-zinc-400 md:sticky md:top-24">
                  {exp.period}
                </span>
              </div>

              {/* Columna de Contenido */}
              <div className="md:col-span-3 space-y-3">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-semibold text-[#D7E2EA] tracking-tight">
                    {exp.title}
                  </h3>
                  <span className="text-sm font-medium text-zinc-500">
                    en {exp.company}
                  </span>
                </div>

                <p className="text-zinc-400 text-base leading-relaxed font-light max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}