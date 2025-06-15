"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer:
      "Oferecemos diversas opções de pagamento, incluindo financiamento bancário, pagamento à vista com desconto, e planos de pagamento direto com a construtora. Entre em contato com nossos consultores para encontrar a melhor opção para você.",
  },
  {
    question: "Qual é o prazo de entrega do empreendimento?",
    answer:
      "O Monã Mooca tem previsão de entrega para o segundo semestre de 2025. Todas as etapas da construção estão sendo rigorosamente acompanhadas para garantir a qualidade e o cumprimento do cronograma.",
  },
  {
    question: "O empreendimento possui vagas de garagem?",
    answer:
      "Sim, todos os apartamentos do Monã Mooca contam com vagas de garagem. As unidades de 3 suítes possuem 2 vagas, enquanto as unidades de 4 suítes contam com 3 vagas, sendo uma delas com carregador para carro elétrico.",
  },
  {
    question: "É permitido fazer modificações no projeto do apartamento?",
    answer:
      "Sim, oferecemos flexibilidade para personalização dos apartamentos, desde que as solicitações sejam feitas dentro do prazo estabelecido e não comprometam a estrutura do edifício. Nossa equipe de arquitetura está à disposição para auxiliar nas modificações.",
  },
  {
    question: "Quais são os custos de condomínio estimados?",
    answer:
      "O valor estimado do condomínio varia de acordo com a metragem do apartamento, mas foi projetado com soluções sustentáveis que visam reduzir os custos operacionais. Detalhes específicos podem ser consultados com nossos corretores.",
  },
  {
    question: "O empreendimento aceita animais de estimação?",
    answer:
      "Sim, o Monã Mooca é pet friendly. Além disso, contamos com um espaço dedicado aos pets, com área de recreação e estação de higienização.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Perguntas Frequentes</h2>
          <h3 className="text-4xl font-bold mb-4">Tire suas dúvidas</h3>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
