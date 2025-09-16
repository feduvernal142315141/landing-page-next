import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, BarChart3, Eye, Share2 } from "lucide-react"
import Image from "next/image"

export default function PowerBIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Power BI</h1>
              <p className="text-xl text-gray-600 mb-8">
                Transforma tus datos en insights visuales poderosos con la plataforma de business intelligence líder de
                Microsoft.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
                  Ver Dashboards
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-3 bg-transparent"
                >
                  Prueba Gratuita
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/power-bi-business-intelligence-data-visualizati.jpg"
                alt="Power BI Dashboard"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Capacidades de Power BI</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Desde conexión de datos hasta visualizaciones interactivas, Power BI democratiza el acceso a insights
              empresariales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visualizaciones Avanzadas</h3>
              <p className="text-gray-600 mb-4">
                Crea dashboards interactivos con gráficos dinámicos y visualizaciones personalizadas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Gráficos interactivos
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Mapas geográficos
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  KPIs en tiempo real
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Análisis Self-Service</h3>
              <p className="text-gray-600 mb-4">
                Permite a usuarios de negocio crear sus propios reportes sin dependencia de IT.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Interfaz drag & drop
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Filtros dinámicos
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Drill-down automático
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Colaboración Empresarial</h3>
              <p className="text-gray-600 mb-4">
                Comparte insights y colabora en tiempo real con equipos distribuidos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Espacios de trabajo
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Alertas automáticas
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Acceso móvil
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Datos que impulsan decisiones</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Implementamos Power BI con conexión a tus fuentes de datos, diseño de dashboards personalizados y
            capacitación de usuarios.
          </p>
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
            Implementar Power BI
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
