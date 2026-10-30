import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectHeader from "./ProjectHeader.jsx";

const PMAnalystPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);


  // Achievements
  const achievements = [
    {
      name: "30 Days of Pandas",
      organization: "LeetCode",
      year: "2025",
      description: "Completed comprehensive pandas challenge",
      icon: "📊"
    },
    {
      name: "Data Science Fellowship",
      organization: "CUNY Tech Prep",
      year: "2025-2026",
      description: "Year-long fellowship program in data science and machine learning",
      icon: "🎓"
    }
  ];


  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50">
      
      {/* Hero band */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative h-[40vh] min-h-[320px] flex items-center overflow-hidden band-graphite"
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Data Science
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl">
              Projects in geospatial analysis, natural language processing, and applied machine learning
            </p>
          </motion.div>
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
                date="2025"
                status="In Progress"
                mediaSrc="/photos/Profile_Photos/SpringFoliageMap.png"
                githubLink="https://github.com/EricAzayev/Spring-Foliage"
                tags={["Python", "Pandas", "Folium", "Satellite Data"]}
                projectLink="/data/spring-foliage-map"
              />
              <ProjectHeader
                title="StellarSearch"
                date="2025"
                status="Completed"
                mediaSrc="/photos/Profile_Photos/StellarSearch.png"
                githubLink="https://github.com/oleksiisud/slack-cluster-finder"
                tags={["NLP", "Topic Clustering", "Supabase", "Slack API", "Discord API"]}
                projectLink="/data/stellar-search"
              />
              <ProjectHeader
                title="LetterBuddy"
                date="2025"
                status="Hackathon"
                mediaSrc="/photos/Profile_Photos/LetterBuddy.png"
                tags={["Next.js 15", "React 19", "FastAPI", "GPT-4o Vision"]}
                projectLink="/data/letterbuddy"
              />
              <ProjectHeader
                title="DenCity"
                date="2024"
                status="Hackathon"
                mediaSrc="/photos/Profile_Photos/DenCity_Header_Photo.png"
                githubLink="https://github.com/BorowskiKacper/parkingsniffer"
                demoLink="https://devpost.com/software/dencity"
                tags={["Bluetooth", "Supabase", "React", "Geospatial"]}
                projectLink="/data/dencity"
              />
              <ProjectHeader
                title="GroupWisdom Bot"
                date="2026"
                status="In Development"
                mediaSrc="/photos/Projects/GroupWisdom/hallucinationsExample.png"
                tags={["Unsloth", "Discord.py", "LLM Fine-Tuning"]}
                projectLink="/data/groupwisdom"
              />
            </div>
          </div>
        </motion.div>


        {/* Achievements */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Learning & Achievements</h2>
            <p className="text-gray-600 text-lg">Continuous growth in data science and analytics</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-6xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{achievement.name}</h3>
                    <p className="text-cyan-600 font-semibold mb-2">{achievement.organization}</p>
                    <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                    <p className="text-sm font-semibold text-gray-500">{achievement.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default PMAnalystPage;