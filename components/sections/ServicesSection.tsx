import { FadeIn } from "@/components/animations/FadeIn";

const services = [
  {
    name: "Desarrollo Web",
    description:
      "Construcción de sitios y aplicaciones web modernas, responsivas y enfocadas en rendimiento.",
  },
  {
    name: "Frontend UI",
    description:
      "Interfaces limpias, mantenibles y orientadas a experiencia de usuario usando React, Next.js y Tailwind CSS.",
  },
  {
    name: "APIs REST",
    description:
      "Integración y desarrollo de funcionalidades conectadas a servicios backend, autenticación y lógica de negocio.",
  },
  {
    name: "Arquitectura Modular",
    description:
      "Organización de componentes, datos y servicios para que el proyecto pueda crecer sin volverse difícil de mantener.",
  },
  {
    name: "Optimización",
    description:
      "Mejoras de carga, estructura, accesibilidad y experiencia para entregar productos más rápidos y sólidos.",
  },
];

export function ServicesSection() {
  return (
    <section className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Servicios
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl border-y border-[#0C0C0C]/15">
        {services.map((service, index) => (
          <FadeIn key={service.name} delay={index * 0.1} y={40}>
            <div className="grid gap-6 border-b border-[#0C0C0C]/15 py-8 last:border-b-0 sm:py-10 md:grid-cols-[0.35fr_1fr] md:py-12">
              <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="self-center">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase tracking-tight">
                  {service.name}
                </h3>
                <p className="mt-3 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
