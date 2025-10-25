"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n/context"
import { useRouter, usePathname } from "next/navigation"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Bloquear scroll al abrir menú
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // Cerrar si se hace clic fuera del menú
  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  // Función: ir al inicio o a una sección específica
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    const isHome = pathname === "/"
    const targetId = href.replace("#", "")

    if (isHome) {
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

  // Click en el logo
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
    }
  }

  const whatsappUrl =
    "https://wa.me/50582851270?text=Hola%20KodeWave%2C%20vi%20su%20sitio.%20Quiero%20una%20web%20para%20mi%20negocio."

  const menuItems = [
    { href: "#servicios", label: t("navbar.services"), icon: ArrowRight },
    { href: "#casos", label: t("navbar.cases"), icon: ArrowRight },
    { href: "#demos", label: t("navbar.demos"), icon: ArrowRight },
    { href: "#recursos", label: t("navbar.resources"), icon: ArrowRight },
    { href: "#nosotros", label: t("navbar.about"), icon: ArrowRight },
    { href: "#faq", label: t("navbar.faq"), icon: ArrowRight },
  ]

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out backdrop-blur-md ${
          isScrolled
            ? "bg-[#021B33]/90 shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
            : "bg-gradient-to-r from-[#021B33] to-[#03284A] shadow-[0_2px_15px_rgba(0,0,0,0.25)]"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 h-[86px] flex items-center justify-between">
          {/* LOGO */}
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <div className="relative w-[180px] sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[280px] transition-all duration-300 ease-out hover:scale-[1.03]">
              <Image
                src="/logoEmpresa.png"
                alt="KodeWave Solutions"
                width={280}
                height={60}
                className="object-contain drop-shadow-[0_2px_10px_rgba(0,200,255,0.25)]"
                priority
              />
            </div>
          </a>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className="text-white/90 hover:text-[#00C8FF] font-medium text-[15px] transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00C8FF] transition-all duration-200 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* BOTONES DESKTOP */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button
              asChild
              variant="outline"
              size="default"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold px-5 text-[15px] transition-all duration-200"
            >
              <Link href="/contacto">
                {t("navbar.contact")}
              </Link>
            </Button>
            <Button
              asChild
              size="default"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold px-5 shadow-lg hover:shadow-cyan-500/40 transition-all duration-200"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {t("navbar.whatsapp")}
              </a>
            </Button>
          </div>

          {/* MENÚ MÓVIL BOTÓN */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-lg text-white hover:bg-cyan-500/20 transition-all duration-300"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-8 w-8 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
          <div
            ref={menuRef}
            className="relative w-[85%] max-w-[420px] h-full bg-gradient-to-br from-[#03284A]/95 via-[#045b83]/90 to-[#021B33]/95
            backdrop-blur-2xl border-l border-cyan-400/20 shadow-[0_8px_40px_rgba(0,200,255,0.15)]
            animate-[slideInFromRight_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]
            rounded-l-3xl overflow-hidden"
          >
            {/* ENCABEZADO */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
              <Image
                src="/logoEmpresa.png"
                alt="KodeWave"
                width={150}
                height={40}
                className="object-contain drop-shadow-[0_2px_6px_rgba(0,200,255,0.35)]"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* ITEMS */}
            <nav className="flex flex-col space-y-4 mt-6 px-6 pb-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  style={{ animationDelay: `${index * 80}ms` }}
                  className="group flex items-center justify-between py-4 px-5 text-white/90 text-base font-semibold rounded-2xl
                    border border-white/[0.06] bg-gradient-to-r from-white/[0.05] to-white/[0.02]
                    hover:from-cyan-500/10 hover:to-cyan-400/5 backdrop-blur-sm hover:border-cyan-400/40
                    hover:shadow-[0_8px_20px_rgba(0,200,255,0.2)]
                    transition-all duration-300 ease-out animate-[slideUpFade_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-400/30">
                      <item.icon className="h-4 w-4 text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                    <span className="group-hover:text-white transition-all">{item.label}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-cyan-400 opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* FOOTER */}
            <div className="mt-auto px-6 pt-4 pb-8 border-t border-white/10 space-y-4">
              <LanguageSwitcher />
              <Button
                asChild
                className="w-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700
                text-white font-bold py-5 rounded-2xl shadow-[0_6px_20px_rgba(6,182,212,0.3)] hover:scale-[1.02] transition-all duration-300"
              >
                <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  <Phone className="h-5 w-5 mr-2" /> {t("navbar.contact")}
                </Link>
              </Button>
              <p className="text-center text-white/50 text-xs tracking-wide pt-2">
                © {new Date().getFullYear()}{" "}
                <span className="text-cyan-400 font-semibold">KodeWave</span> – Innovación con propósito
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
