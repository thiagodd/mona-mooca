import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#hero" className="mb-6 inline-block text-2xl font-bold">
              MONÁ MOOCA
            </Link>
            <p className="mb-4 text-gray-400">
              Um projeto monumental que une design contemporâneo, bem-estar e lazer surpreendente no coração da Mooca.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-bold">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-red-500 transition-colors">
                  Sobre o Empreendimento
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-red-500 transition-colors">
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link href="#amenities" className="text-gray-400 hover:text-red-500 transition-colors">
                  Lazer Completo
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-red-500 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-bold">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-red-500">•</span>
                <span className="text-gray-400">Rua da Mooca, 1000 - Mooca, São Paulo - SP</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">•</span>
                <span className="text-gray-400">(11) 9999-9999</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">•</span>
                <span className="text-gray-400">contato@monamooca.com.br</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">•</span>
                <span className="text-gray-400">Horário: Seg-Dom, 9h às 21h</span>
              </li>
            </ul>
            </div>
            </div>
            </div>
    </footer>)
}