"use client";

import {
  feature,
  productDescription,
  productDetails,
  reviews,
} from "@/utils/mockup";
import { CircleCheckIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Feedback from "./Feedback";

type TabOption = "Descriptions" | "Additional Information" | "Customer Feedback";

export const ProductDetail: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabOption>("Descriptions");

  const handleTabSelect = (tabName: TabOption) => {
    setSelectedTab(tabName);
  };

  const renderDescription = () => (
    <div>
      <p className="text-gray-500 font-poppins text-sm font-normal leading-[1.6]">
        {productDescription.describe}
      </p>
      <ul className="pt-4 space-y-2">
        {productDescription.list.map((item, index) => (
          <li key={index} className="text-gray-500 text-sm font-normal leading-[1.6] flex items-center gap-x-1">
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
      {reviews.map((review, index) => (
        <Feedback
          key={index}
          name={review.name}
          rating={review.rating}
          time={review.date}
          comment={review.comment}
        />
      ))}
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
        <div className="w-[660px]">{renderContent()}</div>
        <div className="flex flex-col gap-y-5 justify-center">
          <iframe
            className="w-[556px] h-[300px]"
            src="https://www.youtube.com/embed/gfU1iZnjRZM"
            frameBorder="0"
            allowFullScreen
          />
          <FeatureList features={feature} />
        </div>
      </div>
    </div>
  );
};

interface TabNavigationProps {
  selectedTab: TabOption;
  onSelect: (tabName: TabOption) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ selectedTab, onSelect }) => (
  <div className="border-b-[1px] w-full flex items-center justify-center">
    {(["Descriptions", "Additional Information", "Customer Feedback"] as TabOption[]).map((tabName) => (
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
  <div className="flex gap-x-10 border-[1px] rounded-md w-auto justify-center">
    {features.map((item, index) => (
      <div key={index} className="py-8 flex gap-x-3 items-center">
        <Image src={item.src} alt="feature icon" width={32} height={32} />
        <div>
          <p className="text-gray-900 text-sm font-semibold leading-[1.5]">
            {item.title}
          </p>
          <p className="text-gray-500 text-[12px] font-normal leading-[1.5]">
            {item.detail}
          </p>
        </div>
      </div>
    ))}
  </div>
);
