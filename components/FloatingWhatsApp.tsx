
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5500000000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <MessageCircle size={24} />
      <span className="absolute right-full mr-4 bg-white text-zinc-800 px-3 py-1 rounded-md text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Dúvidas? Chame no Zap!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
