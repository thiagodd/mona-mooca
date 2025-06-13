"use client"

import Image from "next/image"

interface ImageProps {
  src: string
  alt: string
  caption?: string
}

interface ImageGalleryProps {
  images: ImageProps[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={800}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
          {image.caption && (
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 rounded-b-lg">
              <p className="text-sm">{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
