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
      organization: "Kode With Klossy",
      year: "2024",
      image: "/photos/Profile_Photos/KKCF.png"
    },
    {
      name: "Codepath Web101",
      organization: "Codepath",
      year: "2023",
      image: "/photos/Profile_Photos/Web101.png"
    },
    {
      name: "Codepath Web102",
      organization: "Codepath",
      year: "2024",
      image: "/photos/Profile_Photos/Web102.png"
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
                date="2025"
                status="On Pause"
                githubLink="https://github.com/EricAzayev/Lexington-Links"
                demoLink="#"
                docsLink="#"
                tags={["React", "Node.js", "PostgreSQL", "Express"]}
                projectLink="/fullstack/lexington-links"
              />
              <ProjectHeader
                title="Findr"
                date="2025"
                status="Completed"
                githubLink="https://github.com/BorowskiKacper/divhacks"
                demoLink="https://devpost.com/software/findr-z9k6ol"
                tags={["React Native", "Firebase", "Google Maps API", "Redux"]}
                projectLink="/fullstack/findr"
              />
              <ProjectHeader
                title="Codepath Apps"
                date="2025"
                status="Active"
                githubLink="https://github.com/EricAzayev/Full-Stack_Portfolio"
                demoLink="#"
                docsLink="#"
                tags={["Swift", "Android", "REST APIs", "Material Design"]}
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
                projectLink="/fullstack/recipal"
              />
              <ProjectHeader
                title="FoodTracker WebApp"
                date="2025"
                status="Active"
                githubLink="https://github.com/EricAzayev/Full-Stack_Portfolio/tree/main/FoodTracker"
                tags={["React", "Node.js", "Express", "MongoDB"]}
                projectLink="/fullstack/foodtracker"
              />
              <ProjectHeader
                title="TruthLens Hackathon Project"
                date="2025"
                status="In Development"
                tags={["React", "AI/ML", "API Integration", "Data Visualization"]}
                projectLink="/fullstack/truthlens"
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
            <p className="text-gray-600 text-lg">Building full-stack solutions with modern technologies</p>
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
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="text-indigo-600 text-4xl">🏆</div>`;
                    }}
                  />
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
              { icon: Code2, label: "Full-Stack Development" },
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

export default FullStackPage;