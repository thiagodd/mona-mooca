import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm font-bold text-red-500 uppercase tracking-wider mb-2">Entre em Contato</h2>
            <h3 className="text-4xl font-bold mb-6">Agende uma Visita ao Decorado</h3>
            <p className="text-gray-300 mb-8">
              Venha conhecer pessoalmente o Moná Mooca e descubra por que este é o empreendimento mais desejado da
              região. Nossos consultores estão prontos para atendê-lo e apresentar todas as vantagens de investir em um
              projeto único e exclusivo.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Endereço</h4>
                  <p className="text-gray-400">Rua da Mooca, 1000 - Mooca, São Paulo - SP</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Telefone</h4>
                  <p className="text-gray-400">(11) 9999-9999</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-gray-400">contato@monamooca.com.br</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white p-8 rounded-lg shadow-lg text-gray-900">
              <h4 className="text-2xl font-bold mb-6 text-center">Solicite mais informações</h4>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <Input id="email" type="email" placeholder="Seu e-mail" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <Input id="phone" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    Interesse
                  </label>
                  <select
                    id="interest"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="visit">Agendar visita ao decorado</option>
                    <option value="info">Receber mais informações</option>
                    <option value="financing">Simulação de financiamento</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <Textarea id="message" placeholder="Sua mensagem" rows={4} />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Enviar</Button>
                <p className="text-xs text-gray-500 text-center">
                  Ao enviar, você concorda com nossa política de privacidade e termos de uso.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
