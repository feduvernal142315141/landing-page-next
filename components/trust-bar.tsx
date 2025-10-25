"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "@/lib/i18n/context"

export function TrustBar() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150)
    return () => clearTimeout(timer)
  }, [])

  const technologies = {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "TypeScript", icon: "🧠" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "NestJS", icon: "🧩" },
      { name: "Express", icon: "🚀" },
      { name: "Java", icon: "☕" },
      { name: "Spring Boot", icon: "🌱" },
    ],
    database: [
      { name: "Supabase", icon: "🗄️" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Firebase", icon: "🔥" },
    ],
    infra: [
      { name: "Vercel", icon: "▲" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "GitHub Actions", icon: "⚙️" },
    ],
    tools: [
      { name: "Figma", icon: "🎨" },
      { name: "Notion", icon: "🗒️" },
      { name: "Supabase Auth", icon: "🔐" },
    ],
  }

  return (
    <section className="py-10 md:py-16 bg-gradient-to-r from-slate-50 to-slate-100 border-y border-slate-200/60">
      <div className="container mx-auto px-4">
        {/* TÍTULO */}
        <div className="text-center mb-10">
          <h3 className="text-slate-800 text-xl md:text-2xl font-semibold tracking-wide">
            {t("trustBar.title")}
          </h3>
          <div className="mx-auto mt-3 h-[2px] w-16 bg-cyan-400 rounded-full" />
        </div>

        {/* GRID DE SECCIONES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* FRONTEND */}
          <TechGroup title="Frontend" items={technologies.frontend} isVisible={isVisible} delay={0} />
          {/* BACKEND */}
          <TechGroup title="Backend" items={technologies.backend} isVisible={isVisible} delay={100} />
          {/* DATABASE */}
          <TechGroup title="Database" items={technologies.database} isVisible={isVisible} delay={200} />
          {/* INFRA */}
          <TechGroup title="Infra" items={technologies.infra} isVisible={isVisible} delay={300} />
          {/* TOOLS */}
          <TechGroup title="Tools" items={technologies.tools} isVisible={isVisible} delay={400} />
        </div>
      </div>
    </section>
  )
}

function TechGroup({
  title,
  items,
  isVisible,
  delay,
}: {
  title: string
  items: { name: string; icon: string }[]
  isVisible: boolean
  delay: number
}) {
  return (
    <div className="text-center">
      <h4 className="text-slate-500 font-semibold text-sm uppercase tracking-wider mb-4">{title}</h4>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {items.map((tech, index) => (
          <div
            key={index}
            className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${delay + index * 80}ms` }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-4"></div>
              <div className="relative text-3xl sm:text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:drop-shadow-md">
                {tech.icon}
              </div>
            </div>
            <span className="text-xs sm:text-sm text-slate-700 font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
