import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Users, FileText, Settings } from "lucide-react"
import Image from "next/image"

export default function SharePointPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Desarrollo Software
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                SharePoint
                <span className="block text-green-600">Colaboración Empresarial</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Desarrollamos soluciones SharePoint personalizadas que mejoran la colaboración, gestión documental y
                productividad de su organización.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Solicitar Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Ver Funcionalidades
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/sharepoint-collaboration-document-management-tea.jpg"
                alt="SharePoint Collaboration and Document Management"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Capacidades de SharePoint</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Aprovechamos todo el potencial de SharePoint para crear soluciones que transforman la forma de trabajar de
              su equipo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sitios de Equipo</h3>
              <p className="text-gray-600">
                Espacios colaborativos personalizados para cada equipo con herramientas específicas para sus
                necesidades.
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestión Documental</h3>
              <p className="text-gray-600">
                Control de versiones, metadatos, flujos de aprobación y búsqueda avanzada de documentos.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatización</h3>
              <p className="text-gray-600">
                Flujos de trabajo automatizados con Power Automate para optimizar procesos empresariales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Soluciones SharePoint</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Intranets Corporativas",
              "Portales de Colaboración",
              "Bibliotecas Documentales",
              "Sitios de Proyecto",
              "Aplicaciones Personalizadas",
              "Integración con Office 365",
            ].map((solution, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Necesita una Solución SharePoint?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Desarrollamos soluciones SharePoint que se adaptan perfectamente a sus procesos de negocio y mejoran la
            productividad.
          </p>
          <Button size="lg" variant="secondary">
            Solicitar Propuesta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
