type TechIconProps = {
  name: string;
  className?: string;
};

type IconConfig = {
  src: string;
  invert?: boolean;
};

const DEVICON_BASE_URL =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const techIcons: Record<string, IconConfig> = {
  //frontend
  "javascript (es6+)": { src: `${DEVICON_BASE_URL}/javascript/javascript-original.svg` },
  typescript: { src: `${DEVICON_BASE_URL}/typescript/typescript-original.svg` },
  react: { src: `${DEVICON_BASE_URL}/react/react-original.svg` },
  "next.js": { src: `${DEVICON_BASE_URL}/nextjs/nextjs-original.svg`, invert: true },
  vite: { src: `${DEVICON_BASE_URL}/vitejs/vitejs-original.svg` },
  "tailwind css": { src: `${DEVICON_BASE_URL}/tailwindcss/tailwindcss-original.svg` },
  "html5 / css3": { src: `${DEVICON_BASE_URL}/html5/html5-original.svg` },

  //backend
  "c#": { src: `${DEVICON_BASE_URL}/csharp/csharp-original.svg` },
  ".net": { src: `${DEVICON_BASE_URL}/dot-net/dot-net-original.svg` },
  "node.js": { src: `${DEVICON_BASE_URL}/nodejs/nodejs-original.svg` },
  php: { src: `${DEVICON_BASE_URL}/php/php-original.svg` },

  //bd
  "sql server": { src: `${DEVICON_BASE_URL}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
  mysql: { src: `${DEVICON_BASE_URL}/mysql/mysql-original.svg` },

  //herramientas & cloud
  git: { src: `${DEVICON_BASE_URL}/git/git-original.svg` },
  github: { src: `${DEVICON_BASE_URL}/github/github-original.svg`, invert: true },
  postman: { src: `${DEVICON_BASE_URL}/postman/postman-original.svg` },
  "aws / gcp (básico)": { src: `${DEVICON_BASE_URL}/amazonwebservices/amazonwebservices-original-wordmark.svg`, invert: true },
  "visual studio": { src: `${DEVICON_BASE_URL}/visualstudio/visualstudio-plain.svg` },
  "vs code": { src: `${DEVICON_BASE_URL}/vscode/vscode-original.svg` },
};

function FallbackIcon({ name, className }: TechIconProps) {
  return (
    <span
      className={`${className ?? "h-8 w-8"} flex items-center justify-center rounded-md bg-zinc-800 text-[8px] font-bold text-zinc-400`}
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export function TechIcon({ name, className = "h-8 w-8" }: TechIconProps) {
  const icon = techIcons[name.toLowerCase()];

  if (!icon) {
    return <FallbackIcon name={name} className={className} />;
  }

  return (
    <img
      src={icon.src}
      alt={`${name} logo`}
      className={`${className} object-contain`}
      draggable={false}
      loading="lazy"
      decoding="async"
      style={icon.invert ? { filter: "invert(1) brightness(2)" } : undefined} // Mejora visual para iconos oscuros
    />
  );
}