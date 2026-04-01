import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

function DenCity() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const demoImages = [
    "/photos/Projects/DenCity/DenCity Demo OpenData.png",
    "/photos/Projects/DenCity/DenCity_Actual_Collected_Data.png",
    "/photos/Projects/DenCity/DenCity_FutureIntent.png"
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
        <h1 className="text-4xl font-bold text-slate-900 mb-4">DenCity</h1>
        <p className="text-lg text-slate-600 mb-4 italic">
          Do you love crowds? Perhaps you seek to get away. With DenCity, you can know where the people are!
        </p>
        <div className="flex gap-3 mb-6">
          <a 
            href="https://github.com/BorowskiKacper/parkingsniffer" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <Github size={16} />
            View on GitHub
            <ExternalLink size={14} />
          </a>
          <a 
            href="https://devpost.com/software/dencity" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            View on Devpost
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
              DenCity is a crowd-density telemetry platform designed to solve urban crowd awareness challenges. By leveraging decentralized Bluetooth data collection, it provides real-time heatmaps for urban planners, commuters, hobbyists, and pedestrians seeking to navigate or avoid high-density areas.
            </p>
            <p className="text-slate-600 mb-4">
              User-opted telemetry is processed at the edge, cleaned of signal noise, and synced to a Supabase instance with a 30-minute TTL (Time-To-Live) for privacy-first, ephemeral storage. During the deployment phase, we performed ground-truth validation by collecting live Bluetooth telemetry and physical manual headcounts in various city locations.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Bluetooth", "Supabase", "React", "Geospatial", "Edge Computing", "Data Visualization"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-blue-100 text-cyan-700 border border-cyan-200 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom - Solution Statement & System Architecture */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Solution & Architecture</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-50">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <h3 className="text-lg font-semibold mb-2 text-slate-700">Solution Statement</h3>
                <img 
                  src="/photos/Projects/DenCity/DenCity_Solution_Statement.png" 
                  alt="Solution Statement"
                  className="w-full h-auto object-contain rounded"
                />
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <h3 className="text-lg font-semibold mb-2 text-slate-700">System Architecture</h3>
                <img 
                  src="/photos/Projects/DenCity/DenCity_System_Architecture.png" 
                  alt="System Architecture"
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

export default DenCity;
