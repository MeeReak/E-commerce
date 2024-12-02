"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { SingleBlogMock } from "@/utils/mockup";
const CommentsDetail = () => {
  const [visibleReviews, setVisibleReviews] = useState(4); // Start with 5 reviews
  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + 2); // Load 5 more each time
  };
  return (
    <>
      <div className="py-10">
        <h1 className="text-2xl	 font-semibold">Comments</h1>
        {SingleBlogMock.comments.slice(0, visibleReviews).map((data, index) => (
          <div key={index} className="flex gap-x-5 border-b py-5">
            <Image
              className="bg-black rounded-full w-10 h-10"
              src={data.avatar} // Fallback to a default avatar if not available
              alt={data.name ? `${data.name}'s avatar` : "Avatar"} // Meaningful alt text
              width={40}
              height={40}
            />
            <div>
              <div className="flex items-center gap-x-1">
                <p>{data.name}</p>
                <span>.</span>
                <span className="text-[#999999]">{data.date}</span>
              </div>
              <div>
                <p className="text-sm text-[#666666]">{data.comment}</p>
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
