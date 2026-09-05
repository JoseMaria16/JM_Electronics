import React from 'react';
import { User, FolderGit2, Cpu, FlaskConical, BookOpen, Award, Sparkles, Terminal, Check } from 'lucide-react';
import { CREATOR_PROFILE, ASSET_IMAGES } from '../data/mockData';

export const AboutSection: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderGit2':
        return <FolderGit2 className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-cyan-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="sobre-mi" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden border-t border-white/10">
      {/* Background dot grid and glow */}
      <div className="absolute inset-0 opacity-10 bg-dot-grid pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <User className="w-3.5 h-3.5" />
            <span>MARCA PERSONAL &amp; MAKER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            ¿Quién está detrás de los proyectos?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Conoce la visión, trayectoria y pasión por el hardware de código abierto.
          </p>
        </div>

        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Creator Portrait & Lab Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/30">
              <img
                src={ASSET_IMAGES.makerLab}
                alt="José Jáuregui - Creador de electrónica y sistemas embebidos"
                referrerPolicy="no-referrer"
                className="w-full h-[440px] sm:h-[480px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />

              {/* Identity Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-white font-mono">{CREATOR_PROFILE.name}</h3>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-bold">
                    Hardware Dev
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  {CREATOR_PROFILE.role}
                </p>
              </div>
            </div>

            {/* Glowing corner brackets */}
            <div className="hidden sm:block absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-2xl pointer-events-none" />
          </div>

          {/* Bio Story & Competencies */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl font-semibold text-cyan-300 leading-relaxed font-sans">
                "{CREATOR_PROFILE.bio}"
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {CREATOR_PROFILE.experience}
              </p>
            </div>

            {/* Key Skill Bars */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Especialización técnica
              </h4>
              
              <div className="space-y-2.5">
                {CREATOR_PROFILE.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="font-mono text-cyan-400">{skill.percent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Values */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-md border border-white/10">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>Open Hardware Advocate</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-md border border-white/10">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>KiCad &amp; FreeRTOS</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-md border border-white/10">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sistemas en tiempo real</span>
              </span>
            </div>
          </div>
        </div>

        {/* Visual Statistics Counters with Frosted Glass */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10">
          {CREATOR_PROFILE.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-inner">
                {getStatIcon(stat.icon)}
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
