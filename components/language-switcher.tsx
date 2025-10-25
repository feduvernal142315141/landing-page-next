"use client"

import { useTranslation } from "@/lib/i18n/context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation()

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-400" />
      <div className="flex gap-1">
        <button
          onClick={() => setLocale("es")}
          className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
            locale === "es" ? "bg-[#079CFB] text-white" : "text-gray-400 hover:text-white"
          }`}
          aria-label="Cambiar a español"
        >
          ES
        </button>
        <button
          onClick={() => setLocale("en")}
          className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
            locale === "en" ? "bg-[#079CFB] text-white" : "text-gray-400 hover:text-white"
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>
    </div>
  )
}
