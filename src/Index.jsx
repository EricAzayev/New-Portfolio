import React from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import usePageViewMetric from "./hooks/usePageViewMetric";
import "./Front.css";

const Index = () => {
  usePageViewMetric("Home");
  return (
    <div className="layout">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Index;
