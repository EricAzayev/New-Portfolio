import React from "react";
import { useSearchParams } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

import usePageViewMetric from "../../hooks/usePageViewMetric";
function LexingtonLinks() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  usePageViewMetric("SWE/LexingtonLinks");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Lexington Links</h1>
        <div className="flex gap-3 mb-6">
          <a 
            href="https://github.com/EricAzayev/Lexington-Links" 
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
              src="https://opengraph.githubassets.com/1/EricAzayev/Lexington-Links"
              alt="Lexington Links repository preview"
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Top Right - Product Description */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-slate-600 mb-4">
              Lexington Links is a community resource platform built during CodePath Web102 to connect local services, organizations, and practical neighborhood information in one navigable experience.
            </p>
            <p className="text-slate-600 mb-4">
              The project emphasizes the full request cycle of a modern web app: routing users to relevant information, structuring service data, and connecting the UI to a backend built with React, Express, and PostgreSQL.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "PostgreSQL", "Express", "API Development", "Maps Integration"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-100 text-blue-700 border border-blue-200 rounded-lg text-sm font-medium">
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
                  <h3 className="font-semibold text-slate-900 mb-2">Community Data Modeling</h3>
                  <p className="text-sm text-slate-600">Structured service and location data so users can browse useful local resources instead of isolated links.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Client to Server Flow</h3>
                  <p className="text-sm text-slate-600">Connected React views with API-driven backend endpoints to keep content easier to maintain and extend.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Web102 Scope</h3>
                  <p className="text-sm text-slate-600">Expanded beyond static pages into persistence, routing, and user-facing information architecture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LexingtonLinks;
