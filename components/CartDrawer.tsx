
import React from 'react';
import { X, Trash2, Plus, Minus, CreditCard, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, size: string, delta: number) => void;
  onRemove: (id: string, size: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[80] shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-zinc-900" size={24} />
            <h2 className="text-xl font-oswald font-bold uppercase tracking-tight">Meu Carrinho ({items.length})</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={32} className="text-zinc-300" />
              </div>
              <p className="text-zinc-500 font-medium mb-6">Seu carrinho está vazio.</p>
              <Link to="/products" onClick={onClose} className="px-8 py-3 bg-zinc-900 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-red-600 transition-colors">
                Ir para a Loja
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                <div className="w-24 h-32 bg-zinc-100 rounded-sm overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between mb-1">
                    <h3 className="text-sm font-bold line-clamp-1">{item.name}</h3>
                    <button onClick={() => onRemove(item.id, item.selectedSize)} className="text-zinc-400 hover:text-red-600 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-xs text-zinc-500 uppercase mb-2">Tamanho: <span className="font-bold text-zinc-900">{item.selectedSize}</span></p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-zinc-200 rounded-sm">
                      <button onClick={() => onUpdateQuantity(item.id, item.selectedSize, -1)} className="p-1 hover:text-red-600 transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.selectedSize, 1)} className="p-1 hover:text-red-600 transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-bold">R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-zinc-50 border-t border-zinc-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-500 font-medium">Subtotal</span>
              <span className="text-2xl font-oswald font-bold">R$ {subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-6 text-center">Frete e impostos calculados no checkout</p>
            <Link 
              to="/checkout" 
              onClick={onClose}
              className="w-full bg-zinc-900 text-white py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-widest hover:bg-red-600 transition-all active:scale-[0.98]"
            >
              <CreditCard size={18} />
              Finalizar Compra
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
