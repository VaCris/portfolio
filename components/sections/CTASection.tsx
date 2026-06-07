import { profile } from "@/data/portfolio";

const inputStyles =
  "w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:bg-white/[0.08]";

export function CTASection() {
  return (
    <section id="contacto" className="relative px-6 py-28">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-96 bg-gradient-to-t from-cyan-300/10 to-transparent" />

      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/40 backdrop-blur-2xl md:p-14">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Contacto
            </p>

            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
              Hagamos que tu siguiente idea se vea y funcione mejor.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Cuéntame brevemente qué necesitas y te responderé para coordinar
              alcance, tiempos y próximos pasos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Correo directo
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-400">{profile.location}</p>
          </div>

          <form
            action={profile.formspreeEndpoint}
            method="POST"
            className="rounded-[2rem] border border-white/10 bg-slate-950/45 p-5 backdrop-blur-xl md:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Nombre
                </span>
                <input
                  className={inputStyles}
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Correo
                </span>
                <input
                  className={inputStyles}
                  type="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </label>
            </div>

            <label className="mt-4 block space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Asunto
              </span>
              <input
                className={inputStyles}
                type="text"
                name="subject"
                placeholder="Página web, landing, app, soporte..."
                required
              />
            </label>

            <label className="mt-4 block space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Mensaje
              </span>
              <textarea
                className={`${inputStyles} min-h-36 resize-none`}
                name="message"
                placeholder="Cuéntame qué necesitas construir o mejorar."
                required
              />
            </label>

            <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:scale-[1.01] hover:bg-cyan-200"
            >
              Enviar mensaje
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              Este formulario usa Formspree. Reemplaza el endpoint en
              <span className="text-slate-300"> data/portfolio.ts</span> para activarlo.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
