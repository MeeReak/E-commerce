import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="container w-[1320px]">
      {/* subcribe */}
      <div className="w-full bg-black text-white p-[60px]">
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            <div className="flex justify-center items-center">
              <Button
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                    />
                  </svg>
                }
                size={"icon"}
                variant={"custom"}
                className="shadow-none text-[#00B207]"
              />
            </div>
            <div>
              <header className="font-medium text-2xl">
                Subcribe our NewSletter
              </header>
              <p className="font-normal text-[14px] text-[#666666]">
                Pellentesque eu nibh eget mauris congue mattis matti.
              </p>
            </div>
          </div>
          <div className="flex">
            <Input
              type="text"
              placeholder="Your email address"
              className="rounded-full outline-none w-[460px] border-none bg-[#333333] !px-6 !py-4"
            />
            <Button size={"small"} className="rounded-full px-10 -ml-32">
              Subcribe
            </Button>
          </div>
          <div className="flex gap-2">
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
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="w-full bg-[#F2F2F2] p-[60px]">
        <div className="flex space-x-20">
          <div className="w-[336px] space-y-4">
            <header className="flex space-x-2">
              <span className="flex justify-center items-center">
                <Image
                  src="/svg/logo.png"
                  alt=""
                  width={32}
                  height={32}
                />
              </span>
              <h1 className="font-bold text-[32px]">Ecobar</h1>
            </header>
            <p className="text-[#808080] text-sm leading-5 w-[90%]">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="flex space-x-5  font-semibold text-[#1A1A1A] text-sm  ">
              <p className="border-b-2 border-green-600 cursor-pointer">
                (219) 555-0114
              </p>
              <p>Or</p>
              <p className="border-b-2 border-green-600 cursor-pointer">
                Proxy@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h1 className="mb-4 font-bold text-base">My Account</h1>
            <span className="space-y-3 text-sm text-[#666666]">
              <p>My Account</p>
              <p>Order History</p>
              <p>Shoping Cart</p>
              <p>Wishlist</p>
            </span>
          </div>

          {/* help */}
          <div>
            <h1 className="mb-4 font-bold text-base">Help</h1>
            <span className="space-y-3 text-sm text-[#666666]">
              <p>Contact</p>
              <p>Faqs</p>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
            </span>
          </div>
          {/* proxy */}
          <div>
            <h1 className="mb-4 font-bold text-base">Proxy</h1>
            <span className="space-y-3 text-sm text-[#666666]">
              <p>About</p>
              <p>Shop</p>
              <p>Product</p>
              <p>Track Order</p>
            </span>
          </div>
          <div>
            <h3 className="mb-4 text-base font-bold">Download Mobile App</h3>
            <div className="flex gap-3">
              {[
                { src: "/svg/AppleLogo.svg", name: "App Store" },
                { src: "/svg/Play-store.svg", name: "Play Store" },
              ].map((id) => (
                <div
                  key={id.name}
                  className="flex p-[10px] space-x-3 bg-white w-[154px]"
                >
                  <div className="flex justify-center items-center">
                    <Image src={id.src} alt="" width={28} height={28}/>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#4D4D4D]">
                      Download on the
                    </p>
                    <p className="text-base font-semibold">{id.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
