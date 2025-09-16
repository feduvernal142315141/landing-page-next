import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Calculator, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"

export default function SageERPPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Sage ERP</h1>
              <p className="text-xl text-gray-600 mb-8">
                Sistema de planificación de recursos empresariales diseñado para pequeñas y medianas empresas que buscan
                eficiencia y crecimiento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
                  Prueba Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-3 bg-transparent"
                >
                  Ver Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/sage-erp-financial-management-accounting-softwar.jpg"
                alt="Sage ERP Interface"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Funcionalidades Clave de Sage ERP</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Solución integral que abarca desde contabilidad hasta gestión de inventarios, diseñada específicamente
              para PyMEs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contabilidad Avanzada</h3>
              <p className="text-gray-600 mb-4">
                Gestión financiera completa con reportes automáticos y cumplimiento fiscal.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Facturación electrónica
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Conciliación bancaria
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Reportes fiscales
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestión Comercial</h3>
              <p className="text-gray-600 mb-4">
                Control total de ventas, compras y relaciones con clientes y proveedores.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  CRM integrado
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Gestión de inventarios
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Análisis de ventas
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seguridad y Compliance</h3>
              <p className="text-gray-600 mb-4">
                Máxima seguridad de datos y cumplimiento de normativas locales e internacionales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Backup automático
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Auditoría completa
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cumplimiento GDPR
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Optimiza tu gestión empresarial</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Implementamos Sage ERP con configuración personalizada, migración de datos y capacitación completa para tu
            equipo.
          </p>
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
            Solicitar Consultoría
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
