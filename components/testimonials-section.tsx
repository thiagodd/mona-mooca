"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Carlos Oliveira",
    role: "Empresário",
    content:
      "Investir no Monã Mooca foi uma das melhores decisões que tomei. A qualidade da construção, a localização privilegiada e as áreas de lazer superaram todas as minhas expectativas. Recomendo a todos que buscam exclusividade e conforto.",
    avatar: "/placeholder.svg?height=100&width=100&text=CO",
    rating: 5,
  },
  {
    id: 2,
    name: "Ana Paula Silva",
    role: "Arquiteta",
    content:
      "Como profissional da área, posso afirmar que o Monã Mooca é um projeto excepcional. Os detalhes arquitetônicos, a distribuição dos espaços e o acabamento premium demonstram o compromisso com a excelência. Um verdadeiro marco na região.",
    avatar: "/placeholder.svg?height=100&width=100&text=AS",
    rating: 5,
  },
  {
    id: 3,
    name: "Roberto Mendes",
    role: "Médico",
    content:
      "Minha família e eu estamos encantados com nosso apartamento no Monã Mooca. A segurança, o conforto e a praticidade de ter tantas opções de lazer no próprio condomínio transformaram nossa qualidade de vida. Valeu cada centavo investido.",
    avatar: "/placeholder.svg?height=100&width=100&text=RM",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-wider mb-2">Depoimentos</h2>
          <h3 className="text-4xl font-bold mb-4">O que dizem nossos clientes</h3>
          <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden relative">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-red-600 rounded-full p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                        <path d="M10 2c1 .5 2 2 2 5" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  <blockquote className="text-xl italic mb-6">"{testimonial.content}"</blockquote>

                  <div>
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute top-1/2 -left-12 transform -translate-y-1/2">
              <button
                onClick={prevTestimonial}
                className="bg-white/10 hover:bg-red-600 text-white rounded-full p-3 transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2">
              <button
                onClick={nextTestimonial}
                className="bg-white/10 hover:bg-red-600 text-white rounded-full p-3 transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-8 rounded-full transition-colors ${
                  index === currentIndex ? "bg-red-600" : "bg-white/30"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
