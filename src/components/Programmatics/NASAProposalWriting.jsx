import React from "react";
import { useSearchParams } from "react-router-dom";

import usePageViewMetric from "../../hooks/usePageViewMetric";
function NASAProposalWriting() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  usePageViewMetric("Programmatics/NASAProposalWriting");
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">NASA LSPACE NPWEE</h1>
        
        {/* BentoBox Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Top Left - Demo Images (takes 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="relative aspect-video bg-slate-100">
              <img 
                src="/photos/Projects/NPWEE/NPWEE_Quad_Chart.png" 
                alt="NASA LSPACE NPWEE Quad Chart"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Top Right - Product Description */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-slate-600 mb-4">
              This NASA LSPACE NPWEE page captures the proposal-writing portion of the program, where the challenge was to distill research and mission intent into a concise, reviewable deliverable.
            </p>
            <p className="text-slate-600 mb-4">
              The work emphasized technical writing, framing an aerospace problem clearly, and presenting the concept in a format that could communicate value, scope, and readiness quickly.
            </p>
          </div>

          {/* Bottom Left - System Design */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Writing & Review Objectives</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Technical Narrative</h3>
                  <p className="text-sm text-slate-600">Built a proposal story that communicated purpose, feasibility, and research direction without losing engineering rigor.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Concise Deliverables</h3>
                  <p className="text-sm text-slate-600">Used compact artifacts such as the quad chart to keep the project legible to reviewers under tight time constraints.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Cross-Functional Review</h3>
                  <p className="text-sm text-slate-600">Balanced research ambition, mission planning, and communication discipline across a systems-engineering context.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NASAProposalWriting;
