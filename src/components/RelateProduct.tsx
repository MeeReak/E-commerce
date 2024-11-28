// "use client"

// import React, { useState } from "react";
// import { Product as Items } from "@/utils/mockup";
// import { ProductCardY } from "@/app/components/atoms/ProductCardY";
// import { Button } from "./ui/button";
// import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

// export const RelateProduct = () => {
//   // State for the current page index
//   const [currentPage, setCurrentPage] = useState(0);
//   const productsPerPage = 5;

//   // Filter products by category
//   const filteredProducts = Items.filter(
//     (item) => item.category === "vegetable"
//   );

//   // Calculate the products to display based on the current page
//   const displayedProducts = filteredProducts.slice(
//     currentPage * productsPerPage,
//     (currentPage + 1) * productsPerPage
//   );

//   // Handle next button click
//   const handleNext = () => {
//     if ((currentPage + 1) * productsPerPage < filteredProducts.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   // Handle previous button click
//   const handlePrev = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div>
//       <div className="flex mb-5 items-center justify-between">
//         <p className="text-[#1A1A1A] text-2xl font-semibold leading-[120%]">
//           RelateProduct
//         </p>
//         <div className="flex gap-x-2">
//           <Button
//             variant={"custom"}
//             size={"icon"}
//             className="text-black border-[1px] border-gray-200 bg-white p-3 shadow-sm rounded-full hover:text-gray-400"
//             onClick={handlePrev}
//             disabled={currentPage === 0} // Disable the prev button if we're on the first page
//           >
//             <ChevronLeftIcon />
//           </Button>
//           <Button
//             variant={"custom"}
//             size={"icon"}
//             className="text-black border-[1px] border-gray-200 bg-white p-3 shadow-sm rounded-full hover:text-gray-400"
//             onClick={handleNext}
//             disabled={
//               (currentPage + 1) * productsPerPage >= filteredProducts.length
//             } // Disable the next button if we're on the last page
//           >
//             <ChevronRightIcon />
//           </Button>
//         </div>
//       </div>
//       <div className="flex gap-5">
//         {displayedProducts.map((product, index) => (
//           <div key={index}>
//             <ProductCardY
//               id={product.id}
//               imgURl={product.src}
//               price={product.price}
//               rating={product.star}
//               title={product.name}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

"use client";

import React, { useRef } from "react";
import { Product as Items } from "@/utils/mockup";
import { ProductCardY } from "@/app/components/atoms/ProductCardY"; // Ensure correct path
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export const RelateProduct = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ITEM_WIDTH = 200;

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (direction === "left" && scrollLeft > 0) {
        scrollRef.current.scrollBy({
          left: -2 * ITEM_WIDTH,
          behavior: "smooth",
        });
      } else if (
        direction === "right" &&
        scrollLeft < scrollWidth - clientWidth
      ) {
        scrollRef.current.scrollBy({
          left: 2 * ITEM_WIDTH,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div>
      <div className="flex  items-center justify-between">
        <p className="text-[#1A1A1A] text-2xl font-semibold leading-[120%]">
          Related Products
        </p>
        <div className="flex gap-x-2">
          <Button
            variant={"custom"}
            size={"icon"}
            className="text-black border-[1px] border-gray-200 bg-white p-3 shadow-sm rounded-full hover:text-gray-400"
            onClick={() => handleScroll("left")}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant={"custom"}
            size={"icon"}
            className="text-black border-[1px] border-gray-200 bg-white p-3 shadow-sm rounded-full hover:text-gray-400"
            onClick={() => handleScroll("right")}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex py-5 px-3 overflow-x-scroll space-x-5 hide-scrollbar"
      >
        {Items.map((product) => (
          <div key={product.id} className="flex-shrink-0">
            <ProductCardY
              id={product.id}
              imgUrl={product.src}
              price={product.price}
              rating={product.star}
              title={product.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
