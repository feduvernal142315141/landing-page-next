"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Github, Twitter, Linkedin, Mail, ChevronDown, MessageCircle, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n/context"

function FooterAccordion({
  title,
  links,
  microcopy,
  onNavigate,
}: {
  title: string
  links: Array<{ name: string; href: string }>
  microcopy: string
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-slate-700/30 md:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left md:cursor-default md:pointer-events-none"
        aria-expanded={isOpen}
      >
        <h4 className="text-base font-semibold uppercase tracking-wider text-white">{title}</h4>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform duration-200 md:hidden ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-250 ease-in-out md:block ${
          isOpen ? "max-h-96 pb-4" : "max-h-0 md:max-h-none"
        }`}
      >
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => onNavigate(e, link.href)}
                className="group inline-block text-sm text-gray-300 transition-colors hover:text-cyan-400"
              >
                <span className="relative">
                  {link.name}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-200 group-hover:w-full" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-gray-400">{microcopy}</p>
      </div>
    </div>
  )
}

export function Footer() {
  const { t } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()

  // 🔹 Navegación inteligente (como en el Header)
  const handleFooterNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    const isInternal = href.startsWith("#")
    if (!isInternal) {
      router.push(href)
      return
    }

    const targetId = href.replace("#", "")
    if (pathname === "/") {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } else {
      router.push(`/${href}`)
    }
  }

  const footerLinks = {
    services: [
      { name: t("footer.services.react"), href: "#servicios" },
      { name: t("footer.services.nextjs"), href: "#servicios" },
      { name: t("footer.services.tailwind"), href: "#servicios" },
      { name: t("footer.services.astro"), href: "#servicios" },
      { name: t("footer.services.support"), href: "#servicios" },
    ],
    company: [
      { name: t("footer.company.about"), href: "#nosotros" },
      { name: t("footer.company.cases"), href: "#casos" },
      { name: t("footer.company.demos"), href: "#demos" },
      { name: t("footer.company.resources"), href: "#recursos" },
    ],
    support: [
      { name: t("footer.support.help"), href: "#faq" },
      { name: t("footer.support.docs"), href: "#recursos" },
      { name: t("footer.support.contact"), href: "/contacto" },
      { name: t("footer.support.status"), href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Twitter/X", href: "#", icon: Twitter, label: "Visitar Twitter de KodeWave Solutions" },
    { name: "LinkedIn", href: "#", icon: Linkedin, label: "Visitar LinkedIn de KodeWave Solutions" },
    { name: "GitHub", href: "#", icon: Github, label: "Visitar GitHub de KodeWave Solutions" },
    { name: "Email", href: "mailto:hola@kodewave.com", icon: Mail, label: "Enviar email a KodeWave Solutions" },
  ]

  return (
    <>
      {/* BLOQUE SUPERIOR CTA */}
      <div className="bg-[#132A3E] py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-center md:gap-6">
            <p className="text-base font-semibold text-gray-200 md:text-lg">{t("footer.cta.title")}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:gap-6">
              <a
                href="https://wa.me/50500000000?text=Hola%20KodeWave%2C%20vi%20su%20sitio.%20Quiero%20una%20web%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-cyan-400 transition-colors hover:text-cyan-300"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="relative">
                  {t("footer.cta.whatsapp")}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300 transition-all duration-200 group-hover:w-full" />
                </span>
              </a>
              <a
                href="#demos"
                onClick={(e) => handleFooterNavigation(e, "#demos")}
                className="group flex items-center gap-2 text-cyan-400 transition-colors hover:text-cyan-300"
              >
                <Sparkles className="h-4 w-4" />
                <span className="relative">
                  {t("footer.cta.demos")}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300 transition-all duration-200 group-hover:w-full" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER PRINCIPAL */}
      <footer className="bg-[#0D1B2A] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* BLOQUE IDENTIDAD */}
          <div className="mb-12 text-center md:mb-16 md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <Image src="/logo-light.png" alt="KodeWave Solutions" width={200} height={50} className="h-auto w-48" />
            </div>
            <p className="mb-4 text-xl font-semibold text-gray-200 md:text-2xl">{t("footer.identity.tagline")}</p>
            <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-gray-300 md:mx-0">
              {t("footer.identity.description")}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-gray-500">🌐</span> {t("footer.identity.tech")}
              </p>
              <p>
                <span className="text-gray-500">📍</span> {t("footer.identity.location")}
              </p>
            </div>
          </div>

          {/* BLOQUE MENÚS */}
          <div className="mb-12 grid grid-cols-1 gap-0 md:mb-16 md:grid-cols-3 md:gap-8">
            <FooterAccordion
              title={t("footer.services.title")}
              links={footerLinks.services}
              microcopy={t("footer.services.tagline")}
              onNavigate={handleFooterNavigation}
            />
            <FooterAccordion
              title={t("footer.company.title")}
              links={footerLinks.company}
              microcopy={t("footer.company.tagline")}
              onNavigate={handleFooterNavigation}
            />
            <FooterAccordion
              title={t("footer.support.title")}
              links={footerLinks.support}
              microcopy={t("footer.support.tagline")}
              onNavigate={handleFooterNavigation}
            />
          </div>

          {/* BLOQUE REDES */}
          <div className="mb-12 text-center md:mb-16">
            <h4 className="mb-3 text-base font-semibold uppercase tracking-wider text-white">
              {t("footer.social.title")}
            </h4>
            <p className="mb-6 text-sm text-gray-400">{t("footer.social.subtitle")}</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/50 text-gray-300 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/50"
                  aria-label={social.label}
                  title={social.name}
                >
                  <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* BLOQUE LEGAL */}
          <div className="relative border-t border-slate-700/30 pt-8 pb-24 md:pb-8 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-cyan-500/50 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="mb-4 flex flex-wrap justify-center gap-4 text-xs text-gray-400 md:gap-6">
              <a href="#" className="transition-colors hover:text-cyan-400">
                {t("footer.legal.terms")}
              </a>
              <span className="text-gray-600">·</span>
              <a href="#" className="transition-colors hover:text-cyan-400">
                {t("footer.legal.privacy")}
              </a>
              <span className="text-gray-600">·</span>
              <a href="#" className="transition-colors hover:text-cyan-400">
                {t("footer.legal.cookies")}
              </a>
            </div>
            <div className="space-y-1 text-center text-xs text-gray-400 md:text-sm">
              <p>{t("footer.legal.copyright")}</p>
              <p dangerouslySetInnerHTML={{ __html: t("footer.legal.madeWith") }} />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
