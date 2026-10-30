import React, { useState } from "react";
import { Github, ExternalLink, Download, ChevronLeft, ChevronRight } from "lucide-react";

import usePageViewMetric from "../../hooks/usePageViewMetric";
function FoodTracker() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  usePageViewMetric("SWE/FoodTracker");

  const demoImages = [
    { src: "/photos/Projects/FoodTracker/screenshots/today.png", alt: "Today tab with meal log and food recommendations" },
    { src: "/photos/Projects/FoodTracker/screenshots/history.png", alt: "History view of logged meals" },
    { src: "/photos/Projects/FoodTracker/screenshots/analytics.png", alt: "Nutrient analytics charts" },
    { src: "/photos/Projects/FoodTracker/screenshots/food-library.png", alt: "Food library browse view" },
    { src: "/photos/Projects/FoodTracker/screenshots/user-settings.png", alt: "User settings and preferences" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % demoImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <img
              src="/photos/Projects/FoodTracker/DataFork Logo.png"
              alt="Data Fork logo"
              className="h-16 w-16 rounded-xl object-cover object-top border border-slate-200"
            />
            <div className="text-left">
              <h1 className="text-4xl font-bold text-slate-900 leading-tight">FoodTracker</h1>
              <span className="text-sm text-slate-500">A <span className="font-medium text-cyan-700">Data Fork</span> project</span>
            </div>
          </div>
          <a
            href="https://github.com/EricAzayev/Full-Stack_Portfolio/tree/main/FoodTracker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <Github size={16} />
            View on GitHub
            <ExternalLink size={14} />
          </a>
        </div>

        {/* BentoBox Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Top Left - Demo Images (takes 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="relative flex items-center justify-center h-[420px] md:h-[560px] bg-slate-100">
              <img
                src={demoImages[currentImageIndex].src}
                alt={demoImages[currentImageIndex].alt}
                className="max-h-full max-w-full object-contain"
              />
              {demoImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronLeft size={24} className="text-slate-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronRight size={24} className="text-slate-700" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {demoImages.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex ? 'bg-cyan-600 w-8' : 'bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Top Right - Product Description */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-slate-600 mb-4">
              FoodTracker is a CodePath project centered on personal nutrition tracking, meal logging, and making food data easier to review over time.
            </p>
            <p className="text-slate-600 mb-4">
              The application reflects the progression from interface work into persistent data handling, REST API design, and backend-backed user workflows using the MERN-style tooling highlighted throughout the collection.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Express", "MongoDB", "REST API", "Authentication"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Left - System Design */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Implementation Focus</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Meal Logging</h3>
                  <p className="text-sm text-slate-600">Designed around repeatable entry flows for food items, portions, and day-to-day tracking.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Backend Integration</h3>
                  <p className="text-sm text-slate-600">Uses API-driven state updates and database-backed persistence instead of isolated front-end state.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Daily Summaries</h3>
                  <p className="text-sm text-slate-600">Rolls logged meals up into daily nutrition totals so progress is easy to review over time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop App - Coming Soon */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Desktop App</h2>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 border border-amber-200 rounded-full text-xs font-semibold uppercase tracking-wide">
                Coming Soon
              </span>
            </div>
            <p className="text-slate-600 mb-5">
              A standalone Windows desktop build of FoodTracker is in the works, with versioned releases presented in a format similar to Forge mod download pages. The executable download link will be enabled here once the first public release is ready.
            </p>
            <div className="bg-slate-900 rounded-lg p-5 text-white">
              <div className="text-xs uppercase tracking-wide text-slate-400 mb-3">Main File</div>
              <div className="flex items-center justify-between bg-slate-800/60 rounded-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-green-600 rounded text-xs font-bold">R</span>
                  <div>
                    <div className="font-semibold">1.0.0</div>
                    <div className="text-xs text-slate-400">Release &middot; Windows</div>
                  </div>
                </div>
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm font-medium cursor-not-allowed"
                >
                  <Download size={16} />
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodTracker;
