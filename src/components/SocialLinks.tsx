import React from 'react';
import { Youtube, Instagram, Github, Linkedin, Share2, Video, ExternalLink, Sparkles } from 'lucide-react';
import { SOCIAL_NETWORKS } from '../data/mockData';

export const SocialLinks: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Youtube':
        return <Youtube className="w-6 h-6" />;
      case 'Instagram':
        return <Instagram className="w-6 h-6" />;
      case 'Github':
        return <Github className="w-6 h-6" />;
      case 'Linkedin':
        return <Linkedin className="w-6 h-6" />;
      case 'Video':
        return <Video className="w-6 h-6" />;
      default:
        return <Share2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="redes" className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Share2 className="w-3.5 h-3.5" />
            <span>COMUNIDAD &amp; APRENDIZAJE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Sígueme y descubre nuevos proyectos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Comparte la pasión por la electrónica. Publico avances en vivo, diagramas y tutoriales todas las semanas.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIAL_NETWORKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl sm:rounded-3xl bg-[#1C2541]/80 hover:bg-[#1C2541] border transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-900/20 transform hover:-translate-y-1 ${social.colorClass}`}
            >
              <div>
                {/* Header with Icon and Metrics */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#0B132B] border border-slate-700/80 group-hover:scale-110 transition-transform">
                    {getSocialIcon(social.icon)}
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-[#0B132B]/80 text-slate-300 border border-slate-700">
                    {social.metrics}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {social.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </div>

                <div className="text-xs font-mono text-cyan-400/90 mb-3">
                  {social.handle}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {social.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                <span>Ver perfil</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
