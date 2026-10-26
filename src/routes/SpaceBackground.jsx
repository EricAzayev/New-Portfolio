import React from "react";
import usePageViewMetric from "../hooks/usePageViewMetric";

// Full-screen Saturn→Moon flythrough (public/Saturn_background.html).
// The WIP labels and the big Back button live inside that HTML, which owns the zoom state.
const SpaceBackground = () => {
  usePageViewMetric("Space Background");

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#050508]">
      <iframe
        src="/Saturn_background.html"
        title="Saturn to Moon space experience"
        className="w-full h-full border-0"
      />
    </div>
  );
};

export default SpaceBackground;