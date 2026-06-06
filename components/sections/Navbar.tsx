import { navLinks, profile } from "@/data/portfolio";

export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <a href="#inicio" className="text-lg font-black tracking-tight text-white">
        {profile.shortName}
      </a>

      <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
