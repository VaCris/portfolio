const frontend = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript ES6+",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Vite",
];

const backend = ["PHP", "Node.js", "C#", "Java"];

const databases = ["MySQL", "MariaDB", "SQL Server", "SQLite"];

const tools = ["Git", "GitHub", "Postman", "Visual Studio Code", "Visual Studio"];

const highlights = [
  "Aplicaciones web modernas",
  "Interfaces responsivas",
  "Integración de APIs REST",
  "Arquitectura modular",
  "Buenas prácticas de desarrollo",
  "Automatización y tecnologías cloud",
];

const projects = [
  {
    name: "Docivo",
    description:
      "Plataforma web de herramientas PDF enfocada en simplicidad, privacidad y rendimiento.",
    stack: "Next.js, React, TypeScript, Tailwind CSS",
  },
  {
    name: "SPlay GO",
    description:
      "Aplicación web para explorar películas y series con catálogo dinámico, filtros, búsqueda y reproducción multimedia.",
    stack: "React, Vite, Tailwind CSS, TMDB API",
  },
  {
    name: "Ataraxia Timer",
    description:
      "Aplicación orientada a productividad y gestión del tiempo mediante técnicas Pomodoro.",
    stack: "React, APIs REST",
  },
  {
    name: "TKOH Bookstore Shop",
    description: "Tienda online con gestión de productos y lógica de negocio.",
    stack: "PHP, Twig, JavaScript, CSS",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function TechGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-200">
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_32%)]" />
        <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#inicio" className="text-lg font-black tracking-tight text-white">
            Bryan Vidal
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#sobre-mi" className="transition hover:text-white">
              Sobre mí
            </a>
            <a href="#tecnologias" className="transition hover:text-white">
              Tecnologías
            </a>
            <a href="#proyectos" className="transition hover:text-white">
              Proyectos
            </a>
            <a href="#contacto" className="transition hover:text-white">
              Contacto
            </a>
          </div>
        </nav>

        <div
          id="inicio"
          className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:pt-24"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Desarrollador Web y de Software
            </p>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
              Bryan Alexander Vidal Crispín
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Construyo aplicaciones web, interfaces modernas y soluciones
              digitales enfocadas en experiencia de usuario, rendimiento y
              estructura escalable.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#proyectos"
                className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Ver proyectos
              </a>

              <a
                href="mailto:vidalbryanalexander@gmail.com"
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
              <p className="mt-4 leading-7 text-slate-300">
                Trabajo principalmente con tecnologías del ecosistema
                JavaScript, consumiendo APIs, implementando arquitecturas
                modulares y manteniendo buenas prácticas de desarrollo.
              </p>

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

      <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Sobre mí" title="Qué puedo aportar" />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="tecnologias" className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Stack" title="Tecnologías" />

        <div className="grid gap-6 md:grid-cols-2">
          <TechGroup title="Frontend" items={frontend} />
          <TechGroup title="Backend" items={backend} />
          <TechGroup title="Bases de Datos" items={databases} />
          <TechGroup title="Herramientas" items={tools} />
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Portfolio" title="Proyectos destacados" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-cyan-400">
                {project.stack}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Experiencia" title="Perfil profesional" />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-bold text-white">
              Desarrollador Frontend
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Participación en el desarrollo de interfaces web, organización de
              componentes reutilizables y mejora continua de aplicaciones
              enfocadas en rendimiento y mantenibilidad.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-bold text-white">Desarrollador Web</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Desarrollo de aplicaciones web completas, implementación de bases
              de datos, integración de funcionalidades y despliegue de
              soluciones para clientes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Formación" title="Educación" />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-bold text-white">
              Desarrollo de Software
            </h3>
            <p className="mt-2 text-slate-400">SENATI</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-bold text-white">Cloud Computing</h3>
            <p className="mt-2 text-slate-400">
              Universidad Nacional de Ingeniería - UNI
            </p>
          </div>
        </div>
      </section>

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
              href="mailto:vidalbryanalexander@gmail.com"
              className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Enviar correo
            </a>

            <a
              href="https://github.com/VaCris"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/bryan-alexander-vidal-crispin-110410301"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-400">Lima, Perú</p>
        </div>
      </section>
    </main>
  );
}
