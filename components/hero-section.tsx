import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero.jpg-IjlZDbw4ek4no5mPWptzScs2xx1uSG.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-white"
        style={{
          clipPath: "ellipse(100% 100% at 50% 100%)",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          EXPERTOS EN DESARROLLO WEB
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty">
          ¿Buscas una web que se adapte a ti? Creamos soluciones a medida enfocadas en tu negocio y tus usuarios.
        </p>

        <Link href="/contacto">
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 text-lg rounded-full"
          >
            HABLEMOS DE TU FUTURA WEB
          </Button>
        </Link>
      </div>
    </section>
  )
}
