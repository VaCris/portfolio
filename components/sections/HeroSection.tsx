import { profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="noise-layer absolute inset-0 -z-10" />
      <div className="absolute left-1/2 top-16 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute right-0 top-48 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
            Disponible para proyectos web · Lima, Perú
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
            {profile.role}
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
            Diseño y desarrollo web con enfoque en producto.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Soy {profile.name}. {profile.intro}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#proyectos"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-bold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-200"
            >
              Ver proyectos
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-center text-sm font-bold text-white backdrop-blur-xl transition hover:scale-[1.02] hover:bg-white/10"
            >
              Contactarme
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-transparent blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-800 via-slate-950 to-black">
              <div className="absolute inset-x-10 top-10 h-48 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-slate-950/60 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center px-10 text-center">
                <div>
                  <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-4xl font-black text-white backdrop-blur-xl md:h-40 md:w-40 md:text-5xl">
                    BV
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                    Espacio para foto
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Luego reemplazamos este bloque por tu imagen profesional.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="rounded-2xl bg-white/[0.06] px-4 py-3">
                <p className="text-2xl font-black text-white">4+</p>
                <p className="text-xs text-slate-400">Proyectos</p>
              </div>
              <div className="rounded-2xl bg-white/[0.06] px-4 py-3">
                <p className="text-2xl font-black text-white">Web</p>
                <p className="text-xs text-slate-400">Full stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
