import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import usePageViewMetric from "../hooks/usePageViewMetric";

// Placeholder slide: full-screen realistic starfield the space "Slide Structure" (see README.md) will build on top of.
const SpaceBackground = () => {
  usePageViewMetric("Space Background");

  // Scrolling down crossfades into the deeper "space2" backdrop; scrolling up returns to "space1".
  const [deepSpace, setDeepSpace] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) setDeepSpace(true);
      else if (e.deltaY < 0) setDeepSpace(false);
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className={`starfield absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
          deepSpace ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="starfield-nebula" />
        <div className="starfield-layer starfield-layer-1" />
        <div className="starfield-layer starfield-layer-2" />
        <div className="starfield-layer starfield-layer-3" />
      </div>

      <div
        className={`starfield starfield-deep absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
          deepSpace ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="starfield-nebula starfield-nebula-deep" />
        <div className="starfield-layer starfield-layer-1" />
        <div className="starfield-layer starfield-layer-2" />
        <div className="starfield-layer starfield-layer-3" />
      </div>

      <Link
        to="/"
        className="absolute top-6 left-6 z-10 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Back</span>
      </Link>
    </div>
  );
};

export default SpaceBackground;
