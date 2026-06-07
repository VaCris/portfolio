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

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
          <div className="absolute h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute h-[24rem] w-[24rem] rounded-full border border-cyan-300/10" />

          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-800 via-slate-950 to-black shadow-2xl shadow-black/40 md:max-w-md">
            <div className="absolute inset-x-8 top-8 h-56 rounded-full bg-cyan-300/20 blur-3xl" />
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
                  Coloca tu imagen en public/profile.webp y la reemplazamos aquí.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-4 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white backdrop-blur-2xl md:left-10">
            4+ proyectos
          </div>
          <div className="absolute -right-2 top-10 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white backdrop-blur-2xl md:right-8">
            Web stack
          </div>
        </div>
      </div>
    </section>
  );
}
