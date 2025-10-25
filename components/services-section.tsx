"use client"

import { Button } from "@/components/ui/button"
import { Code, ShoppingCart, Rocket, BarChart, Palette, Wrench } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslation } from "@/lib/i18n/context"

export function ServicesSection() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Code,
      title: t("services.custom.title"),
      bullets: [t("features.nextjs.benefit1"), t("features.nextjs.benefit2")],
      bgColor: "bg-white",
    },
    {
      icon: ShoppingCart,
      title: t("services.ecommerce.title"),
      bullets: ["Integración directa", "Gestión simplificada"],
      bgColor: "bg-slate-50",
    },
    {
      icon: Rocket,
      title: t("services.landing.title"),
      bullets: ["Conversión optimizada", "Carga ultra-rápida"],
      bgColor: "bg-white",
    },
    {
      icon: BarChart,
      title: t("services.apps.title"),
      bullets: ["Soluciones personalizadas", "Escalables y seguras"],
      bgColor: "bg-slate-50",
    },
    {
      icon: Palette,
      title: t("services.branding.title"),
      bullets: ["Diseño profesional", "Experiencia memorable"],
      bgColor: "bg-white",
    },
    {
      icon: Wrench,
      title: t("services.support.title"),
      bullets: ["Actualizaciones continuas", "Respuesta rápida"],
      bgColor: "bg-slate-50",
    },
  ]

  const whatsappUrl = "https://wa.me/50582851270?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n"

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {t("services.title")}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 ${service.bgColor} border border-slate-200 rounded-xl hover:border-cyan-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <service.icon className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <ul className="space-y-2 mb-4">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start text-slate-600 text-sm">
                    <svg
                      className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 w-full group-hover:scale-105 transition-transform"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {t("services.cta")} →
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
