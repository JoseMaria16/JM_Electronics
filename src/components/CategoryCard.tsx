import React from 'react';
import { Cpu, Wifi, Layers, Terminal, Sparkles, ArrowRight, Microchip } from 'lucide-react';
import { CategoryInfo, ProjectCategory } from '../types';

interface CategoryCardProps {
  category: CategoryInfo;
  onSelectCategory: (categoryKey: ProjectCategory) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onSelectCategory }) => {
  const getIcon = () => {
    switch (category.icon) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'Microchip':
        return <Microchip className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform" />;
      case 'CircuitBoard':
        return <Layers className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div
      id={`cat-card-${category.id}`}
      onClick={() => onSelectCategory(category.categoryKey)}
      className="group relative bg-white/5 backdrop-blur-xl hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/50 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer transform hover:-translate-y-1"
    >
      <div>
        {/* Header with Icon and count */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:scale-105 transition-all shadow-inner">
            {getIcon()}
          </div>
          <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-cyan-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
            {category.count} proyectos
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2.5">
          {category.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-5">
          {category.description}
        </p>

        {/* Topics Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {category.topics.map((topic) => (
            <span
              key={topic}
              className="text-[11px] font-mono text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Explore link */}
      <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 pt-3 border-t border-white/10">
        <span>Explorar recursos</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
      </div>
    </div>
  );
};
