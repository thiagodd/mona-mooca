"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Diferenciais", href: "#features" },
    { name: "Lazer", href: "#amenities" },
    { name: "Galeria", href: "#gallery" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 py-2 shadow-lg" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="#hero" className="text-2xl font-bold text-white">
              <Image src={"/logo-no-bg.svg"} alt={"Texto logo"} width={140} height={140}></Image>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white hover:text-red-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-red-600 hover:bg-red-700 text-white">Agende uma Visita</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg text-white hover:text-red-500 transition-colors py-2"
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full mt-4">Agende uma Visita</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
