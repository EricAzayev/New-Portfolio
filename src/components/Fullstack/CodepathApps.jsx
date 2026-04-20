import React from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowRight, Code2, Database } from "lucide-react";

function CodepathApps() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-900 mb-3">CodePath Apps Collection</h1>
        <p className="text-xl text-slate-600 mb-8">Full-Stack Web Development Journey</p>
        
        {/* Dashboard CTA */}
        <div className="mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 text-white">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-3">🎯 Interactive Project Dashboard</h2>
                <p className="text-lg text-indigo-100 mb-6 max-w-2xl">
                  Explore all my CodePath projects in an interactive dashboard showcasing my progression through Web101 and Web102 courses, complete with live demos, code samples, and technology breakdowns.
                </p>
                <a 
                  href="https://dashboard-delta-eight-66.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View Live Dashboard
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-slate-900">About This Collection</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            This collection represents my journey through CodePath's comprehensive web development curriculum, spanning both foundational and advanced full-stack concepts. Through hands-on projects, I developed proficiency in modern web technologies, API design, database management, and user-centered application development.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="font-semibold text-lg mb-2 text-purple-900">🎓 CodePath Web101</h3>
              <p className="text-slate-700">Foundations of web development, REST APIs, and client-server architecture</p>
            </div>
            <div className="bg-pink-50 rounded-lg p-5 border border-pink-200">
              <h3 className="font-semibold text-lg mb-2 text-pink-900">🚀 CodePath Web102</h3>
              <p className="text-slate-700">Advanced full-stack development, database integration, and production deployment</p>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Lexington Links Card */}
            <Link to="/fullstack/lexington-links" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 overflow-hidden transform hover:-translate-y-1">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Web102</span>
                    <Code2 size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Lexington Links</h3>
                  <p className="text-blue-100">Community resource platform connecting local services and information</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Node.js", "PostgreSQL", "Express"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    View Project Details
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* FoodTracker Card */}
            <Link to="/fullstack/foodtracker" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 overflow-hidden transform hover:-translate-y-1">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Web102</span>
                    <Database size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">FoodTracker</h3>
                  <p className="text-purple-100">Personal nutrition tracking app with meal logging and analytics</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Node.js", "Express", "MongoDB"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-md text-sm font-medium border border-purple-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    View Project Details
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* GitHub Link */}
        <div className="bg-slate-100 rounded-xl p-6 border border-slate-300">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Explore the Code</h3>
              <p className="text-slate-600">View all CodePath projects, including additional exercises and experiments</p>
            </div>
            <a 
              href="https://github.com/EricAzayev/Full-Stack_Portfolio" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors font-medium"
            >
              <Github size={20} />
              View Repository
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodepathApps;
