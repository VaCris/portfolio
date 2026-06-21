# Bryan Vidal - Portfolio Profesional

¡Bienvenido al repositorio del portfolio profesional de **Bryan Alexander Vidal Crispín**, Desarrollador de Software enfocado en el desarrollo frontend, backend e integración de soluciones en la nube!

Este portfolio es una aplicación web moderna de una sola página (Landing Page) diseñada con animaciones fluidas, un diseño responsive premium y una arquitectura limpia basada en **Next.js** y **Cloudflare Pages**.

---

## 🛠️ Tecnologías y Herramientas

El proyecto está construido con un stack tecnológico moderno de alto rendimiento:

*   **Framework:** [Next.js 16.2.7](https://nextjs.org/) (utilizando React 19) con el App Router.
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (con soporte nativo para PostCSS v4).
*   **Animaciones:** [Framer Motion v12](https://www.framer.com/motion/) para micro-interacciones, efectos magnéticos y transiciones de texto.
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) para tipado estático y robustez del código.
*   **Gestor de Paquetes:** [pnpm](https://pnpm.io/) (v10).
*   **Despliegue & Servidor:** [Cloudflare Pages](https://pages.cloudflare.com/) utilizando [@opennextjs/cloudflare](https://opennext.js.org/cloudflare/) para optimizar Next.js en la red de borde de Cloudflare.

---

## 📂 Estructura del Proyecto

El código está organizado de manera modular y escalable:

```text
bryan-portfolio/
├── app/                       # Enrutamiento de Next.js (App Router)
│   ├── favicon.ico
│   ├── globals.css            # Estilos globales y variables de Tailwind
│   ├── layout.tsx             # Layout global y metadatos SEO
│   └── page.tsx               # Página principal del portfolio
├── components/                # Componentes reutilizables generales
│   ├── animations/            # Wrappers y componentes animados (Framer Motion)
│   │   ├── AnimatedText.tsx   # Animación de revelado de texto
│   │   ├── FadeIn.tsx         # Desvanecimiento al entrar en pantalla
│   │   └── Magnet.tsx         # Efecto magnético interactivo al pasar el cursor
│   ├── sections/              # Secciones principales de la landing page
│   │   ├── AboutSection.tsx   # Sobre mí
│   │   ├── CTASection.tsx     # Formulario de contacto (Formspree)
│   │   ├── EducationSection.tsx # Educación y certificaciones
│   │   ├── ExperienceSection.tsx # Historial laboral detallado
│   │   ├── MarqueeSection.tsx # Cinta en movimiento con highlights
│   │   ├── Navbar.tsx         # Barra de navegación interactiva y responsive
│   │   ├── ProjectsSection.tsx # Grid de proyectos con filtros y enlaces
│   │   ├── ServicesSection.tsx # Servicios y áreas de especialización
│   │   └── TechStackSection.tsx # Visualización de habilidades técnicas agrupadas
│   └── ui/                    # Primitivas de UI atómicas
│       ├── Badge.tsx          # Etiquetas visuales para tecnologías
│       ├── SectionTitle.tsx   # Encabezados consistentes para secciones
│       └── TechIcon.tsx       # Renderizador de iconos de tecnologías
├── data/                      # Datos estáticos del sitio
│   └── portfolio.ts           # Información personal, proyectos, experiencia y tecnologías
├── features/                  # Módulos específicos organizados por feature
│   └── hero/                  # Módulo de la sección de cabecera
│       └── components/
│           ├── ContactButton/ # Botón de contacto animado con estilos locales
│           └── HeroSection/   # Sección Hero principal
├── public/                    # Archivos estáticos (imágenes, webp, etc.)
├── eslint.config.mjs          # Configuración del linter (ESLint)
├── next.config.ts             # Configuración de Next.js
├── open-next.config.ts        # Configuración de OpenNext para Cloudflare
├── package.json               # Dependencias y scripts de ejecución
├── tsconfig.json              # Configuración de TypeScript
└── wrangler.toml              # Configuración de despliegue para Cloudflare Wrangler
```

---

## ⚡ Funcionalidades Clave

1.  **Metadatos y SEO Optimizados:** Configuración completa en [layout.tsx](file:///mnt/tkoh/Proyectos/ME/bryan-portfolio/app/layout.tsx) que incluye OpenGraph en español (`es_PE`) y palabras clave para mejorar el posicionamiento.
2.  **Sección de Proyectos Dinámica:** Grid que muestra proyectos interactivos ([Docivo](https://docivo.onrender.com/), [SPlay GO](https://splay.evaluate.codes), [Ataraxia Timer](https://ataraxiatimer.app/), APIs en PHP/Node, etc.), detallando el stack tecnológico utilizado, enlaces de producción y repositorio en GitHub.
3.  **Línea de Tiempo de Experiencia:** Componente interactivo que detalla la trayectoria laboral (ONPE, Lubricantes Claudia, JHARDSYSTEX, SERVISERC).
4.  **Habilidades Categorizadas:** Sección visual interactiva estructurada por Frontend, Backend, Bases de Datos y Herramientas/Cloud.
5.  **Formulario de Contacto:** Integración con **Formspree** para recibir mensajes y consultas directamente al correo electrónico.
6.  **Interacciones Premium:** Efectos de imán (Magnet) en botones, textos animados letra por letra e interacciones adaptadas para dispositivos móviles y de escritorio.

---

## 🚀 Instalación y Desarrollo Local

### Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y el gestor de paquetes **pnpm**:

```bash
npm install -g pnpm
```

### 1. Clonar el Repositorio

```bash
git clone https://github.com/VaCris/bryan-portfolio.git
cd bryan-portfolio
```

### 2. Instalar Dependencias

```bash
pnpm install
```

### 3. Ejecutar el Servidor de Desarrollo

```bash
pnpm dev
```

El proyecto estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Scripts Disponibles

*   `pnpm dev`: Inicia el servidor de desarrollo local de Next.js.
*   `pnpm build`: Crea una build de producción optimizada de Next.js.
*   `pnpm start`: Inicia el servidor de producción local de Next.js.
*   `pnpm lint`: Ejecuta ESLint para analizar errores o advertencias de estilo de código.
*   `pnpm deploy`: Compila el proyecto usando `opennextjs-cloudflare` y lo despliega directamente a Cloudflare Pages mediante Wrangler.

---

## ☁️ Despliegue en Cloudflare Pages

El despliegue está optimizado con **OpenNextJS Cloudflare**, lo que permite ejecutar Next.js en Workers con soporte para funciones del lado del servidor (SSR) de forma eficiente.

Para desplegar de forma manual o configurar integración continua (CI/CD):

```bash
pnpm deploy
```

Este script ejecuta:
1.  `opennextjs-cloudflare build`: Transpila la aplicación Next.js en un Worker compatible con Cloudflare (`.open-next/worker.js`) y separa los recursos estáticos (`.open-next/assets`).
2.  `opennextjs-cloudflare deploy`: Sube los recursos generados utilizando **Wrangler** a Cloudflare Pages de acuerdo a la configuración en [wrangler.toml](file:///mnt/tkoh/Proyectos/ME/bryan-portfolio/wrangler.toml).
