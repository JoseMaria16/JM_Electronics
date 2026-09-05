import React from 'react';
import { ArrowRight, Sparkles, Cpu, Layers, Terminal, Activity, Zap } from 'lucide-react';
import { ASSET_IMAGES } from '../data/mockData';
import { PcbCircuitOverlay } from './PcbCircuitOverlay';

interface HeroProps {
  onExploreProjects: () => void;
  onLearnAboutMe: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onLearnAboutMe }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-32 md:pb-36 bg-slate-950 overflow-hidden border-b border-white/10">
      {/* Background Hero Image with Dark Slate & Electric Blue Duotone Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.heroPcb}
          alt="Laboratorio de electrónica y PCB de alta tecnología"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform filter brightness-50 contrast-110"
        />
        {/* Layered high-tech gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-950" />
        <div className="absolute inset-0 opacity-10 bg-dot-grid pointer-events-none" />
        <div className="absolute inset-0 bg-radial-at-c from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/90" />
      </div>

      {/* PCB Circuit Overlay with interactive vector traces */}
      <PcbCircuitOverlay />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 md:mt-10">
        {/* Tech Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md mb-6 shadow-lg shadow-cyan-900/20 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Ingeniería de Electrónica &amp; DIY</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] mb-6">
          Bienvenido <span className="text-cyan-400">ideas</span> con tecnología.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 font-normal leading-relaxed mb-10">
          Proyectos, experimentos y soluciones de vanguardia en sistemas embebidos, diseño de PCB y programación avanzada.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <button
            id="hero-cta-explorar-proyectos"
            onClick={onExploreProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <span>Explorar Proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-cta-conoce-mi-trabajo"
            onClick={onLearnAboutMe}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/20 px-8 py-3.5 rounded-xl font-bold hover:bg-white/5 text-white transition-colors cursor-pointer"
          >
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>Conoce mi trabajo</span>
          </button>
        </div>

        {/* Floating tech highlights with frosted glass */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-white/10 text-left">
          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-0.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>Arduino &amp; ESP32</span>
            </div>
            <p className="text-[11px] text-slate-400">Control en tiempo real</p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-0.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Diseño PCB</span>
            </div>
            <p className="text-[11px] text-slate-400">KiCad 8 &amp; SMD</p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-0.5">
              <Zap className="w-3.5 h-3.5" />
              <span>Sistemas IoT</span>
            </div>
            <p className="text-[11px] text-slate-400">MQTT &amp; WebSockets</p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-0.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>C++ &amp; Firmware</span>
            </div>
            <p className="text-[11px] text-slate-400">Código Open Source</p>
          </div>
        </div>
      </div>
    </section>
  );
};
