import React from 'react';
import { X, Check, ShoppingCart, ShieldCheck, Truck, PackageCheck, Layers } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div
        id="product-detail-modal"
        className="relative w-full max-w-3xl bg-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden my-8 text-slate-100"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative h-64 md:h-full min-h-[300px] bg-slate-950">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent md:hidden" />
          </div>

          {/* Product Specs & Purchasing */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-xs font-mono font-semibold bg-white/10 text-cyan-300 rounded-md border border-white/10">
                  {product.category}
                </span>
                <span className="text-xs text-cyan-400 font-mono font-medium">
                  {product.availability}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                {product.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-black text-cyan-400 font-mono">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-slate-400 font-mono font-medium">{product.currency}</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* What's included */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 mb-6">
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <PackageCheck className="w-4 h-4 text-cyan-400" />
                  <span>¿Qué incluye este kit?</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                  {product.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Garantía de laboratorio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-cyan-400" />
                  <span>Embalaje antiestático ESD</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 flex gap-3">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Agregar al carrito</span>
              </button>
              <button
                onClick={onClose}
                className="py-3 px-4 rounded-xl text-sm font-bold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
