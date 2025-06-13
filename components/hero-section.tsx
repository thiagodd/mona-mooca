"use client"

import {useState, useEffect} from "react"
import {ChevronDown} from "lucide-react"
import {Button} from "@/components/ui/button"

const heroImages = [
    "/images/banner/banner-0.jpeg",
    "/images/banner/banner-1.jpeg",
    "/images/banner/banner-2.jpeg",
    "/images/banner/banner-4.jpeg",
]

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const scrollToNextSection = () => {
        const aboutSection = document.getElementById("about")
        if (aboutSection) {
            aboutSection.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div
                            className="h-full w-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        />
                        <div className="absolute inset-0 bg-black/50"/>
                    </div>
                ))}
            </div>

            {/* Hero Content */}
            <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
                <div className="container mx-auto px-4">
                    <h1 className="mb-6 text-5xl md:text-7xl font-bold text-white leading-tight">
                        Moná Mooca
                        <span className="block text-red-500">Luxo e Exclusividade</span>
                    </h1>
                    <p className="mb-8 text-xl text-white/90 max-w-3xl mx-auto">
                        Um projeto monumental em um terreno de mais de 7 mil m² que une design contemporâneo, bem-estar
                        e lazer
                        surpreendente no coração da Mooca.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-red-600 hover:bg-red-700 text-white text-lg py-6 px-8">Agende uma
                            Visita</Button>
                        <Button variant="outline"
                                className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                            Baixar E-book
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
                <button
                    onClick={scrollToNextSection}
                    className="flex flex-col items-center text-white hover:text-red-500 transition-colors"
                >
                    <span className="mb-2 text-sm">Saiba mais</span>
                    <ChevronDown className="animate-bounce" size={24}/>
                </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 right-8 z-10 flex space-x-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-8 rounded-full transition-colors ${
                            index === currentSlide ? "bg-red-600" : "bg-white/50"
                        }`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
