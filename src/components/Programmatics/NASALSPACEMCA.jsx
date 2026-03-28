import React from "react";
import { useSearchParams } from "react-router-dom";

function NASALSPACEMCA() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">NASA LSPACE MCA</h1>
        
        {/* BentoBox Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Top Left - Demo Images (takes 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="relative aspect-video bg-slate-100 flex items-center justify-center">
              <p className="text-slate-400">Project images coming soon...</p>
            </div>
          </div>

          {/* Top Right - Product Description */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Mission Overview</h2>
            <p className="text-slate-600 mb-4">
              {/* TODO: Add the specific MCA description text provided by user */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-slate-600 mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
              ut aliquip ex ea commodo consequat.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["NASA LSPACE", "Mission Design", "Systems Engineering", "Team Collaboration"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Left - System Design */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Mission Architecture</h2>
              <div className="bg-slate-50 p-8 rounded-lg text-center">
                <p className="text-slate-500">Mission architecture diagram coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NASALSPACEMCA;
