"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "https://i.postimg.cc/qRXc3Dg4/Docivo.png",
  "https://i.postimg.cc/gkK5W4Dd/splaygo.png",
  "https://i.postimg.cc/qM7cNLTY/ataraxia.png",
  "https://i.postimg.cc/2Sb4wSVf/Aputrak-Schedule-Activity-Manager-page-0001.jpg",
  "https://i.postimg.cc/dVvy8VRD/eunoia.png",
  "https://i.postimg.cc/QdsTpdgs/serviserc.png",
  "https://i.postimg.cc/W4sYfZrN/image.png",
  "https://i.postimg.cc/QxtTSdVm/image.png",
  "https://i.ibb.co/Rd4gYVW/proyecto-studios-tkoh.png",
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
          <img
            key={`${src}-${index}`}
            src={src}
            alt="Proyecto visual"
            className="h-[130px] w-[210px] shrink-0 rounded-xl object-cover sm:h-[160px] sm:w-[260px] md:h-[190px] md:w-[320px] lg:h-[220px] lg:w-[360px]"
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
    <section className="bg-[#0C0C0C] pt-14 pb-8 sm:pt-20 md:pt-24">
      <div className="flex flex-col gap-3">
        <MarqueeRow items={firstRow} direction="right" />
        <MarqueeRow items={secondRow} direction="left" />
      </div>
    </section>
  );
}
