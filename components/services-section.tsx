"use client"

import { useState } from "react"

interface ServiceProps {
  title: string
  description: string
  image: string
}

const services: ServiceProps[] = [
  {
    title: "Luxury Residences",
    description: "Exclusive homes designed for the most discerning clients with premium finishes and amenities.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Investment Properties",
    description: "High-yield investment opportunities in prime locations with strong appreciation potential.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Property Management",
    description: "Comprehensive management services to protect and enhance your real estate investments.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Interior Design",
    description: "Bespoke interior design services to create spaces that reflect your unique style and preferences.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

function ServiceCard({
  service,
  isHovered,
  onHover,
}: { service: ServiceProps; isHovered: boolean; onHover: () => void }) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg"
      onMouseEnter={onHover}
      style={{
        backgroundImage: isHovered ? `url(${service.image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`flex h-full w-full flex-col justify-between p-8 transition-all duration-300 ${
          isHovered ? "bg-black/70" : "bg-white"
        }`}
      >
        <h3 className={`mb-4 text-2xl font-bold ${isHovered ? "text-white" : "text-black"}`}>{service.title}</h3>
        <p className={`${isHovered ? "text-white/80" : "text-gray-600"}`}>{service.description}</p>
        <div className="mt-6">
          <span
            className={`inline-block border-b-2 pb-1 font-medium transition-colors ${
              isHovered ? "border-red-600 text-red-600" : "border-black text-black"
            }`}
          >
            Learn More
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-sm font-bold text-red-600">OUR SERVICES</h2>
          <h3 className="mb-6 text-4xl font-bold">Exceptional Real Estate Solutions</h3>
          <p className="mx-auto max-w-2xl text-gray-600">
            We offer a comprehensive range of services designed to meet the needs of our discerning clients, from
            finding your dream home to managing your investment portfolio.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
