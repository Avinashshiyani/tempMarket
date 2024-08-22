import React from "react";
import { MainTitle, Text } from "../Components/Components.jsx";

const Login = () => {
  return (
    <div className="flex h-dvh items-center justify-center ">
      <div className="grid items-center justify-center">
        <div className="flex items-center justify-center">
          <MainTitle />
        </div>
        <div className="grid items-center justify-center">
          <Text>Email Address</Text>
          <Text>Password</Text>
          <Text>Keep me signed in</Text>
          <Text text={14} type="thin">
            or sign in with
          </Text>
          <Text type="semi" className="text-green">Create an account</Text>
        </div>
      </div>
    </div>
  );
};

export default Login;
