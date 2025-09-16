import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, TrendingUp, Users, Target } from "lucide-react"

export default function GestionPersonasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-red-100 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Gestión de Personas</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Potencia el talento humano de tu organización con estrategias integrales de gestión de personas que
                  impulsen el crecimiento y la satisfacción laboral.
                </p>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg">
                  Optimizar Talento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <img src="/human-resources-team-management-leadership-develop.jpg" alt="Gestión de Personas" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Áreas de Especialización</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bienestar Laboral</h3>
                <p className="text-gray-600">Programas de bienestar que mejoran la calidad de vida laboral.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Desarrollo Profesional</h3>
                <p className="text-gray-600">Planes de carrera y formación continua para el crecimiento.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultura Organizacional</h3>
                <p className="text-gray-600">Fortalecimiento de valores y cultura empresarial.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Evaluación de Desempeño</h3>
                <p className="text-gray-600">Sistemas objetivos de medición y mejora del rendimiento.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-600 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Invierte en tu activo más valioso</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Desarrolla el potencial de tu equipo con nuestros expertos en gestión de personas
            </p>
            <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg">Contactar Ahora</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
