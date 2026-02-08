
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Shield, Truck, Camera, ChevronRight, Eye } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { getOptimizedImage } from '../utils/image';

interface ProductDetailProps {
  onAddToCart: (p: Product, size: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);
  const [selectedSize, setSelectedSize] = useState('');
  const [currentImage, setCurrentImage] = useState(0);

  if (!product) return <div className="pt-40 text-center">Produto não encontrado.</div>;

  const typeLabels: Record<string, string> = {
    'Versão Jogador': 'Versão Jogador',
    'Versão Torcedor': 'Versão Torcedor',
    'Retrô': 'Retrô'
  };

  const galleryLabels = ['Frente', 'Verso', 'Tecido', 'Detalhe'];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">
          <Link to="/" className="hover:text-zinc-900 transition-colors">Início</Link>
          <ChevronRight size={10} />
          <Link to="/products" className="hover:text-zinc-900 transition-colors">Loja</Link>
          <ChevronRight size={10} />
          <span className="text-zinc-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden rounded-sm group">
              <img 
                src={getOptimizedImage(product.gallery[currentImage] || product.image, 1000)} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                alt={`${product.name} - ${galleryLabels[currentImage]}`} 
                fetchpriority="high"
                decoding="sync"
              />
              <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 rounded-full backdrop-blur-sm">
                <Camera size={12} className="text-red-500" />
                Foto Real do Produto
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 text-black px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                <Eye size={12} /> {galleryLabels[currentImage]}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.gallery.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentImage(i)}
                  className={`relative aspect-square bg-zinc-100 rounded-sm overflow-hidden border-2 transition-all ${currentImage === i ? 'border-zinc-900' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img 
                    src={getOptimizedImage(img, 250, 60)} 
                    className="w-full h-full object-cover" 
                    alt="" 
                    loading="lazy"
                  />
                  <span className="absolute bottom-1 right-1 bg-black/50 text-white text-[8px] px-1 rounded uppercase font-bold">{galleryLabels[i]}</span>
                </button>
              ))}
            </div>
            
            <div className="bg-zinc-50 p-6 rounded-xl border border-dashed border-zinc-200 mt-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-zinc-900 flex items-center gap-2">
                <Camera size={14} className="text-red-600" />
                Por que mostramos fotos reais?
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                Na Lucas Imports, a transparência é nossa prioridade. Diferente de outras lojas que usam fotos de catálogo, nós fotografamos nossos próprios produtos para que você veja exatamente a qualidade do bordado, a textura do tecido e os detalhes premium que receberá em casa.
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-red-600 font-bold uppercase tracking-widest text-xs py-1 border-b-2 border-red-600">{product.season}</span>
                <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs">{typeLabels[product.type] || product.type}</span>
              </div>
              <h1 className="text-4xl font-oswald font-extrabold uppercase italic tracking-tight mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-zinc-900">R$ {product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="text-xl text-zinc-400 line-through">R$ {product.oldPrice.toFixed(2)}</span>
                )}
              </div>
              <p className="text-zinc-500 leading-relaxed font-medium">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest">Selecione o Tamanho</span>
                <button className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">Guia de Medidas</button>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 flex items-center justify-center font-bold text-sm transition-all rounded-sm border-2 ${
                      selectedSize === size ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-900 border-zinc-100 hover:border-zinc-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4 mb-10">
              <button 
                onClick={() => onAddToCart(product, selectedSize)}
                disabled={!selectedSize}
                className="w-full h-16 bg-zinc-900 text-white flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] transition-all hover:bg-red-600 disabled:opacity-50 active:scale-[0.98]"
              >
                <ShoppingCart size={20} />
                Adicionar ao Carrinho
              </button>
              <button className="w-full h-16 bg-white border-2 border-zinc-100 text-zinc-900 flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] transition-all hover:border-zinc-900">
                <Heart size={20} />
                Lista de Desejos
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 pt-8 border-t border-zinc-100">
              <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-lg group transition-colors hover:bg-zinc-100">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-sm transition-transform group-hover:scale-110">
                  <Truck size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest">Frete Grátis Express</h4>
                  <p className="text-[10px] text-zinc-500 font-medium">Em pedidos acima de R$ 500. Entrega segura via Correios.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-lg group transition-colors hover:bg-zinc-100">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-sm transition-transform group-hover:scale-110">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest">Garantia Premium</h4>
                  <p className="text-[10px] text-zinc-500 font-medium">Qualidade tailandesa 1:1 rigorosamente inspecionada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
