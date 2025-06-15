import { Check } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Sobre o Empreendimento</h2>
          <h3 className="text-4xl font-bold mb-4">Um Novo Marco na Mooca</h3>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-2xl font-bold mb-6">Exclusividade e Tradição em um Endereço Único</h4>
            <p className="text-gray-700 mb-6">
              A Diálogo Engenharia traz um projeto monumental em um terreno enorme com mais de 7 mil m². O{" "}
              <span className="font-bold">Monã Mooca</span> une design contemporâneo, bem-estar e um lazer
              surpreendente. Aqui, a exclusividade encontra a tradição em um endereço único, com espaços generosos e uma
              arquitetura que eleva a sua experiência de morar.
            </p>
            <p className="text-gray-700 mb-8">
              Mais que um novo empreendimento, um novo marco no bairro. Um projeto pensado para quem busca o melhor em
              qualidade de vida, conforto e sofisticação.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <Check className="mr-3 h-6 w-6 text-red-600 flex-shrink-0" />
                <p>Localização privilegiada no coração da Mooca</p>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-6 w-6 text-red-600 flex-shrink-0" />
                <p>Apartamentos com acabamento premium</p>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-6 w-6 text-red-600 flex-shrink-0" />
                <p>Área de lazer completa com mais de 20 opções</p>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-6 w-6 text-red-600 flex-shrink-0" />
                <p>Segurança 24 horas e tecnologia de ponta</p>
              </div>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white">Conheça as Plantas</Button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/banner/real-state.webp"
                alt="Fachada Monã Mooca"
                width={400}
                height={500}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-red-600/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
