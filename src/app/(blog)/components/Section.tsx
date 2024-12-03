import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Comments from "./Comments";
import CommentsDetail from "./CommentsDetail";
import {
  Link2Icon,
  MessageSquareIcon,
  MoveRightIcon,
  TagIcon,
  UserIcon,
} from "lucide-react";
import Social from "@/components/Social";
import { SingleBlogMock as data } from "@/utils/mockup";
import { CardIconText } from "@/components/BlogCard";
const Section = () => {
  return (
    <div className="pt-10">
      <Image
        src="/images/OrangesWithBG.png"
        alt=""
        className="rounded-md"
        width={876}
        height={600}
      />
      <div className="text-sm">
        {/* tag */}
        <div className="flex items-center gap-x-5 pt-8 pb-2">
          <CardIconText
            className="text-[#00B207]"
            Icon={TagIcon}
            text={data.tag}
          />
          <div className="flex gap-x-2 items-center">
            <UserIcon className="text-[#00B207] stroke-[1.5px]" />
            <span className="text-[#4D4D4D] text-sm font-normal leading-[21px]">
              By
            </span>
            <p className="text-gray-700 text-sm font-normal leading-[21px]">
              {data.by}
            </p>
          </div>
          <CardIconText
            className="text-[#00B207]"
            Icon={MessageSquareIcon}
            text={data.comment.toString()}
          />
        </div>
        <section>
          <p className="text-gray-900 text-2xl font-medium leading-[44.8px]">
            {data.title}
          </p>
        </section>
        {/* profile */}
        <div className="py-6 flex justify-between border-b">
          <div className="flex items-center gap-x-5">
            <Image
              className=" rounded-full"
              src={data.user.avatar}
              alt=""
              width={50}
              height={50}
            />
            <div>
              <p className="text-gray-900 text-base font-medium leading-[24px]">
                {data.user.name}
              </p>
              <div className="space-x-2 flex justify-center items-center">
                <p className="text-gray-500 text-sm font-normal leading-[21px]">
                  {data.user.date}
                </p>
                <span className=" text-gray-500 text-sm font-normal leading-[21px]">
                  •
                </span>
                <p className="text-gray-500 text-sm font-normal leading-[21px]">
                  Category
                </p>
              </div>
            </div>
          </div>

          <div className="flex">
            <Social />
            <Button
              leftIcon={<Link2Icon className=" stroke-[1.5px]" />}
              variant={"custom"}
              size={"icon"}
              className="hover:bg-green-600 text-black hover:text-white p-3"
            />
          </div>
        </div>
      </div>
      {/* describe */}
      <section className="py-6 space-y-3 text-lg text-[#808080]">
        <p className="text-gray-900 text-[20px] font-medium leading-[30px]">
          {data.des1}
        </p>
        <p className="text-gray-500 text-[18px] font-normal leading-[27px]">
          {data.des2}
        </p>
      </section>
      <div className="flex gap-x-6 items-center">
        {data.images.map((img, index) => (
          <Image
            key={index}
            className="rounded-md"
            src={img}
            alt={`Image ${index + 1}`}
            width={440}
            height={356}
          />
        ))}
      </div>
      {/* describe */}
      <section className="py-6 space-y-3 text-lg text-[#808080]">
        <p className="text-gray-500 text-[18px] font-normal leading-[27px]">
          {data.des3}
        </p>
      </section>
      {/* banner */}
      <div
        className="py-16 px-14  flex gap-x-14 rounded-lg"
        style={{
          backgroundImage: `url("/images/Rectangle51.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white">
          <p className="text-sm	">Summer Sales</p>
          <p className="pb-4 text-4xl	font-bold">Fresh Fruit</p>
          <Button className="rounded-full" rightIcon={<MoveRightIcon />}>
            Shop Now
          </Button>
        </div>
        <div>
          <span className="bg-gray-900 px-7 py-[22px] flex flex-col rounded-full">
            <p className="text-white uppercase text-[11px] text-center">
              up to
            </p>
            <p className="text-orange-500 text-center text-2xl font-semibold">
              56%
            </p>
            <p className="text-[rgba(255,255,255,0.80)] text-center font-poppins text-sm font-medium leading-[100%] tracking-[0.42px] uppercase">
              OFF
            </p>
          </span>
        </div>
      </div>
      {/* leave a comment */}
      <div className="py-10">
        <Comments />
        <CommentsDetail />
      </div>
    </div>
  );
};

export default Section;
