import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectHeader from "./ProjectHeader.jsx";

const SWEPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
              Software Engineering
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl">
              Building complete solutions from database to user interface
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
                <div className="aspect-video bg-slate-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
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