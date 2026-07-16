"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { profile } from "@/data/portfolio";

export function CTASection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: abrir mailto
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile.formspreeEndpoint) return;

    setStatus("submitting");

    try {
      const response = await fetch(profile.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="w-full pt-32 pb-12 border-t border-zinc-900 bg-[#0C0C0C]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <FadeIn y={20}>
              <p className="text-xs font-mono tracking-widest text-zinc-600 uppercase mb-8">
                contacto
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#D7E2EA] mb-8 tracking-tighter">
                ¿Hablamos?
              </h2>
              <p className="text-zinc-400 text-base md:text-lg font-light mb-12 leading-relaxed">
                Abierto a nuevos proyectos y colaboraciones. Escríbeme y vemos cómo encajo.
              </p>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-2">Email</p>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-2 text-lg font-medium text-[#D7E2EA] hover:text-white transition-colors cursor-pointer group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-zinc-500 group-hover:text-[#D7E2EA] transition-colors"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    {copied ? "¡Copiado!" : "Email"}
                  </button>
                </div>

                <div>
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-2">Redes sociales</p>
                  <div className="flex gap-6">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-mono uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#D7E2EA]"
                    >
                      GitHub
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-mono uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#D7E2EA]"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 bg-[#111111]/40 border border-zinc-900 rounded-2xl p-8 md:p-10 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute -inset-x-20 -top-20 h-40 bg-zinc-600/5 blur-[60px] pointer-events-none" />

            <FadeIn y={20} delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="w-full bg-[#161616]/60 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-[#D7E2EA] placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#161616]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="ejemplo@email.com"
                    className="w-full bg-[#161616]/60 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-[#D7E2EA] placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#161616]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full bg-[#161616]/60 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-[#D7E2EA] placeholder-zinc-700 outline-none resize-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#161616]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-lg bg-[#D7E2EA] text-[#000000] py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#000000] hover:text-[#D7E2EA] border border-[#D7E2EA] hover:border-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "submitting" ? "Enviando..." : "Enviar Mensaje"}
                </button>

                {status === "success" && (
                  <FadeIn y={10}>
                    <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-lg p-4 text-emerald-400 text-sm text-center">
                      ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                    </div>
                  </FadeIn>
                )}

                {status === "error" && (
                  <FadeIn y={10}>
                    <div className="bg-rose-950/20 border border-rose-900/50 rounded-lg p-4 text-rose-400 text-sm text-center">
                      Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o envíame un email directamente.
                    </div>
                  </FadeIn>
                )}
              </form>
            </FadeIn>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-32 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-[10px] md:text-xs font-mono text-zinc-600 center">
          © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
}