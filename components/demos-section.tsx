"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n/context"

export function DemosSection() {
  const { t } = useTranslation()
  const [categoriaActiva, setCategoriaActiva] = useState("all")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const categorias = [
    { key: "all", label: t("demos.categories.all") },
    { key: "pymes", label: t("demos.categories.pymes") },
    { key: "clinics", label: t("demos.categories.clinics") },
    { key: "professionals", label: t("demos.categories.professionals") },
    { key: "stores", label: t("demos.categories.stores") },
    // { key: "startups", label: t("demos.categories.startups") },
    { key: "education", label: t("demos.categories.education") },
  ]

  const demos = [
    {
      id: 1,
      titulo: t("demos.items.restaurant"),
      categoria: "pymes",
      stack: ["Next.js", "Tailwind", "Google Maps"],
      imagen: "/restaurant-website-modern.jpg",
      demoUrl: "https://saborlatino.vercel.app/",
    },
    {
      id: 2,
      titulo: t("demos.items.dental"),
      categoria: "clinics",
      stack: ["Next.js", "Tailwind", "Framer Motion"],
      imagen: "/dental-clinic-landing-page.jpg",
      demoUrl: "https://maxi-dent.vercel.app/",
    },
    {
      id: 3,
      titulo: t("demos.items.lexManagua"),
      categoria: "professionals",
      stack: ["Next.js", "Framer Motion", "Vercel"],
      imagen: "/lex-managua.jpg",
      demoUrl: "https://lex-managua.vercel.app/",
    },
    {
      id: 4,
      titulo: t("demos.items.stores"),
      categoria: "stores",
      stack: ["Next.js", "Framer Motion", "Vercel"],
      imagen: "/store-online.jpg",
      demoUrl: "https://todohogar.vercel.app/",
    },
    {
      id: 5,
      titulo: t("demos.items.education"),
      categoria: "education",
      stack: ["Next.js", "Framer Motion", "Vercel"],
      imagen: "/taekwondo.jpg",
      demoUrl: "https://empire-taekwondo.vercel.app/",
    },
    {
      id: 6,
      titulo: t("demos.items.professionals"),
      categoria: "professionals",
      stack: ["Next.js", "Framer Motion", "Vercel"],
      imagen: "/bienes-raices.jpg",
      demoUrl: "https://bienes-raices-blue.vercel.app/",
    },
  ]

  const demosFiltradas = categoriaActiva === "all" ? demos : demos.filter((demo) => demo.categoria === categoriaActiva)

  const whatsappUrl = (titulo: string) =>
    `https://wa.me/50586787795?text=Hola%20KodeWave%2C%20me%20interesa%20el%20diseño%20"${encodeURIComponent(
      titulo
    )}".%20¿Pueden%20adaptarlo%20a%20mi%20marca?`

  return (
    <section id="demos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {t("demos.title")}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("demos.subtitle")}
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((categoria) => (
            <Button
              key={categoria.key}
              variant={categoriaActiva === categoria.key ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoriaActiva(categoria.key)}
              className={
                categoriaActiva === categoria.key
                  ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                  : "border-slate-300 text-slate-700 hover:border-cyan-500 hover:text-cyan-600"
              }
            >
              {categoria.label}
            </Button>
          ))}
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demosFiltradas.map((demo, index) => {
            const isActive = hoveredCard === demo.id
            return (
              <Card
                key={demo.id}
                onMouseEnter={() => setHoveredCard(demo.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setHoveredCard(isActive ? null : demo.id)}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-slate-200 animate-slide-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={demo.imagen || "/placeholder.svg"}
                    alt={demo.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-transform duration-500 ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                    loading="lazy"
                  />

                  {/* Overlay con animación */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-end pb-6 px-6
                    bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent
                    transition-all duration-500 ease-out ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                  >
                    <div className="space-y-3 w-full transition-all duration-500">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="bg-white/90 hover:bg-white hover:text-cyan-600 text-slate-900 border-0 w-full shadow-md backdrop-blur-sm"
                      >
                        <a href={demo.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t("demos.viewDemo")}
                        </a>
                      </Button>

                      <Button
                        asChild
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white w-full shadow-lg backdrop-blur-sm"
                      >
                        <a href={whatsappUrl(demo.titulo)} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {t("demos.requestDesign")}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{demo.titulo}</h3>
                  <div className="flex flex-wrap gap-2">
                    {demo.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">{t("demos.ctaQuestion")}</p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold shadow-lg"
          >
            <a
              href="https://wa.me/50586787795?text=Hola%20KodeWave%2C%20necesito%20un%20diseño%20personalizado%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("demos.ctaButton")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
