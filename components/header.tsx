"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const sliderImages = [
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
]

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))
  }

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0 z-0">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav
        className={`absolute left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black py-2" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold text-white">
            MONA MOOCA
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-red-500">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-red-500">
              About Us
            </Link>
            <Link href="#services" className="text-white hover:text-red-500">
              Services
            </Link>
            <Link href="#projects" className="text-white hover:text-red-500">
              Properties
            </Link>
            <Link href="#blog" className="text-white hover:text-red-500">
              Blog
            </Link>
            <Link href="#contact" className="text-white hover:text-red-500">
              Contact Us
            </Link>
            <button className="text-white hover:text-red-500">
              <Search size={20} />
            </button>
          </div>
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-start">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="mb-4 text-5xl font-bold text-white">Luxury Living Redefined</h1>
            <p className="mb-8 text-lg text-white/80">
              Experience unparalleled luxury and sophistication at Mona Mooca. Where exceptional design meets premium
              location for the most discerning clients.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">Learn More</Button>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 z-10 flex space-x-4">
        <button
          onClick={prevSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-red-600"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-red-600"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </header>
  )
}
