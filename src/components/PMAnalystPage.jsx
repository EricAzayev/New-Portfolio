import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  BarChart3, Brain, Database, TrendingUp, Cpu, 
  Network, GitGraph, Search, CheckCircle2, 
  ArrowRight, Zap, PieChart, LineChart, Activity
} from "lucide-react";
import ProjectHeader from "./ProjectHeader.jsx";

const PMAnalystPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Data Science Projects
  const projects = [
    {
      id: 1,
      title: "Spring Foliage Map",
      description: "Interactive geospatial visualization of seasonal vegetation changes using satellite imagery",
      tech: ["Python", "Pandas", "Folium", "Satellite Data"],
      gradient: "from-cyan-500 to-blue-600",
      features: ["Geospatial analysis", "Data visualization", "Time-series processing", "Remote sensing"]
    },
    {
      id: 2,
      title: "StellarSearch",
      description: "Machine learning-powered astronomical object detection and classification system",
      tech: ["TensorFlow", "Scikit-learn", "NumPy", "Matplotlib"],
      gradient: "from-blue-500 to-indigo-600",
      features: ["Deep learning", "Image classification", "Feature extraction", "Model optimization"]
    },
    {
      id: 3,
      title: "GroupWisdom Bot",
      description: "NLP-driven chatbot for collective intelligence and decision-making analytics",
      tech: ["NLP", "Python", "FastAPI", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-600",
      features: ["Natural language processing", "Sentiment analysis", "Real-time analytics", "API development"]
    }
  ];

  // Data Science Tech Stack
  const techStack = {
    analysis: [
      { name: "Python/Pandas", level: 92, icon: Brain },
      { name: "NumPy/SciPy", level: 88, icon: Cpu },
      { name: "SQL/NoSQL", level: 85, icon: Database },
      { name: "Data Visualization", level: 90, icon: BarChart3 }
    ],
    ml: [
      { name: "TensorFlow/Keras", level: 82, icon: Network },
      { name: "Scikit-learn", level: 87, icon: GitGraph },
      { name: "Statistical Analysis", level: 84, icon: TrendingUp },
      { name: "NLP/Text Mining", level: 80, icon: Search }
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
            <Icon size={18} className="text-cyan-600" />
            <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
          </div>
          <span className="text-xs font-bold text-cyan-600">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      
      {/* Hero Section with Parallax */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-500 opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BarChart3 className="text-white" size={48} />
              <Brain className="text-white" size={48} />
              <TrendingUp className="text-white" size={48} />
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Data Science
            </h1>
            <p className="text-2xl text-white/90 font-light max-w-3xl mx-auto">
              Transforming data into actionable insights through advanced analytics and machine learning
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
              Featured Data Science Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectHeader
                title="Spring Foliage Map"
                date="2024"
                status="Completed"
                mediaSrc="/photos/Profile_Photos/SpringFoliageMap.png"
                githubLink="#"
                demoLink="#"
                docsLink="#"
                tags={["Python", "Pandas", "Folium", "Satellite Data"]}
              />
              <ProjectHeader
                title="StellarSearch"
                date="2023"
                status="Completed"
                mediaSrc="/photos/Profile_Photos/StellarSearch.png"
                githubLink="#"
                demoLink="#"
                tags={["TensorFlow", "Scikit-learn", "NumPy", "Matplotlib"]}
              />
              <ProjectHeader
                title="GroupWisdom Bot"
                date="2024"
                status="Active"
                githubLink="#"
                demoLink="#"
                docsLink="#"
                tags={["NLP", "Python", "FastAPI", "PostgreSQL"]}
              />
              <ProjectHeader
                title="LetterBuddy"
                date="2023"
                status="Hackathon"
                mediaSrc="/photos/Profile_Photos/LetterBuddy.png"
                githubLink="#"
                tags={["Python", "Time Series", "ARIMA", "Visualization"]}
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
            <p className="text-gray-600 text-lg">Comprehensive data science and machine learning capabilities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Analysis Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg p-3">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Data Analysis</h3>
              </div>
              <div>
                {techStack.analysis.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Machine Learning Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-3">
                  <Brain className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Machine Learning</h3>
              </div>
              <div>
                {techStack.ml.map((skill, index) => (
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
          className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Complete Data Science Toolkit
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: PieChart, label: "Data Wrangling" },
              { icon: LineChart, label: "Statistical Modeling" },
              { icon: Activity, label: "Time Series Analysis" },
              { icon: Network, label: "Neural Networks" }
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

export default PMAnalystPage;