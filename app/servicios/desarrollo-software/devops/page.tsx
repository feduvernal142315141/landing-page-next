import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Zap, Shield, Cog } from "lucide-react"
import Image from "next/image"

export default function DevOpsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Desarrollo Software
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                DevOps
                <span className="block text-blue-600">Automatización y Eficiencia</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Implementamos prácticas DevOps que aceleran el desarrollo, mejoran la calidad del software y optimizan
                la colaboración entre equipos de desarrollo y operaciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Solicitar Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Ver Casos de Éxito
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/devops-automation-continuous-integration-deploy.jpg"
                alt="DevOps Automation and CI/CD Pipeline"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Beneficios de DevOps</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transformamos su proceso de desarrollo con metodologías DevOps que garantizan entregas más rápidas y
              confiables.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Despliegue Continuo</h3>
              <p className="text-gray-600">
                Automatización completa del pipeline de desarrollo para entregas más frecuentes y confiables.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mayor Seguridad</h3>
              <p className="text-gray-600">
                Integración de seguridad en cada etapa del desarrollo con prácticas DevSecOps.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoreo Avanzado</h3>
              <p className="text-gray-600">
                Observabilidad completa de aplicaciones con métricas, logs y trazabilidad en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios DevOps</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "CI/CD Pipeline Implementation",
              "Infrastructure as Code",
              "Container Orchestration",
              "Cloud Migration",
              "Monitoring & Observability",
              "Security Integration",
            ].map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Acelerar su Desarrollo?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Implemente DevOps en su organización y experimente entregas más rápidas, mayor calidad y mejor colaboración.
          </p>
          <Button size="lg" variant="secondary">
            Contactar Especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
