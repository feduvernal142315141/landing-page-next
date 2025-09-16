import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Zap, BarChart, Workflow } from "lucide-react"
import Image from "next/image"

export default function PowerPlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Desarrollo Software
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Power Platform
                <span className="block text-purple-600">Desarrollo Low-Code</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Creamos aplicaciones empresariales potentes con Microsoft Power Platform, automatizando procesos y
                democratizando el desarrollo de soluciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Explorar Soluciones
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Ver Demos
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/power-platform-low-code-business-applications.jpg"
                alt="Power Platform Low-Code Business Applications"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Componentes de Power Platform</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Aprovechamos todos los componentes de Power Platform para crear soluciones integrales y escalables.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Power Apps</h3>
              <p className="text-gray-600">
                Aplicaciones empresariales personalizadas sin necesidad de código tradicional, con interfaces
                intuitivas.
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Power Automate</h3>
              <p className="text-gray-600">
                Automatización de flujos de trabajo entre aplicaciones y servicios para optimizar procesos
                empresariales.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Power BI</h3>
              <p className="text-gray-600">
                Dashboards interactivos y análisis de datos en tiempo real para toma de decisiones informadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Casos de Uso</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Aplicaciones de Gestión",
              "Portales de Autoservicio",
              "Automatización de Procesos",
              "Dashboards Ejecutivos",
              "Formularios Inteligentes",
              "Integraciones de Sistemas",
            ].map((useCase, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Transformar sus Procesos?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Desarrolle aplicaciones empresariales rápidamente con Power Platform y acelere la digitalización de su
            organización.
          </p>
          <Button size="lg" variant="secondary">
            Comenzar Proyecto
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
