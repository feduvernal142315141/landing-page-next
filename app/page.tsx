import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { ServicesSection } from "@/components/services-section"
import { CasosSection } from "@/components/casos-section"
import { DemosSection } from "@/components/demos-section"
import { FeaturesSection } from "@/components/features-section"
import { ProjectPhasesSection } from "@/components/project-phases-section"
import { RecursosSection } from "@/components/recursos-section"
import { SobreNosotrosSection } from "@/components/sobre-nosotros-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhatsAppCTASection } from "@/components/whatsapp-cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <CasosSection />
        <DemosSection />
        <FeaturesSection />
        <ProjectPhasesSection />
        <RecursosSection />
        <SobreNosotrosSection />
        <TestimonialsSection />
        <WhatsAppCTASection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  )
}
