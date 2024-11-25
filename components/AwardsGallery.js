import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Image from "next/image"

export default function AwardsGallery({ awards }) {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = {
    mobile: 2,
    desktop: 6,
  }

  const getVisibleAwards = (count) => {
    const visibleItems = []
    for (let i = 0; i < count; i++) {
      const index = (startIndex + i) % awards.length
      visibleItems.push(awards[index])
    }
    return visibleItems
  }

  const handlePrevious = () => {
    setStartIndex((prev) => {
      if (prev === 0) {
        return awards.length - 1
      }
      return prev - 1
    })
  }

  const handleNext = () => {
    setStartIndex((prev) => {
      return (prev + 1) % awards.length
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="relative flex items-center justify-center mb-6">
        {/* Left decoration */}
        <div className="w-8 h-8">
          <Image
            src="/images/left-feather.png"
            alt="Left decoration"
            width={32}
            height={32}
            className="opacity-50"
            style={{ height: "auto", width: "auto" }} // Maintain aspect ratio
          />
        </div>

        {/* awardsListArr heading */}
        <h2 className="text-4xl font-semibold text-center px-2">Awards</h2>

        {/* Right decoration */}
        <div className="w-8 h-8">
          <Image
            src="/images/right-feather.png"
            alt="Right decoration"
            width={32}
            height={32}
            className="opacity-50"
            style={{ height: "auto", width: "auto" }} // Maintain aspect ratio
          />
        </div>
      </div>

      <p className="text-gray-600 max-w-2xl mx-auto text-center mb-4">
        We prioritize sustainable farming to protect our planet. Our practices
        ensure that we support local farmers while providing high-quality
        spices.
      </p>

      <div className="relative">
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 -translate-x-4 z-10 p-2"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>

        {/* Mobile awards Grid (2 items) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {getVisibleAwards(itemsPerPage.mobile).map((certificate, index) => (
              <div
                key={`mobile-${startIndex}-${index}`}
                className="aspect-[4/3] bg-gray-100 rounded-lg relative"
              >
                <Image
                  src={certificate.imageSrc}
                  alt={certificate.title}
                  fill
                  sizes="(max-width: 768px) 50vw"
                  className="object-cover"
                  priority={index < 2} // Prioritize loading first 2 images
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop awards Grid (5 items) */}
        <div className="hidden md:block">
          <div className="grid grid-cols-6 gap-4">
            {getVisibleAwards(itemsPerPage.desktop).map(
              (certificate, index) => (
                <div
                  key={`desktop-${startIndex}-${index}`}
                  className="aspect-[4/3] rounded-lg relative border-2"
                >
                  <Image
                    src={certificate.imageSrc}
                    alt={certificate.title}
                    fill
                    sizes="(min-width: 768px) 20vw"
                    className="object-fit"
                    priority={index < 4} // Prioritize loading first 4 images
                  />
                </div>
              )
            )}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-4 translate-x-4 z-10 p-2"
        >
          <FaArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
