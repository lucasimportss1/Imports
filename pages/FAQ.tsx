
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: "Qual a diferença entre a versão Jogador e Torcedor?",
      a: "As versões de Jogador são projetadas para o campo, com um ajuste atlético e justo (slim fit) e recursos avançados de respirabilidade. As versões de Torcedor são feitas para o conforto, com um ajuste mais relaxado e escudos bordados, ideais para o uso casual."
    },
    {
      q: "Quanto tempo leva o envio?",
      a: "O envio padrão leva de 7 a 14 dias úteis para todo o Brasil. Opções de envio expresso estão disponíveis no checkout para entrega em 3 a 5 dias."
    },
    {
      q: "Vocês oferecem personalização premium?",
      a: "Sim! A maioria das nossas camisas pode ser personalizada com nomes premium de jogadores ou seu próprio nome e número por um custo adicional."
    },
    {
      q: "Qual a política de devolução?",
      a: "Oferecemos uma política de devolução de 30 dias para produtos não utilizados em sua embalagem original. Camisas personalizadas não podem ser devolvidas, a menos que haja um defeito de fabricação."
    },
    {
      q: "As camisas são 100% autênticas?",
      a: "Absolutamente. Sourcing apenas de lojas premium dos clubes e distribuidores autorizados. Garantimos a autenticidade de cada item vendido."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-oswald font-extrabold uppercase italic mb-12 text-center">Perguntas <span className="text-red-600">Frequentes</span></h1>
        
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="border border-zinc-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="font-bold uppercase tracking-tight text-sm">{item.q}</span>
                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === i && (
                <div className="p-6 bg-white border-t border-zinc-200 text-zinc-500 text-sm leading-relaxed font-medium animate-in fade-in slide-in-from-top-2">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
