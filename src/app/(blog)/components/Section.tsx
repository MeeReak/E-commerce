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
import { CardIconText } from "@/components/BlogCard";
import { BlogsMock as blog } from "@/utils/mockup";

const BlogTag = ({ tag }: { tag: string }) => (
  <CardIconText className="text-[#00B207]" Icon={TagIcon} text={tag} />
);

const AuthorInfo = ({ author }: { author: string; date: string }) => (
  <div className="flex gap-x-2 items-center">
    <UserIcon className="text-[#00B207] stroke-[1.5px]" />
    <span className="text-[#4D4D4D] text-sm font-normal leading-[21px]">
      By
    </span>
    <p className="text-gray-700 text-sm font-normal leading-[21px]">{author}</p>
  </div>
);

const BlogTitle = ({ title }: { title: string }) => (
  <p className="text-gray-900 text-2xl font-medium leading-[44.8px]">{title}</p>
);

const AuthorProfile = ({
  avatar,
  name,
  date,
  cate,
}: {
  avatar: string;
  name: string;
  date: string;
  cate: string;
}) => (
  <div className="py-6 flex justify-between border-b">
    <div className="flex items-center gap-x-5">
      <Image
        className="rounded-full"
        src={avatar}
        alt={name}
        width={50}
        height={50}
      />
      <div>
        <p className="text-gray-900 text-base font-medium leading-[24px]">
          {name}
        </p>
        <div className="space-x-2 flex justify-center items-center">
          <p className="text-gray-500 text-sm font-normal leading-[21px]">
            {date}
          </p>
          <span className="text-gray-500 text-sm font-normal leading-[21px]">
            •
          </span>
          <p className="text-gray-500 text-sm font-normal leading-[21px]">
            {cate}
          </p>
        </div>
      </div>
    </div>
    <div className="flex">
      <Social />
      <Button
        leftIcon={<Link2Icon className="stroke-[1.5px]" />}
        variant="custom"
        size="icon"
        className="hover:bg-green-600 text-black hover:text-white p-3"
      />
    </div>
  </div>
);

const ImageGallery = ({ images }: { images: string[] }) => (
  <div className="flex gap-x-6 items-center">
    {images.map((img, index) => (
      <Image
        key={index}
        className="rounded-md max-w-[424px] max-h-[356px] object-contain"
        src={img}
        alt={`Image ${index + 1}`}
        width={440}
        height={356}
      />
    ))}
  </div>
);

const Banner = () => (
  <div
    className="py-16 px-14 flex gap-x-14 rounded-lg"
    style={{
      backgroundImage: `url("/images/Rectangle51.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="text-white">
      <p className="text-sm">Summer Sales</p>
      <p className="pb-4 text-4xl font-bold">Fresh Fruit</p>
      <Button className="rounded-full" rightIcon={<MoveRightIcon />}>
        Shop Now
      </Button>
    </div>
    <div>
      <span className="bg-gray-900 px-7 py-[22px] flex flex-col rounded-full">
        <p className="text-white uppercase text-[11px] text-center">up to</p>
        <p className="text-orange-500 text-center text-2xl font-semibold">
          56%
        </p>
        <p className="text-[rgba(255,255,255,0.80)] text-center   text-sm font-medium leading-[100%] tracking-[0.42px] uppercase">
          OFF
        </p>
      </span>
    </div>
  </div>
);

const Section = ({ id }: { id: string }) => {
  const selectBlog = blog.find((item) => item.id === id);

  if (!selectBlog) return null;

  const {
    src,
    tag,
    title,
    category,
    by,
    comment,
    des1,
    des2,
    des3,
    images,
    user,
    comments,
  } = selectBlog;

  return (
    <div className="pt-10">
      <Image
        src={src}
        alt="Blog image"
        className="rounded-md max-w-[876px] max-h-[600px] object-contain"
        width={876}
        height={600}
      />
      <div className="text-sm">
        {/* Blog Tag, Author Info, and Comments */}
        <div className="flex items-center gap-x-5 pt-8 pb-2">
          <BlogTag tag={tag} />
          <AuthorInfo author={by} date={user.date} />
          <CardIconText
            className="text-[#00B207]"
            Icon={MessageSquareIcon}
            text={comment.toString()}
          />
        </div>
        <section>
          <BlogTitle title={title} />
        </section>

        {/* Author Profile */}
        <AuthorProfile
          avatar={user.avatar}
          name={user.name}
          date={user.date}
          cate={category}
        />

        {/* Blog Description */}
        <section className="py-6 space-y-3 text-lg text-[#808080]">
          <p className="text-gray-900 text-[20px] font-medium leading-[30px]">
            {des1}
          </p>
          <p className="text-gray-500 text-[18px] font-normal leading-[27px]">
            {des2}
          </p>
        </section>

        {/* Image Gallery */}
        <ImageGallery images={images} />

        {/* Additional Description */}
        <section className="py-6 space-y-3 text-lg text-[#808080]">
          <p className="text-gray-500 text-[18px] font-normal leading-[27px]">
            {des3}
          </p>
        </section>

        {/* Banner */}
        <Banner />

        {/* Comments Section */}
        <div className="py-10">
          <Comments />
          <CommentsDetail comment={comments} />
        </div>
      </div>
    </div>
  );
};

export default Section;
