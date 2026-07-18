export const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export const profile = {
  name: "Bryan Alexander Vidal Crispin",
  shortName: "Bryan Vidal",
  role: "Desarrollador Web y de Software",
  location: "Lima, Perú",
  email: "bryan.vidal@studios-tkoh.online",
  github: "https://github.com/VaCris",
  image: "/perfil.webp",
  linkedin: "https://www.linkedin.com/in/bryan-alexander-vidal-crispin-110410301",
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
  intro:
    "Construyo aplicaciones web y soluciones digitales que buscan ser intuitivas, funcionales y fáciles de mantener.",
  summary:
    "Soy desarrollador de software y me gusta crear aplicaciones web que sean útiles, intuitivas y bien estructuradas. Disfruto aprender nuevas tecnologías, resolver problemas y mejorar continuamente mis habilidades tanto en frontend como en backend.",
};

export const highlights = [
  "Desarrollo Full-Stack (.NET & JS)",
  "Interfaces responsivas y UX",
  "Integración de APIs REST",
  "Gestión de Bases de Datos",
  "Resolución de problemas críticos",
];

export const techGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Backend",
    items: [
      "NestJS",
      "C#",
    ],
  },
  {
    title: "Bases de Datos",
    items: ["SQL", "SQL Server", "MySQL", "Procedimientos Almacenados"],
  },
  {
    title: "Herramientas",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "Visual Studio Code",
      "Visual Studio",
    ],
  },
];

export const experiences = [
  {
    title: "Técnico de Transmisión de Datos (Soporte TI)",
    company: "ONPE",
    period: "Abril 2026",
    description:
      "Gestión y habilitación de infraestructura informática crítica. Ejecución de protocolos de seguridad para la transmisión de datos oficiales e implementación de la Solución Tecnológica de Apoyo al Escrutinio (STAE).",
  },
  {
    title: "Desarrollador Front-end",
    company: "Lubricantes Claudia",
    period: "Agosto 2025 - Diciembre 2025",
    description:
      "Desarrollo de frontend con arquitectura modular y organización de componentes reutilizables. Refactorización continua para mejorar la mantenibilidad y el rendimiento, implementando interfaces alineadas a las reglas de negocio.",
  },
  {
    title: "Proyecto Freelance - Plataforma DRM",
    company: "Freelance",
    period: "Octubre 2025",
    description:
      `Participación en el desarrollo de una plataforma DRM para gestión de licencias y suscripciones utilizando NestJS, APIs REST y WebSockets. Colaboración en la integración de servicios externos, autenticación de usuarios y validación de acceso para aplicaciones web y móviles, asegurando la protección de contenido digital y la experiencia del usuario.`,
  },
  {
    title: "Desarrollador Web",
    company: "JHARDSYSTEX",
    period: "Feb 2025 - Jun 2025",
    description:
      "Desarrollo del frontend y diseño de la base de datos relacional para una aplicación web de gestión de tickets. Realización de pruebas funcionales para garantizar el correcto funcionamiento de los procesos clave del sistema.",
  },
  {
    title: "Desarrollador Web",
    company: "SERVISERC",
    period: "Jul 2024 - Dic 2024",
    description:
      "Creación y mantenimiento de sitios web responsivos. Implementación de funcionalidades personalizadas según requerimientos del cliente, optimizando la experiencia de usuario (UX) y garantizando compatibilidad multiplataforma.",
  }
];

export const education = [
  {
    title: "Desarrollo de Software",
    institution: "SENATI",
    period: "2025",
  },
  {
    title: "Cloud Computing (AWS/Azure/GCP)",
    institution: "Universidad Nacional de Ingeniería - UNI",
    period: "2025",
  },
];

