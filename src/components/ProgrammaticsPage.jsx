import { motion } from "framer-motion";
import { Target, Users, Lightbulb } from "lucide-react";
import ProjectHeader from "./ProjectHeader.jsx";

const ProgrammaticsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero band */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[40vh] min-h-[320px] flex items-center overflow-hidden band-graphite"
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Programmatics
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl">
              Product Management, Strategy, and Mission Planning
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
              Featured Programmatics Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectHeader
                title="NASA LSPACE MCA"
                date="2024"
                status="Completed"
                mediaSrc="/photos/Profile_Photos/LSPACEMCA.png"
                tags={["Mission Design", "Systems Engineering", "NASA", "Aerospace"]}
                projectLink="/programmatics/nasa-lspace-mca"
              />
              <ProjectHeader
                title="Unadat"
                date="2025"
                status="In Development"
                mediaSrc="/photos/Profile_Photos/UnadatFinal.png"
                tags={["Product Management", "Strategy", "Data Analytics"]}
              />
              <ProjectHeader
                title="NASA LSPACE NPWEE"
                date="2026"
                status="In Progress"
                mediaSrc="/photos/Profile_Photos/LSPACEProposal.jpg"
                tags={["Technical Writing", "Proposal Development", "NASA", "Research"]}
                projectLink="/programmatics/nasa-proposal-writing"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProgrammaticsPage;
