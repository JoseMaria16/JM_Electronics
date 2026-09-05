import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', target: 'hero' },
    { name: 'Proyectos', target: 'proyectos' },
    { name: 'Tutoriales', target: 'categorias' },
    { name: 'Lo que hago', target: 'lo-que-hago' },
    { name: 'Tienda', target: 'tienda' },
    { name: 'Sobre mí', target: 'sobre-mi' },
    { name: 'Contacto', target: 'contacto' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-white/10 ${
        isScrolled
          ? 'bg-slate-950/85 shadow-2xl py-3.5'
          : 'bg-slate-950/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:scale-105 transition-transform duration-200">
              <Cpu className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent uppercase font-mono">
                  JJ TECH
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded">
                  LAB
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links with Frosted Glass capsule */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => (
              <button
                key={link.name}
                id={`nav-link-${link.target}`}
                onClick={() => handleLinkClick(link.target)}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-full transition-all hover:bg-white/10 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cart Button */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-slate-200 transition-all cursor-pointer"
              aria-label="Ver carrito"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-slate-950 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Featured CTA: Frosted Glass / Cyan theme */}
            <button
              id="cta-ver-proyectos-nav"
              onClick={() => handleLinkClick('proyectos')}
              className="group relative inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <span>VER PROYECTOS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Cart */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-cart-btn"
              onClick={onOpenCart}
              className="relative p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200"
              aria-label="Ver carrito"
            >
              <ShoppingBag className="w-5 h-5 text-cyan-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyan-500 text-slate-950 text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Frosted Glass */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.target)}
                className="text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => handleLinkClick('proyectos')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20"
            >
              <span>VER PROYECTOS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
