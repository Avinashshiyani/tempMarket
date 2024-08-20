import React from "react";
import { MainTitle, Text } from "./Components/Components";

const App = () => {
  return (
    <div className="">
      <MainTitle />
      <Text type="semi" text={16}>
        Hello world
      </Text>
    </div>
  );
};

export default App;
