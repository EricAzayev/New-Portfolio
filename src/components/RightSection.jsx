import React from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
// import Experience from "./components/Experience";



const RightSection = () => {
  return (
    <main className="right-section">
      <h1 className="main-title">Systems &amp; Solutions Engineer</h1>
      
      <div className="stats">
        <div className="stat-card">2 Leadership Roles</div>
        <div className="stat-card">10 Programs or Projects Completed</div>
        <div className="stat-card">15 Team Roles</div>
      </div>


      <div className="Welcome">
        <h2>Hey, I'm Eric Azayev</h2>
        <h3 className="AboutMe">I am a Computer Science student at Hunter College, concentrating in Software Engineering and </h3>
      
        {/* Minimalist Link Band */}
        <div className="mt-8 bg-[#f0f4f8] rounded-lg shadow-sm" style={{ padding: '20px 40px' }}>
          <div className="flex items-center justify-center font-mono text-sm text-black" style={{ gap: '40px' }}>
            <a 
              href="https://github.com/EricAzayev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-70 transition-opacity"
              style={{ gap: '8px' }}
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            
            <span className="text-gray-400" style={{ fontSize: '18px' }}>|</span>
            
            <a 
              href="https://linkedin.com/in/eric-azayev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-70 transition-opacity"
              style={{ gap: '8px' }}
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            
            <span className="text-gray-400" style={{ fontSize: '18px' }}>|</span>
            
            <a 
              href="mailto:your.email@example.com"
              className="flex items-center hover:opacity-70 transition-opacity"
              style={{ gap: '8px' }}
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
            
            <span className="text-gray-400" style={{ fontSize: '18px' }}>|</span>
            
            <a 
              href="#about" 
              className="flex items-center hover:opacity-70 transition-opacity"
              style={{ gap: '8px' }}
            >
              <span>More about me</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div> {/* End of Welcome Section */}
      
      <div className="Experience">
        <h2 className="text-left text-2xl font-semibold mb-4 mt-12">Experience</h2>
        <div className="bg-[#f0f4f8] rounded-lg shadow-sm" style={{ padding: '20px 40px' }}>
          <div className="flex items-center justify-start font-mono text-sm text-black overflow-x-auto" style={{ gap: '40px' }}>
            <div className="flex items-center hover:opacity-70 transition-opacity cursor-pointer" style={{ gap: '8px', minWidth: 'fit-content' }}>
              <img src="/photos/Experience_Band/LSPACE.png" alt="LSPACE" style={{ width: '18px', height: '18px', objectFit: 'contain', flexShrink: 0 }} />
              <h3 className="text-base font-medium m-0">LSPACE</h3>
            </div>
            
            <span className="text-gray-400" style={{ fontSize: '18px' }}>|</span>
            
            <div className="flex items-center hover:opacity-70 transition-opacity cursor-pointer" style={{ gap: '8px', minWidth: 'fit-content' }}>
              <img src="/photos/Experience_Band/Unadat.png" alt="Unadat" style={{ width: '18px', height: '18px', objectFit: 'contain', flexShrink: 0 }} />
              <h3 className="text-base font-medium m-0">Unadat</h3>
            </div>
            
            <span className="text-gray-400" style={{ fontSize: '18px' }}>|</span>
            
            <div className="flex items-center hover:opacity-70 transition-opacity cursor-pointer" style={{ gap: '8px', minWidth: 'fit-content' }}>
              <img src="/photos/Experience_Band/MorganStanley.png" alt="Morgan Stanley" style={{ width: '18px', height: '18px', objectFit: 'contain', flexShrink: 0 }} />
              <h3 className="text-base font-medium m-0">Morgan Stanley</h3>
            </div>
            
            <span className="text-gray-400" style={{ fontSize: '18px' }}>|</span>
            
            <div className="flex items-center hover:opacity-70 transition-opacity cursor-pointer" style={{ gap: '8px', minWidth: 'fit-content' }}>
              <img src="/photos/Experience_Band/NASA.webp" alt="NASA" style={{ width: '18px', height: '18px', objectFit: 'contain', flexShrink: 0 }} />
              <h3 className="text-base font-medium m-0">NASA</h3>
            </div>
            
            <span className="text-gray-400" style={{ fontSize: '18px' }}>|</span>
            
            <div className="flex items-center hover:opacity-70 transition-opacity cursor-pointer" style={{ gap: '8px', minWidth: 'fit-content' }}>
              <img src="/photos/Experience_Band/IEH.png" alt="IEH" style={{ width: '18px', height: '18px', objectFit: 'contain', flexShrink: 0 }} />
              <h3 className="text-base font-medium m-0">IEH</h3>
            </div>
          </div>
        </div>
      </div> {/* End of Experience Section */}

      <div className="Organizations">
        <h2 className="text-left text-2xl font-semibold mb-4 mt-12">Organizations</h2>
        <div className="bg-[#f0f4f8] rounded-lg shadow-sm" style={{ padding: '20px 40px' }}>
          <div className="flex items-center justify-start font-mono text-sm text-black overflow-x-auto" style={{ gap: '40px' }}>
            <div className="flex items-center hover:opacity-70 transition-opacity cursor-pointer" style={{ gap: '8px', minWidth: 'fit-content' }}>
              <img src="/photos/Organizations_Band/Accenture.png" alt="Accenture" className="w-5 h-5 object-contain" />
              <h3 className="text-base font-medium m-0">Accenture Student Leadership</h3>
            </div>
            
            <span className="text-gray-400" style={{ fontSize: '18px' }}>|</span>
            
            <div className="flex items-center hover:opacity-70 transition-opacity cursor-pointer" style={{ gap: '8px', minWidth: 'fit-content' }}>
              <img src="/photos/Organizations_Band/BASTA.png" alt="Code2Career" className="w-5 h-5 object-contain" />
              <h3 className="text-base font-medium m-0">Code2Career</h3>
            </div>
            
            <span className="text-gray-400" style={{ fontSize: '18px' }}>|</span>
            
            <div className="flex items-center hover:opacity-70 transition-opacity cursor-pointer" style={{ gap: '8px', minWidth: 'fit-content' }}>
              <img src="/photos/Organizations_Band/CUNYTechPrep.png" alt="Data Science Fellowship" className="w-5 h-5 object-contain" />
              <h3 className="text-base font-medium m-0">Data Science Fellowship</h3>
            </div>
            
            <span className="text-gray-400" style={{ fontSize: '18px' }}>|</span>
            
            <div className="flex items-center hover:opacity-70 transition-opacity cursor-pointer" style={{ gap: '8px', minWidth: 'fit-content' }}>
              <img src="/photos/Organizations_Band/Codepath.png" alt="Codepath" className="w-5 h-5 object-contain" />
              <h3 className="text-base font-medium m-0">Codepath</h3>
            </div>
          </div>
        </div>
      </div> {/* End of Organizations Section */}

    </main>
  );
};

export default RightSection;