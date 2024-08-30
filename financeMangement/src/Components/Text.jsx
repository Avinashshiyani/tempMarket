import { twMerge } from "tailwind-merge";

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

export { Text };
