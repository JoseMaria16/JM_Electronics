import React from 'react';
import { ShoppingCart, Eye, Check, AlertCircle, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewProduct,
  onAddToCart,
}) => {
  const getAvailabilityBadge = () => {
    switch (product.availability) {
      case 'En stock':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'Pocas unidades':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'Edición limitada':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      default:
        return 'bg-white/10 text-slate-300 border-white/10';
    }
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group flex flex-col bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-500/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
    >
      {/* Product Image Container */}
      <div className="relative h-52 sm:h-56 bg-slate-950 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
        
        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-[11px] font-semibold text-slate-200 bg-slate-950/80 backdrop-blur-md rounded-full shadow-sm border border-white/10">
            {product.category}
          </span>
        </div>

        {/* Badge if exists */}
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 text-[10px] font-bold text-slate-950 bg-cyan-400 rounded-full shadow-md">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          {/* Availability */}
          <div className="flex items-center justify-between mb-2">
            <span
              className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-md border ${getAvailabilityBadge()}`}
            >
              {product.availability}
            </span>
            <span className="text-xs font-mono text-slate-400">ID: {product.id}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1 mb-2">
            {product.name}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 mb-4">
            {product.description}
          </p>
        </div>

        {/* Price and Action Buttons */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-xs text-slate-400 block font-mono">Precio</span>
              <span className="text-2xl font-black text-cyan-400 font-mono">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xs text-slate-400 ml-1 font-mono">{product.currency}</span>
            </div>
            <span className="text-[11px] text-cyan-300 font-medium bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded font-mono">
              Envío global
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              id={`btn-view-product-${product.id}`}
              onClick={() => onViewProduct(product)}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Ver detalle</span>
            </button>

            <button
              id={`btn-buy-product-${product.id}`}
              onClick={() => onAddToCart(product)}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Comprar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
