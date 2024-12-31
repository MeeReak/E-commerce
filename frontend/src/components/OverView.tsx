// "use client";

// import React from "react";
// import Social from "./Social";
// import { ProductDisplay } from "./ProductDisplay";
// import { renderStars } from "@/app/components/atoms/RenderStar";
// import { Quantity } from "./Quatity";
// import { Button } from "./ui/button";
// import { ShoppingBagIcon } from "lucide-react";
// import { motion } from "framer-motion";

// // Product Title and Status
// const ProductTitleStatus = ({
//   name = " Chinese Cabbage",
//   review = 4,
//   id = "2,51,594",
// }: {
//   name?: string;
//   review?: number;
//   id?: string;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, ease: "easeOut" }}
//   >
//     <div className="flex gap-x-2 items-center pb-3">
//       <p className="text-gray-900 text-3xl font-semibold leading-[120%]">
//         {name}
//       </p>
//       <span className="text-[#2C742F]   text-sm font-normal leading-[150%] rounded-sm bg-[rgba(32,181,38,0.2)] px-3 py-2">
//         In Stock
//       </span>
//     </div>
//     <div className="flex gap-x-2 items-center">
//       <div className="flex gap-x-1 items-center">
//         <div className="flex items-center">{renderStars({ rating: 5 })}</div>
//         <p className="text-[#666] text-sm font-normal leading-[150%]">
//           {review} Review
//         </p>
//       </div>
//       <span className="text-[#B3B3B3] text-sm font-medium leading-[150%]">
//         •
//       </span>
//       <div className="flex items-center gap-x-1">
//         <p className="text-gray-800 text-sm font-medium leading-[150%]">SKU:</p>
//         <p className="text-[var(--Gray-Scale-Gray-600,#666)]   text-sm font-normal leading-[150%]">
//           {id}
//         </p>
//       </div>
//     </div>
//   </motion.div>
// );

// // Price Section
// const PriceSection = ({
//   price = 48,
//   priced = 17.28,
//   discount = 64,
// }: {
//   price?: number;
//   priced?: number;
//   discount?: number;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, x: -50 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.5, ease: "easeOut" }}
//     className="flex items-center gap-x-3 border-b-[1px] pb-5 border-[#E6E6E6]"
//   >
//     <div className="flex gap-x-1 items-center">
//       <p className="text-[#B3B3B3] text-xl font-normal leading-[150%] line-through">
//         ${price.toFixed(2)}
//       </p>
//       <p className="text-[#2C742F] text-2xl font-medium leading-[150%]">
//         ${priced.toFixed(2)}
//       </p>
//     </div>
//     <span className="text-[#EA4B48] text-sm font-medium leading-[150%] rounded-[30px] bg-[rgba(234,75,72,0.1)] px-3 py-1">
//       {discount}% Off
//     </span>
//   </motion.div>
// );

