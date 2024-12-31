import React from "react";

interface ITagProps {
  children: React.ReactNode;
  bgColor: "default" | "new" | "best-sale" | "out-of-stock";
}
export const Tag = ({ children, bgColor = "default" }: ITagProps) => {
  const getBackgroundColorClass = (scheme: string) => {
    switch (scheme) {
      case "default":
        return "bg-[#EA4B48]";
      case "new":
        return "bg-[#FF8A00]";
      case "best-sale":
        return "bg-[#2388FF]";
      case "out-of-stock":
        return "bg-[#1A1A1A]";
    }
  };

  const bgColorClass = getBackgroundColorClass(bgColor);

  return (
    <button
      className={`px-2 py-1 text-sm font-medium rounded-sm text-white  ${bgColorClass}`}
    >
      {children}
    </button>
  );
};
