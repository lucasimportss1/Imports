
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, MessageSquare } from 'lucide-react';
import { getKitAdvisorResponse } from '../services/geminiService';

const GeminiAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMsg = query;
    setQuery('');
    setHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getKitAdvisorResponse(userMsg);
    setHistory(prev => [...prev, { role: 'ai', text: aiResponse || "Desculpe, estou indisponível no momento." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-[350px] sm:w-[400px] border border-zinc-100 flex flex-col max-h-[500px] overflow-hidden">
          <div className="p-4 bg-zinc-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <Sparkles size={16} />
              </div>
              <span className="font-bold uppercase tracking-tight text-sm">Consultor de Kits IA</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
              <MessageSquare size={18} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-zinc-50 space-y-4">
            {history.length === 0 && (
              <div className="text-center py-4">
                <p className="text-xs text-zinc-500 mb-2">Pergunte sobre estilos, história ou recomendações!</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Camisa Retrô do Milan?', 'Melhores kits reserva?', 'Clássicos do Real Madrid'].map(q => (
                    <button 
                      key={q} 
                      onClick={() => setQuery(q)}
                      className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-[10px] font-semibold text-zinc-600 hover:border-red-600 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {history.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                  msg.role === 'user' ? 'bg-red-600 text-white rounded-br-none' : 'bg-white text-zinc-800 shadow-sm border border-zinc-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-2">
                  <Loader2 className="animate-spin text-red-600" size={14} />
                  <span className="text-[10px] text-zinc-400 font-bold uppercase italic">Analisando Kits...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-zinc-100 flex gap-2">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Pergunte qualquer coisa sobre camisas..."
              className="flex-1 bg-zinc-100 border-none rounded-xl px-4 py-2 text-xs focus:ring-2 focus:ring-red-600"
            />
            <button 
              type="submit" 
              disabled={isLoading || !query.trim()}
              className="p-2 bg-zinc-900 text-white rounded-xl hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all hover:bg-red-600 group relative"
        >
          <Sparkles size={24} />
          <span className="absolute right-full mr-4 bg-zinc-900 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Consultar IA
          </span>
        </button>
      )}
    </div>
  );
};

export default GeminiAdvisor;
