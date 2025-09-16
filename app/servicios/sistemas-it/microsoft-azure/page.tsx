import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cloud, Shield, Zap, Database } from "lucide-react"

export default function MicrosoftAzurePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-50 to-blue-100 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Microsoft Azure</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Migra tu infraestructura a la nube con Microsoft Azure. Escalabilidad, seguridad y rendimiento
                  empresarial para tu negocio.
                </p>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg">
                  Migrar a Azure
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/microsoft-azure-cloud-computing-infrastructure-se.jpg"
                  alt="Microsoft Azure"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Servicios Azure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compute</h3>
                <p className="text-gray-600">Máquinas virtuales y servicios de computación escalables.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">Seguridad avanzada y cumplimiento normativo.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & ML</h3>
                <p className="text-gray-600">Inteligencia artificial y machine learning integrados.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Databases</h3>
                <p className="text-gray-600">Bases de datos gestionadas y de alto rendimiento.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-600 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Acelera tu transformación digital</h2>
            <p className="text-xl text-cyan-100 mb-8">Migra a Azure con nuestros arquitectos cloud certificados</p>
            <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg">Contactar Ahora</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
