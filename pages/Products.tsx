
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronRight, X } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product, League, ProductType } from '../types';

interface ProductsProps {
  onAddToCart: (p: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const activeLeague = searchParams.get('league') as League | null;
  const activeType = searchParams.get('type') as ProductType | null;
  const activeBadge = searchParams.get('badge') as string | null;
  const leagueGroup = searchParams.get('league_group');
  const typeGroup = searchParams.get('type_group');

  const leagues: League[] = [
    'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 
    'Brasileirão', 'Seleção Nacional', 'NBA'
  ];
  
  const types: ProductType[] = [
    'Versão Jogador', 'Versão Torcedor', 'Retrô', 
    'Feminino', 'Infantil', 'Agasalho', 'Corta-Vento'
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Direct filters
      if (activeLeague && p.league !== activeLeague) return false;
      if (activeType && p.type !== activeType) return false;
      if (activeBadge && p.badge !== activeBadge) return false;
      
      // Grouping logic for navigation
      if (leagueGroup === 'europe') {
        const europeanLeagues = ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];
        if (!europeanLeagues.includes(p.league)) return false;
      }
      if (typeGroup === 'outerwear') {
        const outerwearTypes = ['Agasalho', 'Corta-Vento'];
        if (!outerwearTypes.includes(p.type)) return false;
      }

      return true;
    });
  }, [activeLeague, activeType, activeBadge, leagueGroup, typeGroup]);

  const toggleFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    // Remove group filters if setting specific filter
    if (key === 'league') newParams.delete('league_group');
    if (key === 'type') newParams.delete('type_group');

    if (newParams.get(key) === value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-12 border-b border-zinc-100 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-tighter mb-2">
              {leagueGroup === 'europe' ? 'Clubes Europeus' : 
               typeGroup === 'outerwear' ? 'Agasalhos & Corta-Vento' :
               activeLeague || activeType || 'Coleções Lucas Imports'}
            </h1>
            <p className="text-zinc-500 text-sm font-medium">Explore nossa seleção premium de uniformes tailandeses 1:1.</p>
          </div>
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center gap-2 px-6 py-3 border border-zinc-200 text-[10px] font-bold uppercase tracking-widest hover:border-black transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filtrar
          </button>
        </header>

        <div className="flex gap-16">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-32 space-y-12">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-black">Ligas e Seleções</h3>
                <div className="flex flex-col gap-4">
                  {leagues.map(l => (
                    <button 
                      key={l} 
                      onClick={() => toggleFilter('league', l)}
                      className={`text-xs text-left transition-colors flex items-center justify-between group ${activeLeague === l ? 'text-black font-bold' : 'text-zinc-400 hover:text-black'}`}
                    >
                      {l}
                      <ChevronRight size={12} className={`opacity-0 group-hover:opacity-100 transition-opacity ${activeLeague === l ? 'opacity-100' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-black">Modelos</h3>
                <div className="flex flex-col gap-4">
                  {types.map(t => (
                    <button 
                      key={t}
                      onClick={() => toggleFilter('type', t)}
                      className={`text-xs text-left transition-colors flex items-center justify-between group ${activeType === t ? 'text-black font-bold' : 'text-zinc-400 hover:text-black'}`}
                    >
                      {t}
                      <ChevronRight size={12} className={`opacity-0 group-hover:opacity-100 transition-opacity ${activeType === t ? 'opacity-100' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              {(activeLeague || activeType || activeBadge || leagueGroup || typeGroup) && (
                <button 
                  onClick={clearFilters}
                  className="text-[9px] font-bold uppercase tracking-widest text-red-500 border-b border-red-500 pb-1"
                >
                  Limpar tudo
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center border-2 border-dashed border-zinc-100 rounded-lg">
                <p className="text-zinc-400 text-sm font-medium">Nenhum produto encontrado nesta categoria.</p>
                <button onClick={clearFilters} className="mt-4 text-black font-bold uppercase text-[10px] tracking-widest border-b-2 border-black">Ver todos os produtos</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
