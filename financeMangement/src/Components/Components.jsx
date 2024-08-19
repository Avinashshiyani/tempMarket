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
const Text = ({ children, className, bold  }) => {
  const applyBold =
    (bold === "bold" && "font-bold") || (bold === "semi" && "font-semibold");
  return (
    <span className={twMerge("text-primary", className, applyBold)}>
      {children}
    </span>
  );
};

export { MainTitle, Text };
