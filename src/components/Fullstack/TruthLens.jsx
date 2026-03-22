import React from "react";
import { useSearchParams } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

function TruthLens() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">TruthLens Hackathon Project</h1>
        <div className="flex gap-3 mb-4">
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
        <p className="text-sm text-slate-500 mb-8">Slideshow Mode: {inSlideshow ? 'Yes' : 'No'}</p>
        
        <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Key Technologies & Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "AI/ML", "API Integration", "Data Visualization"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-100 text-blue-700 border border-blue-200 rounded-lg text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-slate-600 mb-4">
            TruthLens is a hackathon project focused on leveraging AI and data analysis 
            to provide insights and verification capabilities.
          </p>
          <p className="text-slate-600">
            This project demonstrates full-stack development skills with modern web technologies
            and integration of AI-powered features.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TruthLens;
