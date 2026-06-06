type TechIconProps = {
  name: string;
  className?: string;
};

type LetterIconProps = {
  label: string;
  background: string;
  foreground?: string;
  className?: string;
  rounded?: boolean;
};

function LetterIcon({
  label,
  background,
  foreground = "#ffffff",
  className,
  rounded = true,
}: LetterIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="32"
        height="32"
        rx={rounded ? "9" : "4"}
        fill={background}
      />
      <text
        x="16"
        y="20.5"
        textAnchor="middle"
        fontSize={label.length > 2 ? "8" : "11"}
        fontWeight="800"
        fill={foreground}
        fontFamily="Arial, Helvetica, sans-serif"
      >
        {label}
      </text>
    </svg>
  );
}

function ReactIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="9" fill="#07111f" />
      <circle cx="16" cy="16" r="2.7" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="11" ry="4.4" stroke="#61DAFB" strokeWidth="1.8" />
      <ellipse
        cx="16"
        cy="16"
        rx="11"
        ry="4.4"
        stroke="#61DAFB"
        strokeWidth="1.8"
        transform="rotate(60 16 16)"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="11"
        ry="4.4"
        stroke="#61DAFB"
        strokeWidth="1.8"
        transform="rotate(120 16 16)"
      />
    </svg>
  );
}

function TailwindIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="9" fill="#082f49" />
      <path
        d="M8 16.8c1.8-5.2 5.1-7.1 9.8-5.7 2.6.8 3.9 2.7 6.2.8-1.8 5.1-5.1 7-9.8 5.6-2.6-.8-3.9-2.7-6.2-.7Z"
        fill="#38BDF8"
      />
      <path
        d="M8 22.2c1.8-5.1 5.1-7 9.8-5.6 2.6.8 3.9 2.7 6.2.7-1.8 5.2-5.1 7.1-9.8 5.7-2.6-.8-3.9-2.7-6.2-.8Z"
        fill="#67E8F9"
      />
    </svg>
  );
}

function ViteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="9" fill="#1e1b4b" />
      <path d="M6 8l10 18L26 8H6Z" fill="#A78BFA" />
      <path d="M16 5l-3 10h5l-2 12 7-16h-5l2-6h-4Z" fill="#FDE047" />
    </svg>
  );
}

function DatabaseIcon({ label, className }: { label: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="9" fill="#0f172a" />
      <ellipse cx="16" cy="9" rx="8" ry="4" fill="#38BDF8" />
      <path d="M8 9v10c0 2.2 3.6 4 8 4s8-1.8 8-4V9" fill="#0EA5E9" />
      <ellipse cx="16" cy="19" rx="8" ry="4" fill="#38BDF8" opacity="0.65" />
      <text
        x="16"
        y="28"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="800"
        fill="#E0F2FE"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        {label}
      </text>
    </svg>
  );
}

function GitIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="9" fill="#2f140d" />
      <path d="M16 5 27 16 16 27 5 16 16 5Z" fill="#F05032" />
      <path d="M13 12h4.5l4 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="white" />
      <circle cx="20" cy="16" r="2" fill="white" />
      <circle cx="16" cy="21" r="2" fill="white" />
      <path d="M14 13.8 16 21" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="9" fill="#020617" />
      <path
        d="M16 6.5c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.2 6.9 9.5.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.3.1-2.8 0 0 .9-.3 2.9 1.1.8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.8 0 3.9-2.4 4.7-4.7 5 .4.3.8 1 .8 2v2.7c0 .3.2.6.8.5 4-1.3 6.8-5 6.8-9.5 0-5.5-4.5-10-10-10Z"
        fill="#F8FAFC"
      />
    </svg>
  );
}

export function TechIcon({ name, className = "h-6 w-6" }: TechIconProps) {
  const normalized = name.toLowerCase();

  if (normalized === "react") return <ReactIcon className={className} />;
  if (normalized === "tailwind css") return <TailwindIcon className={className} />;
  if (normalized === "vite") return <ViteIcon className={className} />;
  if (normalized === "git") return <GitIcon className={className} />;
  if (normalized === "github") return <GithubIcon className={className} />;

  if (normalized === "next.js") {
    return <LetterIcon label="N" background="#000000" className={className} />;
  }

  if (normalized === "typescript") {
    return <LetterIcon label="TS" background="#3178C6" className={className} />;
  }

  if (normalized.startsWith("javascript")) {
    return <LetterIcon label="JS" background="#F7DF1E" foreground="#111827" className={className} />;
  }

  if (normalized === "html5") {
    return <LetterIcon label="HTML" background="#E34F26" className={className} />;
  }

  if (normalized === "css3") {
    return <LetterIcon label="CSS" background="#1572B6" className={className} />;
  }

  if (normalized === "php") {
    return <LetterIcon label="PHP" background="#777BB4" className={className} />;
  }

  if (normalized === "node.js") {
    return <LetterIcon label="Node" background="#339933" className={className} />;
  }

  if (normalized === "c#") {
    return <LetterIcon label="C#" background="#68217A" className={className} />;
  }

  if (normalized === "java") {
    return <LetterIcon label="Java" background="#EA2D2E" className={className} />;
  }

  if (normalized === "mysql") return <DatabaseIcon label="MySQL" className={className} />;
  if (normalized === "mariadb") return <DatabaseIcon label="Maria" className={className} />;
  if (normalized === "sql server") return <DatabaseIcon label="SQL" className={className} />;
  if (normalized === "sqlite") return <DatabaseIcon label="SQLite" className={className} />;

  if (normalized === "postman") {
    return <LetterIcon label="PM" background="#FF6C37" className={className} />;
  }

  if (normalized === "visual studio code") {
    return <LetterIcon label="VS Code" background="#007ACC" className={className} />;
  }

  if (normalized === "visual studio") {
    return <LetterIcon label="VS" background="#5C2D91" className={className} />;
  }

  return <LetterIcon label={name.slice(0, 2)} background="#334155" className={className} />;
}
