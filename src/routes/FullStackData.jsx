
import React from "react";
import FullStackPage from "../components/FullStackPage.jsx";
import usePageViewMetric from "../hooks/usePageViewMetric";

const FullStackData = () => {
  usePageViewMetric("FullStack");
  return (
    <div>
      <FullStackPage />
    </div>
  );
};

export default FullStackData;