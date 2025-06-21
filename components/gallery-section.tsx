"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { X } from "lucide-react"

const categories = [
  { id: "all", name: "Todos" },
  { id: "apartments", name: "Apartamentos" },
  { id: "common", name: "Áreas Comuns" },
  { id: "leisure", name: "Lazer" },
  { id: "facade", name: "Fachada" },
]

const galleryItems = [
  {
    id: 1,
    title: "Living 3 suítes - 136m²",
    category: "apartments",
    image: "/images/gallery/aptos/apto-1.jpeg",
  },
  {
    id: 2,
    title: "Living 3 suítes - 136m²",
    category: "apartments",
    image: "/images/gallery/aptos/apto-1.jpeg",
  },
  {
    id: 3,
    title: "Living 3 suítes - 136m²",
    category: "apartments",
    image: "/images/gallery/aptos/apto-1.jpeg",
  },
  {
    id: 4,
    title: "Living 3 suítes - 136m²",
    category: "apartments",
    image: "/images/gallery/aptos/apto-1.jpeg",
  },
  {
    id: 5,
    title: "Living 3 suítes - 136m²",
    category: "apartments",
    image: "/images/gallery/aptos/apto-1.jpeg",
  },
  {
    id: 6,
    title: "Living 3 suítes - 136m²",
    category: "apartments",
    image: "/images/gallery/aptos/apto-1.jpeg",
  },
  {
    id: 7,
    title: "Piscina e Deck",
    category: "leisure",
    image: "/placeholder.svg?height=400&width=600&text=Piscina+e+Deck",
  },
  {
    id: 8,
    title: "Fachada Principal",
    category: "facade",
    image: "/placeholder.svg?height=400&width=600&text=Fachada+Principal",
  },
  {
    id: 9,
    title: "Lobby de Entrada",
    category: "common",
    image: "/placeholder.svg?height=400&width=600&text=Lobby+de+Entrada",
  },
  {
    id: 10,
    title: "Espaço Gourmet",
    category: "common",
    image: "/placeholder.svg?height=400&width=600&text=Espaço+Gourmet",
  },
  {
    id: 11,
    title: "Academia",
    category: "leisure",
    image: "/placeholder.svg?height=400&width=600&text=Academia",
  },
]

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const openModal = (item: (typeof galleryItems)[0]) => {
    setSelectedImage(item)
    setIsOpen(true)
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-2">Galeria</h2>
          <h3 className="text-4xl font-bold mb-4">Conheça o Monã Mooca</h3>
          <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id ? "bg-red-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="aspect-square relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h4 className="text-white font-medium">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
                  <div className="relative">
                    <div className="aspect-video relative">
                      <Image
                        src={selectedImage?.image || ""}
                        alt={selectedImage?.title || ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <div className="p-6">
                    <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-gray-900">
                      {selectedImage?.title}
                    </Dialog.Title>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  )
}
