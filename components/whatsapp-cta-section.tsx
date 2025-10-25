"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n/context"

export function WhatsAppCTASection() {
  const { t } = useTranslation()
  const whatsappUrl =
    "https://wa.me/50582851270?text=Hola%2C%20quiero%20n%C3%BAmeros%20reales.%20Conversemos%20hoy.&utm_source=site&utm_medium=cta&utm_campaign=whatsapp-fastlane&utm_content=fastlane"

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          {t("whatsappCta.title")}
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">{t("whatsappCta.subtitle")}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-cyan-600 hover:bg-slate-50 font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              {t("whatsappCta.ctaPrimary")}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold px-8 py-6 text-lg rounded-full transition-all w-full sm:w-auto bg-transparent"
          >
            <Link href="/contacto">
              <Phone className="mr-2 h-5 w-5" />
              {t("whatsappCta.ctaSecondary")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
