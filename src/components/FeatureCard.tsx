import Image from "next/image";
import React from "react";
import { mainFeature as MainFeature } from "@/utils/mockup";

interface FeatureCardProps {
  image: string;
  title: string;
  detail: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, detail }) => (
  <div className="flex gap-x-4 w-full animate-fade-slide">
    <Image src={image} width={40} height={40} alt={title} />
    <div className="space-y-2">
      <p className="text-gray-900 text-[16px] font-semibold leading-[120%]">
        {title}
      </p>
      <p className="text-gray-400 text-[14px] font-normal leading-[150%]">
        {detail}
      </p>
    </div>
  </div>
);

export const Featured: React.FC = () => (
  <div className="flex gap-x-8 p-10 shadow-md">
    {MainFeature.map((item, index) => (
      <FeatureCard
        key={index}
        image={item.image}
        title={item.title}
        detail={item.detail}
      />
    ))}
  </div>
);
