import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bryan Vidal | Desarrollador Web",
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
    title: "Bryan Vidal | Desarrollador Web",
    description:
      "Aplicaciones web modernas, interfaces responsivas e integración de APIs.",
    type: "website",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Vidal | Desarrollador Web",
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
      <body>{children}</body>
    </html>
  );
}
