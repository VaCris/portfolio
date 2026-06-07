import { AnimatedText } from "@/components/animations/AnimatedText";
import { FadeIn } from "@/components/animations/FadeIn";

const aboutText =
  "Soy desarrollador de software enfocado en aplicaciones web, APIs y productos digitales. Me interesa entender primero el problema para luego elegir la tecnología correcta, cuidando estructura, experiencia de usuario y mantenibilidad.";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute left-[1%] top-[4%] w-[120px] opacity-80 sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]">
        <div className="aspect-square rounded-full bg-gradient-to-br from-slate-200 via-slate-500 to-slate-950 shadow-2xl shadow-white/10" />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute right-[1%] top-[4%] w-[120px] opacity-80 sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]">
        <div className="aspect-square rotate-12 rounded-[2rem] bg-gradient-to-br from-cyan-200 via-blue-500 to-purple-700 shadow-2xl shadow-cyan-500/20" />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] w-[100px] opacity-70 sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]">
        <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-orange-300 via-fuchsia-600 to-black shadow-2xl shadow-fuchsia-500/20" />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] w-[130px] opacity-70 sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]">
        <div className="aspect-[1.2/1] rounded-full bg-gradient-to-br from-emerald-200 via-cyan-500 to-blue-950 shadow-2xl shadow-cyan-500/20" />
      </FadeIn>

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn y={40}>
          <h2 className="hero-heading text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            Sobre mí
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={aboutText}
            className="max-w-[620px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
          />

          <FadeIn delay={0.25} y={20}>
            <a
              href="#contacto"
              className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5"
            >
              Contacto
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
