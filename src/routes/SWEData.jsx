
import React from "react";
import SWEPage from "../components/SWEPage.jsx";
import usePageViewMetric from "../hooks/usePageViewMetric";

const SWEData = () => {
  usePageViewMetric("SWE");
  return (
    <div>
      <SWEPage />
    </div>
  );
};

export default SWEData;