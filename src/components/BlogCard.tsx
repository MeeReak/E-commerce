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
}

const CardIconText: React.FC<CardIconTextProps> = ({ Icon, text }) => (
  <div className="flex gap-x-2 items-center">
    <Icon className="text-[#B3B3B3]" />
    <p className="text-gray-700 text-sm font-normal leading-[21px]">{text}</p>
  </div>
);

interface BlogCardProps {
  blog: {
    id: number;
    src: string;
    tag: string;
    user: string;
    comment: number;
    title: string;
  };
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { id, src, tag, user, comment, title } = blog;

  return (
    <div key={id} className="group shadow-md rounded-sm">
      <Image
        className="h-[323px] w-[424px] object-cover rounded-tl-sm rounded-tr-sm"
        src={src}
        alt="Blog image"
        width={424}
        height={324}
      />
      <div className="flex flex-col gap-y-5 p-6 shadow-sm">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-5">
            <CardIconText Icon={TagIcon} text={tag} />
            <div className="flex gap-x-2 items-center">
              <UserIcon className="text-[#B3B3B3]" />
              <span className="text-[#4D4D4D] text-sm font-normal leading-[21px]">
                By
              </span>
              <p className="text-gray-700 text-sm font-normal leading-[21px]">
                {user}
              </p>
            </div>
            <CardIconText Icon={MessageSquareIcon} text={comment.toString()} />
          </div>
          <p className="w-[376px] text-black text-lg font-medium leading-[27px] group-hover:text-[#2C742F]">
            {title}
          </p>
        </div>
        <Link
          href="#"
          className="flex text-[#00B207] gap-x-2 items-center text-base font-semibold leading-[19.2px] group-hover:text-[#2C742F]"
        >
          Read More <MoveRightIcon />
        </Link>
      </div>
    </div>
  );
};
