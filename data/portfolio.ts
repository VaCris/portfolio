export const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export const profile = {
  name: "Bryan Alexander Vidal Crispin",
  shortName: "Bryan Vidal",
  role: "Desarrollador de Software",
  location: "Lima, Perú",
  email: "vidalbryanalexander@gmail.com",
  github: "https://github.com/VaCris",
  linkedin: "https://www.linkedin.com/in/bryan-alexander-vidal-crispin-110410301",
  formspreeEndpoint: "https://formspree.io/f/mpqelabr",
  intro:
    "Construyo aplicaciones web, interfaces modernas y soluciones digitales enfocadas en experiencia de usuario, rendimiento y estructura escalable.",
  summary:
    "Especializado en el ecosistema de JavaScript moderno y el entorno .NET (C#). Me apasiona diseñar arquitecturas modulares, consumir APIs y mantener buenas prácticas para crear software robusto y mantenible.",
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
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend",
    items: [
      "C#",
      ".NET",
      "Node.js",
      "PHP"
    ],
  },
  {
    title: "Bases de Datos",
    items: ["SQL Server", "MySQL", "SQLite", "MariaDB"],
  },
  {
    title: "Herramientas & Cloud",
    items: ["Git", "GitHub", "Postman", "AWS / GCP (Básico)", "Visual Studio", "VS Code"],
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
    title: "Desarrollador Web",
    company: "JHARDSYSTEX",
    period: "Feb 2025 - Jun 2025",
    description:
      "Desarrollo full-stack de una aplicación web para la gestión de tickets. Diseño y construcción de base de datos relacional, implementación de lógica de negocio y soporte en el proceso de despliegue en producción.",
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
    image: "https://raw.githubusercontent.com/VaCris/VaCris/main/splaygo.png",
    imageAlt: "Captura del proyecto SPlay GO",
    liveUrl: "https://splay.evaluate.codes",
    repositoryUrl: "https://github.com/VaCris/splay-go",
  },
  {
    name: "Ataraxia Timer",
    description:
      "Aplicación orientada a productividad y gestión del tiempo mediante sesiones enfocadas y lógica de trabajo tipo Pomodoro.",
    stack: "React, APIs REST, Productividad",
    image: "https://raw.githubusercontent.com/VaCris/VaCris/main/ATARAXIA.png",
    imageAlt: "Captura del proyecto Ataraxia Timer",
    liveUrl: "https://ataraxiatimer.app/",
    repositoryUrl: "https://github.com/VaCris/Ataraxia-Timer",
  },
  {
    name: "Reservation API",
    description:
      "API REST para gestión de reservas con autenticación, lógica de negocio y estructura backend escalable.",
    stack: "PHP, Symfony, JWT, REST API",// Ajustado a tu perfil deseado (o puedes devolverlo a PHP si el repo es 100% PHP)
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop", // Imagen genérica de código muy limpia
    imageAlt: "Vista conceptual del proyecto Reservation API",
    liveUrl: "",
    repositoryUrl: "https://github.com/VaCris/reservation-api",
  },
];