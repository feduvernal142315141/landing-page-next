"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/lib/i18n/context"

export default function ContactoPage() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert(t("contact.form.success"))
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#021B33] via-[#032C4E] to-[#054E78] text-white">
      <Header />

      {/* HERO */}
      <section className="py-24 mt-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            {t("contact.hero.title")} 🚀
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
          {/* FORM */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_8px_40px_rgba(0,200,255,0.15)] p-8">
            <h2 className="text-3xl font-bold mb-2">{t("contact.form.title")}</h2>
            <p className="text-white/70 mb-8">{t("contact.form.subtitle")}</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { id: "nombre", label: t("contact.form.name"), type: "text", required: true },
                  { id: "empresa", label: t("contact.form.company"), type: "text", required: false },
                ].map(({ id, label, type, required }) => (
                  <div key={id} className="space-y-2">
                    <label htmlFor={id} className="text-sm font-medium text-white/80">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      required={required}
                      placeholder={label}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 
                      text-white placeholder:text-white/50 rounded-xl 
                      focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70
                      transition-all duration-300 shadow-[inset_0_1px_4px_rgba(255,255,255,0.05)]
                      hover:border-cyan-400/30 hover:bg-white/10"
                    />
                  </div>
                ))}
              </div>

              {[
                { id: "email", label: t("contact.form.email"), type: "email", required: true },
                { id: "telefono", label: t("contact.form.phone"), type: "tel", required: false },
                { id: "asunto", label: t("contact.form.subject"), type: "text", required: true },
              ].map(({ id, label, type, required }) => (
                <div key={id} className="space-y-2">
                  <label htmlFor={id} className="text-sm font-medium text-white/80">
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    required={required}
                    placeholder={label}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 
                    text-white placeholder:text-white/50 rounded-xl 
                    focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70
                    transition-all duration-300 shadow-[inset_0_1px_4px_rgba(255,255,255,0.05)]
                    hover:border-cyan-400/30 hover:bg-white/10"
                  />
                </div>
              ))}

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium text-white/80">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="mensaje"
                  required
                  placeholder={t("contact.form.messagePlaceholder")}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 
                  text-white placeholder:text-white/50 rounded-xl 
                  focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70
                  transition-all duration-300 shadow-[inset_0_1px_4px_rgba(255,255,255,0.05)]
                  hover:border-cyan-400/30 hover:bg-white/10 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 
                  hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg py-5 rounded-2xl
                  shadow-[0_10px_30px_rgba(6,182,212,0.35)] hover:shadow-[0_14px_36px_rgba(6,182,212,0.5)]
                  transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSubmitting ? t("contact.form.sending") : (
                    <>
                      {t("contact.form.send")} <span className="ml-2">✈️</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* INFO DE CONTACTO */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t("contact.info.title")}</h2>
              <p className="text-white/70 text-lg">{t("contact.info.subtitle")}</p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, title: t("contact.info.email"), info: "contacto@kodewave.com" },
                { icon: Phone, title: t("contact.info.phone"), info: "+505 8285 1270" },
                { icon: MapPin, title: t("contact.info.location"), info: "Managua, Nicaragua" },
                { icon: Clock, title: t("contact.info.hours"), info: t("contact.info.schedule") },
              ].map(({ icon: Icon, title, info }) => (
                <div
                  key={title}
                  className="flex items-center space-x-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="bg-cyan-500/10 p-3 rounded-full border border-cyan-400/20">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="text-white/70">{info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-3 text-white">
                {t("contact.cta.title")}
              </h3>
              <p className="mb-6 text-white/90">{t("contact.cta.subtitle")}</p>
              <Button
                asChild
                className="bg-white text-cyan-700 hover:bg-slate-100 font-bold py-5 px-8 text-lg rounded-xl"
              >
                <a href="tel:+50586787795">📞 {t("contact.cta.callNow")}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
