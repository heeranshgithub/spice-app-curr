import Image from "next/image"

const SpiceBanner = () => {
  return (
    <div className="relative w-full h-[750px]">
      {/* Main background image container */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner.png"
          alt="Spices background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div>

      {/* Content overlay */}
      <div className="relative w-full h-full flex flex-col justify-center px-8 md:px-16">
        <div className="max-w-2xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Our Spice Collection
            <span className="ml-2">+</span>
          </h1>

          <p className="text-gray-200 text-lg mb-8">
            Discover our wide range of premium whole spices, ground powders, and
            unique spice blends, all expertly curated to elevate your culinary
            experience.
          </p>

          <button className="bg-[#FF5733] hover:bg-[#FF4520] text-white px-8 py-3 rounded w-fit transition-colors duration-200">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default SpiceBanner

// export default function Banner() {
//   return (
//     <div className="relative w-full h-[700px] text-white flex flex-col justify-center items-start px-4 md:px-10">
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         <Image
//           src="/images/banner.png"
//           alt="Banner Background"
//           fill // Makes the image fill the container
//           className="object-cover object-center" // Applying object-fit and object-position via Tailwind
//           priority
//         />
//       </div>

//       {/* Overlay for better text visibility */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

//       {/* Content Section */}
//       <div className="z-[9] flex flex-col items-start justify-center">
//         {/* Header Text */}
//         <h3 className="text-3xl md:text-4xl font-bold mb-4">
//           Saving the world and growing crops
//         </h3>

//         {/* Paragraph Text */}
//         <p className="text-sm mb-2">
//           We provide the finest spices sourced from all over the world.
//         </p>
//         <p className="text-sm mb-4">
//           Explore our range of organic and sustainable products for a healthy
//           lifestyle.
//         </p>

//         {/* Button */}
//         <button className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300">
//           Shop Now
//         </button>
//       </div>
//     </div>
//   )
// }
