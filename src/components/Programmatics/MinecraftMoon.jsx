import React from "react";
import { useSearchParams } from "react-router-dom";

import usePageViewMetric from "../../hooks/usePageViewMetric";
function MinecraftMoon() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  usePageViewMetric("Programmatics/MinecraftMoon");
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Minecraft Moon</h1>
        
        {/* BentoBox Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Top Left - Demo Images (takes 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 flex items-center justify-center text-white">
              <div className="text-center px-8">
                <div className="text-6xl mb-4">🌕</div>
                <p className="text-lg font-semibold">Minecraft Moon Concept</p>
                <p className="text-sm text-slate-300 mt-2">Visual assets are still being consolidated for this archive page.</p>
              </div>
            </div>
          </div>

          {/* Top Right - Product Description */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-slate-600 mb-4">
              This page currently serves as a portfolio placeholder for Minecraft Moon project material that is still being consolidated into the site.
            </p>
            <p className="text-slate-600 mb-4">
              The archived intent is to capture a moon-themed Minecraft concept in a cleaner project narrative once the supporting assets and write-up are fully assembled.
            </p>
          </div>

          {/* Bottom Left - System Design */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Current Status</h2>
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <p className="text-slate-600">
                  The route is preserved so the project remains represented in the portfolio, but a full sourced visual set has not been added to the workspace yet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MinecraftMoon;
