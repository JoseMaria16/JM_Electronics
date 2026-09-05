import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExplorationBar } from './components/ExplorationBar';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { CategoryCard } from './components/CategoryCard';
import { WhatIDoSection } from './components/WhatIDoSection';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { AboutSection } from './components/AboutSection';
import { SocialLinks } from './components/SocialLinks';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

import {
  PROJECTS_DATA,
  CATEGORIES_DATA,
  PRODUCTS_DATA,
} from './data/mockData';
import { Project, Product, FilterOptions, ProjectCategory } from './types';
import { Sparkles, ArrowRight, Layers, CheckCircle, SlidersHorizontal, ShoppingBag } from 'lucide-react';

export default function App() {
  // Filters State
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'Todas',
    level: 'Todos',
    type: 'Todos',
    search: '',
  });

  // Selected Project for Modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Selected Product for Modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Shopping Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartToast, setCartToast] = useState<string | null>(null);

  // Filtered Projects Logic
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Category check
      if (filters.category !== 'Todas' && project.category !== filters.category) {
        return false;
      }
      // Level check
      if (filters.level !== 'Todos' && project.level !== filters.level) {
        return false;
      }
      // Type check
      if (filters.type !== 'Todos' && project.type !== filters.type) {
        return false;
      }
      // Search check
      if (filters.search.trim() !== '') {
        const query = filters.search.toLowerCase();
        const inTitle = project.title.toLowerCase().includes(query);
        const inDesc = project.description.toLowerCase().includes(query);
        const inTech = project.technologies.some((t) => t.toLowerCase().includes(query));
        if (!inTitle && !inDesc && !inTech) {
          return false;
        }
      }
      return true;
    });
  }, [filters]);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });

    // Show toast feedback
    setCartToast(`"${product.name}" añadido al carrito`);
    setTimeout(() => {
      setCartToast(null);
    }, 2500);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Navigation smoothly scroll to target ID
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromCard = (categoryKey: ProjectCategory) => {
    setFilters((prev) => ({ ...prev, category: categoryKey }));
    scrollToSection('proyectos');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden antialiased">
      
      {/* Toast Notification with Frosted Glass */}
      {cartToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-white/10 backdrop-blur-xl text-white text-xs font-semibold rounded-2xl shadow-2xl border border-white/20 animate-in fade-in slide-in-from-bottom-5">
          <CheckCircle className="w-4 h-4 text-cyan-400" />
          <span>{cartToast}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-cyan-400 underline hover:text-cyan-300 cursor-pointer"
          >
            Ver
          </button>
        </div>
      )}

      {/* 1. Header & Navigation with Frosted Glass */}
      <Navbar
        onNavigate={scrollToSection}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 2. Hero Section (Grand visual impact, PCB lab background & animated circuit traces) */}
      <Hero
        onExploreProjects={() => scrollToSection('proyectos')}
        onLearnAboutMe={() => scrollToSection('sobre-mi')}
      />

      {/* 3. Floating Exploration Bar with Filters (Overlapping Hero bottom) */}
      <ExplorationBar
        filters={filters}
        onFilterChange={setFilters}
        onExploreClick={() => scrollToSection('proyectos')}
        totalResults={filteredProjects.length}
      />

      {/* 4. Sección "Proyectos destacados" with Frosted Glass Theme */}
      <section id="proyectos" className="pt-24 pb-28 sm:pt-32 sm:pb-36 bg-slate-950 relative border-t border-white/10 overflow-hidden">
        {/* Background Dot Grid */}
        <div className="absolute inset-0 opacity-10 bg-dot-grid pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-3">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>CATÁLOGO DE INGENIERÍA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Proyectos destacados
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-400">
                Explora algunos de mis proyectos de electrónica, programación y tecnología.
              </p>
            </div>

            {/* Quick Active Filter pill */}
            {filters.category !== 'Todas' && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Filtrado por:</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold shadow-md shadow-cyan-500/20">
                  {filters.category}
                  <button
                    onClick={() => setFilters({ ...filters, category: 'Todas' })}
                    className="hover:text-red-900 ml-1 font-bold"
                  >
                    ×
                  </button>
                </span>
              </div>
            )}
          </div>

          {/* Projects Cards Grid */}
          {filteredProjects.length === 0 ? (
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10 max-w-lg mx-auto shadow-2xl">
              <p className="text-base font-bold text-white mb-2">
                No se encontraron proyectos con los filtros seleccionados
              </p>
              <p className="text-xs text-slate-400 mb-6">
                Prueba cambiando la categoría, el nivel de dificultad o eliminando el término de búsqueda.
              </p>
              <button
                onClick={() =>
                  setFilters({ category: 'Todas', level: 'Todos', type: 'Todos', search: '' })
                }
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
              >
                Restablecer todos los filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewProject={setSelectedProject}
                />
              ))}
            </div>
          )}

          {/* Secondary CTA underneath cards */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:px-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg text-xs sm:text-sm text-slate-300">
              <span className="font-medium">
                ¿Buscas esquemáticos completos en KiCad o bibliotecas de firmware?
              </span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Visita mi GitHub de Hardware</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Sección "Categorías" with Frosted Glass Theme */}
      <section id="categorias" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 opacity-10 bg-dot-grid pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>DISCIPLINAS DE HARDWARE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Áreas y Especialidades
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400">
              Explora proyectos organizados por su núcleo de desarrollo, desde compuertas lógicas hasta microcontroladores inalámbricos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES_DATA.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                onSelectCategory={handleSelectCategoryFromCard}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 6. Sección "Lo que hago" (Two columns, maker workbench image, engineering capabilities) */}
      <WhatIDoSection onContactClick={() => scrollToSection('contacto')} />

      {/* 7. Sección "Mi tienda" with Frosted Glass Theme */}
      <section id="tienda" className="py-24 sm:py-32 bg-slate-950 relative border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-dot-grid pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-3">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>PRODUCTOS &amp; HARDWARE DIY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Mi tienda
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-400">
                Componentes, proyectos y productos creados por mí para desarrolladores y aficionados.
              </p>
            </div>

            {/* Cart Preview Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="self-start md:self-auto inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 shadow-sm text-slate-200 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-cyan-400" />
              <span>Ver mi carrito ({totalCartCount})</span>
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {PRODUCTS_DATA.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewProduct={setSelectedProduct}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {/* Store Guarantee Notice */}
          <div className="mt-14 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center text-xs text-slate-400 max-w-3xl mx-auto shadow-lg">
            <p className="font-semibold text-slate-200 mb-1">
              Todos los módulos y placas han sido soldados, probados y testeados en osciloscopio en el laboratorio.
            </p>
            <p>
              Estructura comercial preparada para despachos nacionales e internacionales con seguimiento y soporte técnico directo por email.
            </p>
          </div>

        </div>
      </section>

      {/* 8. Sección "Sobre mí" (¿Quién está detrás de los proyectos? + Estadísticas visuales) */}
      <AboutSection />

      {/* 9. Sección "Redes sociales" (Sígueme y descubre nuevos proyectos) */}
      <SocialLinks />

      {/* 10. Sección "Contacto" (¿Tienes una idea o proyecto? + Canales directos) */}
      <ContactForm />

      {/* 11. Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Modals & Drawers */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
