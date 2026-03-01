import React from "react";
import { useParams } from "react-router-dom";

function Findr() {
  const { inSlideshow } = useParams();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Findr</h1>
        <p className="text-sm text-slate-500 mb-8">Slideshow Mode: {inSlideshow}</p>
        
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
