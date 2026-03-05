import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Code2, Database, Server, Globe, Layers, 
  Zap, GitBranch, Terminal, Cpu, Cloud,
  CheckCircle2, ArrowRight, ExternalLink
} from "lucide-react";
import ProjectHeader from "./ProjectHeader.jsx";

const FullStackPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Full Stack Projects Data
  const projects = [
    {
      id: 1,
      title: "Lexington Links",
      description: "Community platform connecting local residents and businesses",
      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      gradient: "from-blue-500 to-purple-600",
      features: ["Real-time updates", "User authentication", "Interactive maps", "Event management"]
    },
    {
      id: 2,
      title: "Findr",
      description: "Location-based discovery and social networking application",
      tech: ["React Native", "Firebase", "Google Maps API", "Redux"],
      gradient: "from-green-500 to-teal-600",
      features: ["Geolocation services", "Push notifications", "Social features", "Real-time chat"]
    },
    {
      id: 3,
      title: "Codepath Apps",
      description: "Collection of educational mobile applications",
      tech: ["Swift", "Android", "REST APIs", "Material Design"],
      gradient: "from-orange-500 to-red-600",
      features: ["Cross-platform", "API integration", "Modern UI/UX", "Responsive design"]
    }
  ];

  // Tech Stack Data
  const techStack = {
    frontend: [
      { name: "React/React Native", level: 90, icon: Code2 },
      { name: "JavaScript/TypeScript", level: 85, icon: Terminal },
      { name: "Tailwind CSS", level: 88, icon: Layers },
      { name: "Redux/State Mgmt", level: 80, icon: GitBranch }
    ],
    backend: [
      { name: "Node.js/Express", level: 85, icon: Server },
      { name: "Python/Django", level: 78, icon: Cpu },
      { name: "PostgreSQL/MongoDB", level: 82, icon: Database },
      { name: "AWS/Cloud Services", level: 75, icon: Cloud }
    ]
  };

  const SkillBar = ({ skill, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const Icon = skill.icon;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Icon size={18} className="text-indigo-600" />
            <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
          </div>
          <span className="text-xs font-bold text-indigo-600">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
          />
        </div>
      </motion.div>
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
              Full-Stack Engineering
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
              Featured Full-Stack Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectHeader
                title="Lexington Links"
                date="2024"
                status="Production"
                githubLink="https://github.com/EricAzayev/Lexington-Links"
                demoLink="#"
                docsLink="#"
                tags={["React", "Node.js", "PostgreSQL", "Express"]}
                projectLink="/fullstack/lexington-links"
              />
              <ProjectHeader
                title="Findr"
                date="2024"
                status="Completed"
                githubLink="https://github.com/BorowskiKacper/divhacks"
                demoLink="https://devpost.com/software/findr-z9k6ol"
                tags={["React Native", "Firebase", "Google Maps API", "Redux"]}
                projectLink="/fullstack/findr"
              />
              <ProjectHeader
                title="Codepath Apps"
                date="2023"
                status="Completed"
                githubLink="https://github.com/EricAzayev/Full-Stack_Portfolio"
                demoLink="#"
                docsLink="#"
                tags={["Swift", "Android", "REST APIs", "Material Design"]}
                projectLink="/fullstack/codepath-apps"
              />
              <ProjectHeader
                title="reciPal"
                date="2024"
                status="Active"
                githubLink="https://github.com/EricAzayev/reciPal"
                demoLink="#"
                tags={["React", "Tailwind CSS", "Framer Motion", "Vite"]}
              />
              <ProjectHeader
                title="FoodTracker WebApp"
                date="2023"
                status="Completed"
                githubLink="https://github.com/EricAzayev/Full-Stack_Portfolio/tree/main/FoodTracker"
                tags={["React", "Node.js", "Express", "MongoDB"]}
                projectLink="/fullstack/foodtracker"
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
            <p className="text-gray-600 text-lg">Proficient across the entire technology stack</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-3">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Frontend</h3>
              </div>
              <div>
                {techStack.frontend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-3">
                  <Server className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Backend</h3>
              </div>
              <div>
                {techStack.backend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Skills/Capabilities */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Complete Development Lifecycle
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Terminal, label: "API Development" },
              { icon: Database, label: "Database Design" },
              { icon: Cloud, label: "Cloud Deployment" },
              { icon: GitBranch, label: "Version Control" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <item.icon className="text-white mx-auto mb-3" size={32} />
                <p className="text-white font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default FullStackPage;