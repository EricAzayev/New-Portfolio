import React, { useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

import usePageViewMetric from "../../hooks/usePageViewMetric";
function LexingtonLinks() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  usePageViewMetric("SWE/LexingtonLinks");

  // Ordered: swipe onboarding → home → group chat
  const demoImages = [
    { src: "/photos/Projects/LexingtonLinks/LexLinksSwipe.png", caption: "Swipe onboarding to pick interests during registration" },
    { src: "/photos/Projects/LexingtonLinks/LexLinksHome.png", caption: "Home: club groups, recent posts, and Brew Random Group" },
    { src: "/photos/Projects/LexingtonLinks/LexLinksChats.png", caption: "Group chat to plan hangouts" }
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
            <div className="relative aspect-video bg-slate-100">
              <img
                src={demoImages[currentImageIndex].src}
                alt={demoImages[currentImageIndex].caption}
                className="w-full h-full object-contain"
              />
              <p className="absolute top-4 left-4 bg-amber-100 text-amber-800 text-xs px-3 py-1.5 rounded-md shadow-sm font-medium">
                Demo cuts coming soon
              </p>
              <p className="absolute bottom-4 left-4 bg-white/90 text-slate-700 text-xs px-3 py-1.5 rounded-md shadow-sm">
                {demoImages[currentImageIndex].caption}
              </p>
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
                  <div className="absolute bottom-4 right-4 flex gap-2">
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
              Lexington Links is a full-stack web application built exclusively for Hunter College students to combat social isolation and foster a more connected campus community.
            </p>
            <p className="text-slate-600 mb-4">
              It's a friend and hangout matching platform that moves beyond superficial connections by matching users on shared academic courses, compatible majors, and preferred local hangout spots — all within a school email-verified environment.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Express", "PostgreSQL"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Left - Features */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Swipe Matching</h3>
                  <p className="text-sm text-slate-600">Swipe for hangout buddies based on courses, interests, location, or preferred hangout time.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Group Formation</h3>
                  <p className="text-sm text-slate-600">Form hangout groups, invite friends, and schedule plans for socializing, studying, or exploring the city.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Chat Functionality</h3>
                  <p className="text-sm text-slate-600">Chat with hangout buddies and discuss plans; users see all their group chats in one messages list.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Home Hub</h3>
                  <p className="text-sm text-slate-600">Browse clubs and posts, brew a random group, and jump straight into messages.</p>
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