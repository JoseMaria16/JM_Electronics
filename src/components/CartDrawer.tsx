import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CreditCard, Sparkles } from 'lucide-react';
import { Product } from '../types';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutSimulated, setCheckoutSimulated] = useState(false);

  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleSimulatedCheckout = () => {
    setCheckoutSimulated(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900/90 backdrop-blur-2xl shadow-2xl border-l border-white/10 flex flex-col justify-between text-slate-100">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-400 text-slate-950">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Carrito de compras</h3>
                <p className="text-xs text-slate-400 font-mono">
                  {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Tu carrito está vacío</h4>
                <p className="text-xs text-slate-400 max-w-xs mb-6 font-mono">
                  Explora los kits de desarrollo, placas PCB y componentes en la sección de tienda.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors cursor-pointer"
                >
                  Explorar la tienda
                </button>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-xl object-cover shrink-0 bg-slate-950"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-1">
                        <h5 className="text-xs font-bold text-white line-clamp-1">
                          {item.product.name}
                        </h5>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-bold font-mono text-cyan-400">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>

                        <div className="flex items-center gap-2 bg-slate-950/80 rounded-lg border border-white/10 px-2 py-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="text-xs text-slate-400 hover:text-white font-bold px-1"
                          >
                            -
                          </button>
                          <span className="text-xs font-mono font-semibold text-slate-200 min-w-3 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="text-xs text-slate-400 hover:text-white font-bold px-1"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {checkoutSimulated && (
                  <div className="p-4 rounded-2xl bg-white/10 border border-emerald-500/30 text-slate-200 text-xs backdrop-blur-md">
                    <div className="flex items-center gap-2 font-bold mb-1 text-emerald-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Estructura de pago lista</span>
                    </div>
                    <p className="leading-relaxed text-slate-300">
                      El pedido ha sido preparado en estado pre-orden. La pasarela de pago segura (Stripe / PayPal) se conectará en el siguiente despliegue comercial.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-white/5 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-slate-400 font-mono">Subtotal estimado</span>
                <span className="text-2xl font-black text-cyan-400 font-mono">
                  ${total.toFixed(2)} USD
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <CreditCard className="w-3.5 h-3.5 text-cyan-400" />
                <span>Estructura preparada para pasarela de pagos seguros</span>
              </div>

              <button
                id="cart-btn-checkout"
                onClick={handleSimulatedCheckout}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <span>Proceder al pago</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-center text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              >
                Vaciar carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
