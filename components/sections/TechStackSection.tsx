import { techGroups } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TechStackSection() {
  return (
    <section id="tecnologias" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="Stack" title="Tecnologías" />

      <div className="grid gap-6 md:grid-cols-2">
        {techGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="mb-4 text-xl font-bold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
