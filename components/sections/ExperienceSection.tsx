import { experiences } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ExperienceSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="Experiencia" title="Perfil profesional" />

      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((experience) => (
          <div
            key={experience.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
