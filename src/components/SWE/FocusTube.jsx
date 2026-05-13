import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import ProjectHeader from "../ProjectHeader.jsx";
import usePageViewMetric from "../../hooks/usePageViewMetric";

function FocusTube() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  usePageViewMetric("SWE/FocusTube");
  
  // Demo images from the GitHub README
  const demoImages = [
    "https://github.com/user-attachments/assets/091da99e-790d-4c35-8901-7eb04850db55"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % demoImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Project Header */}
        <ProjectHeader 
          title="FocusTube"
          date="April 2026"
          status="Completed"
          githubLink="https://github.com/luoshuyi1124/google-project"
          tags={["Chrome Extension", "AI/ML", "Python", "JavaScript", "YouTube API"]}
        />
        
        {/* BentoBox Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Top Left - Demo Images (takes 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center">
              {demoImages.length > 0 ? (
                <>
                  <img 
                    src={demoImages[currentImageIndex]} 
                    alt={`Demo ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
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
                          idx === currentImageIndex ? 'bg-blue-600 w-8' : 'bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🐨📺</div>
                  <p className="text-slate-600 font-medium">FocusTube</p>
                  <p className="text-slate-500 text-sm mt-2">Chrome Extension for Focused YouTube Viewing</p>
                </div>
              )}
            </div>
          </div>

          {/* Top Right - Project Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-slate-600 mb-4">
              FocusTube is a Chrome extension that removes distractions from YouTube so you can stay productive. 
              Take back your focus with productivity mode, shorts blocking, and experimental AI filtering.
            </p>
            <p className="text-slate-600 mb-4">
              The average person loses 2+ hours a day to YouTube recommendations and Shorts. 
              FocusTube gives you control back—no distractions, no rabbit holes, just intentional viewing.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Chrome Extension", "Vanilla JavaScript", "React 19 + Vite", "Node.js + Express", "Phi-3 AI Model"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-100 text-blue-700 border border-blue-200 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Key Features & Implementation */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold mb-4">Features & Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-slate-700">Core Features</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold text-xl">🧠</span>
                    <span><strong>Productivity Mode:</strong> Replaces clickbait thumbnails with calming koala images. Search and watch freely without the dopamine traps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold text-xl">🚫</span>
                    <span><strong>Block Shorts:</strong> Completely removes YouTube Shorts from your feed. No more infinite scrolling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold text-xl">🤖</span>
                    <span><strong>AI Filter (Experimental):</strong> Uses on-device AI (Phi-3) to analyze video titles and filter out distractions before they tempt you.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Chrome Extension Manifest V3:</strong> Built with modern Chrome extension APIs for security and performance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-slate-700">Technical Implementation</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Extension:</strong> Vanilla JavaScript with Chrome Extension Manifest V3</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Landing Page:</strong> React 19 + Vite for fast, modern marketing site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>AI Backend:</strong> Node.js + Express server for filtering logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>AI Model:</strong> On-device inference with Phi-3 for privacy-first filtering</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-slate-700 mb-2">
                    <strong>Demo Clip:</strong> <a href="https://github.com/user-attachments/assets/75221bf0-7323-4891-b21d-9f8e7624afd0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View README demo</a>
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Team:</strong> Built with @EricAzayev, @luoshuyi1124, and @Cassandra-Hinds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FocusTube;
