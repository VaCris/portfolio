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
  email: "antoniovidal2031@gmail.com",
  github: "https://github.com/VaCris",
  image: "/perfil.webp",
  linkedin: "https://www.linkedin.com/in/bryan-alexander-vidal-crispin-110410301",
  formspreeEndpoint: "https://formspree.io/f/mpqelabr",
  intro:
    "Desarrollo aplicaciones web modernas y participo en la creación de soluciones digitales enfocadas en ofrecer experiencias claras, funcionales y accesibles.",
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
    status: "in-progress",
    description: "Participe en el rediseño y desarrollo de la interfaz de usuario para una aplicación de gestión de horarios, implementando componentes reutilizables y optimizando la experiencia del usuario (UX) para mejorar la eficiencia en la organización de actividades.",
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
    description: "Sitio web corporativo para empresa de servicios de limpieza, con diseño responsivo y contenido personalizado.",
    stack: "HTML5, CSS3, JavaScript, Diseño Web",
    image: "https://i.postimg.cc/QdsTpdgs/serviserc.png",
    imageAlt: "Captura del proyecto Serviserc",
    liveUrl: "https://serviserc.com/",
    repositoryUrl: "",
  },
  {
    name: "Eunoia",
    status: "in-progress",
    description: "Web busqueda de libros con integración a Google Books API, permitiendo explorar títulos, autores y detalles de libros de manera intuitiva.",
    stack: "Next.js, Tailwind CSS, Diseño Web",
    image: "https://i.postimg.cc/dVvy8VRD/eunoia.png",
    imageAlt: "Captura del proyecto Eunoia",
    liveUrl: "https://eunoia.onrender.com/",
    repositoryUrl: " ",
  },
  {
    name: "Flowfly",
    status: "in-progress",
    description: "Musica en streaming con catálogo dinámico, búsqueda avanzada y reproductor integrado para una experiencia musical fluida y personalizada. en desarrollo",
    stack: "React, Tailwind CSS, Diseño Web",
    image: "https://i.postimg.cc/pLZnkMkv/flowfy.png",
    imageAlt: "Captura del proyecto Flowfy",
    liveUrl: "https://flowfly.onrender.com/",
    repositoryUrl: "",
  }
];