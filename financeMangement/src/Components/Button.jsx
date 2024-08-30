import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  children = "Button",
  font = 16,
  type = "semi",
  className,
}) => {
  const typeCheck =
    (type == "semi" ? "font-semibold" : "") ||
    (type == "bold" ? "font-bold" : "");

  return (
    <div>
      <button
        className={twMerge("h-[48px] w-full bg-green", typeCheck, className)}
      >
        {children}
      </button>
    </div>
  );
};

export { Button };
