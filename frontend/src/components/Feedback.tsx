import React from "react";
import { Profile } from "./Profile";
import { renderStars } from "@/app/_components/atoms/RenderStar";

interface IFeedbackProps {
  rating: number;
  name: string;
  time: string;
  comment: string;
  src?: string;
}

const FeedbackHeader = ({
  name,
  rating,
  time,
}: Pick<IFeedbackProps, "name" | "rating" | "time">) => (
  <div className="flex items-center justify-between gap-x-[400px]">
    <div className="flex gap-x-3">
      <Profile />
      <div className="flex flex-col">
        <h4 className="text-[#1A1A1A] text-base font-semibold leading-[21px]">
          {name}
        </h4>
        <div className="flex space-x-1">{renderStars({ rating })}</div>
      </div>
    </div>
    <span className="text-[#999] text-right text-sm font-normal leading-[21px]">
      {time}
    </span>
  </div>
);

const Feedback = ({ comment, name, rating, time }: IFeedbackProps) => (
  <div className="border-b border-[#E6E6E6] mb-4">
    <FeedbackHeader name={name} rating={rating} time={time} />
    <p className="text-[rgb(128,128,128)] text-sm font-normal leading-[21px] pt-3 pb-4 max-w-[760px]">
      {comment}
    </p>
  </div>
);

export default Feedback;
