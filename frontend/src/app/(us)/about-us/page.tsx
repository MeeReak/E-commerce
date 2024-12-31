import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Teams } from "@/components/Teams";
import { FeedBacks } from "@/components/FeedBacks";
import { AboutMock } from "@/utils/mockup"; // Assuming this file contains relevant mock data

export default function Page() {
  return (
    <>
      {/* Introduction Section */}
      <div className="w-[1320px] mx-auto space-y-5 py-10">
        <div className="mt-10 w-full flex justify-between">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center items-start w-full">
            <header className="text-[#1A1A1A] text-5xl font-semibold leading-[120%]">
              100% Trusted Organic Food Store
            </header>
            <p className="text-[#666] text-base font-normal leading-[150%]">
              At Green Fields, we believe in providing the freshest, organic
              produce directly to your table. We partner with local farmers to
              ensure that all our products are grown with love, care, and the
              highest sustainability standards. Enjoy a healthier life with our
              carefully curated selection of fruits, vegetables, and pantry
              staples.
            </p>
          </div>
          {/* Right Column: Image */}
          <span className="w-[220px]"></span>
          <Image
            className="rounded-lg"
            src="/images/organic.png"
            alt="Fresh Oranges"
            width={700}
            height={500}
          />
        </div>
      </div>

      {/* About Section */}
      <div className="flex h-[685px] justify-around items-center">
        <div
          className="w-full"
          style={{
            backgroundImage: `url("/images/BG.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src="/images/farmer.png"
            alt="Farmer in Field"
            width={745}
            height={685}
          />
        </div>
        <div className="py-20 space-y-5">
          <header className="inline-flex w-[700px] flex-col items-start gap-5">
            <h1 className="text-[#002603] text-5xl font-semibold leading-[120%]">
              100% Trusted Organic Food Store
            </h1>
            <p className="text-[#808080] text-base font-normal  ">
              We’re passionate about providing high-quality, organic food
              options to ensure that you and your family stay healthy. From
              fresh produce to delicious snacks and pantry essentials, our
              products are all sustainably sourced and handled with care.
            </p>
          </header>

          {/* About Us Grid */}
          <div className="grid grid-cols-2 gap-6">
            {AboutMock.map((item, index) => (
              <div key={index} className="flex items-center gap-x-3">
                <div className="w-[72px] h-[72px] flex items-center justify-center bg-green-100 rounded-full">
                  <Image
                    className=" "
                    src={item.src}
                    alt={item.name}
                    width={42}
                    height={42}
                  />
                </div>
                <div>
                  <p className="text-[#1A1A1A] text-lg font-medium leading-[150%]">
                    {item.name}
                  </p>
                  <span className="text-[#808080]  text-sm font-normal leading-[150%]">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="w-[1320px] mx-auto space-y-5 py-10">
        <div className="mt-10 w-full flex justify-around">
          <div className="w-full py-20 space-y-5">
            <header className="text-[#002603] text-5xl font-semibold leading-[120%]">
              We Delivered, You Enjoy Your Order.
            </header>
            <p className="text-[#808080] text-base font-normal">
              Our efficient delivery service ensures that your order reaches you
              fresh and on time. Whether you&apos;re planning a big family meal
              or a small dinner, we&apos;ve got you covered with the best
              organic options.
            </p>
            <div className="inline-flex text-[#808080] text-base font-normal gap-2">
              <span>🚚</span>
              <p>Freshly picked and delivered directly to your door!</p>
            </div>
            <Button className="rounded-full" rightIcon={<MoveRightIcon />}>
              Shop Now
            </Button>
          </div>
          <span className="w-[220px]"></span>
          <div className="w-full flex items-center">
            <Image
              className="rounded-lg"
              src="/images/delivery.png"
              alt="Fresh Oranges"
              width={700}
              height={700}
            />
          </div>
        </div>

        {/* Team Section */}
        <div>
          <Teams />
        </div>

        {/* Customer Feedback Section */}
        <div>
          <FeedBacks />
        </div>
      </div>
    </>
  );
}
