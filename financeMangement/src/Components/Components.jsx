import React from "react";
import MainTitleImage from "../assets/FINEbank.IO.png";
import { twMerge } from "tailwind-merge";
// main title component
const MainTitle = () => {
  return (
    <div className="flex">
      <img src={MainTitleImage} alt="Main Title Image" />
    </div>
  );
};

// text main primary component
const Text = ({ children, className, text = 16, type = "normal" }) => {
  const textType = (text == 22 && "text-22") || (text == 14 && "text-14");
  const fontType =
    (type == "bold" && "font-bold") ||
    (type == "semi" && "font-semibold") ||
    (type == "light" && "font-light");
  return (
    <span className={twMerge("text-primary", textType, fontType, className)}>
      {children}
    </span>
  );
};

export { MainTitle, Text };
