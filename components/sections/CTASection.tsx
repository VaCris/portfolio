import { profile } from "@/data/portfolio";

export function CTASection() {
  return (
    <section id="contacto" className="relative px-6 py-28">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-96 bg-gradient-to-t from-cyan-300/10 to-transparent" />

      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/40 backdrop-blur-2xl md:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Contacto
            </p>

            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
              Hagamos que tu siguiente idea se vea y funcione mejor.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Puedo ayudarte a construir interfaces modernas, páginas web,
              aplicaciones responsivas e integraciones con APIs.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <a
              href={`mailto:${profile.email}`}
              className="w-full rounded-full bg-white px-7 py-4 text-center text-sm font-bold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-200 sm:w-auto"
            >
              Enviar correo
            </a>

            <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>

            <p className="text-sm text-slate-400">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