// // Brand Info & Social Sharing
// const BrandAndSocial = ({
//   logo = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="32"
//       height="14"
//       viewBox="0 0 32 14"
//       fill="none"
//     >
//       <path
//         d="M5.13333 7.00157C17.2644 -5.59604 31.2617 7.00157 31.2617 7.00157C31.2617 7.00157 17.2644 19.5992 5.13333 7.00157Z"
//         fill="#36C63F"
//       />
//       <path
//         d="M22.8938 12.196C27.954 10.6073 31.4454 7.49924 31.5916 7.36767L32 7.00005L31.5916 6.63242C31.4454 6.50086 27.954 3.39272 22.8938 1.80403C19.902 0.864772 16.9897 0.661521 14.2377 1.20002C10.858 1.86128 7.72564 3.64641 4.92432 6.50542L-2.44735e-07 6.50542L-2.87974e-07 7.49461L4.92432 7.49461C7.7257 10.3536 10.8579 12.1388 14.2377 12.8C16.9897 13.3384 19.9021 13.1353 22.8938 12.196ZM14.4097 11.8258C11.5163 11.2559 8.80595 9.80056 6.33845 7.49461L13.3259 7.49461L15.9805 10.1492L16.6798 9.44981L14.7247 7.49467L20.5294 7.49467L20.5294 6.50548L17.0575 6.50548L19.0127 4.55029L18.3133 3.85091L15.6587 6.50548L10.992 6.50548L12.4806 5.01685L11.7812 4.31747L9.59314 6.50554L6.33839 6.50554C8.80595 4.1996 11.5163 2.74415 14.4097 2.17428C16.9942 1.66528 19.7388 1.85509 22.5674 2.7384C26.4272 3.94378 29.4068 6.13298 30.4887 7.00011C29.4067 7.8673 26.4272 10.0564 22.5674 11.2618C19.7389 12.1451 16.9942 12.3349 14.4097 11.8258Z"
//         fill="#009F06"
//       />
//     </svg>
//   ),
//   name = "farmary",
// }: {
//   logo?: React.ReactNode;
//   name?: string;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, ease: "easeOut" }}
//     className="flex justify-between"
//   >
//     <div className="flex items-center gap-x-2">
//       <p>Brand:</p>
//       <div className="border-gray-100 border-[1px] rounded-sm flex flex-col justify-center items-center py-[14px] px-1">
//         {logo}
//         <p className="text-[#555] dancing-script text-xs font-bold leading-[100%]">
//           {name}
//         </p>
//       </div>
//     </div>
//     <div className="flex items-center">
//       <p className="text-[#1A1A1A] text-sm font-normal leading-[150%]">
//         Share item:
//       </p>
//       <Social />
//     </div>
//   </motion.div>
// );

// // Product Description
// const ProductDescription = ({
//   description = `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.`,
// }: {
//   description?: string;
// }) => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 0.5, ease: "easeOut" }}
//   >
//     <p className="text-[#808080] text-sm font-normal leading-[150%]">
//       {description}
//     </p>
//   </motion.div>
// );

// // Category and Tags
// const ProductCategoryAndTags = ({
//   category = "Vegetables",
//   tags = ["Vegetables", "Healthy", "Chinese Cabbage", "Green Cabbage"],
// }: {
//   category?: string;
//   tags?: string[];
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, ease: "easeOut" }}
//   >
//     <div className="flex items-center gap-x-2">
//       <p className="text-[#1A1A1A] text-sm font-medium leading-[150%]">
//         Category:
//       </p>
//       <p className="text-[#808080] text-sm font-normal leading-[150%]">
//         {category}
//       </p>
//     </div>
//     <div className="flex items-center gap-x-2">
//       <p className="text-[#1A1A1A] text-sm font-medium leading-[150%]">Tag:</p>
//       {tags.map((tag: string, index: number) => (
//         <p
//           key={index}
//           className="text-[#808080] text-sm font-normal leading-[150%] hover:underline hover:text-[#1A1A1A]"
//         >
//           {tag}
//         </p>
//       ))}
//     </div>
//   </motion.div>
// );

// // Add to Cart and Wishlist Buttons
// const AddToCartSection = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, ease: "easeOut" }}
//     className="py-4 border-y-[1px] border-[#E6E6E6] flex gap-x-3"
//   >
//     <Quantity />
//     <Button
//       className="w-full rounded-full text-base font-semibold leading-[120%]"
//       rightIcon={<ShoppingBagIcon />}
//     >
//       Add to Cart
//     </Button>
//     <Button
//       size="icon"
//       variant="custom"
//       className="bg-[#20B5261A] p-4 hover:bg-[#074f0a1a]"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="20"
//         height="20"
//         viewBox="0 0 20 20"
//         fill="none"
//       >
//         <path
//           d="M9.9996 17.5451C-6.66672 8.33334 4.99993 -1.66666 9.9996 4.65672C14.9999 -1.66666 26.6666 8.33334 9.9996 17.5451Z"
//           stroke="#2C742F"
//           strokeWidth="1.5"
//         />
//       </svg>
//     </Button>
//   </motion.div>
// );

// export const OverView = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="flex justify-between items-center mt-8"
//     >
//       <ProductDisplay />
//       <div className="w-[650px] flex flex-col gap-y-6">
//         <ProductTitleStatus />
//         <PriceSection />
//         <BrandAndSocial />
//         <ProductDescription />
//         <AddToCartSection />
//         <ProductCategoryAndTags />
//       </div>
//     </motion.div>
//   );
// };

