import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

function LetterBuddy() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const demoImages = [
    "/photos/Projects/LetterBuddy/LetterBuddy_Demo2.png",
    "/photos/Projects/LetterBuddy/LetterBuddy_Demo4.png",
    "/photos/Projects/LetterBuddy/LetterBuddy_Demo5.png",
    "/photos/Projects/LetterBuddy/LetterBuddy_Demo6.png"
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
        <h1 className="text-4xl font-bold text-slate-900 mb-6">LetterBuddy</h1>
        
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-slate-600 mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
              ut aliquip ex ea commodo consequat.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Time Series", "ARIMA", "Visualization"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-100 text-purple-700 border border-purple-200 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Left - Problem Statement & Tech Stack */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Problem Statement & Tech Stack</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-50">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <h3 className="text-lg font-semibold mb-2 text-slate-700">Problem Statement</h3>
                <img 
                  src="/photos/Projects/LetterBuddy/LetterBuddy_Problem_Statement.png" 
                  alt="Problem Statement"
                  className="w-full h-auto object-contain rounded"
                />
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <h3 className="text-lg font-semibold mb-2 text-slate-700">Tech Stack</h3>
                <img 
                  src="/photos/Projects/LetterBuddy/LetterBuddy_Tech_Stack.png" 
                  alt="Tech Stack"
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetterBuddy;
