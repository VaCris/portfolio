import { education } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function EducationSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <SectionTitle eyebrow="Formación" title="Base académica y especialización." />

        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between"
            >
              <h3 className="text-3xl font-black tracking-[-0.04em] text-white">
                {item.title}
              </h3>
              <p className="text-slate-400 md:text-right">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
