import React from "react";
// import { MainTitle, Text } from "./Components/Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
