import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Code2, Database, Rocket } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedCounter = ({ value, label }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest);
      }
    });
  }, [springValue]);

  return (
    <div className="text-center">
      <div className="stat-number" ref={ref}>0</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const RightSection = () => {
  return (
    <main className="right-section">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={20} className="text-indigo-500" />
          <span className="text-sm font-mono text-slate-600 uppercase tracking-wide">
            Portfolio
          </span>
        </div>
        
        <h1 className="text-5xl font-bold text-slate-900 mb-4 leading-tight">
          Systems &amp; Solutions Engineer
        </h1>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
          Building impactful solutions across Full-Stack Development, Data Science, and Product Strategy. 
          Computer Science student at Hunter College with a passion for creating elegant, scalable systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a 
            href="#explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-sm"
          >
            Explore My Work
            <ArrowRight size={18} />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg font-medium transition-colors"
          >
            Get in Touch
            <Mail size={18} />
          </a>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="stats">
          <AnimatedCounter value={2} label="Leadership Roles" />
          <AnimatedCounter value={10} label="Projects Completed" />
          <AnimatedCounter value={15} label="Team Roles" />
        </div>
      </motion.div>
      
      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Experience</h2>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
              <img src="/photos/Experience_Band/LSPACE.png" alt="LSPACE" className="w-5 h-5 object-contain" />
              <span className="text-sm font-medium text-slate-700">LSPACE</span>
            </div>
            
            <span className="text-slate-300">•</span>
            
            <div className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
              <img src="/photos/Experience_Band/Unadat.png" alt="Unadat" className="w-5 h-5 object-contain" />
              <span className="text-sm font-medium text-slate-700">Unadat</span>
            </div>
            
            <span className="text-slate-300">•</span>
            
            <div className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
              <img src="/photos/Experience_Band/MorganStanley.png" alt="Morgan Stanley" className="w-5 h-5 object-contain" />
              <span className="text-sm font-medium text-slate-700">Morgan Stanley</span>
            </div>
            
            <span className="text-slate-300">•</span>
            
            <div className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
              <img src="/photos/Experience_Band/NASA.webp" alt="NASA" className="w-5 h-5 object-contain" />
              <span className="text-sm font-medium text-slate-700">NASA</span>
            </div>
            
            <span className="text-slate-300">•</span>
            
            <div className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
              <img src="/photos/Experience_Band/IEH.png" alt="IEH" className="w-5 h-5 object-contain" />
              <span className="text-sm font-medium text-slate-700">IEH</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Organizations Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Organizations</h2>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
              <img src="/photos/Organizations_Band/Accenture.png" alt="Accenture" className="w-5 h-5 object-contain" />
              <span className="text-sm font-medium text-slate-700">Accenture Student Leadership</span>
            </div>
            
            <span className="text-slate-300">•</span>
            
            <div className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
              <img src="/photos/Organizations_Band/BASTA.png" alt="Code2Career" className="w-5 h-5 object-contain" />
              <span className="text-sm font-medium text-slate-700">Code2Career</span>
            </div>
            
            <span className="text-slate-300">•</span>
            
            <div className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
              <img src="/photos/Organizations_Band/CUNYTechPrep.png" alt="Data Science Fellowship" className="w-5 h-5 object-contain" />
              <span className="text-sm font-medium text-slate-700">Data Science Fellowship</span>
            </div>
            
            <span className="text-slate-300">•</span>
            
            <div className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
              <img src="/photos/Organizations_Band/Codepath.png" alt="Codepath" className="w-5 h-5 object-contain" />
              <span className="text-sm font-medium text-slate-700">Codepath</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
        id="about"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-6">About Me</h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl"></div>
          </div>
          <div className="md:col-span-3">
            <div className="prose prose-slate">
              <p className="text-slate-600 leading-relaxed mb-4"> 
                I love to explore! While my primary experience is in technical work, my inspiration comes from learning as much about the world as I can.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Through my experiences at NASA, Morgan Stanley, and various tech initiatives, I've developed a unique blend of 
                technical expertise and strategic thinking. I'm always excited to tackle complex challenges and create meaningful solutions.
                My journey in Computer Science has led me to explore Full-Stack Engineering, Data Science, and Remote Sensing technologies.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Explore My Work Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
        id="explore"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore My Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Full-Stack Card */}
          <Link to="/fullstack" className="group">
            <div className="relative h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <Code2 className="text-white mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-white mb-2">Full-Stack</h3>
                  <p className="text-white/80 text-sm">Web & Mobile Applications</p>
                </div>
                <div className="space-y-1 text-white/70 text-xs font-mono">
                  <div>→ Lexington Links</div>
                  <div>→ Findr</div>
                  <div>→ Codepath Apps</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Data Science Card */}
          <Link to="/data" className="group">
            <div className="relative h-64 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <Database className="text-white mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-white mb-2">Data Science</h3>
                  <p className="text-white/80 text-sm">ML & Analytics</p>
                </div>
                <div className="space-y-1 text-white/70 text-xs font-mono">
                  <div>→ Spring Foliage Map</div>
                  <div>→ StellarSearch</div>
                  <div>→ GroupWisdom Bot</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Programmatics Card */}
          <Link to="/programmatics" className="group">
            <div className="relative h-64 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <Rocket className="text-white mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-white mb-2">Programmatics</h3>
                  <p className="text-white/80 text-sm">Strategy & Mission Planning</p>
                </div>
                <div className="space-y-1 text-white/70 text-xs font-mono">
                  <div>→ NASA LSPACE MCA</div>
                  <div>→ Unadat Final Product</div>
                  <div>→ NASA Proposal Writing</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Blog Card */}
          <Link to="/blog" className="group">
            <div className="relative h-64 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <ArrowRight className="text-white mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-white mb-2">Blog</h3>
                  <p className="text-white/80 text-sm">Insights & Tutorials</p>
                </div>
                <div className="space-y-1 text-white/70 text-xs font-mono">
                  <div>→ Technical Tutorials</div>
                  <div>→ Project Insights</div>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </motion.div>

    </main>
  );
};

export default RightSection;