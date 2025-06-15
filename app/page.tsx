import type {Metadata} from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import AmenitiesSection from "@/components/amenities-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FloatingCTA from "@/components/floating-cta"
import NavigationBar from "@/components/navigation-bar"
import NeighborhoodSection from "@/components/neighborhood-section";

export const metadata: Metadata = {
    title: "Monã Mooca | Empreendimento de Luxo em São Paulo",
    description:
        "Conheça o Monã Mooca, um projeto monumental com mais de 7 mil m² que une design contemporâneo, bem-estar e lazer surpreendente no coração da Mooca.",
}

export default function Home() {
    return (
        <main className="relative">
            <NavigationBar/>
            <HeroSection/>
            <AboutSection/>
            <FeaturesSection/>
            <AmenitiesSection/>
            <GallerySection/>
            <NeighborhoodSection/>
            <TestimonialsSection/>
            <FAQSection/>
            <CTASection/>
            <Footer/>
            <FloatingCTA/>
        </main>
    )
}
