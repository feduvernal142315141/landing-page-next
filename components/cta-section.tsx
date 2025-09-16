import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const benefits = [
  "Configuración en menos de 5 minutos",
  "Soporte 24/7 en español",
  "Garantía de devolución de 30 días",
  "Actualizaciones gratuitas de por vida",
]

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            ¿Listo para <span className="text-primary">revolucionar</span> tu forma de trabajar?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Únete a más de 10,000 empresas que ya confían en nuestra plataforma para impulsar su crecimiento y
            productividad.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Comenzar Gratis Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Hablar con Ventas
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">Más de 50,000 usuarios activos • Calificación 4.9/5 ⭐</p>
        </div>
      </div>
    </section>
  )
}
