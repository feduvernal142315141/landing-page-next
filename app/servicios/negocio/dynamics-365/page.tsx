import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Users, BarChart3, Zap } from "lucide-react"
import Image from "next/image"

export default function Dynamics365Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Dynamics 365</h1>
              <p className="text-xl text-gray-600 mb-8">
                Plataforma empresarial integral que conecta CRM y ERP para optimizar todos los procesos de negocio en
                una sola solución inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
                  Solicitar Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-3 bg-transparent"
                >
                  Más Información
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/dynamics-365-business-management-dashboard-analy.jpg"
                alt="Dynamics 365 Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Capacidades de Dynamics 365</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Una plataforma completa que integra ventas, marketing, servicio al cliente y operaciones para impulsar el
              crecimiento de tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CRM Avanzado</h3>
              <p className="text-gray-600 mb-4">
                Gestión completa de relaciones con clientes, desde leads hasta ventas cerradas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Automatización de ventas
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Seguimiento de oportunidades
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Análisis predictivo
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ERP Integrado</h3>
              <p className="text-gray-600 mb-4">Planificación de recursos empresariales para optimizar operaciones.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Gestión financiera
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Control de inventario
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cadena de suministro
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">IA Integrada</h3>
              <p className="text-gray-600 mb-4">
                Inteligencia artificial para insights automáticos y decisiones inteligentes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Análisis predictivo
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Recomendaciones automáticas
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Chatbots inteligentes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Implementamos Dynamics 365 adaptado a tus necesidades específicas con soporte completo y capacitación para
            tu equipo.
          </p>
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
            Contactar Especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
