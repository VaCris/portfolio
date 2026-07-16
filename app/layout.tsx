import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bryan Alexander Vidal Crispín | Desarrollador Web y de Software",
  description:
    "Portfolio profesional de Bryan Alexander Vidal Crispín, desarrollador web y de software en Lima, Perú.",
  keywords: [
    "Bryan Vidal",
    "Desarrollador Web",
    "Desarrollador Frontend",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Bryan Alexander Vidal Crispín" }],
  creator: "Bryan Alexander Vidal Crispín",
  openGraph: {
    title: "Bryan Alexander Vidal Crispín | Desarrollador Web",
    description:
      "Aplicaciones web modernas, interfaces responsivas e integración de APIs.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
