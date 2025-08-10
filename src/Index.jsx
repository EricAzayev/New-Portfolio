import React from "react";

import Experience from "./components/Experience";
import Project from "./components/Project";
//import LeftSection from "../experimentals/LeftSection";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

import "./Front.css";

const Index = () => {
  return (
    <div className="layout">
      <LeftSection />
      <RightSection />
    </div>
  );
};


export default Index;
