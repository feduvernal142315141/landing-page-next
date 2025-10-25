"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, FileText, Download, ArrowRight, Clock } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n/context"

export function RecursosSection() {
  const { t } = useTranslation()

  const recursos = [
    {
      tipo: t("recursos.types.article"),
      titulo: t("recursos.article1.title"),
      descripcion: t("recursos.article1.description"),
      tiempo: t("recursos.article1.time"),
      imagen: "/website-speed-optimization.png",
      url: "#",
      icono: BookOpen,
    },
    {
      tipo: t("recursos.types.guide"),
      titulo: t("recursos.article2.title"),
      descripcion: t("recursos.article2.description"),
      tiempo: t("recursos.article2.time"),
      imagen: "/whatsapp-business-integration.png",
      url: "#",
      icono: FileText,
    },
    {
      tipo: t("recursos.types.download"),
      titulo: t("recursos.article3.title"),
      descripcion: t("recursos.article3.description"),
      tiempo: t("recursos.article3.time"),
      imagen: "/website-launch-checklist.png",
      url: "#",
      icono: Download,
    },
  ]

  return (
    <section id="recursos" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t("recursos.title")}</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">{t("recursos.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {recursos.map((recurso, index) => {
            const IconComponent = recurso.icono
            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-slide-up bg-slate-800 border-slate-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={recurso.imagen || "/placeholder.svg"}
                    alt={recurso.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {recurso.tipo}
                    </span>
                    <span className="bg-slate-900/80 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {recurso.tiempo}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <IconComponent className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-white leading-tight">{recurso.titulo}</h3>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">{recurso.descripcion}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white group/btn bg-transparent"
                  >
                    <a href={recurso.url}>
                      {recurso.tipo === t("recursos.types.download")
                        ? t("recursos.downloadFree")
                        : t("recursos.readNow")}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="bg-gradient-to-r from-cyan-500 to-cyan-600 border-0 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("recursos.newsletter.title")}</h3>
          <p className="text-cyan-50 mb-6 max-w-2xl mx-auto">{t("recursos.newsletter.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("recursos.newsletter.placeholder")}
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100 font-semibold">
              {t("recursos.newsletter.button")}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
