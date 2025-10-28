"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Zap, Heart, Users, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTranslation } from "@/lib/i18n/context"

export function SobreNosotrosSection() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const equipo = [
    {
      nombre: t("about.team.member1.name"),
      rol: t("about.team.member1.role"),
      especialidad: t("about.team.member1.specialty"),
      imagen: "/professional-developer-portrait.png",
    },
    {
      nombre: t("about.team.member2.name"),
      rol: t("about.team.member2.role"),
      especialidad: t("about.team.member2.specialty"),
      imagen: "/female-ux-designer-portrait.jpg",
    },
    {
      nombre: t("about.team.member3.name"),
      rol: t("about.team.member3.role"),
      especialidad: t("about.team.member3.specialty"),
      imagen: "/male-developer-portrait.png",
    },
  ]

  const valores = [
    {
      icono: Shield,
      titulo: t("about.values.transparency.title"),
      descripcion: t("about.values.transparency.description"),
    },
    {
      icono: Zap,
      titulo: t("about.values.efficiency.title"),
      descripcion: t("about.values.efficiency.description"),
    },
    {
      icono: Heart,
      titulo: t("about.values.purpose.title"),
      descripcion: t("about.values.purpose.description"),
    },
    {
      icono: Users,
      titulo: t("about.values.support.title"),
      descripcion: t("about.values.support.description"),
    },
  ]

  const whatsappUrl =
    "https://wa.me/50586787795?text=Hola%20KodeWave%2C%20quiero%20trabajar%20con%20ustedes.%20Cuéntenme%20más%20sobre%20su%20proceso."

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{t("about.title")}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">{t("about.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-3xl font-bold text-slate-900">{t("about.vision.title")}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{t("about.vision.paragraph1")}</p>
            <p className="text-slate-600 leading-relaxed text-lg">{t("about.vision.paragraph2")}</p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold shadow-lg"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t("about.ctaButton")}
                </a>
              </Button>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {valores.map((valor, index) => {
              const IconComponent = valor.icono
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-slate-200 group hover:bg-gradient-to-br hover:from-cyan-50/50 hover:to-cyan-100/30 cursor-pointer"
                >
                  <IconComponent className="h-10 w-10 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-slate-900 mb-2">{valor.titulo}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{valor.descripcion}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* <div>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">{t("about.team.title")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {equipo.map((miembro, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 border-slate-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="relative h-80 overflow-hidden bg-slate-100">
                  <Image
                    src={miembro.imagen || "/placeholder.svg"}
                    alt={miembro.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{miembro.nombre}</h4>
                  <p className="text-cyan-600 font-semibold mb-3">{miembro.rol}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{miembro.especialidad}</p>
                </div>
              </Card>
            ))}
          </div>
        </div> */}

        <div className="mt-20 text-center">
          <Card className="bg-slate-50 border-slate-200 p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">{t("about.cta.title")}</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">{t("about.cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 animate-spin-slow" />
                  {t("about.cta.whatsapp")}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-700 bg-transparent">
                <a href="/contacto">{t("about.cta.call")}</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
