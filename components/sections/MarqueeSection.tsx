"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "https://raw.githubusercontent.com/VaCris/VaCris/main/Docivo.png",
  "https://raw.githubusercontent.com/VaCris/VaCris/main/splaygo.png",
  "https://raw.githubusercontent.com/VaCris/VaCris/main/ATARAXIA.png",
  "https://raw.githubusercontent.com/VaCris/VaCris/main/Aputrak%20%E2%80%94%20Schedule%20%26%20Activity%20Manager_page-0001.jpg",
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
];

const firstRow = images.slice(0, 6);
const secondRow = images.slice(6);

function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const sectionTop = element.getBoundingClientRect().top + window.scrollY;
      const nextOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(nextOffset);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateX = direction === "right" ? offset - 200 : -(offset - 200);
  const repeated = [...items, ...items, ...items];

  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className="flex gap-3"
        style={{ transform: `translate3d(${translateX}px, 0, 0)`, willChange: "transform" }}
      >
        {repeated.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt="Proyecto visual"
            className="h-[210px] w-[320px] shrink-0 rounded-2xl object-cover sm:h-[240px] sm:w-[380px] md:h-[270px] md:w-[420px]"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section className="bg-[#0C0C0C] pt-24 pb-10 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <MarqueeRow items={firstRow} direction="right" />
        <MarqueeRow items={secondRow} direction="left" />
      </div>
    </section>
  );
}
