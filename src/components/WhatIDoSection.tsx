import React from 'react';
import { CheckCircle2, Cpu, Wrench, Sparkles, ArrowRight, Layers, Terminal, Radio } from 'lucide-react';
import { ASSET_IMAGES } from '../data/mockData';

interface WhatIDoSectionProps {
  onContactClick: () => void;
}

export const WhatIDoSection: React.FC<WhatIDoSectionProps> = ({ onContactClick }) => {
  const capabilities = [
    { title: 'Diseño de circuitos', desc: 'Esquemáticos analógicos y digitales, cálculo de etapas de potencia y filtrado de señales.' },
    { title: 'Programación de microcontroladores', desc: 'Firmware de alto rendimiento en C/C++ para familias ESP32, AVR, STM32 y ARM.' },
    { title: 'Desarrollo de proyectos IoT', desc: 'Integración de telemetría MQTT, WebSockets, Wi-Fi, Bluetooth LE y dashboards.' },
    { title: 'Diseño de PCB', desc: 'Ruteado en KiCad 8 de 2 y 4 capas con control de impedancia y reglas de fabricación DRC.' },
    { title: 'Automatización', desc: 'Control de actuadores industriales, relés de estado sólido, motores paso a paso y lazos PID.' },
    { title: 'Prototipado electrónico', desc: 'Desde protoboard y soldadura SMD con microscopio hasta gabinete impreso en 3D.' },
  ];

  const workflowSteps = [
    { step: '01', title: 'Conceptualización', desc: 'Requisitos y esquemático teórico' },
    { step: '02', title: 'Simulación & Breadboard', desc: 'Prueba de señales en osciloscopio' },
    { step: '03', title: 'Diseño PCB en KiCad', desc: 'Ruteado optimizado y plano de masa' },
    { step: '04', title: 'Firmware & Ensamblaje', desc: 'Soldadura SMD y código testeado' },
  ];

  return (
    <section id="lo-que-hago" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden border-y border-white/10">
      {/* Background dot grid and glow */}
      <div className="absolute inset-0 opacity-10 bg-dot-grid pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>METODOLOGÍA &amp; CAPACIDADES TÉCNICAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Lo que hago en el laboratorio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Un puente entre la ingeniería electrónica rigurosa y la programación moderna.
          </p>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          
          {/* Left Column: Tech Workbench Photography with High-Tech Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/20 group">
              <img
                src={ASSET_IMAGES.makerLab}
                alt="Maker y apasionado de la electrónica trabajando en banco de pruebas"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* Floating Tech Metric Badge with Frosted Glass */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Laboratorio Activo</div>
                    <div className="text-xs text-slate-300 font-mono">Instrumentación calibrada</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle decorative circuit element behind */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-cyan-500/40 rounded-bl-3xl pointer-events-none" />
          </div>

          {/* Right Column: Content and Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-block text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-2">
                Ingeniería práctica
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                De una idea a un proyecto funcional
              </h3>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                Diseño, desarrollo y experimento con proyectos que combinan electrónica, programación y tecnología. Desde circuitos digitales y microcontroladores hasta sistemas IoT y placas PCB.
              </p>
            </div>

            {/* Checklist of Characteristics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {capabilities.map((item, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-white/5 backdrop-blur-xl hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 transition-all"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action link */}
            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <span>¿Tienes un proyecto en mente? Hablemos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Workflow Timeline Steps with Frosted Glass */}
        <div className="pt-10 border-t border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-white">Flujo de trabajo de prototipado</h3>
            <p className="text-xs text-slate-400 font-mono">El ciclo de vida de cada placa y firmware</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="relative p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition-colors"
              >
                <span className="text-2xl font-black font-mono text-cyan-400/40 mb-2 block">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                <p className="text-xs text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
