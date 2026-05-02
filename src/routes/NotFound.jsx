
import React from "react";
import usePageViewMetric from "../hooks/usePageViewMetric";

const NotFound = () => {
  usePageViewMetric("NotFound");
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
