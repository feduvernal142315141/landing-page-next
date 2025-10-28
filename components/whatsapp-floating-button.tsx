"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloatingButton() {
  const whatsappUrl = "https://wa.me/50586787795?text=Hola%20KodeWave%2C%20vi%20su%20sitio%20y%20me%20interesa%20hablar."

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl hover:shadow-green-500/50 flex items-center justify-center transition-all hover:scale-110 animate-bounce-subtle"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  )
}
