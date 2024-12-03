import {
  MessageSquareIcon,
  MoveRightIcon,
  TagIcon,
  UserIcon,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the props for CardIconText with TypeScript
interface CardIconTextProps {
  Icon: LucideIcon;
  text: string;
  className?: string;
}

export const CardIconText: React.FC<CardIconTextProps> = ({
  Icon,
  text,
  className = "text-[#B3B3B3]",
}) => (
  <div className={`flex gap-x-2 items-center`}>
    <Icon className={` ${className}  stroke-[1.5px]`} />
    <p className="text-gray-700 text-sm font-normal leading-[21px]">{text}</p>
  </div>
);

interface BlogCardProps {
  id: string;
  src: string;
  tag: string;
  user: string;
  comment: string;
  title: string;
  day: number;
  month: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  id,
  src,
  tag,
  user,
  comment,
  title,
  day,
  month,
}) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="group shadow-md rounded-sm relative block">
        {/* Image Section */}
        <Image
          className="h-[323px] w-[424px] object-cover rounded-tl-sm rounded-tr-sm"
          src={src}
          alt="Blog image"
          width={424}
          height={324}
        />
        <span className="absolute top-[47%] left-[20px] bg-white rounded-md py-[10px] px-4">
          <p className="text-[#1A1A1A] text-center text-[20px] font-medium leading-[30px]">
            {day}
          </p>
          <p className="text-[#808080] text-[12px] font-medium leading-[12px] tracking-[0.36px] uppercase">
            {month.slice(0, 3)}
          </p>
        </span>

        {/* Content Section */}
        <div className="flex flex-col gap-y-3 p-5 shadow-sm">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-5">
              <CardIconText Icon={TagIcon} text={tag} />
              <div className="flex gap-x-2 items-center">
                <UserIcon className="text-[#B3B3B3] stroke-1" />
                <span className="text-[#4D4D4D] text-sm font-normal leading-[21px]">
                  By
                </span>
                <p className="text-gray-700 text-sm font-normal leading-[21px]">
                  {user}
                </p>
              </div>
              <CardIconText
                Icon={MessageSquareIcon}
                text={comment.toString()}
              />
            </div>
            <p className="w-[376px] line-clamp-2 text-black text-[14px] font-medium leading-[27px] ">
              {title}
            </p>
          </div>
          <div className="flex text-[#00B207] gap-x-2 items-center text-base font-semibold leading-[19.2px] group-hover:text-[#2C742F]">
            Read More <MoveRightIcon />
          </div>
        </div>
      </div>
    </Link>
  );
};
