import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scale, Users, Award, BookOpen } from "lucide-react"

export default function PlanesIgualdadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-100 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Planes de Igualdad</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Desarrollamos e implementamos planes de igualdad efectivos que promuevan la diversidad y la inclusión
                  en tu organización.
                </p>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg">
                  Solicitar Consultoría
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <img src="/diverse-workplace-equality-and-inclusion-team.jpg" alt="Planes de Igualdad" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Beneficios de los Planes de Igualdad</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cumplimiento Legal</h3>
                <p className="text-gray-600">Asegura el cumplimiento de la normativa vigente en igualdad.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mejor Ambiente Laboral</h3>
                <p className="text-gray-600">Crea un entorno de trabajo más inclusivo y diverso.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reputación Corporativa</h3>
                <p className="text-gray-600">Mejora la imagen de marca y atrae talento diverso.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Formación Especializada</h3>
                <p className="text-gray-600">Capacitación continua en temas de igualdad y diversidad.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-600 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Construye una organización más inclusiva</h2>
            <p className="text-xl text-cyan-100 mb-8">Desarrollemos juntos tu plan de igualdad personalizado</p>
            <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg">Contactar Ahora</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
