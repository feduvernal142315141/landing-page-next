"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n/context"

export function FeaturesSection() {
  const { t } = useTranslation()
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleSections((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.2 },
    )

    document.querySelectorAll("[data-index]").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const whatsappUrl = "https://wa.me/50586787795?text=Hola%2C%20quiero%20más%20información"

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-8">{t("features.title")}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{t("features.description")}</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              {t("features.contactButton")}
            </button>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-16">{t("features.questionTitle")}</h2>
        </div>

        <div
          data-index="0"
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 transition-all duration-700 ${
            visibleSections.has(0) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="relative">
            <div className="relative bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl overflow-hidden group">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 group-hover:rotate-180 transition-transform duration-1000">
                <Image src="/react-icon.png" alt="React" width={40} height={40} className="w-10 h-10" loading="lazy" />
              </div>
              <div className="relative w-full h-[400px]">
                <Image
                  src="/woman-developer-coding-laptop-modern-office.jpg"
                  alt="Desarrolladora profesional con laptop"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{t("features.react.title")}</h3>
            <p className="text-lg font-semibold text-gray-700">{t("features.react.description")}</p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t("features.react.benefit1")}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t("features.react.benefit2")}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t("features.react.benefit3")}
              </li>
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              {t("features.react.cta")}
            </button>
          </div>
        </div>

        <div
          data-index="1"
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 transition-all duration-700 ${
            visibleSections.has(1) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="relative lg:order-1">
            <div className="relative bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl overflow-hidden group">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image
                  src="/nextjs-icon.png"
                  alt="Next.js"
                  width={48}
                  height={32}
                  className="w-12 h-8"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full h-[400px]">
                <Image
                  src="/young-man-programmer-working-laptop-creative-space.jpg"
                  alt="Programador joven con laptop"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:order-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{t("features.nextjs.title")}</h3>
            <p className="text-lg font-semibold text-gray-700">{t("features.nextjs.description")}</p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t("features.nextjs.benefit1")}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t("features.nextjs.benefit2")}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t("features.nextjs.benefit3")}
              </li>
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              {t("features.nextjs.cta")}
            </button>
          </div>
        </div>

        <div
          data-index="2"
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 transition-all duration-700 ${
            visibleSections.has(2) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="relative">
            <div className="relative bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl overflow-hidden">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10">
                <Image
                  src="/tailwind-icon.png"
                  alt="Tailwind CSS"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full h-[400px]">
                <Image
                  src="/female-software-engineer-laptop-tech-startup.jpg"
                  alt="Ingeniera de software con laptop"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{t("features.tailwind.title")}</h3>
            <p className="text-lg font-semibold text-gray-700">{t("features.tailwind.description")}</p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t("features.tailwind.benefit1")}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t("features.tailwind.benefit2")}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t("features.tailwind.benefit3")}
              </li>
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              {t("features.tailwind.cta")}
            </button>
          </div>
        </div>

        <div
          data-index="3"
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            visibleSections.has(3) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="relative lg:order-1">
            <div className="relative bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl overflow-hidden">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10">
                <Image src="/astro-icon.png" alt="Astro" width={40} height={40} className="w-10 h-10" loading="lazy" />
              </div>
              <div className="relative w-full h-[400px]">
                <Image
                  src="/diverse-developer-coding-laptop-coworking-space.jpg"
                  alt="Desarrollador diverso con laptop"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:order-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{t("features.astro.title")}</h3>
            <p className="text-lg font-semibold text-gray-700">{t("features.astro.description")}</p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t("features.astro.benefit1")}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t("features.astro.benefit2")}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t("features.astro.benefit3")}
              </li>
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              {t("features.astro.cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
