"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

// Ícones para os lazeres
import {
  Utensils,
  GlassWater,
  Gamepad2,
  Waves,
  Sun,
  BarChartIcon as BarIcon,
  GiftIcon as Massage,
  Dumbbell,
  Sparkles,
  TurtleIcon as Tennis,
  ShoppingBasketIcon as Basketball,
  Bike,
  Footprints,
  Users,
  Coffee,
  Tv,
  Music,
  Flame,
} from "lucide-react"

interface AmenityProps {
  icon: React.ReactNode
  title: string
}

const amenities: AmenityProps[] = [
  {
    icon: <Utensils className="h-6 w-6 text-red-600" />,
    title: "Churrasqueira com forno para pizza",
  },
  {
    icon: <GlassWater className="h-6 w-6 text-red-600" />,
    title: "Salão de festas",
  },
  {
    icon: <Gamepad2 className="h-6 w-6 text-red-600" />,
    title: "Brinquedoteca",
  },
  {
    icon: <Waves className="h-6 w-6 text-red-600" />,
    title: "Piscina adulto e infantil com raia de 25m",
  },
  {
    icon: <Sun className="h-6 w-6 text-red-600" />,
    title: "Solarium",
  },
  {
    icon: <BarIcon className="h-6 w-6 text-red-600" />,
    title: "Bar piscina",
  },
  {
    icon: <Massage className="h-6 w-6 text-red-600" />,
    title: "Sala de Massagem",
  },
  {
    icon: <Dumbbell className="h-6 w-6 text-red-600" />,
    title: "Espaço funcional",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-red-600" />,
    title: "Beauty Care",
  },
  // Segunda página de amenidades
  {
    icon: <Tennis className="h-6 w-6 text-red-600" />,
    title: "Quadra de tênis oficial",
  },
  {
    icon: <Basketball className="h-6 w-6 text-red-600" />,
    title: "Quadra poliesportiva",
  },
  {
    icon: <Bike className="h-6 w-6 text-red-600" />,
    title: "Bicicletário",
  },
  {
    icon: <Footprints className="h-6 w-6 text-red-600" />,
    title: "Pista de caminhada",
  },
  {
    icon: <Users className="h-6 w-6 text-red-600" />,
    title: "Espaço coworking",
  },
  {
    icon: <Coffee className="h-6 w-6 text-red-600" />,
    title: "Café lounge",
  },
  {
    icon: <Tv className="h-6 w-6 text-red-600" />,
    title: "Cinema",
  },
  {
    icon: <Music className="h-6 w-6 text-red-600" />,
    title: "Sala de música",
  },
  {
    icon: <Flame className="h-6 w-6 text-red-600" />,
    title: "Sauna",
  },
]

const images = [
  {
    src: "/images/amenities/image-1.jpg",
    alt: "Quadra de tênis Oficial - torre 1 e 2 (Perspectiva artística)",
    caption: "Quadra de tênis Oficial - torre 1 e 2 (Perspectiva artística)",
  },
  {
    src: "/images/amenities/image-2.jpg",
    alt: "Quadra de tênis Oficial - torre 1 e 2 (Perspectiva artística)",
    caption: "Quadra de tênis Oficial - torre 1 e 2 (Perspectiva artística)",
  },
  {
    src: "/images/amenities/image-3.jpg",
    alt: "Quadra de tênis Oficial - torre 1 e 2 (Perspectiva artística)",
    caption: "Quadra de tênis Oficial - torre 1 e 2 (Perspectiva artística)",
  },
  {
    src: "/images/amenities/image-4.jpg",
    alt: "Quadra de tênis Oficial - torre 1 e 2 (Perspectiva artística)",
    caption: "Quadra de tênis Oficial - torre 1 e 2 (Perspectiva artística)",
  }
]

export default function AmenitiesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentAmenitiesPage, setCurrentAmenitiesPage] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextAmenitiesPage = () => {
    setCurrentAmenitiesPage(1)
  }

  const prevAmenitiesPage = () => {
    setCurrentAmenitiesPage(0)
  }

  // Dividir as amenidades em páginas de 9
  const currentAmenities = amenities.slice(currentAmenitiesPage * 9, (currentAmenitiesPage + 1) * 9)

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Lazer Completo</h2>
          <h3 className="text-4xl font-bold mb-4">Viva com Conforto e Estilo</h3>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Coluna da esquerda - image */}
          <div className="relative overflow-hidden rounded-lg h-[500px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative h-full w-full">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white">
                    <p>{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Controles do slider */}
            <div className="absolute bottom-16 right-4 flex space-x-2">
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-red-600"
                aria-label="image anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-red-600"
                aria-label="Próxima image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-red-600" : "bg-white/50"}`}
                  aria-label={`Ir para image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Coluna da direita - Informações */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-bold">Saiba mais:</h4>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 text-red-600 border-red-600 hover:bg-red-50"
                >
                  <Download size={16} />
                  <span>Faça o download do E-book</span>
                </Button>
              </div>

              <p className="text-gray-700 mb-4">
                A Diálogo Engenharia traz um projeto monumental em um terreno enorme com mais de 7 mil m². O{" "}
                <span className="font-bold">Monã Mooca</span> une design contemporâneo, bem-estar e um lazer
                surpreendente. Aqui, a exclusividade encontra a tradição em um endereço único, com espaços generosos e
                uma arquitetura que eleva a sua experiência de morar.
              </p>

              <p className="text-gray-700 mb-8">Mais que um novo empreendimento, um novo marco no bairro.</p>

              <h4 className="text-2xl font-bold mb-6">Lazer completo:</h4>

              {/* Grid de amenidades com paginação */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-6">
                  {currentAmenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">{amenity.icon}</div>
                      <span className="text-sm">{amenity.title}</span>
                    </div>
                  ))}
                </div>

                {/* Controles de paginação para amenidades */}
                <div className="mt-8 flex justify-center space-x-4">
                  <button
                    onClick={prevAmenitiesPage}
                    disabled={currentAmenitiesPage === 0}
                    className={`h-2 w-2 rounded-full ${currentAmenitiesPage === 0 ? "bg-red-600" : "bg-gray-300"}`}
                    aria-label="Página anterior de amenidades"
                  />
                  <button
                    onClick={nextAmenitiesPage}
                    disabled={currentAmenitiesPage === 1}
                    className={`h-2 w-2 rounded-full ${currentAmenitiesPage === 1 ? "bg-red-600" : "bg-gray-300"}`}
                    aria-label="Próxima página de amenidades"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
