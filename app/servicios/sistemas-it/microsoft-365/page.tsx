import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Calendar, FileText, Users } from "lucide-react"

export default function Microsoft365Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Microsoft 365</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Transforma la productividad de tu empresa con la suite completa de Microsoft 365. Colaboración,
                  comunicación y gestión documental en la nube.
                </p>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg">
                  Implementar Microsoft 365
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/microsoft-365-office-suite-cloud-productivity-too.jpg"
                  alt="Microsoft 365"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Aplicaciones Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Outlook</h3>
                <p className="text-gray-600">Gestión avanzada de correo electrónico y comunicaciones.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Teams</h3>
                <p className="text-gray-600">Colaboración y videoconferencias empresariales.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Apps</h3>
                <p className="text-gray-600">Word, Excel, PowerPoint y más aplicaciones de productividad.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SharePoint</h3>
                <p className="text-gray-600">Gestión documental y colaboración en equipo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-600 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Moderniza tu entorno de trabajo</h2>
            <p className="text-xl text-cyan-100 mb-8">Implementa Microsoft 365 con nuestros expertos certificados</p>
            <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg">Contactar Ahora</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
