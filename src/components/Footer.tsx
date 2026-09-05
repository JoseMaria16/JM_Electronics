import React from 'react';
import { Cpu, Youtube, Instagram, Github, Linkedin, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Inicio', target: 'hero' },
    { name: 'Proyectos', target: 'proyectos' },
    { name: 'Tutoriales', target: 'categorias' },
    { name: 'Lo que hago', target: 'lo-que-hago' },
    { name: 'Tienda', target: 'tienda' },
    { name: 'Sobre mí', target: 'sobre-mi' },
    { name: 'Contacto', target: 'contacto' },
  ];

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 py-16 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-cyan-400">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-mono text-white tracking-tight">
                JJ TECH LAB
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400 font-medium tracking-wide">
              Electrónica · Tecnología · Innovación
            </p>
            <p className="text-xs text-slate-400 max-w-sm">
              Plataforma de ingeniería de hardware, proyectos embebidos Open Source, diseño de PCB y divulgación técnica.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.target)}
                className="text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-cyan-400 border border-white/10 backdrop-blur-md transition-all cursor-pointer flex items-center gap-2 text-xs font-mono active:scale-95"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Volver arriba</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left font-mono">
            © 2026 JJ Tech Lab. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <div className="text-slate-500 font-mono text-[11px]">
            FR4 · KiCad 8 · C++20 · ESP-IDF
          </div>
        </div>

      </div>
    </footer>
  );
};
