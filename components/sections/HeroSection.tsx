import { profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_32%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div
        id="inicio"
        className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:pt-24"
      >
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {profile.role}
          </p>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#proyectos"
              className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Ver proyectos
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Contactarme
            </a>
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Perfil</p>
            <h2 className="mt-2 text-2xl font-bold text-white">
              Frontend + Backend
            </h2>
            <p className="mt-4 leading-7 text-slate-300">{profile.summary}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-3xl font-black text-white">4+</p>
                <p className="mt-1 text-sm text-slate-400">Proyectos</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-3xl font-black text-white">Web</p>
                <p className="mt-1 text-sm text-slate-400">Stack</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
