import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KodeWave Solutions | Desarrollo Web y Software Profesional",
    template: "%s | KodeWave Solutions",
  },
  description:
    "Desarrollamos sitios web, sistemas y software a medida para empresas en Nicaragua y Centroamérica. Potencia tu negocio con soluciones digitales innovadoras.",
  keywords: [
    "desarrollo web",
    "software",
    "Managua",
    "Nicaragua",
    "KodeWave",
    "sistemas",
    "aplicaciones",
    "diseño web",
    "programación",
    "soluciones digitales",
  ],
  authors: [{ name: "KodeWave Solutions S.A." }],
  creator: "KodeWave Solutions S.A.",
  publisher: "KodeWave Solutions S.A.",
  metadataBase: new URL("https://www.kodewave-solutions.com"),
  openGraph: {
    title: "KodeWave Solutions | Desarrollo Web y Software Profesional",
    description:
      "Soluciones digitales innovadoras en Nicaragua y Centroamérica.",
    url: "https://www.kodewave-solutions.com/",
    siteName: "KodeWave Solutions",
    locale: "es_NI",
    type: "website",
    images: [
      {
        url: "https://www.kodewave-solutions.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KodeWave Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://www.kodewave-solutions.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "Tecnología",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
