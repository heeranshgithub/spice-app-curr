import Image from "next/image"

const ProductCard = ({ product }) => (
  <div className="relative rounded-lg shadow-lg w-full max-w-sm mx-auto group overflow-hidden">
    <div className="relative aspect-[3/4] max-h-[480px] rounded-lg overflow-hidden">
      <Image
        src={product.imageSrc}
        alt={product.title}
        fill // Ensures the image fills the container
        className="transform transition-transform duration-300 group-hover:scale-110 object-cover"
        sizes="(max-width: 768px) 100vw, 50vw" // This specifies responsive image sizes
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 transition-opacity duration-300 group-hover:from-black/60 group-hover:to-black/10">
        <div className="absolute bottom-0 left-0 p-5 text-white">
          <h3 className="text-2xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-sm text-gray-200">{product.description}</p>
        </div>
      </div>
    </div>
  </div>
)

export default ProductCard

// const ProductCard = ({ product }) => (
//   <div className="relative rounded-lg shadow-lg w-full max-w-sm mx-auto">
//     <div className="relative aspect-[3/4] max-h-[480px]">
//       <img
//         src={product.imageSrc}
//         alt={product.title}
//         className="w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20">
//         <div className="absolute bottom-0 left-0 p-5 text-white">
//           <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
//           <p className="text-sm text-gray-200">{product.description}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// )

// export default ProductCard
