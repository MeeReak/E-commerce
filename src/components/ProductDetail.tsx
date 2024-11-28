"use client";

import {
  feature,
  productDescription,
  productDetails,
  reviews,
} from "@/utils/mockup";
import { CircleCheckIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Feedback from "./Feedback";
import { Button } from "./ui/button";

type TabOption =
  | "Descriptions"
  | "Additional Information"
  | "Customer Feedback";

export const ProductDetail: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabOption>("Descriptions");
  const [visibleReviews, setVisibleReviews] = useState(4); // Start with 5 reviews
  const [rating, setRating] = useState<number | null>(null); // Rating state
  const [comment, setComment] = useState(""); // Comment state

  const handleTabSelect = (tabName: TabOption) => {
    setSelectedTab(tabName);
  };

  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + 2); // Load 5 more each time
  };

  const handleSubmitFeedback = () => {
    // console.log({ rating, comment });
    setRating(null);
    setComment("");
  };

  const renderDescription = () => (
    <div>
      <p className="text-gray-500 font-poppins text-sm font-normal leading-[1.6]">
        {productDescription.describe}
      </p>
      <ul className="pt-4 space-y-2">
        {productDescription.list.map((item, index) => (
          <li
            key={index}
            className="text-gray-500 text-sm font-normal leading-[1.6] flex items-center gap-x-1"
          >
            <CircleCheckIcon className="fill-[#00B207] text-white" />
            {item}
          </li>
        ))}
      </ul>
      <p className="text-gray-500 text-sm font-normal leading-[1.6] pt-5">
        {productDescription.note}
      </p>
    </div>
  );

  const renderAdditionalInfo = () => (
    <>
      {productDetails.map((detail, index) => (
        <div key={index} className="space-y-1">
          <InfoRow label="Weight:" value={detail.weight} />
          <InfoRow label="Color:" value={detail.color} />
          <InfoRow label="Type:" value={detail.type} />
          <InfoRow label="Category:" value={detail.category} />
          <InfoRow label="Stock Status:" value={detail.stockStatus} />
          <InfoRow label="Tags:" value={detail.tags.join(", ")} />
        </div>
      ))}
    </>
  );

  const renderCustomerFeedback = () => (
    <div>
      {reviews.slice(0, visibleReviews).map((review, index) => (
        <Feedback
          key={index}
          name={review.name}
          rating={review.rating}
          time={review.date}
          comment={review.comment}
        />
      ))}
      {visibleReviews < reviews.length && (
        <Button
          variant={"custom"}
          className="border-none mt-[5.5px] rounded-full bg-[#56AC591A] hover:text-white  hover:bg-[#36a139] text-[#00B207] text-sm font-semibold leading-[16.8px]"
          onClick={handleLoadMore}
        >
          Load More
        </Button>
      )}
    </div>
  );

  const renderContent = () => {
    switch (selectedTab) {
      case "Descriptions":
        return renderDescription();
      case "Additional Information":
        return renderAdditionalInfo();
      case "Customer Feedback":
        return renderCustomerFeedback();
      default:
        return null;
    }
  };

  return (
    <div>
      <TabNavigation selectedTab={selectedTab} onSelect={handleTabSelect} />
      <div className="flex justify-evenly my-8 items-start">
        <div className="w-[660px]">
          {/* Animated content rendering */}
          <motion.div
            key={selectedTab} // This ensures each tab gets re-animated
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {renderContent()}
          </motion.div>
        </div>

        {selectedTab === "Customer Feedback" ? (
          <motion.div
            className="p-5 rounded-md shadow-sm border lg:w-[500px]"
            initial={{ opacity: 0, y: 20 }} // Initial state: hidden and slightly down
            animate={{ opacity: 1, y: 0 }} // Final state: visible and at normal position
            transition={{ duration: 0.8, delay: 0.3 }} // Fade in with delay
          >
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">
              Write a review
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6 mt-4"
            >
              <div>
                <label className="text-gray-600 text-base font-normal leading-6">
                  Rating
                </label>
                <div className="flex gap-x-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`w-6 h-6 cursor-pointer ${
                        star <= rating! ? "text-yellow-500" : "text-gray-300"
                      }`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="text-gray-600 text-base font-normal leading-6">
                  Comment
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="mt-1 w-full p-3 border border-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-gray-400 text-base font-normal leading-[1.3]"
                  placeholder="Share details of your own experience with this product."
                  rows={4}
                  required
                />
              </div>

              <Button
                onClick={handleSubmitFeedback}
                variant={"default"}
                className="mt-4 rounded-full bg-white text-[#00B207] hover:text-white hover:bg-[#00B207] text-base font-normal py-4 leading-[16.8px]"
              >
                Post Feedback
              </Button>
            </form>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-y-5 justify-center w-[400px] lg:w-[556px]">
            {/* Animated iframe and feature list */}
            <motion.iframe
              className="w-full h-[300px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/gfU1iZnjRZM"
              frameBorder="0"
              allowFullScreen
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              className="flex gap-x-10 border rounded-md w-auto justify-center mt-4 p-4 shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <FeatureList features={feature} />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

interface TabNavigationProps {
  selectedTab: TabOption;
  onSelect: (tabName: TabOption) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  selectedTab,
  onSelect,
}) => (
  <div className="border-b-[1px] w-full flex items-center justify-center">
    {(
      [
        "Descriptions",
        "Additional Information",
        "Customer Feedback",
      ] as TabOption[]
    ).map((tabName) => (
      <span
        key={tabName}
        className={
          selectedTab === tabName
            ? "text-gray-900 font-medium text-base leading-6 p-5 border-b-[1px] border-[#20B526]"
            : "text-gray-500 font-medium text-base leading-6 p-5 cursor-pointer"
        }
        onClick={() => onSelect(tabName)}
      >
        {tabName}
      </span>
    ))}
  </div>
);

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <p className="text-gray-600 text-sm leading-[1.5]">
    <span className="text-gray-900 font-semibold">{label}</span> {value}
  </p>
);

interface FeatureItem {
  src: string;
  title: string;
  detail: string;
}

interface FeatureListProps {
  features: FeatureItem[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
  <div className="flex gap-x-10 rounded-md w-auto justify-center">
    {features.map((item, index) => (
      <motion.div
        key={index}
        className="py-8 flex gap-x-3 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Image src={item.src} alt="feature icon" width={32} height={32} />
        <div>
          <p className="text-gray-900 text-sm font-semibold leading-[1.5]">
            {item.title}
          </p>
          <p className="text-gray-500 text-[12px] font-normal leading-[1.5]">
            {item.detail}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
);

// "use client";

// import { feature, reviews } from "@/utils/mockup";
// import { CircleCheckIcon, StarIcon } from "lucide-react";
// import Image from "next/image";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Feedback from "./Feedback";
// import { Button } from "./ui/button";
// import { Product as data } from "@/utils/mockup";

// type TabOption =
//   | "Descriptions"
//   | "Additional Information"
//   | "Customer Feedback";

// export const ProductDetail = ({ id }: { id: string }) => {
//   const [selectedTab, setSelectedTab] = useState<TabOption>("Descriptions");
//   const [visibleReviews, setVisibleReviews] = useState(4); // Start with 5 reviews
//   const [rating, setRating] = useState<number | null>(null); // Rating state
//   const [comment, setComment] = useState(""); // Comment state

//   const handleTabSelect = (tabName: TabOption) => {
//     setSelectedTab(tabName);
//   };

//   const handleLoadMore = () => {
//     setVisibleReviews((prev) => prev + 2); // Load 5 more each time
//   };

//   const handleSubmitFeedback = () => {
//     // console.log({ rating, comment });
//     setRating(null);
//     setComment("");
//   };

//   const selectedData = data.find((item) => item.id === id);

//   const renderDescription = () => (
//     <div>
//       <p className="text-gray-500 font-poppins text-sm font-normal leading-[1.6]">
//         {selectedData?.description}
//       </p>
//       <ul className="pt-4 space-y-2">
//         {selectedData?.keyPoints.map((item, index) => (
//           <li
//             key={index}
//             className="text-gray-500 text-sm font-normal leading-[1.6] flex items-center gap-x-1"
//           >
//             <CircleCheckIcon className="fill-[#00B207] text-white" />
//             {item}
//           </li>
//         ))}
//       </ul>
//       <p className="text-gray-500 text-sm font-normal leading-[1.6] pt-5">
//         {selectedData?.note}
//       </p>
//     </div>
//   );

//   const renderAdditionalInfo = () => (
//     <div className="space-y-1">
//       <InfoRow
//         label="Weight:"
//         value={selectedData?.additionalInfo.weight ?? "N/A"}
//       />
//       <InfoRow
//         label="Color:"
//         value={selectedData?.additionalInfo.color ?? "N/A"}
//       />
//       <InfoRow
//         label="Type:"
//         value={selectedData?.additionalInfo.type ?? "N/A"}
//       />
//       <InfoRow
//         label="Category:"
//         value={selectedData?.additionalInfo.category ?? "N/A"}
//       />
//       <InfoRow
//         label="Stock Status:"
//         value={selectedData?.additionalInfo.stockStatus ?? "N/A"}
//       />
//       <InfoRow
//         label="Tags:"
//         value={selectedData?.additionalInfo.tag.join(", ") ?? "N/A"}
//       />
//     </div>
//   );

//   const renderCustomerFeedback = () => (
//     <div>
//       {selectedData?.comment.slice(0, visibleReviews).map((review, index) => (
//         <Feedback
//           key={index}
//           name={review.name}
//           rating={review.rating}
//           time={review.date}
//           comment={review.comment}
//         />
//       ))}
//       {visibleReviews < reviews.length && (
//         <Button
//           variant={"custom"}
//           className="border-none mt-[5.5px] rounded-full bg-[#56AC591A] hover:text-white  hover:bg-[#36a139] text-[#00B207] text-sm font-semibold leading-[16.8px]"
//           onClick={handleLoadMore}
//         >
//           Load More
//         </Button>
//       )}
//     </div>
//   );

//   const renderContent = () => {
//     switch (selectedTab) {
//       case "Descriptions":
//         return renderDescription();
//       case "Additional Information":
//         return renderAdditionalInfo();
//       case "Customer Feedback":
//         return renderCustomerFeedback();
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <TabNavigation selectedTab={selectedTab} onSelect={handleTabSelect} />
//       <div className="flex justify-evenly my-8 items-start">
//         <div className="w-[660px]">
//           {/* Animated content rendering */}
//           <motion.div
//             key={selectedTab} // This ensures each tab gets re-animated
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//           >
//             {renderContent()}
//           </motion.div>
//         </div>

//         {selectedTab === "Customer Feedback" ? (
//           <div className="p-5 rounded-md border lg:w-[500px]">
//             <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">
//               Write a review
//             </h3>
//             <form
//               onSubmit={(e) => e.preventDefault()}
//               className="space-y-6 mt-4"
//             >
//               <div>
//                 <label className="text-gray-600 text-base font-normal leading-6">
//                   Rating
//                 </label>
//                 <div className="flex gap-x-1 mt-2">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <StarIcon
//                       key={star}
//                       className={`w-6 h-6 cursor-pointer ${
//                         star <= rating! ? "text-yellow-500" : "text-gray-300"
//                       }`}
//                       onClick={() => setRating(star)}
//                     />
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="text-gray-600 text-base font-normal leading-6">
//                   Comment
//                 </label>
//                 <textarea
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                   className="mt-1  w-full p-3 border border-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-gray-400 text-base font-normal leading-[1.3]"
//                   placeholder="Share details of your own experience with this product."
//                   rows={4}
//                   required
//                 />
//               </div>

//               <Button
//                 onClick={handleSubmitFeedback}
//                 variant={"default"}
//                 className="mt-4 rounded-full bg-white text-[#00B207] hover:text-white hover:bg-[#00B207] text-base font-normal py-4 leading-[16.8px]"
//               >
//                 Post Feedback
//               </Button>
//             </form>
//           </div>
//         ) : (
//           <div className="flex flex-col gap-y-5 justify-center w-[400px] lg:w-[556px]">
//             {/* Animated iframe and feature list */}
//             <motion.iframe
//               className="w-full h-[300px] rounded-lg shadow-lg"
//               src="https://www.youtube.com/embed/gfU1iZnjRZM"
//               frameBorder="0"
//               allowFullScreen
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             />
//             <motion.div
//               className="flex gap-x-10 border rounded-md w-auto justify-center mt-4 p-4 shadow-md"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <FeatureList features={feature} />
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// interface TabNavigationProps {
//   selectedTab: TabOption;
//   onSelect: (tabName: TabOption) => void;
// }

// const TabNavigation: React.FC<TabNavigationProps> = ({
//   selectedTab,
//   onSelect,
// }) => (
//   <div className="border-b-[1px] w-full flex items-center justify-center">
//     {(
//       [
//         "Descriptions",
//         "Additional Information",
//         "Customer Feedback",
//       ] as TabOption[]
//     ).map((tabName) => (
//       <span
//         key={tabName}
//         className={
//           selectedTab === tabName
//             ? "text-gray-900 font-medium text-base leading-6 p-5 border-b-[1px] border-[#20B526]"
//             : "text-gray-500 font-medium text-base leading-6 p-5 cursor-pointer"
//         }
//         onClick={() => onSelect(tabName)}
//       >
//         {tabName}
//       </span>
//     ))}
//   </div>
// );

// interface InfoRowProps {
//   label: string;
//   value: string;
// }

// const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
//   <p className="text-gray-600 text-sm leading-[1.5]">
//     <span className="text-gray-900 font-semibold">{label}</span> {value}
//   </p>
// );

// interface FeatureItem {
//   src: string;
//   title: string;
//   detail: string;
// }

// interface FeatureListProps {
//   features: FeatureItem[];
// }

// const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
//   <div className="flex gap-x-10 rounded-md w-auto justify-center">
//     {features.map((item, index) => (
//       <motion.div
//         key={index}
//         className="py-8 flex gap-x-3 items-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: index * 0.1 }}
//       >
//         <Image src={item.src} alt="feature icon" width={32} height={32} />
//         <div>
//           <p className="text-gray-900 text-sm font-semibold leading-[1.5]">
//             {item.title}
//           </p>
//           <p className="text-gray-500 text-[12px] font-normal leading-[1.5]">
//             {item.detail}
//           </p>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// );
