"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n/context"

export function CasosSection() {
  const { t } = useTranslation()
  const [selectedCaso, setSelectedCaso] = useState<number | null>(null)

  const casos = [
    {
      id: 1,
      cliente: t("casos.dental.name"),
      logo: "/dental-clinic-logo.png",
      reto: t("casos.dental.challenge"),
      solucion: t("casos.dental.solution"),
      resultado: t("casos.dental.result"),
      metricas: [t("casos.dental.metric1"), t("casos.dental.metric2"), t("casos.dental.metric3")],
      imagen: "/modern-dental-clinic-website.jpg",
      categoria: t("casos.category.health"),
    },
    {
      id: 2,
      cliente: t("casos.electronics.name"),
      logo: "/electronics-store-logo.png",
      reto: t("casos.electronics.challenge"),
      solucion: t("casos.electronics.solution"),
      resultado: t("casos.electronics.result"),
      metricas: [t("casos.electronics.metric1"), t("casos.electronics.metric2"), t("casos.electronics.metric3")],
      imagen: "/modern-ecommerce-electronics-website.jpg",
      categoria: t("casos.category.ecommerce"),
    },
    {
      id: 3,
      cliente: t("casos.law.name"),
      logo: "/law-firm-logo.png",
      reto: t("casos.law.challenge"),
      solucion: t("casos.law.solution"),
      resultado: t("casos.law.result"),
      metricas: [t("casos.law.metric1"), t("casos.law.metric2"), t("casos.law.metric3")],
      imagen: "/professional-law-firm-website.png",
      categoria: t("casos.category.services"),
    },
  ]

  const whatsappUrl = (caso: string) =>
    `https://wa.me/50586787795?text=Hola%20KodeWave%2C%20vi%20el%20caso%20de%20${encodeURIComponent(caso)}%20y%20quiero%20algo%20similar%20para%20mi%20negocio.`

  return (
    <section id="casos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{t("casos.title")}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">{t("casos.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casos.map((caso, index) => (
            <Card
              key={caso.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-slide-up border-slate-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={caso.imagen || "/placeholder.svg"}
                  alt={caso.cliente}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold text-sm">{t("casos.viewDetails")}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative h-10 w-24">
                    <Image
                      src={caso.logo || "/placeholder.svg"}
                      alt={`${caso.cliente} logo`}
                      fill
                      className="object-contain object-left"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                    {caso.categoria}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{caso.cliente}</h3>

                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{caso.reto}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {caso.metricas.map((metrica, idx) => (
                    <span key={idx} className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                      {metrica}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="text-lg font-bold text-green-600">{caso.resultado}</span>
                  </div>
                  <Button asChild size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs group/btn">
                    <a href={whatsappUrl(caso.cliente)} target="_blank" rel="noopener noreferrer">
                      {t("casos.requestSimilar")}
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">{t("casos.ctaQuestion")}</p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold shadow-lg"
          >
            <a
              href="https://wa.me/50586787795?text=Hola%20KodeWave%2C%20quiero%20resultados%20como%20los%20casos%20de%20éxito%20que%20vi."
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("casos.ctaButton")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
