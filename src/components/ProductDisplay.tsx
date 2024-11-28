"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
  {
    id: 1,
    src: "https://img.freepik.com/free-vector/food-cartoon-illustration_52683-135634.jpg?semt=ais_hybrid",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://img.freepik.com/premium-photo/picture-green-vegetable-with-face-drawn-it_1308157-373698.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://img.freepik.com/free-vector/hand-drawn-food-cartoon-illustration_23-2150760206.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=ais_user",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://img.freepik.com/free-vector/food-cartoon-illustration_52683-135660.jpg?w=360",
    alt: "Image 4",
  },
];

export const ProductDisplay = () => {
  const [selected, setSelected] = useState(1);

  // Helper function to handle image selection
  const handleImageChange = (direction: "increment" | "decrement") => {
    setSelected((prev) => {
      if (direction === "increment") {
        return prev === IMAGES.length ? 1 : prev + 1;
      } else {
        return prev === 1 ? IMAGES.length : prev - 1;
      }
    });
  };

  // Motion variants for entrance animations
  const motionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="w-[660px] h-[558px] flex gap-x-3 items-center"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={motionVariants}
    >
      <div className="space-y-6 flex items-center flex-col">
        <Button
          onClick={() => handleImageChange("decrement")}
          size="icon"
          variant="custom"
          className="text-black hover:text-[#999999]"
        >
          <ChevronUpIcon />
        </Button>

        <motion.div
          className="flex gap-y-3 flex-col"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={motionVariants}
        >
          {IMAGES.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelected(image.id)}
              className={`cursor-pointer w-auto h-auto ${
                image.id === selected
                  ? "border-2 border-[#00B207] rounded-sm"
                  : ""
              }`}
            >
              <Image src={image.src} alt={image.alt} width={80} height={90} />
            </motion.div>
          ))}
        </motion.div>

        <Button
          onClick={() => handleImageChange("increment")}
          size="icon"
          variant="custom"
          className="text-black hover:text-[#999999]"
        >
          <ChevronDownIcon />
        </Button>
      </div>

      <div>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={motionVariants}
        >
          <Image
            src={IMAGES.find((image) => image.id === selected)?.src || ""}
            alt={
              IMAGES.find((image) => image.id === selected)?.alt ||
              "Selected Image"
            }
            width={556}
            height={556}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// "use client";

// import React, { useState } from "react";
// import { Button } from "./ui/button";
// import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export const ProductDisplay = ({
//   images,
// }: {
//   images: { id: number; src: string; alt: string }[];
// }) => {
//   const [selected, setSelected] = useState(1);

//   // Helper function to handle image selection
//   const handleImageChange = (direction: "increment" | "decrement") => {
//     setSelected((prev) => {
//       if (direction === "increment") {
//         return prev === images.length ? 1 : prev + 1;
//       } else {
//         return prev === 1 ? images.length : prev - 1;
//       }
//     });
//   };

//   // Motion variants for entrance animations
//   const motionVariants = {
//     initial: { opacity: 0, y: 50 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
//   };

//   return (
//     <motion.div
//       className="w-[660px] h-[558px] flex gap-x-3 items-center"
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       variants={motionVariants}
//     >
//       <div className="space-y-6 flex items-center flex-col">
//         <Button
//           onClick={() => handleImageChange("decrement")}
//           size="icon"
//           variant="custom"
//           className="text-black hover:text-[#999999]"
//         >
//           <ChevronUpIcon />
//         </Button>

//         <motion.div
//           className="flex gap-y-3 flex-col"
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           variants={motionVariants}
//         >
//           {images.map((image) => (
//             <motion.div
//               key={image.id}
//               whileHover={{ scale: 1.1 }}
//               onClick={() => setSelected(image.id)}
//               className={`cursor-pointer w-auto h-auto ${
//                 image.id === selected
//                   ? "border-2 border-[#00B207] rounded-sm"
//                   : ""
//               }`}
//             >
//               <Image src={image.src} alt={image.alt} width={80} height={90} />
//             </motion.div>
//           ))}
//         </motion.div>

//         <Button
//           onClick={() => handleImageChange("increment")}
//           size="icon"
//           variant="custom"
//           className="text-black hover:text-[#999999]"
//         >
//           <ChevronDownIcon />
//         </Button>
//       </div>

//       <div>
//         <motion.div
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           variants={motionVariants}
//         >
//           <Image
//             src={images.find((image) => image.id === selected)?.src || ""}
//             alt={
//               images.find((image) => image.id === selected)?.alt ||
//               "Selected Image"
//             }
//             width={556}
//             height={556}
//           />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };
