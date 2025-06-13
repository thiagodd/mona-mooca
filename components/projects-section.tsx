"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  type: string
  image: string
  size: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Living 3 suites",
    type: "apartments",
    image: "/placeholder.svg?height=600&width=800",
    size: "136m²",
  },
  {
    id: 2,
    title: "Terraço 3 suites",
    type: "apartments",
    image: "/placeholder.svg?height=600&width=800",
    size: "136m²",
  },
  {
    id: 3,
    title: "Living 4 suites",
    type: "apartments",
    image: "/placeholder.svg?height=600&width=800",
    size: "179m²",
  },
  {
    id: 4,
    title: "Terraço 4 suites",
    type: "apartments",
    image: "/placeholder.svg?height=600&width=800",
    size: "179m²",
  },
  {
    id: 5,
    title: "Living 4 suite",
    type: "penthouse",
    image: "/placeholder.svg?height=600&width=800",
    size: "269m²",
  },
  {
    id: 6,
    title: "Master suite bathroom",
    type: "interiors",
    image: "/placeholder.svg?height=600&width=800",
    size: "269m²",
  },
  {
    id: 7,
    title: "Common Areas",
    type: "common",
    image: "/placeholder.svg?height=600&width=800",
    size: "",
  },
  {
    id: 8,
    title: "Floor Plans",
    type: "plans",
    image: "/placeholder.svg?height=600&width=800",
    size: "",
  },
]

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all")
  const [currentProject, setCurrentProject] = useState<Project>(projects[0])

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.type === filter)

  const handlePrevious = () => {
    const currentIndex = filteredProjects.findIndex((project) => project.id === currentProject.id)
    const newIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1
    setCurrentProject(filteredProjects[newIndex])
  }

  const handleNext = () => {
    const currentIndex = filteredProjects.findIndex((project) => project.id === currentProject.id)
    const newIndex = currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1
    setCurrentProject(filteredProjects[newIndex])
  }

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-sm font-bold text-red-600">OUR LATEST PROJECTS</h2>
          <h3 className="mb-6 text-4xl font-bold">Discover Mona Mooca</h3>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore our portfolio of exceptional properties and discover the perfect home for your lifestyle.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-md border px-6 py-2 ${
              filter === "all"
                ? "border-red-600 bg-red-600 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("apartments")}
            className={`rounded-md border px-6 py-2 ${
              filter === "apartments"
                ? "border-red-600 bg-red-600 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Apartments
          </button>
          <button
            onClick={() => setFilter("penthouse")}
            className={`rounded-md border px-6 py-2 ${
              filter === "penthouse"
                ? "border-red-600 bg-red-600 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Penthouses
          </button>
          <button
            onClick={() => setFilter("interiors")}
            className={`rounded-md border px-6 py-2 ${
              filter === "interiors"
                ? "border-red-600 bg-red-600 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Interiors
          </button>
          <button
            onClick={() => setFilter("common")}
            className={`rounded-md border px-6 py-2 ${
              filter === "common"
                ? "border-red-600 bg-red-600 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Common Areas
          </button>
          <button
            onClick={() => setFilter("plans")}
            className={`rounded-md border px-6 py-2 ${
              filter === "plans"
                ? "border-red-600 bg-red-600 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Floor Plans
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="space-y-4 border-l-2 border-gray-200 pl-4">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`cursor-pointer py-2 transition-all ${
                    currentProject.id === project.id ? "border-l-2 border-red-600 pl-4 -ml-[18px]" : ""
                  }`}
                  onClick={() => setCurrentProject(project)}
                >
                  <h4 className="text-lg font-medium">
                    {project.title} {project.size && `- ${project.size}`}
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={handlePrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-red-600"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-red-600"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
