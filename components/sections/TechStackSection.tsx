import { techGroups } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechIcon } from "@/components/ui/TechIcon";

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

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-lg shadow-black/20 transition group-hover:scale-105">
                      <TechIcon name={item} className="h-7 w-7" />
                    </div>
                    <span className="text-sm font-semibold text-slate-300 transition group-hover:text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
