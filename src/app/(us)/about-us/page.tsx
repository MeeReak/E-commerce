import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Teams } from "@/components/Teams";
import { FeedBacks } from "@/components/FeedBacks";
import { AboutMock } from "@/utils/mockup";
export default function page() {
  return (
    <>
      <div className="w-[1320px] mx-auto space-y-5 py-10">
        <div className="mt-10 w-full flex justify-around">
          <div className="flex flex-col justify-center items-start w-full">
            <header className="text-6xl	font-semibold leading-[120%]">
              100% Trusted <br /> Organic Food Store
            </header>
            <p className="pt-6 text-lg	text-[#666666]">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <span className="w-[220px]"></span>
          <div className="w-full flex items-center">
            <Image
              className="rounded-lg"
              src="/images/Oranges.png"
              alt=""
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
      <div className="flex h-[685px] justify-around">
        <div
          className="w-full"
          style={{
            backgroundImage: `url("/images/BG.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image src="/images/farmer.png" alt="" width={745} height={685} />
        </div>
        <div className="py-20 space-y-5">
          <header className="inline-flex flex-col items-start gap-5">
            <h1 className="text-6xl	font-semibold leading-[120%]">
              100% Trusted <br /> Organic Food Store
            </h1>
            <p className="text-base font-normal w-[80%] text-[#808080]">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.{" "}
            </p>
          </header>
          
          <div className="grid grid-cols-2 gap-6">
            {AboutMock.map((item, index) => (
              <div key={index} className="flex items-center gap-x-3">
                <Image
                  className="bg-black rounded-full"
                  src={item.src}
                  alt={item.name}
                  width={72}
                  height={72}
                />
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[1320px] mx-auto space-y-5 py-10">
        <div className="mt-10 w-full flex justify-around">
          <div className=" w-full py-20 space-y-5">
            <header className="text-6xl	font-semibold leading-[120%]">
              We Delivered, You Enjoy Your Order.
            </header>
            <p className="text-lg	text-[#666666]">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>
            <div className="inline-flex gap-x-2">
              <span>ICON</span>
              <p>Sed in metus pellentesque.</p>
            </div>
            <Button className="rounded-full" rightIcon={<MoveRightIcon />}>
              Shop Now
            </Button>
          </div>
          <span className="w-[220px]"></span>
          <div className="w-full flex items-center">
            <Image
              className="rounded-lg"
              src="/images/Oranges.png"
              alt=""
              width={700}
              height={700}
            />
          </div>
        </div>
        {/* team */}
        <div>
          <Teams />
        </div>
        {/* feedback */}
        <div>
          <FeedBacks />
        </div>
      </div>
    </>
  );
}
