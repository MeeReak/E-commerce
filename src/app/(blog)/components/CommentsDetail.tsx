"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { SingleBlogMock } from "@/utils/mockup";

const CommentsDetail = ({
  comment,
}: {
  comment: { name: string; comment: string; avatar: string; date: string }[];
}) => {
  const [visibleReviews, setVisibleReviews] = useState(3); // Start with 5 reviews
  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + 2); // Load 5 more each time
  };
  return (
    <>
      <div className="py-5">
        <h1 className="text-gray-900 text-2xl font-medium leading-9">
          Comments
        </h1>
        {comment.slice(0, visibleReviews).map((data, index) => (
          <div key={index} className="flex gap-x-5 border-b py-6">
            <Image
              className="bg-black rounded-full w-10 h-10"
              src={data.avatar}
              alt={data.name ? `${data.name}'s avatar` : "Avatar"} // Meaningful alt text
              width={40}
              height={40}
            />
            <div>
              <div className="flex items-center gap-x-2">
                <p className=" text-gray-900 text-sm font-medium leading-6">
                  {data.name}
                </p>
                <span>•</span>
                <span className=" text-gray-400 text-sm font-normal leading-6">
                  {data.date}
                </span>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-normal leading-6">
                  {data.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleReviews < SingleBlogMock.comments.length && (
        <Button
          variant={"custom"}
          className="border-none mt-[5.5px] rounded-full bg-[#56AC591A] hover:text-white  hover:bg-[#36a139] text-[#00B207] text-sm font-semibold leading-[16.8px]"
          onClick={handleLoadMore}
        >
          Load More
        </Button>
      )}
    </>
  );
};

export default CommentsDetail;
