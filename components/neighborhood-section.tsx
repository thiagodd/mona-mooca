"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, ShoppingBag, Utensils, Train, Trees, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface NeighborhoodFeature {
  icon: React.ReactNode
  title: string
  description: string
}

const neighborhoodFeatures: NeighborhoodFeature[] = [
  {
    icon: <ShoppingBag className="h-6 w-6 text-red-600" />,
    title: "Compras",
    description: "Mooca Plaza Shopping a poucos minutos, oferecendo as melhores marcas e opções de lazer.",
  },
  {
    icon: <Utensils className="h-6 w-6 text-red-600" />,
    title: "Gastronomia",
    description: "Diversos restaurantes tradicionais com gastronomia italiana e uma grande diversidade culinária.",
  },
  {
    icon: <Train className="h-6 w-6 text-red-600" />,
    title: "Metrô",
    description: "Fácil acesso ao transporte público, com estações de metrô próximas ao empreendimento.",
  },
  {
    icon: <Trees className="h-6 w-6 text-red-600" />,
    title: "Parques",
    description: "Áreas verdes como o Parque da Mooca para momentos de lazer e contato com a natureza.",
  },
  {
    icon: <Car className="h-6 w-6 text-red-600" />,
    title: "Mobilidade",
    description: "Acesso rápido às principais vias da cidade, facilitando o deslocamento para qualquer região.",
  },
  {
    icon: <MapPin className="h-6 w-6 text-red-600" />,
    title: "Localização Estratégica",
    description: "No coração da cidade, próximo a hospitais como Villa Lobos e Sancta Maggiore.",
  },
]

export default function NeighborhoodSection() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <section id="neighborhood" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Localização</h2>
          <h3 className="text-4xl font-bold mb-4">Localizado no bairro da Mooca</h3>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h4 className="text-2xl font-bold mb-6">O bairro</h4>
            <p className="text-gray-700 mb-6">
              Viver na Mooca é estar no coração da cidade, cercado por tudo o que faz do bairro um dos mais desejados de
              São Paulo. Com lazer e facilidades próximos como o Mooca Plaza Shopping, os hospitais Villa Lobos (Rede
              D'Or) e Sancta Maggiore, do Parque Sabesp Mooca, tradicional Clube Atlético Juventus, e gastronomia com
              tradição e uma grande diversidade.
            </p>
            <p className="text-gray-700 mb-8">
              A Mooca é um dos bairros mais ricos no quesito culinário com diversos restaurantes. Uma localização
              completa, que une mobilidade, conveniência, tradição e o estilo único.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white">Ver no Google Maps</Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Como chegar
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.589594962313!2d-46.60499337068176!3d-23.550000947275644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f8c61020205%3A0x9ae474c606fef4!2sMooca%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1686596321228!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da localização do Monã Mooca"
            ></iframe>
          </div>
        </div>

        <div className="mb-16">
          <Tabs defaultValue="lifestyle" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="lifestyle">Estilo de Vida</TabsTrigger>
              <TabsTrigger value="shopping">Compras</TabsTrigger>
              <TabsTrigger value="gastronomy">Gastronomia</TabsTrigger>
            </TabsList>
            <TabsContent value="lifestyle">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300&text=Mooca+Tradicional"
                    alt="Mooca Tradicional"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-4">Tradição e Modernidade</h4>
                  <p className="text-gray-700 mb-4">
                    A Mooca é um dos bairros mais tradicionais de São Paulo, com forte influência italiana e uma rica
                    história cultural. Ao mesmo tempo, o bairro passou por uma revitalização nos últimos anos, atraindo
                    novos empreendimentos e moradores.
                  </p>
                  <p className="text-gray-700">
                    O Clube Atlético Juventus, carinhosamente chamado de "Moleque Travesso", é um dos símbolos do
                    bairro, assim como as tradicionais cantinas italianas e padarias que preservam receitas centenárias.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shopping">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300&text=Mooca+Plaza+Shopping"
                    alt="Mooca Plaza Shopping"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-4">Compras para todos os gostos</h4>
                  <p className="text-gray-700 mb-4">
                    O Mooca Plaza Shopping é um dos principais centros de compras da região, com mais de 200 lojas,
                    praça de alimentação, cinema e diversas opções de lazer para toda a família.
                  </p>
                  <p className="text-gray-700">
                    Além do shopping, o bairro conta com comércio de rua tradicional, com lojas de diversos segmentos,
                    desde moda até utilidades domésticas, atendendo a todas as necessidades dos moradores.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="gastronomy">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300&text=Gastronomia+Mooca"
                    alt="Gastronomia na Mooca"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-4">Paraíso Gastronômico</h4>
                  <p className="text-gray-700 mb-4">
                    A Mooca é conhecida por sua excelente gastronomia, especialmente a italiana. Cantinas tradicionais,
                    pizzarias premiadas e restaurantes contemporâneos fazem parte da paisagem do bairro.
                  </p>
                  <p className="text-gray-700">
                    Destaque para estabelecimentos como Cantina Di Napoli, Pizzaria Speranza e diversos outros
                    restaurantes que preservam receitas tradicionais passadas de geração em geração, oferecendo uma
                    experiência gastronômica autêntica.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {neighborhoodFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold">{feature.title}</h4>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-100 p-6 rounded-lg inline-block">
            <div className="mb-4">
              <h4 className="text-xl font-bold">Endereços</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <p className="font-bold mb-2">Showroom:</p>
                <p className="text-gray-700">Rua Madre de Deus, 263 - Mooca - São Paulo - SP</p>
              </div>
              <div>
                <p className="font-bold mb-2">Empreendimento:</p>
                <p className="text-gray-700">Rua Padre Raposo, 298 - Mooca - São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
