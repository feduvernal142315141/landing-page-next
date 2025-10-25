"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "@/lib/i18n/context"

export function TrustBar() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "TypeScript", icon: "TS" },
    { name: "Vercel", icon: "▲" },
    { name: "Supabase", icon: "🗄️" },
  ]

  return (
    <section className="py-12 bg-gradient-to-r from-slate-50 to-slate-100 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-600 font-medium mb-6">{t("trustBar.title")}</p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-4"></div>
                <div className="relative text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:drop-shadow-md">
                  {tech.icon}
                </div>
              </div>
              <span className="text-sm text-slate-700 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
