import { experiences } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ExperienceSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle
        eyebrow="Experiencia"
        title="Perfil técnico orientado a ejecución."
        description="He participado en desarrollo de interfaces, organización de componentes, integración de funcionalidades y despliegue de soluciones web."
      />

      <div className="relative ml-3 space-y-12 border-l border-white/10 pl-8">
        {experiences.map((experience) => (
          <div key={experience.title} className="relative">
            <span className="absolute -left-[39px] top-2 h-4 w-4 rounded-full border border-cyan-300 bg-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.65)]" />
            <h3 className="text-2xl font-black tracking-[-0.03em] text-white md:text-3xl">
              {experience.title}
            </h3>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
