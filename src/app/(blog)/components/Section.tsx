import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Comments from "./Comments";
import CommentsDetail from "./CommentsDetail";
import { CommentIcon, TagIcon, UserIcon } from "@/components/icons/Icon";
import { Link2Icon, MoveRightIcon } from "lucide-react";
import Social from "@/components/Social";
import { SingleBlogMock as data } from "@/utils/mockup";
const Section = () => {
  return (
    <>
      <div>
        <Image
          src="/images/OrangesWithBG.png"
          alt=""
          width={900}
          height={600}
        ></Image>
        <div className="py-4 text-sm">
          {/* tag */}
          <header className="flex gap-x-5">
            <span className="flex items-center gap-x-1">
              <TagIcon />
              <p>{data.tag}</p>
            </span>
            <span className="flex gap-x-1 items-center">
              <UserIcon />
              <p>{data.by}</p>
            </span>
            <span className="flex gap-x-1 items-center">
              <CommentIcon />
              <p>{data.comment}</p>
            </span>
          </header>
          <section>
            <p className="text-[32px] font-semibold leading-10">{data.title}</p>
          </section>
          {/* profile */}
          <div className="py-8 flex justify-between  border-b">
            <div className="flex items-center gap-x-5">
              <Image
                className="bg-black rounded-full"
                src={data.user.avatar}
                alt=""
                width={50}
                height={50}
              ></Image>
              <div>
                <p>{data.user.name}</p>
                <div className="space-x-2 flex justify-center items-center text-center">
                  <span>{data.user.date}</span>
                  <span>.</span>
                  <span>Category</span>
                </div>
              </div>
            </div>
            {/* <div className="flex items-center gap-x-2">
              <Button
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                }
                size={"icon"}
              />
              <Button
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                }
                size={"icon"}
              />
              <Button
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                }
                size={"icon"}
              />
              <Button
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                }
                size={"icon"}
              />
            </div> */}
            <div className="flex gap-2">
              <Social />
              <Button
                leftIcon={<Link2Icon />}
                variant={"custom"}
                size={"icon"}
                className="hover:bg-green-600 text-black hover:text-white p-3"
              />
            </div>
          </div>
        </div>
        {/* describe */}
        <section className="py-5 space-y-3 text-lg text-[#808080]">
          <p className="text-xl font-semibold text-black">{data.des1}</p>
          <p>{data.des2}</p>
        </section>
        <div className="flex gap-x-4">
          {data.images.map((img, index) => (
            <Image
              key={index}
              className="rounded-lg"
              src={img}
              alt={`Image ${index + 1}`}
              width={425}
              height={356}
            />
          ))}

          {/* <Image
            className="rounded-lg"
            src="/images/Mangos.png"
            alt=""
            width={440}
            height={356}
          ></Image> */}
        </div>
        {/* describe */}
        <section className="py-5 space-y-3 text-lg text-[#808080]">
          <p className="text-xl font-semibold">{data.des3}</p>
        </section>
        {/* banner */}
        <div
          className="py-16 px-14 bg-black flex gap-x-14 rounded-lg"
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
            <span className="bg-[#1A1A1A] px-7 py-[22px] flex flex-col rounded-full">
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
    </>
  );
};

export default Section;
