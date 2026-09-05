import React, { useState } from 'react';
import { Search, Filter, Cpu, Sliders, ChevronDown, Sparkles, X } from 'lucide-react';
import { FilterOptions, ProjectCategory, ProjectLevel, ProjectType } from '../types';

interface ExplorationBarProps {
  filters: FilterOptions;
  onFilterChange: (newFilters: FilterOptions) => void;
  onExploreClick: () => void;
  totalResults: number;
}

export const ExplorationBar: React.FC<ExplorationBarProps> = ({
  filters,
  onFilterChange,
  onExploreClick,
  totalResults,
}) => {
  const [localSearch, setLocalSearch] = useState(filters.search);

  const categories: (ProjectCategory | 'Todas')[] = [
    'Todas',
    'Electrónica digital',
    'Arduino',
    'ESP32',
    'IoT',
    'PCB',
    'Programación',
  ];

  const levels: (ProjectLevel | 'Todos')[] = ['Todos', 'Básico', 'Intermedio', 'Avanzado'];

  const types: (ProjectType | 'Todos')[] = ['Todos', 'Proyecto', 'Tutorial', 'Código', 'Hardware'];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ ...filters, search: localSearch });
    onExploreClick();
  };

  const handleCategoryChange = (val: string) => {
    onFilterChange({ ...filters, category: val });
  };

  const handleLevelChange = (val: string) => {
    onFilterChange({ ...filters, level: val });
  };

  const handleTypeChange = (val: string) => {
    onFilterChange({ ...filters, type: val });
  };

  const resetFilters = () => {
    setLocalSearch('');
    onFilterChange({
      category: 'Todas',
      level: 'Todos',
      type: 'Todos',
      search: '',
    });
  };

  const hasActiveFilters =
    filters.category !== 'Todas' ||
    filters.level !== 'Todos' ||
    filters.type !== 'Todos' ||
    filters.search !== '';

  return (
    <div className="relative -mt-16 sm:-mt-20 z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Floating Card with Frosted Glass */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/10 transition-all duration-300 hover:border-white/20">
        
        {/* Top Header Label inside Floating Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Sliders className="w-4 h-4" />
            </span>
            <span className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase font-mono">
              Buscador de Proyectos &amp; Guías Técnicas
            </span>
            <span className="text-xs text-cyan-300 font-mono font-semibold bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
              {totalResults} disponibles
            </span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <X className="w-3.5 h-3.5" />
              <span>Limpiar filtros</span>
            </button>
          )}
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          
          {/* Filter 1: Categoría */}
          <div className="space-y-1.5">
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Categoría
            </label>
            <div className="relative bg-slate-900/60 sm:bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 rounded-xl transition-colors">
              <select
                id="filter-category-select"
                value={filters.category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full appearance-none bg-transparent text-slate-100 text-sm font-medium py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-xl cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-slate-900 text-white">
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Filter 2: Nivel */}
          <div className="space-y-1.5">
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Nivel
            </label>
            <div className="relative bg-slate-900/60 sm:bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 rounded-xl transition-colors">
              <select
                id="filter-level-select"
                value={filters.level}
                onChange={(e) => handleLevelChange(e.target.value)}
                className="w-full appearance-none bg-transparent text-slate-100 text-sm font-medium py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-xl cursor-pointer"
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl} className="bg-slate-900 text-white">
                    {lvl}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Filter 3: Tipo */}
          <div className="space-y-1.5">
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Tipo de contenido
            </label>
            <div className="relative bg-slate-900/60 sm:bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 rounded-xl transition-colors">
              <select
                id="filter-type-select"
                value={filters.type}
                onChange={(e) => handleTypeChange(e.target.value)}
                className="w-full appearance-none bg-transparent text-slate-100 text-sm font-medium py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-xl cursor-pointer"
              >
                {types.map((tp) => (
                  <option key={tp} value={tp} className="bg-slate-900 text-white">
                    {tp}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Action Button: Explorar */}
          <div>
            <button
              id="exploration-bar-btn-submit"
              onClick={onExploreClick}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/30 active:scale-95 transition-all cursor-pointer"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>Explorar</span>
            </button>
          </div>
        </div>

        {/* Quick Search Input */}
        <form onSubmit={handleSearchSubmit} className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              id="search-projects-input"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Buscar por microcontrolador, sensor, palabra clave (ej: ESP32, Hall, KiCad, MQTT)..."
              className="w-full bg-white/5 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 text-xs font-bold text-cyan-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl transition-colors cursor-pointer"
          >
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};
