"use client";

import { navLinks, profile } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-900 bg-[#0C0C0C]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="text-sm font-bold tracking-tight text-[#D7E2EA] transition-colors hover:text-white"
        >
          {profile.shortName}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-zinc-500 transition-colors duration-300 hover:text-[#D7E2EA]"
            >
              {link.label}
            </a>
          ))}
        </div>

      </nav>
    </header>
  );
}