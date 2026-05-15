import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Code2, Database, Server, Globe, Layers, 
  Zap, GitBranch, Terminal, Cpu, Cloud,
  CheckCircle2, ArrowRight, ExternalLink
} from "lucide-react";
import ProjectHeader from "./ProjectHeader.jsx";

const SWEPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Software Engineering Projects Data
  const projects = [
    {
      id: 1,
      title: "Findr",
      description: "Location-based discovery and social networking application",
      tech: ["React Native", "Firebase", "Google Maps API", "Redux"],
      gradient: "from-green-500 to-teal-600",
      features: ["Geolocation services", "Push notifications", "Social features", "Real-time chat"]
    },
    {
      id: 2,
      title: "Codepath Apps",
      description: "Hub showcasing CodePath web development projects including Lexington Links and FoodTracker",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB"],
      gradient: "from-purple-500 to-pink-600",
      features: ["Software engineering foundations", "Database design", "REST APIs", "Modern web architecture"]
    },
    {
      id: 3,
      title: "reciPal",
      description: "Recipe discovery and meal planning application",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      gradient: "from-orange-500 to-red-600",
      features: ["Recipe search", "Meal planning", "Smooth animations", "Responsive design"]
    },
    {
      id: 4,
      title: "FocusTube",
      description: "Chrome extension to combat YouTube distraction with AI-powered content filtering",
      tech: ["Chrome Extension", "JavaScript", "Local AI", "YouTube API"],
      gradient: "from-blue-500 to-indigo-600",
      features: ["Focus Mode", "Block Shorts", "AI Content Filtering", "Privacy-focused"]
    },
    {
      id: 5,
      title: "The Thankful Forest Mod",
      description: "Minecraft Forge mod adding Thanksgiving-themed content with custom entities and biomes",
      tech: ["Minecraft Forge", "Java 17", "Gradle", "TerraBLender"],
      gradient: "from-orange-400 to-amber-500",
      features: ["Custom Entities", "World Generation", "AI Behaviors", "3D Modeling"]
    },
    {
      id: 6,
      title: "LetterBuddy",
      description: "AI-powered handwriting improvement platform using GPT-4o Vision for real-time analysis",
      tech: ["Next.js 15", "React 19", "FastAPI", "GPT-4o Vision", "PostgreSQL", "Docker"],
      gradient: "from-purple-500 to-pink-500",
      features: ["AI Vision Analysis", "Real-time Feedback", "Progress Tracking", "EdTech Platform"]
    }
  ];

  // Tech Stack organized by category
  const techStack = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "HTML/CSS"],
    frameworks: ["React", "React Native", "Node.js", "Express.js", "ASP.NET Core", "Django", "Vite"],
    databases: ["PostgreSQL", "MongoDB", "Microsoft SQL Server", "Supabase", "Redis"],
    tools: ["Git", "GitHub", "Jira", "Figma", "PyCharm", "NuGet"],
    apis: ["REST API", "Slack API", "Gemini API", "Supabase API"]
  };

  // Certifications & Achievements
  const certifications = [
    {
      name: "KKCF Fellowship",
      organization: "Web Dev Fellowship",
      year: "2024",
      image: "/photos/Certificates/KKCF.png"
    },
    {
      name: "Codepath Web102",
      organization: "Codepath",
      year: "2025",
      image: "/photos/Certificates/TIP102.png"
    },
    {
      name: "Codepath Web103",
      organization: "Codepath",
      year: "2025",
      image: "/photos/Certificates/Web103.png"
    }
  ];

  const SkillBadge = ({ skill, index, color = "indigo" }) => {
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.03 }}
        className={`inline-block px-4 py-2 bg-gradient-to-r from-${color}-50 to-${color}-100 text-${color}-700 border border-${color}-200 rounded-lg text-sm font-medium hover:shadow-md transition-all cursor-default`}
      >
        {skill}
      </motion.span>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      {/* Hero Section with Parallax */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code2 className="text-white" size={48} />
              <Server className="text-white" size={48} />
              <Database className="text-white" size={48} />
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Software Engineering
            </h1>
            <p className="text-2xl text-white/90 font-light max-w-3xl mx-auto">
              Building complete solutions from database to user interface
            </p>
          </motion.div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * 500,
                opacity: 0.3 
              }}
              animate={{
                y: [null, Math.random() * 500 - 250],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Project Headers Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative -mt-32 mb-20 z-20"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Featured Software Engineering Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectHeader
                title="Findr"
                date="2025"
                status="Completed"
                mediaSrc="/photos/Profile_Photos/Findr.png"
                githubLink="https://github.com/BorowskiKacper/divhacks"
                demoLink="https://devpost.com/software/findr-z9k6ol"
                tags={["React Native", "Firebase", "Google Maps API", "Redux"]}
                projectLink="/swe/findr"
              />
              <ProjectHeader
                title="Codepath Apps"
                date="2025"
                status="Active"
                mediaSrc="https://opengraph.githubassets.com/1/EricAzayev/Full-Stack_Portfolio"
                githubLink="https://github.com/EricAzayev/Full-Stack_Portfolio"
                demoLink="#"
                tags={["React", "Node.js", "Express", "PostgreSQL", "MongoDB"]}
                projectLink="https://dashboard-delta-eight-66.vercel.app/"
              />
              <ProjectHeader
                title="reciPal"
                date="2025"
                status="Expanded"
                mediaSrc="/photos/Profile_Photos/reciPalCover.png"
                githubLink="https://github.com/EricAzayev/reciPal"
                demoLink="#"
                tags={["React", "Tailwind CSS", "Framer Motion", "Vite"]}
                projectLink="/swe/recipal"
              />
              <ProjectHeader
                title="TruthLens Hackathon Project"
                date="2025"
                status="In Development"
                mediaSrc="/photos/Profile_Photos/Truthlens.png"
                tags={["React", "AI/ML", "API Integration", "Data Visualization"]}
                projectLink="/swe/truthlens"
              />
              <ProjectHeader
                title="FocusTube"
                date="April 2026"
                status="Completed"
                mediaSrc="https://github.com/user-attachments/assets/091da99e-790d-4c35-8901-7eb04850db55"
                githubLink="https://github.com/luoshuyi1124/google-project"
                tags={["Chrome Extension", "AI/ML", "JavaScript", "YouTube API"]}
                projectLink="/swe/focustube"
              />
              <ProjectHeader
                title="The Thankful Forest Mod"
                date="2023"
                status="Completed"
                mediaSrc="/photos/Profile_Photos/Thankful_Forest.png"
                githubLink="https://github.com/EricAzayev/Festive_Hackathon-The_Thankful_Forest_Mod"
                tags={["Minecraft Forge", "Java 17", "Game Development", "Gradle"]}
                projectLink="/swe/thankful-forest-mod"
              />
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Expertise</h2>
            <p className="text-gray-600 text-lg">Building complete software solutions with modern technologies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-3">
                  <Terminal className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.languages.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} index={index} color="blue" />
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-3">
                  <Layers className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.frameworks.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} index={index} color="purple" />
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-lg p-3">
                  <Database className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Databases & Storage</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.databases.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} index={index} color="green" />
                ))}
              </div>
            </motion.div>

            {/* Development Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-3">
                  <GitBranch className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Development Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.tools.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} index={index} color="orange" />
                ))}
              </div>
            </motion.div>
          </div>

          {/* API Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-3">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">API Integration & Services</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.apis.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} index={index} color="indigo" />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certifications & Achievements */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications & Achievements</h2>
            <p className="text-gray-600 text-lg">Continuous learning and professional development</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="text-indigo-600 text-4xl">🏆</div>`;
                      }}
                    />
                  ) : (
                    <div className="text-indigo-600 text-4xl">🏆</div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{cert.organization}</p>
                <p className="text-indigo-600 text-sm font-semibold">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Skills/Capabilities */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Complete Development Lifecycle
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Code2, label: "Software Development" },
              { icon: GitBranch, label: "Version Control" },
              { icon: Zap, label: "API Development" },
              { icon: Server, label: "Backend Systems" },
              { icon: Database, label: "Database Design" },
              { icon: Cloud, label: "Cloud Deployment" },
              { icon: Terminal, label: "Authentication" },
              { icon: Layers, label: "Data Visualization" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <item.icon className="text-white mx-auto mb-3" size={32} />
                <p className="text-white font-semibold text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default SWEPage;