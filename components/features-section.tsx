import Link from "next/link";

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-8">EXPERTOS EN DESARROLLO WEB A MEDIDA</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              ¿Tu sitio web refleja realmente lo que tu negocio necesita? En KodeWave creamos soluciones web modernas y
              personalizadas que se adaptan a tus objetivos. Usamos tecnologías como <strong>React.js</strong>,{" "}
              <strong>Next.js</strong>, <strong>Astro</strong> y muchas más para ofrecer experiencias rápidas,
              escalables y fáciles de mantener.
            </p>
            <Link href="/contacto">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full transition-colors cursor-pointer">
                Contacta con nosotros
              </button>
            </Link>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-16">¿QUÉ TIPO DE DESARROLLO WEB NECESITAS?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl overflow-hidden">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10">
                <img src="/react-icon.png" alt="React" className="w-10 h-10" />
              </div>
              <img
                src="/woman-developer-coding-laptop-modern-office.jpg"
                alt="Desarrolladora profesional con laptop"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">APLICACIONES MODERNAS CON REACT</h3>
            <p className="text-lg font-semibold text-gray-700">Interactividad, rendimiento y ecosistema sólido</p>
            <p className="text-gray-600 leading-relaxed">
              React.js es ideal para construir interfaces dinámicas y altamente reactivas. Es mantenido por Meta y tiene
              una gran comunidad que asegura su evolución constante.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Componentes reutilizables y mantenimiento eficiente
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Compatible con una gran variedad de librerías y frameworks
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Ideal para aplicaciones SPA y proyectos escalables
              </li>
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              QUIERO UNA APP MODERNA CON REACT
            </button>
          </div>
        </div>

        {/* Next.js section stays as is - image right, content left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative lg:order-1">
            <div className="relative bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl overflow-hidden">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10">
                <img src="/nextjs-icon.png" alt="Next.js" className="w-12 h-8" />
              </div>
              <img
                src="/young-man-programmer-working-laptop-creative-space.jpg"
                alt="Programador joven con laptop"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6 lg:order-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">SITIOS RÁPIDOS Y ESCALABLES CON NEXT JS</h3>
            <p className="text-lg font-semibold text-gray-700">SSR, SSG y rendimiento óptimo para producción</p>
            <p className="text-gray-600 leading-relaxed">
              Next.js es el framework más potente para React. Permite crear sitios con renderizado del lado del
              servidor, rutas automáticas y carga ultrarrápida.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                SEO mejorado con SSR y generación estática
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Rendimiento de primera clase desde el primer clic
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Excelente integración con Vercel y edge functions
              </li>
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              QUIERO UN SITIO ESCALABLE CON NEXTJS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl overflow-hidden">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10">
                <img src="/tailwind-icon.png" alt="Tailwind CSS" className="w-10 h-10" />
              </div>
              <img
                src="/female-software-engineer-laptop-tech-startup.jpg"
                alt="Ingeniera de software con laptop"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              DISEÑOS LIMPIOS Y FLEXIBLES CON TAILWIND CSS
            </h3>
            <p className="text-lg font-semibold text-gray-700">Diseña directamente desde el HTML con control total</p>
            <p className="text-gray-600 leading-relaxed">
              Tailwind CSS es el framework de utilidad que permite construir interfaces modernas, responsivas y
              totalmente personalizadas, sin necesidad de salir del HTML.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Totalmente personalizable y sin sobrescrituras
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Responsive y con utilidades listas para producción
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Ideal para prototipos rápidos y diseños profesionales
              </li>
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              QUIERO DISEÑAR CON TAILWIND CSS
            </button>
          </div>
        </div>

        {/* Astro section stays as is - image left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative lg:order-1">
            <div className="relative bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl overflow-hidden">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10">
                <img src="/astro-icon.png" alt="Astro" className="w-10 h-10" />
              </div>
              <img
                src="/diverse-developer-coding-laptop-coworking-space.jpg"
                alt="Desarrollador diverso con laptop"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6 lg:order-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">LANDING PAGES ULTRARRÁPIDAS CON ASTRO</h3>
            <p className="text-lg font-semibold text-gray-700">Contenido estático optimizado y cero JS por defecto</p>
            <p className="text-gray-600 leading-relaxed">
              Astro está diseñado para generar sitios web rápidos, ligeros y fácilmente mantenibles. Ideal para blogs,
              landing pages y marketing digital.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Cero JavaScript en el cliente por defecto
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Uso de componentes de React, Vue y más
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Velocidad extrema y arquitectura moderna
              </li>
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              QUIERO UNA LANDING RÁPIDA CON ASTRO
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
