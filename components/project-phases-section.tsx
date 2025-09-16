import { BarChart3, Palette, Search, TrendingUp, Smartphone, Shield, Settings } from "lucide-react"

export function ProjectPhasesSection() {
  const phases = [
    {
      icon: BarChart3,
      title: "ANÁLISIS",
      description: "Recopilación de requisitos y definición de objetivos del proyecto.",
    },
    {
      icon: Palette,
      title: "DISEÑO WEB / EXPERIENCIA DE USUARIO",
      description:
        "Creatividad y diseño de productos digitales. Diseño intuitivo y navegación clara para una experiencia de usuario positiva.",
    },
    {
      icon: Search,
      title: "OPTIMIZACIÓN EN BUSCADORES / SEO",
      description:
        "Estudiamos tus palabras clave y construimos sobre ellas. Desde la planificación de la estrategia hasta su implementación y medición de resultados.",
    },
    {
      icon: TrendingUp,
      title: "DIGITAL ANALYTICS",
      description: "Implementación de GA4 Analytics con los principales datos de navegación de tu web.",
    },
    {
      icon: Smartphone,
      title: "DISEÑO WEB RESPONSIVO",
      description:
        "Un sitio web responsivo se adapta de manera óptima a diferentes dispositivos lo que permite una experiencia de usuario consistente y accesible.",
    },
    {
      icon: Shield,
      title: "SEGURIDAD WEB",
      description:
        "Implementación de medidas para proteger los datos e información sensible de los usuarios y la empresa.",
    },
    {
      icon: Settings,
      title: "ACTUALIZACIÓN Y MANTENIMIENTO",
      description:
        "Corrección de errores, aplicación de parches de seguridad, actualización de contenido y optimización de rendimiento.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-500">FASES DEL PROYECTO WEB</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <IconComponent className="w-10 h-10 text-cyan-500" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
