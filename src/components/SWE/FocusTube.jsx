import React from "react";
import { Puzzle } from "lucide-react";
import ProjectHeader from "../ProjectHeader.jsx";
import usePageViewMetric from "../../hooks/usePageViewMetric";

function FocusTube() {
  usePageViewMetric("SWE/FocusTube");

  // Demo videos from the GitHub README (hosted on GitHub's CDN, not duplicated in this repo)
  const demoVideos = [
    {
      title: "Block Shorts in Action",
      src: "https://github.com/user-attachments/assets/75221bf0-7323-4891-b21d-9f8e7624afd0"
    },
    {
      title: "AI Filter Detection",
      src: "https://github.com/user-attachments/assets/26409997-c3f8-447c-9073-646013be30be"
    },
    {
      title: "AI Filter on \"lofi\" Query",
      src: "https://github.com/user-attachments/assets/acc508a3-013d-41b5-871f-68826ebb9288"
    }
  ];

  const demoImages = [
    {
      title: "Extension Filter Example",
      src: "/photos/Projects/FocusTube/ExtensionFilterExample.png"
    },
    {
      title: "Output Amplified",
      src: "/photos/Projects/FocusTube/OutputAmplified.png"
    }
  ];

  const koalaLogo = "/photos/Projects/FocusTube/cute_koala.png";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <ProjectHeader 
          title="FocusTube"
          date="April 2026"
          status="Completed"
          githubLink="https://github.com/luoshuyi1124/google-project"
          tags={["Chrome Extension", "AI/ML", "Python", "JavaScript", "YouTube API"]}
          hidePreview
        />

        {/* My Contribution - scoped to what I personally built on this team project */}
        <div className="mt-3 mb-6 flex items-center gap-1.5 text-xs font-mono text-slate-500">
          <Puzzle size={12} className="shrink-0 text-indigo-600" />
          My contribution: the Chrome extension — thumbnail/Shorts blocking and the on-device AI filtering pipeline
        </div>
        
        {/* BentoBox Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Hero - Demo Videos, the most impressive part of the product */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold mb-1">See It In Action</h2>
            <p className="text-sm text-slate-500 mb-4">Recorded straight from the extension I built &mdash; from the project's GitHub README</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {demoVideos.map((video) => (
                <div key={video.title} className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    className="w-full aspect-video bg-black"
                  />
                  <p className="px-3 py-2 text-sm font-medium text-slate-700">{video.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Screenshots */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold mb-1">Demo Screenshots</h3>
            <p className="text-sm text-slate-500 mb-4">Additional extension output examples</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {demoImages.map((image) => (
                <div key={image.title} className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-contain"
                  />
                  <p className="px-3 py-2 text-sm font-medium text-slate-700">{image.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Overview */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-slate-600 mb-4">
              FocusTube is a Chrome extension with productivity mode, shorts blocking, and an experimental AI filter. Its koala mascot stands in for clickbait thumbnails so browsing stays calm.
            </p>
          </div>

          {/* Koala Branding */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 flex flex-col items-center justify-center text-center">
            <img
              src={koalaLogo}
              alt="FocusTube koala mascot"
              className="h-20 w-20 rounded-xl object-contain bg-slate-50 border border-slate-200 p-2 shadow-sm mb-3"
            />
            <p className="text-sm font-medium text-slate-700">The FocusTube Koala</p>
            <p className="text-xs text-slate-500 mt-1">Replaces clickbait thumbnails so browsing stays calm</p>
          </div>

          {/* Key Technologies */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-3">Key Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["Chrome Extension", "Vanilla JavaScript", "React 19 + Vite", "Node.js + Express", "Phi-3 AI Model"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* System Architecture */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-3">System Architecture</h3>
            <img
              src="/photos/Projects/FocusTube/FocusTube_System_Architecture.png"
              alt="FocusTube system architecture: React frontend and the extension exchange video HTML with Google, backed by a Node.js server using the YouTube Data API v3, Ollama, and a request cache"
              className="w-full max-w-3xl mx-auto rounded-lg border border-slate-200"
            />
            <p className="text-sm text-slate-500 mt-3 text-center">
              Search requests hit the backend (YouTube Data API, Ollama, and a cache); the extension uses the blocked-video list to rewrite video pages in the browser.
            </p>
          </div>

          {/* Bottom Section - Key Features & Implementation */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold mb-4">Features & Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-slate-700">Core Features</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold text-xl">🧠</span>
                    <span><strong>Productivity Mode:</strong> Replaces clickbait thumbnails with calming koala images. Search and watch freely without the dopamine traps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold text-xl">🚫</span>
                    <span><strong>Block Shorts:</strong> Completely removes YouTube Shorts from your feed. No more infinite scrolling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold text-xl">🤖</span>
                    <span><strong>AI Filter (Experimental):</strong> Uses on-device AI (Phi-3) to analyze video titles and filter out distractions before they tempt you.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Chrome Extension Manifest V3:</strong> Built with modern Chrome extension APIs for security and performance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-slate-700">Technical Implementation</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Extension (my build):</strong> Vanilla JavaScript with Chrome Extension Manifest V3, plus the AI filtering integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Landing Page (teammate contribution):</strong> React 19 + Vite marketing site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>AI Backend:</strong> Node.js + Express server for filtering logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>AI Model:</strong> On-device inference with Phi-3 for privacy-first filtering</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong>Team:</strong> Built with @EricAzayev, @luoshuyi1124, and @Cassandra-Hinds
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

export default FocusTube;
