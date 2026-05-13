import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import ProjectHeader from "../ProjectHeader.jsx";
import usePageViewMetric from "../../hooks/usePageViewMetric";

function TheThankfulForestMod() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  usePageViewMetric("SWE/TheThankfulForestMod");
  
  // Demo images from local project assets
  const demoImages = [
    "/photos/Projects/TheThankfulForestMod/forest.png",
    "/photos/Projects/TheThankfulForestMod/bush.png",
    "/photos/Projects/TheThankfulForestMod/image.png",
    "/photos/Projects/TheThankfulForestMod/demoInventoryPhoto.png"
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
          title="The Thankful Forest Mod"
          date="2023"
          status="Completed"
          githubLink="https://github.com/EricAzayev/Festive_Hackathon-The_Thankful_Forest_Mod"
          tags={["Minecraft Forge", "Java 17", "Game Development", "3D Modeling", "Gradle"]}
        />
        
        {/* BentoBox Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Top Left - Demo Images or Placeholder (takes 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 flex items-center justify-center">
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
                </>
              ) : (
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🦃🍂</div>
                  <p className="text-slate-600 font-medium">The Thankful Forest Mod</p>
                  <p className="text-slate-500 text-sm mt-2">Minecraft Forge Mod</p>
                </div>
              )}
            </div>
          </div>

          {/* Top Right - Project Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-slate-600 mb-4">
              Fall Biome Mod 🌲🍂🦃 - Explore fall's vibrant beauty and face off against the Turkey Boss 
              in this Thanksgiving-themed Minecraft mod! Experience rolling hills covered with autumn colors, 
              dynamic Maple trees, and unique turkey mobs.
            </p>
            <p className="text-slate-600 mb-4">
              Built with Minecraft Forge 47.3.0 for version 1.20.1, this mod adds a complete fall-themed 
              biome with custom entities, world generation, and boss battles.
            </p>
            <div className="mt-4 mb-4">
              <a 
                href="https://youtu.be/e0FWjUGnQVA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <span>▶</span>
                Watch Demo Video
                <ExternalLink size={14} />
              </a>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Minecraft Forge 47.3.0", "Java", "Gradle", "TerraBLender", "3D Modeling"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-orange-50 to-amber-100 text-orange-700 border border-orange-200 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Architecture & Technical Details */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold mb-4">Features & Gameplay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-slate-700">🍁 Fall Biome & Maple Trees</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Autumn Atmosphere:</strong> Rolling hills with vibrant fall colors, orange-hued ambiance, and soft blue sky</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Dynamic Maple Trees:</strong> Unlike regular Oak trees, Maple trees branch off in unique ways with up to 3 branches each</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Forest Biome Inspired:</strong> Captures the perfect balance of cozy and lively fall weather</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Future Updates:</strong> Maple sap collection coming soon for crafting and cooking</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-slate-700">🦃 Turkey Mob & Boss</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Passive Turkey Mobs:</strong> Roam the biome cautiously, flee if approached, not aggressive even when provoked</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Turkey Eggs:</strong> Find scattered eggs on the ground, but collecting them comes with risks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Turkey Boss:</strong> Summoned by placing turkey eggs! Massive boss with powerful peck attacks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Battle Strategy:</strong> Aim for the boss's feet—the rest of its body is too bulky to damage effectively</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-sm text-slate-700 mb-2">
                <strong>Team Contributors:</strong> @EricAzayev, @HolyClasher (Nour), @J0C-user, @LennyArbitman, @JonathanC641
              </p>
              <p className="text-sm text-slate-700">
                <strong>Player Goals:</strong> Immerse in fall beauty, collect turkey eggs strategically, test combat skills against the Turkey Boss, and explore dynamic Maple forests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheThankfulForestMod;
