"use client"

import { BarChart3, Palette, Search, TrendingUp, Smartphone, Shield, Settings } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslation } from "@/lib/i18n/context"

export function ProjectPhasesSection() {
  const { t } = useTranslation()
  const [visiblePhases, setVisiblePhases] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-phase") || "0")
            setVisiblePhases((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.3 },
    )

    document.querySelectorAll("[data-phase]").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const phases = [
    {
      icon: BarChart3,
      title: t("projectPhases.phase1.title"),
      description: t("projectPhases.phase1.description"),
    },
    {
      icon: Palette,
      title: t("projectPhases.phase2.title"),
      description: t("projectPhases.phase2.description"),
    },
    {
      icon: Search,
      title: t("projectPhases.phase3.title"),
      description: t("projectPhases.phase3.description"),
    },
    {
      icon: TrendingUp,
      title: t("projectPhases.phase4.title"),
      description: t("projectPhases.phase4.description"),
    },
    {
      icon: Smartphone,
      title: t("projectPhases.phase5.title"),
      description: t("projectPhases.phase5.description"),
    },
    {
      icon: Shield,
      title: t("projectPhases.phase6.title"),
      description: t("projectPhases.phase6.description"),
    },
    {
      icon: Settings,
      title: t("projectPhases.phase7.title"),
      description: t("projectPhases.phase7.description"),
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 text-cyan-500">
          {t("projectPhases.title")}
        </h2>
        <p className="text-center text-slate-600 mb-12 sm:mb-16 text-lg">{t("projectPhases.subtitle")}</p>

        <div className="flex flex-col gap-8 sm:gap-10 lg:grid lg:grid-cols-3 lg:gap-8">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon
            return (
              <div
                key={index}
                data-phase={index}
                className={`text-center w-full max-w-[95%] sm:max-w-md mx-auto transition-all duration-500 ${
                  visiblePhases.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/20 border-2 border-cyan-200 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/30 hover:rotate-6 transition-all duration-300 cursor-pointer">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight px-2">
                  {phase.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4 sm:px-2">{phase.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
