import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const accountItems = [
    { label: "My Account", href: "/setting" },
    { label: "Orders", href: "/orders" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Address", href: "/contact-us" },
  ];

  const helpItems = [
    { label: "Contact", href: "/contact-us" },
    { label: "Faqs", href: "/faqs" },
    { label: "Terms & Condition", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  const proxyItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Our Services", href: "/" },
    { label: "Our Team", href: "/about-us" },
    { label: "Our Mission", href: "/about-us" },
  ];

  const categoriesItems = [
    { label: "Vegetables", href: "/shop/1?category=vegetable" },
    { label: "Fruits", href: "/shop/1?category=fruit" },
    { label: "Meat", href: "/shop/1?category=meat" },
    { label: "Ingredients", href: "/shop/1?category=ingredients" },
  ];

  const FooterSection: React.FC<{
    title: string;
    items: { label: string; href: string }[];
  }> = ({ title, items }) => (
    <div>
      <h1 className="text-white mb-5 text-base font-medium leading-[24px]">
        {title}
      </h1>
      <span className="space-y-3 text-sm">
        {items.map(
          (
            item: {
              label: string;
              href: string;
            },
            index
          ) => (
            <p
              key={index}
              className="text-gray-400 cursor-pointer hover:text-white text-sm font-normal leading-[21px]"
            >
              <Link href={item.href}> {item.label}</Link>
            </p>
          )
        )}
      </span>
    </div>
  );

  const FooterContact = () => (
    <div className="flex flex-col space-y-4">
      <Link href={`/`} className="flex gap-x-2 items-center">
        <Image src="/svg/logo.svg" alt="EcoFresh Logo" width={32} height={32} />
        <h1 className="text-white text-2xl font-medium leading-[38px] tracking-[-0.96px]">
          EcoFresh
        </h1>
      </Link>
      <p className="text-gray-500 text-sm leading-[21px] max-w-[336px]">
        Your trusted source for natural, organic, and health-conscious products.
        We offer a wide variety of wellness essentials to support your healthy
        lifestyle.
      </p>
      <div className="flex space-x-5 font-semibold text-sm">
        <p className="border-b-2 border-green-600 text-white text-sm font-medium leading-[21px]">
          (+855) 555-048-72
        </p>
        <p className="text-gray-500 text-sm leading-[21px]">Or</p>
        <p className="border-b-2 border-green-600 text-white text-sm font-medium leading-[21px]">
          ecofresh@gmail.com
        </p>
      </div>
    </div>
  );
  return (
    <>
      <div>
        {/* footer */}
        <div className="flex justify-around box-border bg-[#1A1A1A] pt-16 pb-10">
          {/* Contact Info */}
          <FooterContact />

          {/* Spacer */}
          <p className="" />

          {/* Footer Sections */}
          <div className="flex items-center gap-x-10">
            <FooterSection title="My Account" items={accountItems} />
            <FooterSection title="Help" items={helpItems} />
            <FooterSection title="Proxy" items={proxyItems} />
            <FooterSection title="Categories" items={categoriesItems} />
          </div>
        </div>

        <div className="flex justify-around items-center bg-[#1A1A1A]  text-white py-6">
          <div className="flex items-center ">
            <p className="text-gray-500 text-sm font-normal leading-[21px]">
              EcoFresh eCommerce © 2024. All Rights Reserved
            </p>
          </div>
          <span className="w-[180px]"></span>
          <div className="flex items-center gap-x-3">
            <div className="border border-gray-700 px-[11px] py-[13px] rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="15"
                viewBox="0 0 33 15"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.50659 2.04236C6.12888 2.5081 5.52454 2.87545 4.9202 2.82298C4.84466 2.19323 5.14054 1.52413 5.48677 1.11086C5.86448 0.631998 6.52548 0.290888 7.06057 0.264648C7.12352 0.92063 6.87801 1.56349 6.50659 2.04236ZM7.05348 2.94759C6.52106 2.91566 6.03526 3.11444 5.64287 3.275C5.39035 3.37832 5.17652 3.46582 5.01383 3.46582C4.83127 3.46582 4.60861 3.37364 4.35861 3.27015C4.03103 3.13454 3.65651 2.97951 3.26377 2.98695C2.36356 3.00007 1.5263 3.53141 1.06675 4.37763C0.12247 6.07006 0.821236 8.5759 1.73404 9.95346C2.181 10.6357 2.71609 11.3835 3.42115 11.3573C3.73133 11.3451 3.95446 11.2464 4.18538 11.1443C4.45123 11.0268 4.7274 10.9046 5.15862 10.9046C5.5749 10.9046 5.83899 11.0236 6.0925 11.1377C6.33355 11.2463 6.56504 11.3505 6.90869 11.3441C7.63893 11.331 8.09848 10.6619 8.54544 9.9797C9.02778 9.2475 9.23974 8.5329 9.27191 8.42445L9.27568 8.41191C9.27491 8.41111 9.26895 8.40826 9.25844 8.40325C9.0972 8.32633 7.86479 7.73842 7.85297 6.1619C7.8411 4.83863 8.83048 4.16819 8.98623 4.06265C8.9957 4.05623 9.0021 4.0519 9.00498 4.04964C8.37547 3.07879 7.39342 2.97383 7.05348 2.94759ZM12.1076 11.272V1.04524H15.7903C17.6914 1.04524 19.0197 2.40968 19.0197 4.40386C19.0197 6.39805 17.6662 7.7756 15.7399 7.7756H13.631V11.272H12.1076ZM13.6328 2.38347H15.3891C16.7111 2.38347 17.4665 3.11817 17.4665 4.41045C17.4665 5.70274 16.7111 6.44399 15.3828 6.44399H13.6328V2.38347ZM24.0495 10.0453C23.6466 10.8456 22.759 11.3507 21.8021 11.3507C20.3857 11.3507 19.3973 10.4717 19.3973 9.14662C19.3973 7.83466 20.3542 7.08028 22.1232 6.96877L24.0243 6.85069V6.28655C24.0243 5.45345 23.5018 5.00083 22.5701 5.00083C21.8021 5.00083 21.2418 5.41409 21.1285 6.04384H19.7562C19.8002 4.71875 20.9963 3.75446 22.6142 3.75446C24.358 3.75446 25.4911 4.70564 25.4911 6.18159V11.272H24.081V10.0453H24.0495ZM22.212 10.1372C21.3999 10.1372 20.8837 9.73044 20.8837 9.10726C20.8837 8.4644 21.3811 8.09049 22.3316 8.03145L24.025 7.91994V8.4972C24.025 9.45493 23.2444 10.1372 22.212 10.1372ZM30.1704 11.6721C29.5597 13.463 28.861 14.0534 27.3753 14.0534C27.262 14.0534 26.8843 14.0402 26.7961 14.014V12.7873C26.8906 12.8004 27.1235 12.8136 27.2431 12.8136C27.9167 12.8136 28.2944 12.5184 28.5273 11.7509L28.6658 11.2982L26.0848 3.85286H27.6775L29.4716 9.89444H29.5031L31.2972 3.85286H32.8458L30.1704 11.6721Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="border border-gray-700 px-[11px] py-[15px] rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="12"
                viewBox="0 0 32 12"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.2308 10.9889H5.50467L3.46041 2.96049C3.36338 2.59119 3.15736 2.2647 2.85431 2.11082C2.09801 1.72412 1.26462 1.41637 0.355469 1.26115V0.952061H4.74705C5.35315 0.952061 5.80772 1.41637 5.88349 1.95561L6.94416 7.74673L9.66896 0.952061H12.3193L8.2308 10.9889ZM13.8337 10.9889H11.2591L13.3791 0.952061H15.9537L13.8337 10.9889ZM19.2866 3.73255C19.3623 3.19198 19.8169 2.88289 20.3472 2.88289C21.1806 2.80528 22.0885 2.96049 22.8461 3.34586L23.3007 1.18489C22.543 0.875796 21.7096 0.720581 20.9533 0.720581C18.4545 0.720581 16.6362 2.11083 16.6362 4.04031C16.6362 5.50816 17.9242 6.27888 18.8333 6.74319C19.8169 7.20616 20.1957 7.51525 20.12 7.97822C20.12 8.67267 19.3623 8.98177 18.606 8.98177C17.6969 8.98177 16.7877 8.75028 15.9557 8.36358L15.5011 10.5259C16.4102 10.9112 17.3938 11.0665 18.303 11.0665C21.1049 11.1427 22.8461 9.75383 22.8461 7.66913C22.8461 5.04385 19.2866 4.88998 19.2866 3.73255ZM31.8564 10.9889L29.8121 0.952061H27.6163C27.1617 0.952061 26.7072 1.26115 26.5556 1.72412L22.7702 10.9889H25.4205L25.9495 9.52234H29.206L29.5091 10.9889H31.8564ZM27.9933 3.65494L28.7496 7.43764H26.6296L27.9933 3.65494Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="icon-container border border-gray-700 p-2 py-[10.5px] rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="20"
                viewBox="0 0 41 20"
                fill="none"
              >
                <path
                  d="M15.5273 19.6765L40.6744 12.0662V16.6765C40.6744 18.3333 39.3313 19.6765 37.6744 19.6765H15.5273Z"
                  fill="#FD6020"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.9027 1.05844C37.2861 1.05844 38.047 1.69843 38.047 2.90728C38.1162 3.8317 37.4937 4.6139 36.6636 4.75612L38.5313 7.38716H37.0786L35.4876 4.82723H35.3493V7.38716H34.1733V1.05844H35.9027ZM35.3489 3.97394H35.6947C36.4556 3.97394 36.8015 3.61839 36.8015 2.97841C36.8015 2.40954 36.4556 2.05399 35.6947 2.05399H35.3489V3.97394ZM30.0916 7.38716H33.4119V6.32052H31.2675V4.6139H33.3427V3.54726H31.2675V2.12508H33.4119V1.05844H30.0916V7.38716ZM26.6332 5.32499L25.0422 1.05844H23.797L26.3565 7.52938H26.979L29.5385 1.05844H28.2934L26.6332 5.32499ZM12.591 4.25837C12.591 6.0361 13.9745 7.52939 15.7038 7.52939C16.2572 7.52939 16.7414 7.38717 17.2256 7.17385V5.75166C16.8798 6.17832 16.3956 6.46275 15.8422 6.46275C14.7354 6.46275 13.8361 5.60944 13.8361 4.4717V4.32948C13.7669 3.19173 14.6662 2.1962 15.773 2.12509C16.3264 2.12509 16.8798 2.40953 17.2256 2.83618V1.414C16.8106 1.12956 16.2572 1.05846 15.773 1.05846C13.9745 0.916237 12.591 2.40953 12.591 4.25837ZM10.445 3.47617C9.75323 3.19173 9.54571 3.04951 9.54571 2.69397C9.61489 2.26731 9.96076 1.91176 10.3758 1.98287C10.7217 1.98287 11.0675 2.1962 11.3442 2.48064L11.9668 1.62733C11.4826 1.20067 10.86 0.916235 10.2375 0.916235C9.26902 0.845126 8.43893 1.62733 8.36976 2.62286V2.69397C8.36976 3.54728 8.71563 4.04504 9.82241 4.40059C10.0991 4.4717 10.3758 4.61391 10.6525 4.75613C10.86 4.89835 10.9984 5.11168 10.9984 5.39611C10.9984 5.89388 10.5833 6.32053 10.1683 6.32053H10.0991C9.54571 6.32053 9.06149 5.96499 8.85397 5.46722L8.09306 6.24943C8.5081 7.03163 9.33819 7.45828 10.1683 7.45828C11.2751 7.52939 12.1743 6.67608 12.2435 5.53833V5.32501C12.1743 4.4717 11.8285 4.04504 10.445 3.47617ZM6.43348 7.38716H7.60943V1.05844H6.43348V7.38716ZM0.96875 1.05844H2.6981H3.04397C4.70414 1.12955 6.01844 2.55174 5.94927 4.25836C5.94927 5.18278 5.53423 6.03609 4.84249 6.67607C4.21992 7.17384 3.45901 7.45827 2.6981 7.38716H0.96875V1.05844ZM2.49069 6.32049C3.04408 6.3916 3.66664 6.17828 4.08169 5.82273C4.49673 5.39607 4.70425 4.8272 4.70425 4.18722C4.70425 3.61834 4.49673 3.04947 4.08169 2.62282C3.66664 2.26727 3.04408 2.05394 2.49069 2.12505H2.14482V6.32049H2.49069Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.7523 0.911743C19.023 0.911743 17.5703 2.33393 17.5703 4.18277C17.5703 5.9605 18.9538 7.45379 20.7523 7.5249C22.5508 7.59601 23.9343 6.10271 24.0035 4.25388C23.9343 2.40504 22.5508 0.911743 20.7523 0.911743V0.911743Z"
                  fill="#FD6020"
                />
              </svg>
            </div>

            <div className="border border-gray-700 px-2 py-[11px]  rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="19"
                viewBox="0 0 31 19"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.5585 18.3926C26.515 18.3926 30.533 14.4225 30.533 9.52499C30.533 4.62753 26.515 0.657349 21.5585 0.657349C19.3372 0.657349 17.3043 1.4548 15.7372 2.77579C14.1701 1.45481 12.1372 0.657356 9.91585 0.657356C4.9594 0.657356 0.941406 4.62754 0.941406 9.525C0.941406 14.4225 4.9594 18.3926 9.91585 18.3926C12.1372 18.3926 14.1701 17.5952 15.7372 16.2742C17.3043 17.5952 19.3372 18.3926 21.5585 18.3926Z"
                  fill="#ED0006"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7383 16.2741C17.6678 14.6476 18.8913 12.2275 18.8913 9.52499C18.8913 6.8225 17.6678 4.40237 15.7383 2.77588C17.3054 1.45484 19.3383 0.657349 21.5597 0.657349C26.5162 0.657349 30.5342 4.62753 30.5342 9.52499C30.5342 14.4225 26.5162 18.3926 21.5597 18.3926C19.3383 18.3926 17.3054 17.5951 15.7383 16.2741Z"
                  fill="#F9A000"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7389 16.2741C17.6684 14.6476 18.8919 12.2275 18.8919 9.52499C18.8919 6.8225 17.6684 4.40237 15.7389 2.77588C13.8094 4.40237 12.5859 6.8225 12.5859 9.52499C12.5859 12.2275 13.8094 14.6476 15.7389 16.2741Z"
                  fill="#FF5E00"
                />
              </svg>
            </div>
            <div className="border border-gray-700 p-2 rounded-lg space-y-[2px]">
              <div className=" flex gap-x-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2856_6836)">
                    <rect width="11" height="11" fill="#1A1A1A" />
                    <path
                      d="M8.70833 5.04175H2.29167C1.78541 5.04175 1.375 5.45215 1.375 5.95841V9.16675C1.375 9.67301 1.78541 10.0834 2.29167 10.0834H8.70833C9.21459 10.0834 9.625 9.67301 9.625 9.16675V5.95841C9.625 5.45215 9.21459 5.04175 8.70833 5.04175Z"
                      stroke="white"
                      strokeWidth="0.916667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.20703 5.04175V3.20841C3.20703 2.60063 3.44847 2.01773 3.87824 1.58796C4.30802 1.15819 4.89091 0.916748 5.4987 0.916748C6.10649 0.916748 6.68938 1.15819 7.11915 1.58796C7.54892 2.01773 7.79036 2.60063 7.79036 3.20841V5.04175"
                      stroke="white"
                      strokeWidth="0.916667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2856_6836">
                      <rect width="11" height="11" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-white text-[11px] font-normal leading-[11px]">
                  Secure
                </p>
              </div>
              <p className="text-white text-center text-[12px] font-semibold leading-[12px]">
                Payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
