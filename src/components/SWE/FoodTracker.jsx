import React from "react";
import { useSearchParams } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

import usePageViewMetric from "../../hooks/usePageViewMetric";
function FoodTracker() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  usePageViewMetric("SWE/FoodTracker");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">FoodTracker WebApp</h1>
        <div className="flex gap-3 mb-6">
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
            <img
              src="https://opengraph.githubassets.com/1/EricAzayev/Full-Stack_Portfolio"
              alt="FoodTracker repository preview"
              className="w-full aspect-video object-cover"
            />
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
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-100 text-indigo-700 border border-indigo-200 rounded-lg text-sm font-medium">
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
                  <h3 className="font-semibold text-slate-900 mb-2">Analytics Mindset</h3>
                  <p className="text-sm text-slate-600">Treats nutrition tracking as a product problem where clarity and consistency matter as much as raw CRUD functionality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodTracker;
