import Image from "next/image"

const DiscoverSpices = () => {
  return (
    <div className="flex flex-row justify-between items-center relative w-full py-32">
      {/* Left Text Content */}
      <div className="w-1/2 z-10 max-w-5xl mx-auto md:ml-[100px]">
        {" "}
        {/* Added padding-right */}
        <h2 className="text-3xl font-bold mb-4">Discover Our Quality Spices</h2>
        <p className="text-gray-600 mb-8">
          Explore our diverse range of products and learn about our sustainable
          farming practices today!
        </p>
        <div className="flex gap-4">
          <button className="bg-orange-500 text-black px-6 py-3 rounded hover:bg-orange-600">
            Learn More
          </button>
          <button className="text-gray-700 px-6 py-3 hover:bg-gray-50 border-2 border-black rounded">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Image Content */}
      <div className="absolute inset-y-0 right-0 w-1/2 h-full hidden md:block">
        <Image
          src="/images/quality-spices.png"
          alt="Spices"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default DiscoverSpices
