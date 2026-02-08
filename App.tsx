
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Checkout from './pages/Checkout';
import CartDrawer from './components/CartDrawer';
import GeminiAdvisor from './components/GeminiAdvisor';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('lucasimports_cart');
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lucasimports_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, size?: string) => {
    const defaultSize = size || (product.sizes.length > 0 ? product.sizes[0] : 'U');
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === defaultSize);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedSize === defaultSize) 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, selectedSize: defaultSize, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, size: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === size) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeItem = (id: string, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="flex flex-col min-h-screen selection:bg-black selection:text-white bg-white">
        <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={(p) => addToCart(p)} />} />
            <Route path="/products" element={<Products onAddToCart={(p) => addToCart(p)} />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/checkout" element={<Checkout items={cartItems} />} />
          </Routes>
        </main>

        <Footer />
        
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemove={removeItem}
        />

        <GeminiAdvisor />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;
