import React from 'react';
import { ArrowRight, Cpu, Tag, Sparkles, Code2, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewProject }) => {
  return (
    <article
      id={`project-card-${project.id}`}
      className="group relative flex flex-col bg-slate-900/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1.5"
    >
      {/* Project Image Container with Tag Overlay */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="px-3 py-1 text-xs font-bold text-slate-950 bg-cyan-400 backdrop-blur-md rounded-full shadow-md">
            {project.category}
          </span>
          <span className="px-2.5 py-0.5 text-[11px] font-mono font-medium text-cyan-300 bg-slate-950/80 backdrop-blur-md rounded-full border border-white/10">
            {project.level}
          </span>
        </div>

        {/* Bottom image overlay metadata */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
          <span className="inline-flex items-center gap-1.5 text-cyan-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {project.status}
          </span>
          <span className="text-slate-400">{project.type}</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1 mb-2.5">
            {project.title}
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono font-medium text-slate-300 bg-white/5 rounded-lg border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-[11px] font-mono font-medium text-slate-400 bg-white/5 rounded-lg border border-white/5">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <button
          id={`btn-view-${project.id}`}
          onClick={() => onViewProject(project)}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-cyan-300 bg-white/5 hover:bg-cyan-500 hover:text-slate-950 border border-white/10 hover:border-cyan-500 shadow-md transition-all cursor-pointer group/btn active:scale-95"
        >
          <span>Ver proyecto completo</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
};
