import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wifi, Smartphone, Monitor, Settings } from "lucide-react"

export default function SmartWorkplacePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Smart Workplace</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Crea espacios de trabajo inteligentes que se adapten a las necesidades modernas. Tecnología IoT,
                  automatización y experiencias digitales integradas.
                </p>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg">
                  Crear Smart Workplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/smart-office-iot-workplace-technology-automation.jpg"
                  alt="Smart Workplace"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Componentes del Smart Workplace</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Conectividad IoT</h3>
                <p className="text-gray-600">Sensores inteligentes y conectividad omnipresente.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Apps Móviles</h3>
                <p className="text-gray-600">Control y gestión desde dispositivos móviles.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pantallas Interactivas</h3>
                <p className="text-gray-600">Displays inteligentes para colaboración y información.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatización</h3>
                <p className="text-gray-600">Sistemas automatizados de climatización, iluminación y seguridad.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-600 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">El futuro del trabajo es inteligente</h2>
            <p className="text-xl text-cyan-100 mb-8">Diseña tu espacio de trabajo del futuro con nuestros expertos</p>
            <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg">Contactar Ahora</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
