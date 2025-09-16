"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const servicesMenu = {
    consultoria: {
      title: "CONSULTORÍA",
      icon: "👥",
      items: [
        { name: "Procesos LEAN", href: "/servicios/consultoria/procesos-lean" },
        { name: "Planes de Igualdad", href: "/servicios/consultoria/planes-igualdad" },
        { name: "Transformación Digital", href: "/servicios/consultoria/transformacion-digital" },
        { name: "Gestión de personas", href: "/servicios/consultoria/gestion-personas" },
      ],
    },
    sistemasIt: {
      title: "SISTEMAS IT",
      icon: "💻",
      items: [
        { name: "Microsoft 365", href: "/servicios/sistemas-it/microsoft-365" },
        { name: "Microsoft Azure", href: "/servicios/sistemas-it/microsoft-azure" },
        { name: "Smart Workplace", href: "/servicios/sistemas-it/smart-workplace" },
      ],
    },
    negocio: {
      title: "NEGOCIO",
      icon: "📊",
      items: [
        { name: "Dynamics 365", href: "/servicios/negocio/dynamics-365" },
        { name: "Sage ERP", href: "/servicios/negocio/sage-erp" },
        { name: "Salesforce", href: "/servicios/negocio/salesforce" },
      ],
    },
    dataServices: {
      title: "DATA SERVICES",
      icon: "🗄️",
      items: [
        { name: "Inteligencia Artificial", href: "/servicios/data-services/inteligencia-artificial" },
        { name: "Power BI", href: "/servicios/data-services/power-bi" },
        { name: "IoT", href: "/servicios/data-services/iot" },
      ],
    },
    desarrolloSoftware: {
      title: "DESARROLLO SOFTWARE",
      icon: "⚡",
      items: [
        { name: "DevOps", href: "/servicios/desarrollo-software/devops" },
        { name: "SharePoint", href: "/servicios/desarrollo-software/sharepoint" },
        { name: "Power Platform", href: "/servicios/desarrollo-software/power-platform" },
      ],
    },
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex justify-end items-center py-2 text-sm">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white border border-white/30 rounded-full px-4 py-1 text-xs"
            >
              Prensa
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white border border-white/30 rounded-full px-4 py-1 text-xs"
            >
              Blog
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white border border-white/30 rounded-full px-4 py-1 text-xs"
            >
              Tu cuenta
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white border border-white/30 rounded-full px-4 py-1 text-xs"
            >
              Únete a Nosotros
            </Button>
            <div className="text-white/80 text-xs">EN / ES</div>
          </div>
        </div>

        <div className="flex items-center justify-between h-16 border-t border-white/10">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-8">
                <Image src="/kodeLogo.png" alt="KODEWAVE SOLUTIONS Logo" fill className="object-contain" />
              </div>
              <div className="text-white">
                <div className="font-bold text-lg">KODEWAVE SOLUTIONS</div>
                <div className="text-xs text-white/60">CREAMOS SOFTWARE. CONSTRUIMOS CONFIANZA.</div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <div className="relative group">
                <button className="text-white hover:text-cyan-400 transition-colors font-medium flex items-center">
                  Servicios
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="grid grid-cols-5 gap-6">
                    {Object.entries(servicesMenu).map(([key, category]) => (
                      <div key={key} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                            {category.icon}
                          </div>
                        </div>
                        <h3 className="font-bold text-sm text-gray-900 mb-2">{category.title}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item, index) => (
                            <li key={index}>
                              <Link
                                href={item.href}
                                className="text-sm text-gray-600 hover:text-cyan-600 transition-colors block"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#experiencia" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Experiencia
              </a>
              <a href="#conoce-integra" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Conoce Integra
              </a>
              <a href="#eventos" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Eventos
              </a>
              <a href="#recursos" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Recursos
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 border-t border-white/10">
              <div className="space-y-2">
                <div className="px-3 py-2 text-white font-medium">Servicios</div>
                {Object.entries(servicesMenu).map(([key, category]) => (
                  <div key={key} className="pl-6 space-y-1">
                    <div className="text-cyan-400 text-sm font-medium">{category.title}</div>
                    {category.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block pl-4 py-1 text-sm text-white/80 hover:text-cyan-400"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <a href="#experiencia" className="block px-3 py-2 text-white hover:text-cyan-400">
                Experiencia
              </a>
              <a href="#conoce-integra" className="block px-3 py-2 text-white hover:text-cyan-400">
                Conoce Integra
              </a>
              <a href="#eventos" className="block px-3 py-2 text-white hover:text-cyan-400">
                Eventos
              </a>
              <a href="#recursos" className="block px-3 py-2 text-white hover:text-cyan-400">
                Recursos
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
