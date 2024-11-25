import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import ProductCard from "./ProductCard"
import { productsList } from "../public/assets/cardsList"

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productsList.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productsList.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid md:grid-cols-2 gap-4 items-start">
            {/* Left side with title */}
            <div>
              <button className="inline-block bg-orange-400 text-black px-3 py-2 text-sm rounded mb-4 hover:bg-orange-600 font-medium">
                Discover
              </button>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Explore Our <span className="text-orange-400">Premium</span>
                <br />
                Spice Offerings
              </h2>
            </div>

            {/* Right side with description */}
            <div className="hidden md:block">
              <p className="text-gray-600 leading-relaxed max-w-xl">
                Our spice collection is crafted for flavor enthusiasts. Each
                product is carefully sourced to ensure the highest quality.
                Experience the vibrant tastes that elevate your culinary
                creations.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative px-8">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <IoIosArrowBack size={24} />
          </button>

          <div className="w-full max-w-[320px] mx-auto">
            <ProductCard product={productsList[currentIndex]} />
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            aria-label="Next slide"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 px-4">
          {productsList.map((product, index) => (
            <div key={index} className="max-w-[320px] mx-auto w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection

// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// const ProductsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const products = [
//     {
//       title: 'Whole Spices',
//       description: 'Lorem ipsum is simply dummy text of the printing',
//       imageSrc: '/spice1.jpg'
//     },
//     {
//       title: 'Whole Spices',
//       description: 'Lorem ipsum is simply dummy text of the printing',
//       imageSrc: '/spice2.jpg'
//     },
//     {
//       title: 'Whole Spices',
//       description: 'Lorem ipsum is simply dummy text of the printing',
//       imageSrc: '/spice3.jpg'
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === products.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? products.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <section className="container mx-auto px-4 py-12">
//       {/* Header Section */}
//       <div className="mb-8">
//         <span className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm">
//           Discover
//         </span>
//         <h2 className="text-3xl md:text-4xl font-bold mt-4">
//           Explore Our <span className="text-orange-500">Premium</span>
//           <br className="md:hidden" /> Spice Offerings
//         </h2>
//         <p className="hidden md:block mt-4 max-w-2xl text-gray-600">
//           Our spice collection is crafted for flavor enthusiasts. Each product
//           is carefully sourced to ensure the highest quality. Experience the
//           vibrant tastes that elevate your culinary creations.
//         </p>
//       </div>

//       {/* Mobile Carousel */}
//       <div className="md:hidden relative">
//         <div className="relative">
//           <ProductCard product={products[currentIndex]} />

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10"
//           >
//             <MdChevronLeft size={24} />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10"
//           >
//             <MdChevronRight size={24} />
//           </button>

//           {/* Dots Indicator */}
//           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
//             {products.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-2 h-2 rounded-full transition-all ${
//                   currentIndex === index ? 'bg-orange-500 w-4' : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Desktop Grid */}
//       <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map((product, index) => (
//           <ProductCard key={index} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;
