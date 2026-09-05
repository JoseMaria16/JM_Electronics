import React, { useState } from 'react';
import { X, Cpu, CheckCircle2, Copy, Check, Code2, Layers, ExternalLink, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      {/* Modal Dialog */}
      <div
        id="project-detail-modal"
        className="relative w-full max-w-4xl bg-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden my-8 max-h-[90vh] flex flex-col text-slate-100"
      >
        {/* Header with image preview */}
        <div className="relative h-64 sm:h-72 bg-slate-950 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer z-10"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-0.5 text-xs font-bold bg-cyan-400 text-slate-950 rounded-full">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 text-xs font-mono bg-white/10 text-cyan-300 border border-white/10 rounded-full">
                {project.level}
              </span>
              <span className="px-2.5 py-0.5 text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 rounded-full">
                {project.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              Descripción del proyecto
            </h4>
            <p className="text-slate-300 leading-relaxed text-base">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Stack Tecnológico &amp; Herramientas
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-mono font-medium text-cyan-300 bg-white/5 border border-white/10 rounded-xl"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bill of Materials (BOM) */}
          {project.componentsList && project.componentsList.length > 0 && (
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Lista de Componentes Principales (BOM)</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                {project.componentsList.map((comp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Snippet */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>Extracto de Firmware / Código Clave</span>
                </h4>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono font-medium cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copiado al portapapeles</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar código</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-950/80 rounded-2xl p-4 sm:p-5 border border-white/10 overflow-x-auto text-xs font-mono text-cyan-300">
                <pre>{project.codeSnippet}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md border-t border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-400 font-mono">
            Diseñado y probado en laboratorio · Open Hardware
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer active:scale-95"
          >
            Cerrar detalle
          </button>
        </div>
      </div>
    </div>
  );
};
