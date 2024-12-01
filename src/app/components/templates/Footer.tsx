import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div>
        {/* subcribe */}
        <div className="flex flex-row justify-around items-center bg-[#F7F7F7] text-black py-8  box-border px-20">
          <div className="text-2xl font-semibold ">
            <p>Subcribe our NewSletter</p>
            <p className="font-normal text-[14px] leading-[20px]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec <br />
              tellus. Phasellus imperdiet elit eu magna.
            </p>
          </div>
          {/* <p className="font-normal text-[14px] w-1/2">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p> */}
          <div className="flex items-center gap-5">
            <Input
              type="text"
              placeholder="Your email address"
              className="rounded-full px-6 py-6 pr-56"
            />
            <Button
              variant={"custom"}
              className="rounded-full px-10 py-4 bg-[#2C742F] -ml-16 z-10"
            >
              Subcribe
            </Button>
          </div>
          <div className="flex items-center gap-x-4">
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

        {/* footer */}
        <div className="flex flex-row justify-around box-border bg-[#1A1A1A] text-white py-16">
          <div className="flex flex-col space-y-5">
            <header className="flex gap-x-2 items-center">
              <Image src="/svg/logo.svg" alt="" width={32} height={32} />
              <h1 className="font-bold text-[32px]">Ecobar</h1>
            </header>
            <p className="text-sm leading-5 ">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="flex space-x-5  font-semibold text-sm  ">
              <p className="border-b-2 border-green-600 cursor-pointer">
                (219) 555-0114
              </p>
              <p>Or</p>
              <p className="border-b-2 border-green-600 cursor-pointer">
                Proxy@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-16">
            <div>
              <h1 className="mb-4 font-bold text-base">My Account</h1>
              <span className="space-y-3 text-sm">
                <p>My Account</p>
                <p>Order History</p>
                <p>Shoping Cart</p>
                <p>Wishlist</p>
              </span>
            </div>

            {/* help */}
            <div>
              <h1 className="mb-4 font-bold text-base">Help</h1>
              <span className="space-y-3 text-sm ">
                <p>Contact</p>
                <p>Faqs</p>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
              </span>
            </div>
            {/* proxy */}
            <div>
              <h1 className="mb-4 font-bold text-base">Proxy</h1>
              <span className="space-y-3 text-sm ">
                <p>About</p>
                <p>Shop</p>
                <p>Product</p>
                <p>Track Order</p>
              </span>
            </div>
            {/* Categories */}
            <div>
              <h1 className="mb-4 font-bold text-base">Categories</h1>
              <span className="space-y-3 text-sm ">
                <p>Fruit & Vegetables</p>
                <p>Meat & Fish</p>
                <p>Bread & Bakery</p>
                <p>Beauty & Health</p>
              </span>
            </div>
          </div>
          {/* <div>
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
                      <Image src={id.src} alt="" width={28} height={28} />
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
            </div> */}
        </div>
        <div className="flex justify-around items-center bg-[#1A1A1A] text-white py-6">
          <div className="flex items-center">
            <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
          </div>
          <span className="w-[50px]"></span>
          <div className="flex items-center gap-x-3">
            <div className="border border-gray-300 p-2 rounded-lg">
              Apple Pay
            </div>
            <div className="border border-gray-300 p-2 rounded-lg">VISA</div>
            <div className="border border-gray-300 p-2 rounded-lg">
              Discover
            </div>
            <div className="border border-gray-300 p-2 rounded-lg">
              Master card
            </div>
            <div className="border border-gray-300 p-2 rounded-lg">Cart</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
