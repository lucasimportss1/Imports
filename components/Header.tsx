
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, ChevronRight, User } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-black text-white py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-center">
        🇧🇷 FRETE GRÁTIS ACIMA DE R$ 500 | WWW.LUCASIMPORTS.COM.BR
      </div>
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-sm py-3' : 'py-5'
      }`}>
        <div className="max-w-[1500px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="p-1"><Menu size={22} /></button>
          </div>

          <Link to="/" className="shrink-0">
            <span className="text-xl md:text-2xl font-bold tracking-tighter uppercase text-black">
              LUCAS<span className="text-zinc-300 font-light">IMPORTS</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 ml-8">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname + location.search === item.href;
              return (
                <Link 
                  key={item.label}
                  to={item.href}
                  className={`text-[9.5px] xl:text-[10px] font-bold uppercase tracking-[0.1em] transition-all border-b-2 py-1 ${
                    isActive 
                    ? 'text-black border-black' 
                    : 'text-zinc-400 border-transparent hover:text-black'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-4 ml-auto lg:ml-8">
            <button className="p-2 text-black hover:opacity-50 transition-opacity"><Search size={18} /></button>
            <button className="hidden sm:block p-2 text-black hover:opacity-50 transition-opacity"><User size={18} /></button>
            <button onClick={onOpenCart} className="p-2 text-black relative group">
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-opacity lg:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMenuOpen(false)}>
          <div 
            className={`fixed top-0 left-0 bottom-0 w-[300px] bg-white p-8 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-12">
              <span className="text-lg font-bold tracking-tighter uppercase">MENU</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={20} /></button>
            </div>
            <div className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest border-b border-zinc-50 pb-4"
                >
                  {item.label}
                  <ChevronRight size={14} className="text-zinc-300" />
                </Link>
              ))}
            </div>
            <div className="mt-12 pt-12 border-t border-zinc-100">
               <p className="text-[9px] font-bold uppercase text-zinc-400 mb-4 tracking-widest">Siga-nos em lucasimports.com.br</p>
               <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 text-[10px] font-bold">IG</div>
                  <div className="w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 text-[10px] font-bold">FB</div>
               </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
