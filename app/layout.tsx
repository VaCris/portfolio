import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bryan Vidal | Frontend Developer · React · TypeScript · Next.js",
  description:
    "Portfolio de Bryan Vidal, desarrollador frontend especializado en React, TypeScript y Next.js. Proyectos web, aplicaciones y soluciones digitales.",
  keywords: [
    "Bryan Vidal",
    "Desarrollador Frontend",
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Desarrollador Web",
    "Portfolio",
  ],
  authors: [{ name: "Bryan Alexander Vidal Crispín" }],
  creator: "Bryan Alexander Vidal Crispín",
  openGraph: {
    title: "Bryan Vidal | Frontend Developer · React · TypeScript · Next.js",
    description:
      "Aplicaciones web modernas, interfaces responsivas e integración de APIs.",
    type: "website",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Vidal | Frontend Developer · React · TypeScript · Next.js",
    description:
      "Aplicaciones web modernas, interfaces responsivas e integración de APIs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={kanit.variable}>
      <head>
        <link rel="preconnect" href="https://i.ibb.co" />
      </head>
      <body>{children}</body>
    </html>
  );
}
