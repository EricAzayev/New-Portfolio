import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FileText, ChevronLeft, ChevronRight, DollarSign, Users, Rocket, Award } from "lucide-react";

function NASALSPACEMCA() {
  const [searchParams] = useSearchParams();
  const inSlideshow = searchParams.get('mode') === 'slideshow';
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // PDF pages from the comprehensive Preliminary Design Review
  const briefSlides = [
    {
      type: "image",
      src: "/photos/Projects/MCA/P1.png",
      title: "PDR Cover - Team 25",
      description: "L'SPACE Program - 9-Person Team"
    },
    {
      type: "image",
      src: "/photos/Projects/MCA/P3.png",
      title: "Table of Contents - Part 1",
      description: "Mission Architecture & Risk Management"
    },
    {
      type: "image",
      src: "/photos/Projects/MCA/P4.png",
      title: "Table of Contents - Part 2",
      description: "Budget, Schedule & Outreach Planning"
    },
    {
      type: "image",
      src: "/photos/Projects/MCA/P5.png",
      title: "Mission Overview",
      description: "First In-Situ Subsurface Lunar Exploration"
    },
    {
      type: "image",
      src: "/photos/Projects/MCA/P6.png",
      title: "Conclusion - Part 1",
      description: "Dual-Rover System & CAD Models"
    },
    {
      type: "image",
      src: "/photos/Projects/MCA/P7.png",
      title: "Conclusion - Part 2",
      description: "Mission Cost: $225M"
    },
    {
      type: "image",
      src: "/photos/Projects/MCA/Scoring_Example.png",
      title: "Project Evaluation Rubric",
      description: "NASA Assessment Criteria"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % briefSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + briefSlides.length) % briefSlides.length);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-slate-900 mb-2">NASA LSPACE MCA</h1>
        <h2 className="text-2xl text-indigo-700 font-semibold mb-2 italic">
          The LCAVEMAN Mission
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Lunar Colonization Accessibility Venture for the Evaluation of the Magnetosphere and Ancient Materials
        </p>

        {/* Impressive Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
            <DollarSign className="mb-2" size={32} />
            <div className="text-3xl font-bold mb-1">$225M</div>
            <div className="text-sm text-indigo-100">Mission Budget</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white shadow-lg">
            <FileText className="mb-2" size={32} />
            <div className="text-3xl font-bold mb-1">187</div>
            <div className="text-sm text-blue-100">Page PDR</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
            <Rocket className="mb-2" size={32} />
            <div className="text-3xl font-bold mb-1">First</div>
            <div className="text-sm text-purple-100">Subsurface Exploration</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-6 text-white shadow-lg">
            <Users className="mb-2" size={32} />
            <div className="text-3xl font-bold mb-1">9</div>
            <div className="text-sm text-green-100">Team Members</div>
          </div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left - Project Brief Slider (takes 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-indigo-50 to-blue-50">
              <h3 className="text-2xl font-bold text-slate-900">Preliminary Design Review</h3>
              <p className="text-sm text-slate-600 mt-1">Comprehensive mission documentation</p>
            </div>
            <div className="relative bg-slate-50 p-6">
              <div className="relative aspect-[3/4] bg-white rounded-lg shadow-inner flex items-center justify-center overflow-hidden">
                <img 
                  src={briefSlides[currentSlide].src}
                  alt={briefSlides[currentSlide].title}
                  className="w-full h-full object-contain"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {briefSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all rounded-full ${
                      idx === currentSlide 
                        ? 'bg-indigo-600 w-8 h-2' 
                        : 'bg-slate-300 w-2 h-2 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              
              {/* Slide Info */}
              <div className="mt-4 text-center">
                <p className="font-semibold text-slate-900">{briefSlides[currentSlide].title}</p>
                <p className="text-sm text-slate-600 mt-1">{briefSlides[currentSlide].description}</p>
              </div>
            </div>
          </div>

          {/* Right - Impact */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-indigo-600" size={32} />
              <h3 className="text-2xl font-semibold text-slate-900">Impact</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-semibold text-indigo-900 mb-2">📊 Program Analysis</h4>
                <p className="text-sm text-slate-700">Reviewed <strong>70+ pages per deliverable</strong> to ensure consistency and quality across all documentation</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">📅 Scheduling & Scoping</h4>
                <p className="text-sm text-slate-700">Developed Gantt Charts and N² Charts using NASA best practices for complex mission planning</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">💰 Budget Management</h4>
                <p className="text-sm text-slate-700">Created budget calculations and bases of estimate to maintain $225M mission within scope</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">🔄 Change Control</h4>
                <p className="text-sm text-slate-700">Implemented NASA-aligned change control and risk management strategies</p>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg border-2 border-indigo-300">
                <p className="text-sm text-slate-800 italic">
                  "Through extensive research in official NASA engineering and project management handbooks, I developed NASA-aligned concepts for extended and complex projects."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements Grid */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8">
          <div className="p-6 bg-gradient-to-r from-slate-800 to-indigo-900 text-white">
            <h3 className="text-2xl font-bold">Mission Overview & Objectives</h3>
          </div>
          <div className="p-8">
            <div className="prose max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Team 25 created the Preliminary Design Review for the LCAVEMAN mission, which aims to explore the <strong>Marius Hills Pit on the Moon</strong> as a potential site for future lunar habitation. The project aims to conduct the <strong>earliest subsurface exploration</strong> of the pit, mapping its terrain and evaluating the feasibility of human settlement.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-2">Mission Goal</h4>
                  <p className="text-sm text-slate-700">Map and predict potential of Marius Hills Pit to support future lunar colonies</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-600">
                  <h4 className="font-bold text-purple-900 mb-2">Technical Approach</h4>
                  <p className="text-sm text-slate-700">Dual-rover system with lidar, radiation sensors, and ground-penetrating radar</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-5 border-l-4 border-green-600">
                  <h4 className="font-bold text-green-900 mb-2">Scientific Value</h4>
                  <p className="text-sm text-slate-700">First data on volcanic origins and geologic processes in lunar subsurface</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Full PDR Link */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">Key Skills Developed</h3>
            <div className="flex flex-wrap gap-2">
              {["Program Analysis", "Interface Control", "Mission Outreach", "Budget Management", "Documentation", "Scoping", "Scheduling", "Stakeholder Communication", "NASA Best Practices", "Change Control"].map((skill) => (
                <span key={skill} className="px-3 py-2 bg-gradient-to-r from-blue-50 to-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-start gap-4">
              <FileText size={48} className="flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-2">Complete PDR Document</h4>
                <p className="text-indigo-100 mb-4 text-sm">The full 187-page Preliminary Design Review with detailed mission architecture, risk analysis, and budget planning.</p>
                <div className="inline-block px-6 py-3 bg-white/20 text-white rounded-lg font-semibold border-2 border-white/50">
                  Available Upon Request
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NASALSPACEMCA;