"use client";

import React from "react";
import Social from "./Social";
import { ProductDisplay } from "./ProductDisplay";
import { renderStars } from "@/app/_components/atoms/RenderStar";
import { Quantity } from "./Quatity";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Product as data } from "@/utils/mockup";

// Product Title and Status
const ProductTitleStatus = ({
  name = " Chinese Cabbage",
  review = 4,
  id = "2,51,594",
  stockStatus = "In Stock",
}: {
  name?: string;
  review?: number;
  id?: string;
  stockStatus?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className="flex gap-x-4 items-center pb-3">
      <p className="text-gray-900 text-3xl font-semibold leading-[120%]">
        {name}
      </p>
      <span className="text-[#2C742F]   text-sm font-normal leading-[21px] rounded-sm bg-[rgba(32,181,38,0.2)] px-3 py-2">
        {stockStatus}
      </span>
    </div>
    <div className="flex gap-x-2 items-center">
      <div className="flex gap-x-1 items-center">
        <div className="flex items-center">{renderStars({ rating: 5 })}</div>
        <p className="text-[#666] text-sm font-normal leading-[150%]">
          {review} Review
        </p>
      </div>
      <span className="text-[#B3B3B3] text-sm font-medium leading-[150%]">
        •
      </span>
      <div className="flex items-center gap-x-1">
        <p className="text-gray-800 text-sm font-medium leading-[150%]">SKU:</p>
        <p className="text-[var(--Gray-Scale-Gray-600,#666)]   text-sm font-normal leading-[150%]">
          {id}
        </p>
      </div>
    </div>
  </motion.div>
);

// Price Section
const PriceSection = ({
  price = 48,
  priced = 17.28,
  discount = 64,
}: {
  price?: number;
  priced?: number;
  discount?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="flex items-center gap-x-3 border-b-[1px] pb-5 border-[#E6E6E6]"
  >
    <div className="flex gap-x-2 items-center">
      <p className="text-[#B3B3B3] text-xl font-normal leading-[150%] line-through">
        ${price.toFixed(2)}
      </p>
      <p className="text-[#2C742F] text-2xl font-medium leading-[150%]">
        ${priced.toFixed(2)}
      </p>
    </div>
    <span className="text-[#EA4B48] text-sm font-medium leading-[150%] rounded-[30px] bg-[rgba(234,75,72,0.1)] px-3 py-1">
      {discount}% Off
    </span>
  </motion.div>
);

// Brand Info & Social Sharing
const BrandAndSocial = ({
  logo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="14"
      viewBox="0 0 32 14"
      fill="none"
    >
      <path
        d="M5.13333 7.00157C17.2644 -5.59604 31.2617 7.00157 31.2617 7.00157C31.2617 7.00157 17.2644 19.5992 5.13333 7.00157Z"
        fill="#36C63F"
      />
      <path
        d="M22.8938 12.196C27.954 10.6073 31.4454 7.49924 31.5916 7.36767L32 7.00005L31.5916 6.63242C31.4454 6.50086 27.954 3.39272 22.8938 1.80403C19.902 0.864772 16.9897 0.661521 14.2377 1.20002C10.858 1.86128 7.72564 3.64641 4.92432 6.50542L-2.44735e-07 6.50542L-2.87974e-07 7.49461L4.92432 7.49461C7.7257 10.3536 10.8579 12.1388 14.2377 12.8C16.9897 13.3384 19.9021 13.1353 22.8938 12.196ZM14.4097 11.8258C11.5163 11.2559 8.80595 9.80056 6.33845 7.49461L13.3259 7.49461L15.9805 10.1492L16.6798 9.44981L14.7247 7.49467L20.5294 7.49467L20.5294 6.50548L17.0575 6.50548L19.0127 4.55029L18.3133 3.85091L15.6587 6.50548L10.992 6.50548L12.4806 5.01685L11.7812 4.31747L9.59314 6.50554L6.33839 6.50554C8.80595 4.1996 11.5163 2.74415 14.4097 2.17428C16.9942 1.66528 19.7388 1.85509 22.5674 2.7384C26.4272 3.94378 29.4068 6.13298 30.4887 7.00011C29.4067 7.8673 26.4272 10.0564 22.5674 11.2618C19.7389 12.1451 16.9942 12.3349 14.4097 11.8258Z"
        fill="#009F06"
      />
    </svg>
  ),
  name = "farmary",
}: {
  logo?: React.ReactNode;
  name?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="flex justify-between"
  >
    <div className="flex items-center gap-x-2">
      <p>Brand:</p>
      <div className="border-gray-100 border-[1px] rounded-sm flex flex-col justify-center items-center space-y-1 py-[14px] px-1">
        {logo}
        <p className="text-[#555] dancing-script text-xs font-bold leading-[100%]">
          {name}
        </p>
      </div>
    </div>
    <div className="flex items-center">
      <p className="text-[#1A1A1A] text-sm font-normal leading-[150%]">
        Share item:
      </p>
      <Social />
    </div>
  </motion.div>
);

// Product Description
const ProductDescription = ({
  description = `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.`,
}: {
  description?: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <p className="text-[#808080] text-sm font-normal leading-[150%]">
      {description}
    </p>
  </motion.div>
);

// Category and Tags
const ProductCategoryAndTags = ({
  category = "Vegetables",
  tags = ["Vegetables", "Healthy", "Chinese Cabbage", "Green Cabbage"],
}: {
  category?: string;
  tags?: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="flex items-center gap-x-2">
      <p className="text-[#1A1A1A] text-sm font-medium leading-[150%]">
        Category:
      </p>
      <p className="text-[#808080] text-sm font-normal leading-[150%]">
        {category}
      </p>
    </div>
    <div className="flex items-center gap-x-2">
      <p className="text-[#1A1A1A] text-sm font-medium leading-[150%]">Tag:</p>
      {tags.map((tag: string, index: number) => (
        <p
          key={index}
          className="text-[#808080] text-sm font-normal leading-[150%] hover:underline hover:text-[#1A1A1A]"
        >
          {tag}
        </p>
      ))}
    </div>
  </motion.div>
);

// Add to Cart and Wishlist Buttons
const AddToCartSection = ({
  qty,
  setQty,
}: {
  qty: number;
  setQty: (qty: number) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="py-4 border-y-[1px] border-[#E6E6E6] flex gap-x-3"
  >
    <Quantity id={""} qty={qty} setQtys={setQty} />
    <Button
      className="w-full rounded-full text-base font-semibold leading-[120%]"
      rightIcon={<ShoppingBagIcon />}
    >
      Add to Cart
    </Button>
    <Button
      size="icon"
      variant="custom"
      className="bg-[#20B5261A] p-4 hover:bg-[#074f0a1a]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M9.9996 17.5451C-6.66672 8.33334 4.99993 -1.66666 9.9996 4.65672C14.9999 -1.66666 26.6666 8.33334 9.9996 17.5451Z"
          stroke="#2C742F"
          strokeWidth="1.5"
        />
      </svg>
    </Button>
  </motion.div>
);

export const OverView = ({ id }: { id: string }) => {
  const selectedData = data.find((item) => item.id === id);

  const [qty, setQty] = React.useState(1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center mt-8"
    >
      <ProductDisplay images={selectedData?.images || []} />
      <div className="w-[650px] flex flex-col gap-y-6">
        <ProductTitleStatus
          id={selectedData?.id}
          name={selectedData?.name}
          review={selectedData?.review}
          stockStatus={selectedData?.stockStatus}
        />
        <PriceSection
          discount={selectedData?.discount}
          price={selectedData?.price}
          priced={selectedData?.afterDiscount}
        />
        <BrandAndSocial name={selectedData?.brand} />
        <ProductDescription description={selectedData?.description} />
        <AddToCartSection qty={qty} setQty={setQty} />
        <ProductCategoryAndTags
          tags={selectedData?.tags}
          category={selectedData?.category}
        />
      </div>
    </motion.div>
  );
};
