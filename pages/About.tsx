
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Nosso Legado</span>
        <h1 className="text-6xl font-oswald font-extrabold uppercase italic mb-12">Muito Mais que <br /><span className="text-zinc-400">Uma Camisa</span></h1>
        
        <div className="space-y-8 text-lg text-zinc-600 leading-relaxed font-medium">
          <p>
            Na Lucas Imports, acreditamos que uma camisa de futebol é mais do que apenas uma vestimenta esportiva. É um símbolo de lealdade, um portador da história e uma obra de arte que une milhões em todo o mundo.
          </p>
          <div className="grid md:grid-cols-2 gap-8 my-16 text-left">
            <div className="bg-zinc-50 p-8 rounded-2xl">
              <h3 className="text-zinc-900 font-oswald text-2xl uppercase mb-4 italic font-bold">Qualidade Incomparável</h3>
              <p className="text-sm">Oferecemos versões de Torcedor e Jogador, garantindo que cada ponto atenda aos mais altos padrões de performance profissional e conforto.</p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-2xl">
              <h3 className="text-zinc-900 font-oswald text-2xl uppercase mb-4 italic font-bold">Comunidade Global</h3>
              <p className="text-sm">Das ruas do Rio aos estádios de Londres, nossa comunidade abrange continentes, unida pelo amor ao esporte mais bonito do mundo.</p>
            </div>
          </div>
          <p>
            Fundada por colecionadores de camisas para colecionadores de camisas, orgulhamo-nos da nossa autenticidade. Cada produto em nossa loja tem garantia premium, curado com o maior cuidado pela cultura do futebol.
          </p>
        </div>

        <div className="mt-20 pt-20 border-t border-zinc-100">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
            alt="Comunidade Lucas Imports"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
