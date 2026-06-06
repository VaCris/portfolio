import { techGroups } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TechStackSection() {
  return (
    <section id="tecnologias" className="relative py-28">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Stack"
          title="Tecnologías para construir rápido y bien."
          description="Trabajo con herramientas modernas del ecosistema web, cuidando estructura, mantenibilidad y experiencia de usuario."
        />

        <div className="space-y-10">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-5 border-t border-white/10 pt-8 md:grid-cols-[220px_1fr] md:items-start"
            >
              <h3 className="text-lg font-bold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-300 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
