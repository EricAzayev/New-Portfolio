import React from "react";

import usePageViewMetric from "../../hooks/usePageViewMetric";
function MinecraftMoon() {
  usePageViewMetric("Programmatics/MinecraftMoon");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Minecraft Moon</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Demo slot */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 flex items-center justify-center text-white">
              <div className="text-center px-8">
                <div className="text-6xl mb-4">🌕</div>
                <p className="text-lg font-semibold">Minecraft Moon</p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-slate-600 mb-4">
              A moon-themed Minecraft concept project. Full write-up coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MinecraftMoon;