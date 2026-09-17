export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export const profile = {
  name: "Bryan Alexander Vidal Crispin",
  shortName: "Bryan Vidal",
  role: "Full Stack Developer Jr.",
  location: "Lima, Perú",
  email: "bryan.vidal@studios-tkoh.online",
  github: "https://github.com/VaCris",
  image: "/perfil.webp",
  linkedin: "https://www.linkedin.com/in/bryan-alexander-vidal-crispin-110410301",
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
  intro:
    "Desarrollo aplicaciones web con React, Next.js, TypeScript, Java y Spring Boot, integrando frontend, backend y APIs REST.",
  summary:
    "Soy desarrollador de software con experiencia en desarrollo web y aplicaciones full stack. Trabajo con React, Next.js y TypeScript en frontend, y con Java, Spring Boot, Spring WebFlux, Node.js y NestJS en backend. He participado en proyectos profesionales y freelance, desarrollando interfaces, servicios backend, integraciones con APIs y soluciones desplegadas en producción.",
};

export const highlights = [
  "Frontend con React, TypeScript y Next.js",
  "Backend con Java, Spring Boot y Spring WebFlux",
  "Node.js, NestJS y APIs REST",
  "Interfaces responsivas y mantenibles",
  "Resolución de problemas técnicos",
];

export const techGroups = [
  { title: "Core", items: ["React", "TypeScript", "Next.js", "Java", "Spring Boot"] },
  { title: "Frontend", items: ["JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Angular", "Redux Toolkit", "GSAP"] },
  { title: "Backend", items: ["Java", "Spring Boot", "Spring WebFlux", "Node.js", "NestJS", "Symfony / PHP", "APIs REST", "WebSockets"] },
  { title: "Datos y herramientas", items: ["MySQL", "SQL Server", "SQL", "Git", "GitHub", "GitLab", "Docker", "Postman"] },
];

export const experiences = [
  {
    title: "Desarrollador Web Freelance",
    company: "SERVISERC",
    period: "Mayo 2026",
    description:
      "Migración de la landing page existente a un sitio web corporativo utilizando Next.js, React, TypeScript y Tailwind CSS. Reestructuración de la interfaz, navegación y componentes para ampliar el contenido y adaptarlo a las necesidades de la empresa.",
  },
  {
    title: "Técnico de Transmisión de Datos (Soporte TI)",
    company: "ONPE",
    period: "Abril 2026",
    description:
      "Gestión y habilitación de infraestructura informática crítica. Ejecución de protocolos de seguridad para la transmisión de datos oficiales e implementación de la Solución Tecnológica de Apoyo al Escrutinio (STAE).",
  },
  {
    title: "Desarrollador Backend Freelance",
    company: "Plataforma DRM - Cliente de España",
    period: "Noviembre 2025 - Febrero 2026",
    description:
      "Desarrollo de funcionalidades backend para una plataforma de gestión de licencias y suscripciones utilizando NestJS, APIs REST y WebSockets. Integración de servicios externos, autenticación de usuarios y validación de acceso para aplicaciones web.",
  },
  {
    title: "Desarrollador Full Stack Jr.",
    company: "Lubricantes Claudia",
    period: "Agosto 2025 - Diciembre 2025",
    description:
      "Desarrollo de interfaces web y componentes reutilizables, junto con servicios backend utilizando Java, Spring Boot y Spring WebFlux. Integración entre frontend y backend mediante APIs REST para la implementación de funcionalidades del sistema.",
  },
  {
    title: "Desarrollador de Software Jr.",
    company: "JHARDSYSTEX",
    period: "Febrero 2025 - Junio 2025",
    description:
      "Desarrollo del frontend y diseño de la base de datos relacional para una aplicación web de gestión de tickets. Realización de pruebas funcionales para garantizar el correcto funcionamiento de los procesos clave del sistema.",
  },
  {
    title: "Desarrollador Web Jr.",
    company: "SERVISERC",
    period: "Julio 2024 - Diciembre 2024",
    description:
      "Desarrollo y mantenimiento de una landing page utilizando HTML, CSS, JavaScript y PHP. Implementación de mejoras y funcionalidades de acuerdo con las necesidades del negocio.",
  },
];

export const education = [
  { title: "Desarrollo de Software", institution: "SENATI", period: "2025" },
  { title: "Cloud Computing (AWS/Azure/GCP)", institution: "Universidad Nacional de Ingeniería - UNI", period: "2025" },
];

