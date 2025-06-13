"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar o botão flutuante após rolar 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <Button
        className="bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg flex items-center gap-2 px-6 py-6"
        onClick={() => {
          const contactSection = document.getElementById("contact")
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        <Phone className="h-5 w-5" />
        <span className="font-medium">Agende uma Visita</span>
      </Button>
    </div>
  )
}
