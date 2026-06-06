import { education } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function EducationSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="Formación" title="Educación" />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-slate-400">{item.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
