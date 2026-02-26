import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

const LeftSection = () => {
  return (
    <aside className="left-section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-24"
      >
        {/* Profile Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
          
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            EA
          </div>
          
          {/* Name & Title */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Eric Azayev
            </h2>
            <p className="text-slate-600 font-mono text-sm">
              Software Engineer
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 text-slate-500 text-sm">
              <MapPin size={14} />
              <span>New York, NY</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6 text-center">
            Computer Science student at Hunter College, specializing in Full-Stack Engineering and Data Science.
          </p>

          {/* Social Links */}
          <div className="space-y-3">
            <a 
              href="https://github.com/EricAzayev" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group"
            >
              <Github size={18} className="text-slate-600" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                GitHub
              </span>
              <ExternalLink size={14} className="ml-auto text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a 
              href="https://linkedin.com/in/eric-azayev" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group"
            >
              <Linkedin size={18} className="text-slate-600" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                LinkedIn
              </span>
              <ExternalLink size={14} className="ml-auto text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a 
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group"
            >
              <Mail size={18} className="text-slate-600" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                Email
              </span>
              <ExternalLink size={14} className="ml-auto text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-200">
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">10+</div>
              <div className="text-xs text-slate-500 font-mono">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">15+</div>
              <div className="text-xs text-slate-500 font-mono">Teams</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">2</div>
              <div className="text-xs text-slate-500 font-mono">Leadership</div>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-center"
        >
        </motion.div>
      </motion.div>
    </aside>
  );
};

export default LeftSection;