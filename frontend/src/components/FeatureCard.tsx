"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { mainFeature as MainFeature } from "@/utils/mockup";

interface FeatureCardProps {
  image: string;
  title: string;
  detail: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, detail }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated-slide-in-up"); // Add animation class
            entry.target.classList.remove("opacity-0"); // Ensure visibility
          } else {
            entry.target.classList.remove("animated-slide-in-up"); // Remove animation class
            entry.target.classList.add("opacity-0"); // Hide when out of view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const current = cardRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex gap-x-4 w-full opacity-0 animated-slide-in-up"
    >
      <Image
        src={image}
        width={40}
        height={40}
        alt={title}
      />
      <div className="space-y-2">
        <p className="text-[#1A1A1A] text-lg font-semibold leading-[27px]">
          {title}
        </p>
        <p className="text-[#999] text-sm font-normal leading-[21px]">
          {detail}
        </p>
      </div>
    </div>
  );
};

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
