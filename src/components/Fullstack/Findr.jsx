import React from "react";
import { useSearchParams } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

function Findr() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Findr</h1>
        <div className="flex gap-3 mb-4">
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
        <p className="text-sm text-slate-500 mb-8">Slideshow Mode: {inSlideshow ? 'Yes' : 'No'}</p>
        
        <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4">Lorem Ipsum</h2>
          <p className="text-slate-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-slate-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Findr;
