import React from "react";
import { useSearchParams } from "react-router-dom";

import usePageViewMetric from "../../hooks/usePageViewMetric";
function NPWEE() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  usePageViewMetric("Programmatics/NPWEE");
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">NPWEE</h1>
        
        {/* BentoBox Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Top Left - Demo Images (takes 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="relative aspect-video bg-slate-100">
              <img 
                src="/photos/Projects/NPWEE/NPWEE_Quad_Chart.png" 
                alt="NPWEE Demo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Top Right - Product Description */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-slate-600 mb-4">
              NPWEE represents my NASA LSPACE proposal-writing work from February through April 2025, where the focus shifted from technical problem framing to concise systems communication.
            </p>
            <p className="text-slate-600 mb-4">
              The project centered on producing proposal materials that balanced mission rationale, engineering clarity, and stakeholder-readable tradeoffs in a short-form presentation format.
            </p>
          </div>

          {/* Bottom Left - System Design */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Proposal Focus</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Mission Framing</h3>
                  <p className="text-sm text-slate-600">Condensed a larger systems idea into an understandable narrative with clear objectives and constraints.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Visual Communication</h3>
                  <p className="text-sm text-slate-600">Used quad-chart style storytelling to communicate feasibility, value, and next-step planning quickly.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Systems Thinking</h3>
                  <p className="text-sm text-slate-600">Connected scope, risks, and research intent without losing readability for cross-functional reviewers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NPWEE;
