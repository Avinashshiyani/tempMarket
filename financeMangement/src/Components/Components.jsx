import React from "react";
import MainTitleImage from "../assets/FINEbank.IO.png";
import { Button } from "./Button";
import { Text } from "./Text";
// main title component
const MainTitle = () => {
  return (
    <div className="flex">
      <img src={MainTitleImage} alt="Main Title Image" />
    </div>
  );
};

export { MainTitle, Text, Button };
