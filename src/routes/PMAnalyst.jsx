
import React from "react";
import PMAnalystPage from "../components/PMAnalystPage.jsx";
import usePageViewMetric from "../hooks/usePageViewMetric";

const PMAnalyst = () => {
  usePageViewMetric("Data");
  return (
    <div>
      <PMAnalystPage />
    </div>
  );
};

export default PMAnalyst;