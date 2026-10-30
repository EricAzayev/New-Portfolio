import React, { useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

import usePageViewMetric from "../../hooks/usePageViewMetric";
function TruthLens() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  usePageViewMetric("SWE/TruthLens");
  const demoImages = [
    "/photos/Projects/TruthLens/TruthLens_In_Action.png",
    "/photos/Projects/TruthLens/TruthLens_Website_Image.png"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % demoImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length);
  };
  
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">TruthLens</h1>
        <p className="text-lg text-slate-600 mb-4 italic">
          Every child deserves to see the world as it truly is, not as AI decides it should be.
        </p>
        <div className="flex gap-3 mb-6">
          {/* GitHub link will be added when available */}
          {/* <a 
            href="https://github.com/your-repo" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <Github size={16} />
            View on GitHub
            <ExternalLink size={14} />
          </a> */}
        </div>
        
        {/* BentoBox Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Top Left - Demo Images (takes 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="relative aspect-video bg-slate-100">
              <img 
                src={demoImages[currentImageIndex]} 
                alt={`Demo ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
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
                          idx === currentImageIndex ? 'bg-blue-600 w-8' : 'bg-white/70'
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
              TruthLens is a browser extension that helps parents tell AI-generated content apart from real media. Instead of only filtering what kids see, it looks at how the content was made, flagging deepfakes and AI-generated media.
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Multi-Modal Detection:</strong> Identifies AI-generated video, images, and text across TikTok, Instagram, and YouTube, and sends parents a real-time alert when something synthetic appears.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Browser Extension", "AI/ML Detection", "Multi-Modal Analysis", "Real-time Processing", "Parental Controls"].map((skill) => (
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
              <h2 className="text-2xl font-semibold mb-4">System Architecture</h2>
            </div>
            <div className="bg-slate-50 p-4">
              <img
                src="/photos/Projects/TruthLens/TruthLens_System_Architecture.png"
                alt="TruthLens component diagram: the browser extension injects into YouTube and Instagram frames to classify content, exchanging auth and metrics with Firebase and a FastAPI backend that also powers the family website and weekly Gmail reports"
                className="w-full h-auto object-contain"
              />
              <p className="text-sm text-slate-500 mt-3 text-center">
                The extension classifies content inside YouTube and Instagram frames; Firebase and FastAPI back the family website and the weekly report emails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TruthLens;
