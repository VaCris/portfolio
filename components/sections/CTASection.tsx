import { profile } from "@/data/portfolio";

const inputStyles =
  "w-full border-0 border-b border-white/20 bg-transparent px-0 py-4 text-base text-white outline-none transition placeholder:text-white/30 focus:border-white md:text-lg";

export function CTASection() {
  return (
    <section id="contacto" className="relative overflow-hidden px-5 py-24 sm:px-8 md:px-10 md:py-32">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_bottom,rgba(215,226,234,0.12),transparent_55%)]" />

      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/60">
            Contacto
          </p>

          <h2 className="max-w-3xl text-[clamp(3rem,8vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-white">
            Hablemos de tu idea.
          </h2>

          <p className="mt-8 max-w-xl text-base font-light leading-8 text-[#D7E2EA]/70 md:text-lg">
            Cuéntame qué necesitas construir o mejorar. Te responderé para
            coordinar alcance, tiempos y próximos pasos.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              Correo
            </a>
          </div>

          <p className="mt-8 text-sm text-[#D7E2EA]/45">{profile.location}</p>
        </div>

        <form action={profile.formspreeEndpoint} method="POST" className="space-y-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D7E2EA]/45">
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

            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D7E2EA]/45">
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

          <label className="block">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D7E2EA]/45">
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

          <label className="block">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D7E2EA]/45">
              Mensaje
            </span>
            <textarea
              className={`${inputStyles} min-h-40 resize-none`}
              name="message"
              placeholder="Cuéntame qué necesitas construir o mejorar."
              required
            />
          </label>

          <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="rounded-full bg-[#D7E2EA] px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-[#0C0C0C] transition hover:scale-[1.02] hover:bg-white"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
