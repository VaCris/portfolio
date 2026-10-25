"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/serviserc.webp",
  "/proyecto-studios-tkoh.webp",
  "/Motordesk-Login.webp",
  "/splaygo.webp",
  "/Docivo.webp",
  "/Ataraxia-desktop.webp",
  "/TG-Downloader.webp",
  "/Prest-App-Doc.webp",
  "/reservation-api.webp",
  "/Aputrak.webp",
];

const firstRow = images.slice(0, 4);
const secondRow = images.slice(4);

function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const sectionTop = element.getBoundingClientRect().top + window.scrollY;
      const nextOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.18;
      setOffset(nextOffset);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateX = direction === "right" ? offset - 120 : -(offset - 120);
  const repeated = [...items, ...items, ...items];

  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className="flex gap-3"
        style={{ transform: `translate3d(${translateX}px, 0, 0)`, willChange: "transform" }}
      >
        {repeated.map((src, index) => (
          <Image
            key={`${src}-${index}`}
            src={src}
            alt="Proyecto visual"
            width={360}
            height={220}
            sizes="210px"
            className="h-[130px] w-[210px] shrink-0 rounded-xl object-cover sm:h-[160px] sm:w-[260px] md:h-[190px] md:w-[320px] lg:h-[220px] lg:w-[360px]"
            loading="lazy"
            decoding="async"
            draggable={false}
            quality={80}
          />
        ))}
      </div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section className="bg-background pt-14 pb-8 sm:pt-20 md:pt-24">
      <div className="flex flex-col gap-3">
        <MarqueeRow items={firstRow} direction="right" />
        <MarqueeRow items={secondRow} direction="left" />
      </div>
    </section>
  );
}