export const projects = [
  {
    name: "MotorDesk",
    description: "Colaboré en MotorDesk, una aplicación de gestión de flotas y facturación electrónica. Trabajé sobre código existente en React, TypeScript, Redux Toolkit, Redux Saga y Dexie, aportando en mejoras de interfaz, gestión de estados y sincronización offline. Esta experiencia en un proyecto de mayor escala me permitió crecer leyendo código ajeno, resolviendo problemas concretos y aprendiendo a trabajar en equipo.",
    stack: "React, TypeScript, Vite, Redux Toolkit, Redux Saga, Dexie, Tailwind CSS 4",
    image: "https://i.ibb.co/5zMRkLb/Motordesk-Login.webp", imageAlt: "Captura del proyecto MotorDesk",
    liveUrl: "", repositoryUrl: "",
  },
  {
    name: "Docivo",
    description: "Herramientas de PDF rápidas, privadas y sin distracciones, enfocadas en simplicidad y rendimiento.",
    stack: "Next.js 16, React 19, TypeScript, Tailwind CSS 4",
    image: "https://i.ibb.co/B56zt7G7/Docivo.webp", imageAlt: "Captura del proyecto Docivo",
    liveUrl: "https://docivo.onrender.com/", repositoryUrl: "https://github.com/VaCris/docivo",
  },
  {
    name: "Serviserc", status: "completed",
    description: "Migración de una landing page existente a un sitio web corporativo con Next.js 16, React 19, TypeScript y Tailwind CSS 4, reestructurando la navegación, las páginas y los componentes del sitio.",
    stack: "Next.js 16, React 19, TypeScript, Tailwind CSS 4",
    image: "https://i.ibb.co/N67ZxdXK/serviserc.webp", imageAlt: "Captura del proyecto Serviserc",
    liveUrl: "https://vacris.github.io/landing-page-serviserc/", repositoryUrl: "",
  },
  {
    name: "Studios TKOH! Web",
    description: "Página web institucional de Studios TKOH!. Desarrollo del sitio corporativo con diseño moderno, sección de servicios, proyectos y contacto.",
    stack: "Angular 21, TypeScript, Tailwind CSS 4, GSAP",
    image: "https://i.ibb.co/39V7B160/proyecto-studios-tkoh.webp", imageAlt: "Captura del proyecto Studios TKOH! Web",
    liveUrl: "https://studios-tkoh.online", repositoryUrl: "",
  },
  {
    name: "Plataforma DRM",
    description: "Proyecto freelance para un cliente de España orientado a la gestión de licencias y suscripciones digitales. Participé en el desarrollo backend con NestJS, APIs REST y WebSockets, trabajando en autenticación, validación de acceso e integración con servicios externos.",
    stack: "NestJS, TypeScript, APIs REST, WebSockets",
    image: "", imageAlt: "Proyecto backend Plataforma DRM",
    liveUrl: "", repositoryUrl: "",
  },
  {
    name: "SPlay GO",
    description: "Plataforma web para explorar películas y series con catálogo, búsqueda, filtros y reproductor dinámico.",
    stack: "React, Vite, Tailwind CSS, TMDB API",
    image: "https://i.ibb.co/7t1j23KX/splaygo.webp", imageAlt: "Captura del proyecto SPlay GO",
    liveUrl: "https://splay.evaluate.codes", repositoryUrl: "",
  },
  {
    name: "Ataraxia Timer", status: "testing",
    description: "Aplicación de productividad desarrollada desde cero. Temporizador Pomodoro, tareas y etiquetas. Parte del ecosistema Axia de Studios TKOH.",
    stack: "React, APIs REST, Productividad",
    image: "https://i.ibb.co/r2Vr9Brz/Ataraxia-desktop.webp", imageAlt: "Captura del proyecto Ataraxia Timer",
    liveUrl: "https://ataraxiatimer.app/", repositoryUrl: "",
  },
  {
    name: "Telegram Media Downloader",
    description: "Extensión de Chrome con Manifest V3 que restaura el acceso al botón de descarga nativo de Telegram Web en el visor multimedia y Stories. Implementación de Content Scripts, manipulación del DOM y Service Workers, manteniendo las descargas mediante el sistema nativo de Telegram y sin almacenar ni interceptar los archivos.",
    stack: "JavaScript, Chrome Extensions, Manifest V3, DOM API, Service Workers, HTML, CSS",
    image: "https://i.ibb.co/qMQTPvy0/TG-Downloader.webp", imageAlt: "Captura del proyecto Telegram Media Downloader",
    liveUrl: "https://vacris.github.io/telegram-web-capture/", repositoryUrl: "https://github.com/VaCris/telegram-web-capture",
  },
  {
    name: "PrestaApp Mobile", status: "in-progress",
    description: "Colaboración en app móvil de gestión de préstamos. Contribuciones en UI/UX (Bento Grid, animaciones de resorte, diseño Yape-style), seguridad (PBKDF2, bloqueo por intentos, protección de pantalla), backend (CI/CD, tests unitarios, paginación, generación de PDF en background), y refactorización de código.",
    stack: "Flutter, Dart, Riverpod, GoRouter, SQLCipher, PBKDF2",
    image: "https://i.ibb.co/6RLk1JVh/Prest-App-Doc.webp", imageAlt: "Captura de la aplicación PrestaApp Mobile",
    liveUrl: "https://prestapp.studios-tkoh.online/", repositoryUrl: "",
  },
  {
    name: "Reservation API", status: "in-progress",
    description: "API REST empresarial para gestión de reservas con autenticación JWT RS256, detección de conflictos vía Strategy Pattern, colas asíncronas con Messenger y notificaciones en tiempo real con Mercure.",
    stack: "Symfony 7.3, PHP 8.2, MySQL (Doctrine), Mercure Hub, JWT",
    image: "https://i.ibb.co/7xfy7PPq/reservation-api.webp", imageAlt: "Vista conceptual del proyecto Reservation API",
    liveUrl: "", repositoryUrl: "https://github.com/VaCris/reservation-api",
  },
  {
    name: "Aputrak", status: "testing",
    description: "Rediseño de interfaz e integración con API para aplicación de gestión de horarios y actividades. Componentes reutilizables y UX optimizada. Parte del ecosistema Axia de Studios TKOH.",
    stack: "React, Tailwind CSS, Gestión de Horarios",
    image: "https://i.ibb.co/GyWnnw7/Aputrak.webp", imageAlt: "Captura del proyecto Aputrak Schedule Manager",
    liveUrl: "https://aputrak.onrender.com/", repositoryUrl: "",
  },
];