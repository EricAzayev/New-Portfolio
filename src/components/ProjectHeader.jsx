import React from "react";

const ProjectHeader = ({ 
  title = "Project Title",
  date = "2024",
  status = "Completed",
  mediaType = "image",
  mediaSrc = null,
  githubLink = null,
  demoLink = null,
  docsLink = null,
  tags = []
}) => {
  return (
    <div className="border border-slate-200 rounded-xl shadow-sm bg-white p-6">
      
      {/* Media Placeholder */}
      <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
        {mediaSrc ? (
          mediaType === "video" ? (
            <video 
              src={mediaSrc} 
              className="w-full h-full object-cover rounded-lg"
              controls
            />
          ) : (
            <img 
              src={mediaSrc} 
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          )
        ) : (
          <span className="text-slate-400 text-sm font-mono">
            [ Project Preview ]
          </span>
        )}
      </div>

      {/* Header Row: Title and Year */}
      <div className="flex justify-between items-start mt-4">
        <h3 className="text-xl font-bold text-slate-900">
          {title}
        </h3>
        <span className="text-sm text-slate-400 font-mono ml-4">
          {date}
        </span>
      </div>

      {/* Status Tag */}
      <div className="mt-2">
        <span className="text-xs uppercase font-mono text-slate-600 tracking-wide">
          {status}
        </span>
      </div>

      {/* Links Row */}
      {(githubLink || demoLink || docsLink) && (
        <div className="flex items-center mt-3 text-sm font-mono">
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              GitHub
            </a>
          )}
          
          {githubLink && (demoLink || docsLink) && (
            <span className="mx-2 text-slate-300">|</span>
          )}
          
          {demoLink && (
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Demo
            </a>
          )}
          
          {demoLink && docsLink && (
            <span className="mx-2 text-slate-300">|</span>
          )}
          
          {docsLink && (
            <a 
              href={docsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Docs
            </a>
          )}
        </div>
      )}

      {/* Tech Stack Pills */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-slate-100 px-2 py-1 rounded-md text-xs text-slate-700 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectHeader;
