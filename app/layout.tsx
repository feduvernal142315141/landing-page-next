import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { I18nProvider } from "@/lib/i18n/context"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL("https://kodewave.app"), // cambia al dominio real
  title: {
    default: "KodeWave Solutions | Desarrollo Web y Mobile Profesional",
    template: "%s | KodeWave Solutions",
  },
  description:
    "Creamos sitios web, apps móviles y soluciones digitales modernas. Expertos en Next.js, React, y desarrollo SaaS con enfoque en resultados reales.",
  keywords: [
    "Desarrollo web",
    "Aplicaciones móviles",
    "Next.js",
    "React",
    "SaaS",
    "Landing Pages",
    "Diseño web profesional",
    "KodeWave Solutions",
    "Desarrollo de software en Nicaragua",
  ],
  authors: [{ name: "KodeWave Solutions", url: "https://kodewave.app" }],
  creator: "KodeWave Solutions",
  publisher: "KodeWave Solutions",
  alternates: {
    canonical: "https://kodewave.app",
    languages: {
      "es-ES": "https://kodewave.app",
      "en-US": "https://kodewave.app/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://kodewave.app",
    siteName: "KodeWave Solutions",
    title: "KodeWave Solutions | Desarrollo Web y Mobile Profesional",
    description:
      "Diseñamos sitios web, aplicaciones móviles y sistemas SaaS de alto rendimiento. Tu marca, con una presencia digital premium.",
    images: [
      {
        url: "/og-image.jpg", // Asegúrate de tener esta imagen (1200x630)
        width: 1200,
        height: 630,
        alt: "KodeWave Solutions – Desarrollo web y mobile profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kodewave",
    creator: "@kodewave",
    title: "KodeWave Solutions | Desarrollo Web y Mobile Profesional",
    description:
      "Desarrollamos experiencias digitales modernas con Next.js, React y tecnología de punta.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion", // Opcional (Google Search Console)
  },
  category: "Desarrollo Web y Mobile",
  generator: "Next.js 14 + KodeWave Solutions",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Datos estructurados JSON-LD */}
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KodeWave Solutions",
              url: "https://kodewave.app",
              logo: "https://kodewave.app/logo-light.png",
              sameAs: [
                "https://twitter.com/kodewave",
                "https://linkedin.com/company/kodewave",
                "https://github.com/kodewave",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+50582851270",
                contactType: "Customer Support",
                areaServed: "NI",
                availableLanguage: ["Spanish", "English"],
              },
            }),
          }}
        />
      </head>

      <body className="antialiased bg-[#021B33] text-white selection:bg-cyan-400/30 selection:text-white">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
