import React from "react";
import { useSearchParams } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

import usePageViewMetric from "../../hooks/usePageViewMetric";
function Findr() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  usePageViewMetric("Fullstack/Findr");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Findr</h1>
        <div className="flex gap-3 mb-6">
          <a 
            href="https://github.com/BorowskiKacper/divhacks" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <Github size={16} />
            View on GitHub
            <ExternalLink size={14} />
          </a>
          <a 
            href="https://devpost.com/software/findr-z9k6ol" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            Devpost
            <ExternalLink size={14} />
          </a>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Project Overview - Full Width */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-slate-200">
            <h2 className="text-3xl font-semibold mb-6 text-slate-900">Project Overview</h2>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                How in touch are you with the animals that surround you? Whether you live in a dense urban setting or the quiet countryside, we often overlook the incredible wildlife sharing our space. Most people can recognize a hundred brand logos but struggle to identify the birds in their own backyard, creating a disconnect from the natural world.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                That's why we made <strong>Findr</strong>, a gamified education app that turns every walk into a scavenger hunt. Using the Gemini API, users simply snap a photo of an animal to receive instant species identification and fascinating ecological insights. It's more than a camera; it's a digital field guide that transforms a fleeting glance into a lasting piece of knowledge.
              </p>

              {/* Inline Image 1: American Woodcock */}
              <div className="my-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
                <img 
                  src="/photos/Projects/Findr/American_Woodcock.png" 
                  alt="American Woodcock - Example Species"
                  className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg shadow-md"
                />
                <p className="text-sm text-slate-600 text-center mt-3 italic">Example: American Woodcock identification (Photo: Wikipedia)</p>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed">
                Users can pin sightings to their location to "flex" on friends and inspire the community to explore local hotspots. Our ranking system is based on species rarity, with a primary focus on migratory patterns. By rewarding players for spotting travelers on the move, Findr gamifies natural science and teaches users to appreciate the rhythmic, global scale of local biodiversity.
              </p>

              {/* Inline Image 2: Migration Map */}
              <div className="my-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <img 
                  src="/photos/Projects/Findr/Animal_migrations_US.png" 
                  alt="Animal Migration Patterns Across the US"
                  className="w-full max-w-3xl mx-auto h-auto object-contain rounded-lg shadow-md"
                />
                <p className="text-sm text-slate-600 text-center mt-3 italic">Animal migration patterns help drive the app's ranking system (Source: blog.nature.org)</p>
              </div>

              {/* Key Technologies */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Key Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Gemini API", "React Native", "Supabase", "Geolocation", "Image Recognition", "Gamification", "Species Database"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gradient-to-r from-green-50 to-teal-100 text-teal-700 border border-teal-200 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* System Architecture */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">System Architecture</h2>
            </div>
            <div className="bg-slate-50 p-6">
              <img 
                src="/photos/Projects/Findr/DivHacks_System_Architecture.png" 
                alt="System Architecture"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Findr;
