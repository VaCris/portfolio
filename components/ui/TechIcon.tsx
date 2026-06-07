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
  react: {
    src: `${DEVICON_BASE_URL}/react/react-original.svg`,
  },
  "next.js": {
    src: `${DEVICON_BASE_URL}/nextjs/nextjs-original.svg`,
    invert: true,
  },
  typescript: {
    src: `${DEVICON_BASE_URL}/typescript/typescript-original.svg`,
  },
  "javascript es6+": {
    src: `${DEVICON_BASE_URL}/javascript/javascript-original.svg`,
  },
  "tailwind css": {
    src: `${DEVICON_BASE_URL}/tailwindcss/tailwindcss-original.svg`,
  },
  html5: {
    src: `${DEVICON_BASE_URL}/html5/html5-original.svg`,
  },
  css3: {
    src: `${DEVICON_BASE_URL}/css3/css3-original.svg`,
  },
  vite: {
    src: `${DEVICON_BASE_URL}/vitejs/vitejs-original.svg`,
  },
  jquery: {
    src: `${DEVICON_BASE_URL}/jquery/jquery-original.svg`,
  },
  php: {
    src: `${DEVICON_BASE_URL}/php/php-original.svg`,
  },
  symfony: {
    src: `${DEVICON_BASE_URL}/symfony/symfony-original.svg`,
    invert: true,
  },
  "node.js": {
    src: `${DEVICON_BASE_URL}/nodejs/nodejs-original.svg`,
  },
  nestjs: {
    src: `${DEVICON_BASE_URL}/nestjs/nestjs-original.svg`,
  },
  ".net": {
    src: `${DEVICON_BASE_URL}/dot-net/dot-net-original.svg`,
  },
  "c#": {
    src: `${DEVICON_BASE_URL}/csharp/csharp-original.svg`,
  },
  java: {
    src: `${DEVICON_BASE_URL}/java/java-original.svg`,
  },
  mysql: {
    src: `${DEVICON_BASE_URL}/mysql/mysql-original.svg`,
  },
  "sql server": {
    src: `${DEVICON_BASE_URL}/microsoftsqlserver/microsoftsqlserver-plain.svg`,
  },
  npm: {
    src: `${DEVICON_BASE_URL}/npm/npm-original-wordmark.svg`,
  },
  git: {
    src: `${DEVICON_BASE_URL}/git/git-original.svg`,
  },
  github: {
    src: `${DEVICON_BASE_URL}/github/github-original.svg`,
    invert: true,
  },
  postman: {
    src: `${DEVICON_BASE_URL}/postman/postman-original.svg`,
  },
  "visual studio code": {
    src: `${DEVICON_BASE_URL}/vscode/vscode-original.svg`,
  },
  "visual studio": {
    src: `${DEVICON_BASE_URL}/visualstudio/visualstudio-plain.svg`,
  },
};

function FallbackIcon({ name, className }: TechIconProps) {
  return (
    <span
      className={`${className ?? "h-8 w-8"} flex items-center justify-center rounded-xl bg-slate-700 text-[10px] font-black text-white`}
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
      style={icon.invert ? { filter: "invert(1)" } : undefined}
    />
  );
}
