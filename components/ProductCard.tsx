
import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { getOptimizedImage } from '../utils/image';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const badgeLabels = {
    'New': 'Novo',
    'Sale': 'Oferta',
    'Limited': 'Limitada'
  };

  return (
    <div className="group flex flex-col h-full bg-white">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f7f7f7]">
        <Link to={`/product/${product.id}`}>
          <img 
            src={getOptimizedImage(product.image, 600)} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </Link>
        
        {product.badge && (
          <div className="absolute top-2 left-2 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-black">
            {badgeLabels[product.badge] || product.badge}
          </div>
        )}

        <button 
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-black hover:text-white"
        >
          <Plus size={18} />
        </button>
      </div>

      <div className="pt-4 flex flex-col flex-1">
        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{product.team}</span>
        <Link to={`/product/${product.id}`}>
          <h2 className="text-sm font-medium text-zinc-900 hover:opacity-70 transition-opacity line-clamp-2 min-h-[40px]">
            {product.name}
          </h2>
        </Link>
        <div className="mt-auto pt-2 flex items-center gap-2">
          <span className="text-sm font-bold text-black">R$ {product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-xs text-zinc-400 line-through">R$ {product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
