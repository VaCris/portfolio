import { profile } from "@/data/portfolio";

export function CTASection() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Contacto
        </p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          ¿Tienes un proyecto web en mente?
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
          Puedo ayudarte a construir interfaces modernas, páginas web,
          aplicaciones responsivas e integraciones con APIs.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Enviar correo
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-400">{profile.location}</p>
      </div>
    </section>
  );
}
