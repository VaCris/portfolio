import { highlights, profile } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionTitle
          eyebrow="Sobre mí"
          title="Construyo soluciones simples para problemas reales."
          description={profile.summary}
        />

        <div className="space-y-5 border-l border-white/10 pl-6 md:pl-10">
          {highlights.map((item, index) => (
            <div key={item} className="group flex gap-5">
              <span className="mt-1 text-sm font-bold text-cyan-300">
                0{index + 1}
              </span>
              <p className="text-xl font-semibold tracking-[-0.03em] text-slate-200 transition group-hover:text-white md:text-2xl">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
