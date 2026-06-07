"use client";

import type { MouseEvent, ReactNode } from "react";
import { useRef, useState } from "react";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
};

export function Magnet({
  children,
  className,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");
  const [transition, setTransition] = useState(inactiveTransition);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;
    const insidePadding =
      event.clientX >= rect.left - padding &&
      event.clientX <= rect.right + padding &&
      event.clientY >= rect.top - padding &&
      event.clientY <= rect.bottom + padding;

    if (!insidePadding) return;

    setTransition(activeTransition);
    setTransform(
      `translate3d(${distanceX / strength}px, ${distanceY / strength}px, 0)`,
    );
  }

  function handleMouseLeave() {
    setTransition(inactiveTransition);
    setTransform("translate3d(0, 0, 0)");
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition, willChange: "transform" }}
    >
      {children}
    </div>
  );
}
