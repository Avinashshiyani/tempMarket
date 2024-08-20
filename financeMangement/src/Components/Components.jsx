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
const Text = ({ children, className, type, text }) => {
  const applyBold =
    (type === "bold" && "font-bold") || (type === "semi" && "font-semibold");

  let fontStyle = "";
  const fontManager = () => {
    switch (text) {
      case 16:
        fontStyle = "text-16";
        break;
      case 22:
        fontStyle = "text-22";
        break;
      default:
        fontStyle = "";
    }
    return fontStyle;
  };
  fontManager();

  return (
    <span className={twMerge("text-primary", className, applyBold, fontStyle)}>
      {children}
    </span>
  );
};

export { MainTitle, Text };
