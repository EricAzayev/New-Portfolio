
import React from "react";
import ProgrammaticsPage from "../components/ProgrammaticsPage.jsx";
import usePageViewMetric from "../hooks/usePageViewMetric";

const Programmatics = () => {
  usePageViewMetric("Programmatics");
  return (
    <div>
      <ProgrammaticsPage />
    </div>
  );
};

export default Programmatics;
