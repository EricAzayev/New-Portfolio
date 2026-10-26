import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2, Database, Server, Layers,
  Zap, GitBranch, Terminal
} from "lucide-react";
import ProjectHeader from "./ProjectHeader.jsx";

const SWEPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
      name: "CodePath Technical Interview Prep (Advanced)",
      organization: "CodePath",
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

  // Literal class strings per color — Tailwind can't see interpolated class names
  const badgeStyles = {
    blue: "from-blue-50 to-blue-100 text-blue-700 border-blue-200",
    purple: "from-purple-50 to-purple-100 text-purple-700 border-purple-200",
    green: "from-green-50 to-green-100 text-green-700 border-green-200",
    orange: "from-orange-50 to-orange-100 text-orange-700 border-orange-200",
    indigo: "from-indigo-50 to-indigo-100 text-indigo-700 border-indigo-200"
  };

  const SkillBadge = ({ skill, index, color = "indigo" }) => {
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.03 }}
        className={`inline-block px-4 py-2 bg-gradient-to-r border ${badgeStyles[color]} rounded-lg text-sm font-medium hover:shadow-md transition-all cursor-default`}
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
                recognition={{
                  label: "Best Use of Gemini API",
                  event: "DivHacks",
                  href: "https://devpost.com/software/findr-z9k6ol",
                  prefix: "Awarded"
                }}
                tags={["React Native", "Firebase", "Google Maps API", "Redux"]}
                projectLink="/swe/findr"
              />
              <ProjectHeader
                title="Codepath Apps"
                date="2025"
                status="Active"
                mediaSrc="/photos/Projects/CodepathApps/CodepathApps_Cover.png"
                githubLink="https://github.com/EricAzayev/Full-Stack_Portfolio"
                recognition={{
                  label: "Graduated Web103 with Honors"
                }}
                tags={["React", "Node.js", "Express", "PostgreSQL", "MongoDB"]}
                projectLink="/swe/codepath-apps"
              />
              <ProjectHeader
                title="reciPal"
                date="2025"
                status="Expanded"
                mediaSrc="/photos/Profile_Photos/reciPalCover.png"
                githubLink="https://github.com/EricAzayev/reciPal"
                demoLink="https://youtu.be/7EKcPbCa5ow"
                tags={["React", "Tailwind CSS", "Framer Motion", "Vite"]}
                projectLink="/swe/recipal"
              />
              <ProjectHeader
                title="TruthLens Hackathon Project"
                date="2025"
                status="In Development"
                mediaSrc="/photos/Profile_Photos/Truthlens.png"
                recognition={{
                  label: "Advanced to Second Round",
                  event: "Cornell AI Hackathon"
                }}
                tags={["React", "AI/ML", "API Integration", "Data Visualization"]}
                projectLink="/swe/truthlens"
              />
              <ProjectHeader
                title="FocusTube"
                date="April 2026"
                status="Completed"
                mediaSrc="/photos/Projects/FocusTube/FocusTube_Cover.png"
                githubLink="https://github.com/luoshuyi1124/google-project"
                recognition={{
                  label: "Presented at Google Mentorship Conference"
                }}
                tags={["Chrome Extension", "AI/ML", "JavaScript", "YouTube API"]}
                projectLink="/swe/focustube"
              />
              <ProjectHeader
                title="The Thankful Forest Mod"
                date="2023"
                status="Completed"
                mediaSrc="/photos/Profile_Photos/Thankful_Forest.png"
                githubLink="https://github.com/EricAzayev/Festive_Hackathon-The_Thankful_Forest_Mod"
                recognition={{
                  label: "Best Thanksgiving Project",
                  event: "Festive Hackathon"
                }}
                tags={["Minecraft Forge", "Java 17", "Game Development", "Gradle"]}
                projectLink="/swe/thankful-forest-mod"
              />
              <ProjectHeader
                title="FoodTracker"
                date="2025"
                status="Active"
                mediaSrc="/photos/Projects/FoodTracker/DataFork Logo.png"
                mediaFit="contain"
                githubLink="https://github.com/EricAzayev/Full-Stack_Portfolio/tree/main/FoodTracker"
                tags={["React", "Node.js", "Express", "MongoDB", "REST API"]}
                projectLink="/swe/foodtracker"
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
            <p className="text-gray-600 text-lg">Languages, frameworks, and tools used across the projects above</p>
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

      </div>
    </div>
  );
};

export default SWEPage;