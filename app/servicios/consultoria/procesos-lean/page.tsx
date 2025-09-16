import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, TrendingUp, Users, CheckCircle } from "lucide-react"

export default function ProcesosLeanPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Procesos LEAN</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Optimiza tus procesos empresariales eliminando desperdicios y maximizando el valor para tus clientes
                  con metodologías LEAN probadas.
                </p>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg">
                  Solicitar Consultoría
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <img src="/lean-manufacturing-process-optimization-diagram.jpg" alt="Procesos LEAN" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Beneficios de los Procesos LEAN</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reducción de Desperdicios</h3>
                <p className="text-gray-600">Elimina actividades que no agregan valor al proceso productivo.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mayor Eficiencia</h3>
                <p className="text-gray-600">Optimiza recursos y mejora la productividad general.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mejora Continua</h3>
                <p className="text-gray-600">Cultura de mejora constante en todos los niveles organizacionales.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calidad Superior</h3>
                <p className="text-gray-600">Procesos más estables que garantizan mayor calidad del producto.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestro Proceso de Implementación</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-cyan-600 mb-4">01</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Análisis Inicial</h3>
                <p className="text-gray-600">
                  Evaluamos tus procesos actuales e identificamos oportunidades de mejora.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-cyan-600 mb-4">02</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Diseño de Solución</h3>
                <p className="text-gray-600">Desarrollamos un plan personalizado de implementación LEAN.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-cyan-600 mb-4">03</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementación y Seguimiento</h3>
                <p className="text-gray-600">Ejecutamos el plan y monitoreamos los resultados continuamente.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-600 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">¿Listo para optimizar tus procesos?</h2>
            <p className="text-xl text-cyan-100 mb-8">Contacta con nuestros expertos en metodologías LEAN</p>
            <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg">Contactar Ahora</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
