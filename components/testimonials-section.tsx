"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n/context"

export function TestimonialsSection() {
  const { t } = useTranslation()

  const testimonials = [
    {
      name: t("testimonials.testimonial1.name"),
      role: t("testimonials.testimonial1.role"),
      image: "/professional-woman-diverse.png",
      text: t("testimonials.testimonial1.text"),
      rating: 5,
    },
    {
      name: t("testimonials.testimonial2.name"),
      role: t("testimonials.testimonial2.role"),
      image: "/professional-man.jpg",
      text: t("testimonials.testimonial2.text"),
      rating: 5,
    },
    {
      name: t("testimonials.testimonial3.name"),
      role: t("testimonials.testimonial3.role"),
      image: "/professional-woman-smiling.png",
      text: t("testimonials.testimonial3.text"),
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-slate-600">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center text-xs text-cyan-600 font-medium">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {t("testimonials.verified")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
