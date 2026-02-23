import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Rocket, Target, Users, Lightbulb, FileText, Calendar } from "lucide-react";
import ProjectHeader from "./ProjectHeader.jsx";

const ProgrammaticsPage = () => {
  const projects = [
    {
      id: 1,
      title: "NASA LSPACE Mission Concept Academy",
      organization: "NASA",
      description: "Mission design and concept development for space exploration initiatives",
      role: "Mission Analyst",
      gradient: "from-blue-600 to-indigo-700",
      icon: Rocket
    },
    {
      id: 2,
      title: "Unadat Final Product",
      organization: "Unadat",
      description: "Product management and strategic planning for data analytics solutions",
      role: "Product Manager",
      gradient: "from-green-600 to-teal-700",
      icon: Target
    },
    {
      id: 3,
      title: "NASA LSPACE Proposal Writing",
      organization: "NASA",
      description: "Technical writing and proposal development for space mission concepts",
      role: "Technical Writer",
      gradient: "from-purple-600 to-pink-700",
      icon: FileText
    }
  ];

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
            <div className="space-y-8">
              <ProjectHeader
                title="NASA LSPACE MCA"
                date="2023"
                status="Completed"
                githubLink="#"
                docsLink="#"
                tags={["Mission Design", "Systems Engineering", "NASA", "Aerospace"]}
              />
              <ProjectHeader
                title="Unadat Final Product"
                date="2024"
                status="Production"
                githubLink="#"
                demoLink="#"
                docsLink="#"
                tags={["Product Management", "Strategy", "Data Analytics", "SaaS"]}
              />
              <ProjectHeader
                title="NASA Proposal Writing"
                date="2023"
                status="Published"
                docsLink="#"
                tags={["Technical Writing", "Proposal Development", "NASA", "Research"]}
              />
              <ProjectHeader
                title="Strategic Planning"
                date="2024"
                status="Ongoing"
                docsLink="#"
                tags={["Leadership", "Cross-functional", "Strategy", "Execution"]}
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Work</h2>
            <p className="text-gray-600 text-lg">Strategic initiatives and program management</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Project gradient header */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="text-white/80" size={64} />
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        {project.organization}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar size={16} />
                      <span className="text-sm font-semibold">{project.role}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Target, label: "Strategic Planning" },
              { icon: Users, label: "Team Leadership" },
              { icon: Lightbulb, label: "Innovation" },
              { icon: FileText, label: "Technical Writing" },
              { icon: Rocket, label: "Mission Design" },
              { icon: Calendar, label: "Program Management" },
              { icon: Target, label: "Stakeholder Management" },
              { icon: Users, label: "Cross-functional Collaboration" }
            ].map((item, index) => (
              <motion.div
                key={`${item.label}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
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

export default ProgrammaticsPage;
