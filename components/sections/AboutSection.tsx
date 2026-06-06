import { highlights } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="Sobre mí" title="Qué puedo aportar" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-300"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
