import { motion } from "framer-motion";
import { Target, Users, Lightbulb } from "lucide-react";
import ProjectHeader from "./ProjectHeader.jsx";

const ProgrammaticsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-50">
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-teal-600 to-emerald-500 opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="text-white" size={48} />
              <Users className="text-white" size={48} />
              <Lightbulb className="text-white" size={48} />
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Programmatics
            </h1>
            <p className="text-2xl text-white/90 font-light max-w-3xl mx-auto">
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
