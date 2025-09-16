import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Hablemos de tu futura web
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              ¿Tienes un proyecto en mente? Nos encantaría conocer tus ideas y ayudarte a convertirlas en realidad
              digital.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground">Envíanos un mensaje</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium text-card-foreground">
                        Nombre *
                      </label>
                      <Input
                        id="nombre"
                        placeholder="Tu nombre"
                        className="bg-input border-border focus:ring-ring"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="empresa" className="text-sm font-medium text-card-foreground">
                        Empresa
                      </label>
                      <Input
                        id="empresa"
                        placeholder="Nombre de tu empresa"
                        className="bg-input border-border focus:ring-ring"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-input border-border focus:ring-ring"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium text-card-foreground">
                      Teléfono
                    </label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="+34 600 000 000"
                      className="bg-input border-border focus:ring-ring"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="asunto" className="text-sm font-medium text-card-foreground">
                      Asunto *
                    </label>
                    <Input
                      id="asunto"
                      placeholder="¿En qué podemos ayudarte?"
                      className="bg-input border-border focus:ring-ring"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-medium text-card-foreground">
                      Mensaje *
                    </label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos más detalles sobre tu proyecto..."
                      rows={5}
                      className="bg-input border-border focus:ring-ring resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold py-3 text-lg"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Información de contacto</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Estamos aquí para ayudarte. Contáctanos a través de cualquiera de estos medios.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Emails</h3>
                      <p className="text-muted-foreground">feduvernal@kodewave-solutions.com</p>
                      <p className="text-muted-foreground">jorge.mancha@kodewave-solutions.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Teléfonos</h3>
                      <p className="text-muted-foreground">+505 8285 1270</p>
                      <p className="text-muted-foreground">+505 7862 7699</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Ubicación</h3>
                      <p className="text-muted-foreground">Managua, Nicaragua</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Horario</h3>
                      <p className="text-muted-foreground">Lun - Vie: 9:00 - 18:00</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Section */}
              <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas una respuesta rápida?</h3>
                  <p className="mb-6 opacity-90">Para consultas urgentes, no dudes en llamarnos directamente.</p>
                  <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                    Llamar Ahora
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
