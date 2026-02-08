
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Zap, Shield, Heart, Ticket } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { getOptimizedImage } from '../utils/image';

interface HomeProps {
  onAddToCart: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const featuredProducts = PRODUCTS.slice(0, 8);

  return (
    <div className="pb-20">
      {/* Minimal Hero */}
      <section className="relative h-[85vh] flex items-center bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center z-10">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              Coleção 2025/26 Disponível
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-black uppercase tracking-tighter leading-none mb-6">
              ESTILO <br /> SEM FRONTEIRAS
            </h1>
            <p className="text-zinc-600 text-base mb-8 max-w-sm leading-relaxed">
              Descubra a maior curadoria de mantos do Brasil. Qualidade tailandesa 1:1 com envio imediato e garantia total para a nova temporada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-zinc-800 transition-colors">
                Explorar Coleção <ArrowRight size={16} />
              </Link>
              <div className="bg-white border border-zinc-200 px-6 py-4 flex items-center gap-3 rounded-sm">
                <div className="bg-red-600 text-white p-1.5 rounded">
                  <Ticket size={14} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Primeira Compra?</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-black">Use: BEMVINDO10</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <img 
              src={getOptimizedImage("https://images.unsplash.com/photo-1596445836561-991206180902", 1200, 85)} 
              alt="Manto em destaque" 
              className="w-full h-auto object-cover rounded shadow-2xl"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-6 overflow-x-auto whitespace-nowrap">
          {[
            { icon: <Zap size={14} />, text: "Envio em 24h úteis" },
            { icon: <Shield size={14} />, text: "Pagamento 100% Seguro" },
            { icon: <Heart size={14} />, text: "Milhares de Clientes Felizes" },
            { icon: <ShoppingBag size={14} />, text: "Qualidade Premium 1:1" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest">
              {item.icon} {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tighter">Lançamentos 25/26</h2>
          <Link to="/products" className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all">
            Ver tudo
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        <div className="bg-zinc-900 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-oswald font-extrabold uppercase italic text-white mb-6">
              QUER 20% DE <span className="text-red-600">DESCONTO?</span>
            </h3>
            <p className="text-zinc-400 text-sm md:text-base mb-10 max-w-lg mx-auto">
              Utilize o cupom exclusivo da semana e garanta o seu manto com o melhor preço do mercado brasileiro.
            </p>
            <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
              <span className="text-white font-oswald text-2xl uppercase tracking-widest px-8 border-r border-white/10">LUCAS20</span>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText("LUCAS20");
                  alert("Cupom LUCAS20 copiado!");
                }}
                className="bg-white text-black px-8 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-red-600 hover:text-white transition-all"
              >
                Copiar Cupom
              </button>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-600/20 blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* Newsletter Simplified */}
      <section className="bg-[#f7f7f7] py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">Mantenha-se no Jogo</h3>
          <p className="text-zinc-500 text-sm mb-8">Receba cupons exclusivos e lançamentos em primeira mão da nova temporada.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-1 bg-white border border-zinc-200 px-6 py-4 text-xs focus:ring-1 focus:ring-black outline-none transition-all"
            />
            <button className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
              Assinar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