export const projects = [
  {
    name: "Docivo",
    description:
      "Herramientas de PDF rápidas, privadas y sin distracciones, enfocadas en simplicidad y rendimiento.",
    stack: "Next.js 16, React 19, TypeScript, Tailwind CSS 4",
    image: "https://raw.githubusercontent.com/VaCris/VaCris/main/Docivo.png",
    imageAlt: "Captura del proyecto Docivo",
    liveUrl: "https://docivo.onrender.com/",
    repositoryUrl: "https://github.com/VaCris/docivo",
  },
  {
    name: "SPlay GO",
    description:
      "Plataforma web para explorar películas y series con catálogo, búsqueda, filtros y reproductor dinámico.",
    stack: "React, Vite, Tailwind CSS, TMDB API",
    image: "https://i.postimg.cc/gkK5W4Dd/splaygo.png",
    imageAlt: "Captura del proyecto SPlay GO",
    liveUrl: "https://splay.evaluate.codes",
    repositoryUrl: "",
  },
  {
    name: "Ataraxia Timer",
    status: "testing",
    description:
      "Aplicación de productividad desarrollada desde cero. Temporizador Pomodoro, tareas y etiquetas. Parte del ecosistema Axia de Studios TKOH.",
    stack: "React, APIs REST, Productividad",
    image: "https://raw.githubusercontent.com/VaCris/VaCris/main/ATARAXIA.png",
    imageAlt: "Captura del proyecto Ataraxia Timer",
    liveUrl: "https://ataraxiatimer.app/",
    repositoryUrl: "",
  },
  {
    name: "Reservation API",
    status: "in-progress",
    description:
      "API REST empresarial para gestión de reservas con autenticación JWT RS256, detección de conflictos vía Strategy Pattern, colas asíncronas con Messenger y notificaciones en tiempo real con Mercure.",
    stack: "Symfony 7.3, PHP 8.2, MySQL (Doctrine), Mercure Hub, JWT",
    image: "https://i.postimg.cc/QxtTSdVm/image.png",
    imageAlt: "Vista conceptual del proyecto Reservation API",
    liveUrl: "",
    repositoryUrl: "https://github.com/VaCris/reservation-api",
  },
  {
    name: "Aputrak",
    status: "testing",
    description: "Rediseño de interfaz e integración con API para aplicación de gestión de horarios y actividades. Componentes reutilizables y UX optimizada. Parte del ecosistema Axia de Studios TKOH.",
    stack: "React, Tailwind CSS, Gestión de Horarios",
    image: "https://i.postimg.cc/2Sb4wSVf/Aputrak-Schedule-Activity-Manager-page-0001.jpg",
    imageAlt: "Captura del proyecto Aputrak Schedule Manager",
    liveUrl: "https://aputrak.onrender.com/",
    repositoryUrl: ""
  },
  {
    name: "SPlay GO API",
    status: "in-progress",
    description: "API REST y Worker de procesamiento para streaming de video HLS. Gestiona colas de codificación con FFmpeg, almacenamiento en DigitalOcean Spaces y persistencia en Neon.",
    stack: "Node.js, Express, FFmpeg, PostgreSQL (Neon), S3 API, TMDB API",
    image: "https://i.postimg.cc/W4sYfZrN/image.png",
    imageAlt: "Vista conceptual del proyecto SPlay GO API",
    liveUrl: "",
    repositoryUrl: ""
  },
  {
    name: "Serviserc",
    status: "in-progress",
    description: "Sitio web corporativo migrado de HTML/CSS/JS a Next.js 16 para mejorar SEO, rendimiento y experiencia de desarrollo. Implementado con React 19, TypeScript y Tailwind CSS 4.",
    stack: "Next.js 16, React 19, TypeScript, Tailwind CSS 4",
    image: "https://i.postimg.cc/QdsTpdgs/serviserc.png",
    imageAlt: "Captura del proyecto Serviserc",
    liveUrl: "https://vacris.github.io/landing-page-serviserc/",
    repositoryUrl: "",
  },
  {
    name: "Eunoia",
    status: "in-progress",
    description: "Web de búsqueda de libros en desarrollo, actualmente con datos simulados (mock). Próximamente contará con integración a Google Books API para explorar títulos, autores y detalles de libros de forma intuitiva.",
    stack: "Next.js, Tailwind CSS, Diseño Web",
    image: "https://i.postimg.cc/dVvy8VRD/eunoia.png",
    imageAlt: "Captura del proyecto Eunoia",
    liveUrl: "https://eunoia-fjui.onrender.com/",
    repositoryUrl: "",
  },
  {
    name: "Studios TKOH! Web",
    description: "Página web institucional de Studios TKOH!. Desarrollo del sitio corporativo con diseño moderno, sección de servicios, proyectos y contacto.",
    stack: "Angular 21, TypeScript, Tailwind CSS 4, GSAP",
    image: "https://i.ibb.co/Rd4gYVW/proyecto-studios-tkoh.png",
    imageAlt: "Captura del proyecto Studios TKOH! Web",
    liveUrl: "https://studios-tkoh.online",
    repositoryUrl: "",
  },
];