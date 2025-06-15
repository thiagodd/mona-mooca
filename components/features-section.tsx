"use client"

import type React from "react"
import { Tab } from "@headlessui/react"
import { MapPin, Home, Shield, Leaf } from "lucide-react"
import Image from "next/image"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

interface Feature {
  name: string
  description: string
  icon: React.ReactNode
  image: string
}

const features: Feature[] = [
  {
    name: "Localização Estratégica",
    description:
      "Situado no coração da Mooca, um dos bairros mais tradicionais de São Paulo, o Monã Mooca oferece fácil acesso às principais vias da cidade, comércio local, restaurantes renomados e áreas de lazer.",
    icon: <MapPin className="h-6 w-6" />,
    image: "/images/about/premium-location.png",
  },
  {
    name: "Arquitetura Premium",
    description:
      "Projetado por renomados arquitetos, o Monã Mooca apresenta uma fachada imponente e contemporânea, com materiais de alta qualidade e acabamento impecável, refletindo sofisticação em cada detalhe.",
    icon: <Home className="h-6 w-6" />,
    image: "/images/about/arquitetura.png",
  },
  {
    name: "Segurança Completa",
    description:
      "Sistema de segurança de última geração, com monitoramento 24 horas, controle de acesso biométrico, câmeras de vigilância em pontos estratégicos e equipe de segurança altamente treinada.",
    icon: <Shield className="h-6 w-6" />,
    image: "/placeholder.svg?height=400&width=600&text=Segurança+Monã+Mooca",
  },
  {
    name: "Sustentabilidade",
    description:
      "Comprometido com o meio ambiente, o Monã Mooca conta com sistema de captação de água da chuva, painéis solares, iluminação LED em áreas comuns e coleta seletiva de resíduos.",
    icon: <Leaf className="h-6 w-6" />,
    image: "/placeholder.svg?height=400&width=600&text=Sustentabilidade+Monã+Mooca",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold  text-yellow-600 uppercase tracking-wider mb-2">Diferenciais</h2>
          <h3 className="text-4xl font-bold mb-4">Por que escolher o Monã Mooca</h3>
          <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
        </div>

        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-gray-200 p-1 max-w-2xl mx-auto mb-12">
            {features.map((feature) => (
              <Tab
                key={feature.name}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-3 text-sm font-medium leading-5",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow text-red-600"
                      : "text-gray-700 hover:bg-white/[0.12] hover:text-red-600",
                  )
                }
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="hidden md:inline">{feature.icon}</span>
                  <span>{feature.name}</span>
                </div>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {features.map((feature, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",
                )}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h4 className="text-2xl font-bold mb-4">{feature.name}</h4>
                    <p className="text-gray-700 mb-6">{feature.description}</p>
                  </div>
                  <div className="order-1 md:order-2">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.name}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}
