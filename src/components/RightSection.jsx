import React, { useEffect, useRef } from "react";
import { Mail, ArrowRight, Code2, Database, Rocket } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import GitHubActivity from "./GitHubActivity";
import LeetCodeStats from "./LeetCodeStats";

const experienceItems = [
  {
    name: "LSPACE",
    logo: "/photos/Experience_Band/LSPACE.png",
    alt: "LSPACE",
  },
  {
    name: "Unadat",
    logo: "/photos/Experience_Band/Unadat.png",
    alt: "Unadat",
  },
  {
    name: "Morgan Stanley",
    logo: "/photos/Experience_Band/MorganStanley.png",
    alt: "Morgan Stanley",
  },
  {
    name: "NASA",
    logo: "/photos/Experience_Band/NASA.webp",
    alt: "NASA",
  },
  {
    name: "IEH",
    logo: "/photos/Experience_Band/IEH.png",
    alt: "IEH",
  },
];

const organizationItems = [
  {
    name: "Accenture Student Leadership",
    logo: "/photos/Organizations_Band/Accenture.png",
    alt: "Accenture",
  },
  {
    name: "Code2Career",
    logo: "/photos/Organizations_Band/BASTA.png",
    alt: "Code2Career",
  },
  {
    name: "Data Science Fellowship",
    logo: "/photos/Organizations_Band/CUNYTechPrep.png",
    alt: "Data Science Fellowship",
  },
  {
    name: "Codepath",
    logo: "/photos/Organizations_Band/Codepath.png",
    alt: "Codepath",
  },
];

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

// Image placeholder toggle set to `false` while waiting for real photos — flip to `true` to bring them back
const SHOW_IMAGE_PLACEHOLDERS = false;

// Blog is not built yet — flip to `true` to restore the Blog card
const SHOW_BLOG_CARD = false;

