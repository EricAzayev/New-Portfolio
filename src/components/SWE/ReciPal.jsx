import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

import usePageViewMetric from "../../hooks/usePageViewMetric";
function ReciPal() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  usePageViewMetric("SWE/ReciPal");
  const demoImages = [
    "/photos/Projects/ReciPal/recipalDemo2.png",
    "/photos/Projects/ReciPal/recipalDemo3.png",
    "/photos/Projects/ReciPal/recipalDemo4.png",
    "/photos/Projects/ReciPal/reciPalDemo5.png",
    "/photos/Projects/ReciPal/reciPalDemo6.png",
    "/photos/Projects/ReciPal/reciPalDemo7.png"
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
        <h1 className="text-4xl font-bold text-slate-900 mb-4">reciPal</h1>
        <div className="flex gap-3 mb-6">
          <a 
            href="https://github.com/EricAzayev/reciPal" 
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
              reciPal is a cooking companion designed to reduce meal-prep friction by turning recipe videos into usable ingredient lists and preparation steps. 
              Instead of saving cooking shorts for later, users can send a clip directly to the reciPal Instagram workflow and have it parsed into their account.
            </p>
            <p className="text-slate-600 mb-4">
              Its parsing pipeline downloads the source MP4, transcribes the audio with Ollama Whisper, and uses a reasoning model to extract ingredient quantities from messy spoken instructions.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Video Parsing", "Ollama Whisper", "Reasoning Models", "Instagram Workflow"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-orange-50 to-red-100 text-orange-700 border border-orange-200 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Left - System Design */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Pipeline Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Video Ingestion</h3>
                  <p className="text-slate-600 text-sm">
                    Short-form recipe clips are captured from the social workflow, normalized, and prepared for downstream transcription.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Speech to Structured Data</h3>
                  <p className="text-slate-600 text-sm">
                    Ollama Whisper provides the transcript layer, while a reasoning model transforms natural language into ingredient amounts and cooking steps.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Kitchen Planning</h3>
                  <p className="text-slate-600 text-sm">
                    Parsed outputs help users move from inspiration to grocery-ready prep without manually replaying recipe videos.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">User Experience Goal</h3>
                  <p className="text-slate-600 text-sm">
                    The product is built around making recipe discovery feel actionable instead of creating another backlog of saved content.
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

export default ReciPal;