const RightSection = () => {
  const navigate = useNavigate();
  return (
    <main className="right-section">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl font-bold text-slate-900 mb-4 leading-tight">
          Systems &amp; Solutions Engineer
        </h1>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 text-center">
          Building impactful solutions across Software Engineering, Data Science, and Product Strategy. 
          Computer Science student at Hunter College with a passion for creating elegant, scalable systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a 
            href="#explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors"
          >
            Explore My Work
            <ArrowRight size={18} />
          </a>
          <a 
            href="mailto:azayeveric@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-md font-medium transition-colors"
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
        <div className="logo-band-card">
          <div className="logo-band-grid">
            {experienceItems.map((item) => (
              <div key={item.name} className="logo-band-chip">
                <div className="logo-band-mark">
                  <img src={item.logo} alt={item.alt} className="logo-band-image" />
                </div>
                <span className="logo-band-label">{item.name}</span>
              </div>
            ))}
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
        <div className="logo-band-card">
          <div className="logo-band-grid">
            {organizationItems.map((item) => (
              <div key={item.name} className="logo-band-chip">
                <div className="logo-band-mark">
                  <img src={item.logo} alt={item.alt} className="logo-band-image" />
                </div>
                <span className="logo-band-label">{item.name}</span>
              </div>
            ))}
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
            {SHOW_IMAGE_PLACEHOLDERS && (
              <div className="aspect-square bg-slate-100 border border-slate-200 rounded-lg"></div>
            )}
          </div>
          <div className="md:col-span-3">
            <div className="prose prose-slate">
              <p className="text-slate-600 leading-relaxed mb-4"> 
                I love to explore! Ever since high school freshman year, I've been fascinated by biking, hiking, and exploring nature to my greatest capacity.
                While my primary experience is in technical work, my inspiration comes from learning as much about the world as I can. 
                
                Through Software Engineering, I have discovered that exploration can come not just from my legs 🚶‍♂️, but also from data and the way we interact with it 💻.
                My work has reflected these goals, from developing software that visualizes complex data to participating in diverse tech communities.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Through my experiences at NASA, Morgan Stanley, and various tech initiatives, I've developed a systems-level approach to my work. I'm always excited to tackle complex challenges and create meaningful solutions.
                My journey in Computer Science has led me to explore Software Engineering, Data Science, and Remote Sensing technologies.
              </p>
            </div>

            {/* Interactive Icons */}
            <div className="mt-8 flex gap-6 justify-center items-center">
              {/* Saturn Icon */}
              <motion.div 
                className="relative w-40 h-40 cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate("/space")}
                role="button"
                aria-label="View realistic space starfield"
              >
                {/* Space Background */}
                <div className="starfield rounded-2xl">
                  <div className="starfield-nebula" />
                  <div className="starfield-layer starfield-layer-1" />
                  <div className="starfield-layer starfield-layer-2" />
                  <div className="starfield-layer starfield-layer-3" />

                  {/* Saturn Planet */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg width="80" height="80" viewBox="0 0 100 100">
                      {/* Saturn Body */}
                      <defs>
                        <radialGradient id="saturnGradient">
                          <stop offset="0%" stopColor="#f4e4c1" />
                          <stop offset="50%" stopColor="#e8d4a0" />
                          <stop offset="100%" stopColor="#d4b483" />
                        </radialGradient>
                      </defs>
                      <ellipse cx="50" cy="50" rx="25" ry="25" fill="url(#saturnGradient)" />
                      
                      {/* Saturn Rings */}
                      <ellipse 
                        cx="50" 
                        cy="50" 
                        rx="42" 
                        ry="12" 
                        fill="none" 
                        stroke="#d4b483" 
                        strokeWidth="2"
                        opacity="0.6"
                      />
                      <ellipse 
                        cx="50" 
                        cy="50" 
                        rx="38" 
                        ry="10" 
                        fill="none" 
                        stroke="#c4a473" 
                        strokeWidth="1.5"
                        opacity="0.8"
                      />
                    </svg>
                  </div>

                  {/* Click Me Text */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      Explore Space
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Bike Icon */}
              <motion.div 
                className="relative w-40 h-40 cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Nature Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-green-300 to-green-600 rounded-2xl overflow-hidden">
                  {/* Animated Background Elements (clouds/trees) */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: i < 3 ? '30px' : '20px',
                        height: i < 3 ? '15px' : '10px',
                        backgroundColor: i < 3 ? 'rgba(255,255,255,0.7)' : 'rgba(34,139,34,0.6)',
                        left: `${Math.random() * 100}%`,
                        top: i < 3 ? `${Math.random() * 30}%` : `${70 + Math.random() * 20}%`,
                      }}
                      animate={{
                        x: [-10, 10, -10],
                      }}
                      transition={{
                        duration: Math.random() * 4 + 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}

                  {/* Bike SVG */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg width="90" height="60" viewBox="0 0 120 80">
                      {/* Back Wheel */}
                      <g className="group-hover:animate-spin-slow" style={{ transformOrigin: '25px 50px' }}>
                        <circle cx="25" cy="50" r="15" fill="none" stroke="#333" strokeWidth="3" />
                        <line x1="25" y1="35" x2="25" y2="65" stroke="#333" strokeWidth="2" />
                        <line x1="10" y1="50" x2="40" y2="50" stroke="#333" strokeWidth="2" />
                        <line x1="15" y1="40" x2="35" y2="60" stroke="#333" strokeWidth="1.5" />
                        <line x1="35" y1="40" x2="15" y2="60" stroke="#333" strokeWidth="1.5" />
                      </g>
                      
                      {/* Front Wheel */}
                      <g className="group-hover:animate-spin-slow" style={{ transformOrigin: '85px 50px' }}>
                        <circle cx="85" cy="50" r="15" fill="none" stroke="#333" strokeWidth="3" />
                        <line x1="85" y1="35" x2="85" y2="65" stroke="#333" strokeWidth="2" />
                        <line x1="70" y1="50" x2="100" y2="50" stroke="#333" strokeWidth="2" />
                        <line x1="75" y1="40" x2="95" y2="60" stroke="#333" strokeWidth="1.5" />
                        <line x1="95" y1="40" x2="75" y2="60" stroke="#333" strokeWidth="1.5" />
                      </g>

                      {/* Frame */}
                      <line x1="25" y1="50" x2="55" y2="25" stroke="#666" strokeWidth="3" />
                      <line x1="55" y1="25" x2="85" y2="50" stroke="#666" strokeWidth="3" />
                      <line x1="25" y1="50" x2="50" y2="50" stroke="#666" strokeWidth="3" />
                      <line x1="50" y1="50" x2="55" y2="25" stroke="#666" strokeWidth="3" />
                      
                      {/* Seat */}
                      <ellipse cx="40" cy="25" rx="8" ry="3" fill="#333" />
                      
                      {/* Handlebars */}
                      <line x1="85" y1="50" x2="90" y2="30" stroke="#555" strokeWidth="2.5" />
                      <line x1="88" y1="30" x2="95" y2="30" stroke="#555" strokeWidth="2.5" />
                    </svg>
                  </div>

                  {/* Click Me Text */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      Coming Soon!
                    </span>
                  </motion.div>
                </div>
              </motion.div>
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
          
          {/* Software Engineering Card */}
          <Link to="/swe" className="group" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}>
            <div className="relative h-64 bg-white border border-slate-200 rounded-lg overflow-hidden transition-colors duration-200 group-hover:border-indigo-400">
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <Code2 className="text-indigo-600 mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">SWE</h3>
                  <p className="text-slate-600 text-sm">Web & Mobile Applications</p>
                </div>
                <div className="space-y-1 text-slate-500 text-xs font-mono">
                  <div>→ Lexington Links</div>
                  <div>→ Findr</div>
                  <div>→ Codepath Apps</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Data Science Card */}
          <Link to="/data" className="group" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}>
            <div className="relative h-64 bg-white border border-slate-200 rounded-lg overflow-hidden transition-colors duration-200 group-hover:border-sky-400">
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <Database className="text-sky-600 mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Data Science</h3>
                  <p className="text-slate-600 text-sm">ML & Analytics</p>
                </div>
                <div className="space-y-1 text-slate-500 text-xs font-mono">
                  <div>→ Spring Foliage Map</div>
                  <div>→ StellarSearch</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Programmatics Card */}
          <Link to="/programmatics" className="group" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}>
            <div className="relative h-64 bg-white border border-slate-200 rounded-lg overflow-hidden transition-colors duration-200 group-hover:border-emerald-400">
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <Rocket className="text-emerald-600 mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Programmatics</h3>
                  <p className="text-slate-600 text-sm">Strategy & Mission Planning</p>
                </div>
                <div className="space-y-1 text-slate-500 text-xs font-mono">
                  <div>→ NASA LSPACE MCA</div>
                  <div>→ Unadat Final Product</div>
                  <div>→ NASA LSPACE NPWEE</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Blog Card */}
          {SHOW_BLOG_CARD && (
            <Link to="/blog" className="group" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}>
              <div className="relative h-64 bg-white border border-slate-200 rounded-lg overflow-hidden transition-colors duration-200 group-hover:border-amber-400">
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <ArrowRight className="text-amber-600 mb-3" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Blog</h3>
                    <p className="text-slate-600 text-sm">Insights & Tutorials</p>
                  </div>
                  <div className="space-y-1 text-slate-500 text-xs font-mono">
                    <div>→ Technical Tutorials</div>
                    <div>→ Project Insights</div>
                  </div>
                </div>
              </div>
            </Link>
          )}

        </div>
      </motion.div>

      {/* GitHub Activity and LeetCode Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Coding Activity</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <GitHubActivity username="EricAzayev" />
          <LeetCodeStats username="EricAzayev" />
        </div>
      </motion.div>

    </main>
  );
};

export default RightSection;