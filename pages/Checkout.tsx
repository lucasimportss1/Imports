
import React, { useState, useMemo } from 'react';
import { ShieldCheck, CreditCard, QrCode, Lock, ChevronRight, Truck, Info, CheckCircle2, Copy, Ticket, XCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutProps {
  items: CartItem[];
}

type ShippingMethod = 'pac' | 'sedex' | 'express';
type PaymentMethod = 'pix' | 'card';

const COUPONS: Record<string, number> = {
  'BEMVINDO10': 0.10,
  'LUCAS20': 0.20,
  'PRIMEIRACOMPRA': 0.15,
  'MANTO5': 0.05
};

const Checkout: React.FC<CheckoutProps> = ({ items }) => {
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('pac');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('pix');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  
  // Coupon States
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [couponError, setCouponError] = useState('');

  const subtotal = useMemo(() => items.reduce((acc, item) => acc + (item.price * item.quantity), 0), [items]);

  const shippingRates = {
    pac: subtotal > 500 ? 0 : 25.0,
    sedex: 45.0,
    express: 65.0
  };

  const currentShippingCost = shippingRates[shippingMethod];
  
  const discountAmount = useMemo(() => {
    if (!appliedCoupon) return 0;
    return subtotal * appliedCoupon.discount;
  }, [subtotal, appliedCoupon]);

  const totalBeforePix = subtotal + currentShippingCost - discountAmount;
  const pixDiscount = paymentMethod === 'pix' ? totalBeforePix * 0.05 : 0;
  const finalTotal = totalBeforePix - pixDiscount;

  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (COUPONS[code]) {
      setAppliedCoupon({ code, discount: COUPONS[code] });
      setCouponError('');
      setCouponInput('');
    } else {
      setCouponError('Cupom inválido ou expirado.');
      setTimeout(() => setCouponError(''), 3000);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderPlaced(true);
      window.scrollTo(0, 0);
    }, 2000);
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText("00020126330014BR.GOV.BCB.PIX011112345678901520400005303986540510.005802BR5920Lucas Imports Ltda6009SAO PAULO62070503***6304ABCD");
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="pt-40 pb-20 px-4 text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-oswald font-bold uppercase mb-4">Seu carrinho está vazio</h2>
        <p className="text-zinc-500 mb-8">Adicione alguns mantos antes de finalizar a compra.</p>
        <a href="#/products" className="inline-block px-10 py-4 bg-zinc-900 text-white font-bold uppercase tracking-widest hover:bg-red-600 transition-colors">Voltar para a Loja</a>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <div className="bg-white border border-zinc-100 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-zinc-900 p-8 text-center text-white">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-3xl font-oswald font-bold uppercase tracking-tight">Pedido Realizado com Sucesso!</h2>
            <p className="text-zinc-400 text-sm mt-2">ID do Pedido: #LI-{Math.floor(Math.random() * 90000) + 10000}</p>
          </div>

          <div className="p-8 md:p-12">
            {paymentMethod === 'pix' ? (
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 justify-center md:justify-start">
                    <QrCode className="text-red-600" /> Finalize seu PIX
                  </h3>
                  <p className="text-zinc-500 text-sm mb-6">
                    Para confirmar sua compra, realize o pagamento via PIX. O processamento é instantâneo e seu pedido entrará em separação imediatamente.
                  </p>
                  <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200 mb-6 relative">
                    <code className="text-[10px] break-all block text-zinc-600">
                      00020126330014BR.GOV.BCB.PIX011112345678901520400005303986540510.005802BR5920Lucas Imports Ltda6009SAO PAULO62070503***6304ABCD
                    </code>
                    <button 
                      onClick={copyPixCode}
                      className="mt-4 w-full flex items-center justify-center gap-2 py-2 bg-zinc-900 text-white text-[10px] font-bold uppercase rounded hover:bg-zinc-800 transition-colors"
                    >
                      {copiedPix ? 'Copiado!' : <><Copy size={12} /> Copiar Código Copia e Cola</>}
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-400 uppercase font-bold tracking-widest">
                    <Info size={14} /> Aguardando confirmação do banco...
                  </div>
                </div>
                <div className="w-48 h-48 bg-white p-4 border-2 border-zinc-100 rounded-xl shadow-inner">
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LucasImportsPixOrder${finalTotal}`} alt="QR Code PIX" className="w-full h-full" />
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-xl font-bold mb-4">Pagamento em Processamento</h3>
                <p className="text-zinc-500 text-sm mb-8">
                  Estamos validando os dados do seu cartão. Você receberá um e-mail de confirmação em instantes.
                </p>
                <div className="flex justify-center gap-4">
                  <div className="w-3 h-3 bg-zinc-900 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-3 h-3 bg-zinc-900 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-zinc-900 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7 py-8 lg:py-12">
          <div className="flex items-center gap-4 mb-10">
            <h1 className="text-3xl md:text-4xl font-oswald font-extrabold uppercase tracking-tight">Checkout</h1>
            <div className="h-px flex-1 bg-zinc-200 hidden md:block"></div>
          </div>
          
          <form onSubmit={handlePlaceOrder} className="space-y-12">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">01</span>
                Identificação & Entrega
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">E-mail para Rastreio</label>
                  <input required type="email" placeholder="seu@email.com" className="w-full h-14 bg-zinc-50 border border-zinc-100 rounded-xl px-6 focus:ring-2 focus:ring-black outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Nome</label>
                  <input required type="text" placeholder="Seu nome" className="w-full h-14 bg-zinc-50 border border-zinc-100 rounded-xl px-6 focus:ring-2 focus:ring-black outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Sobrenome</label>
                  <input required type="text" placeholder="Seu sobrenome" className="w-full h-14 bg-zinc-50 border border-zinc-100 rounded-xl px-6 focus:ring-2 focus:ring-black outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">CEP</label>
                  <input required type="text" placeholder="00000-000" className="w-full h-14 bg-zinc-50 border border-zinc-100 rounded-xl px-6 focus:ring-2 focus:ring-black outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Endereço Completo</label>
                  <input required type="text" placeholder="Rua, número, complemento" className="w-full h-14 bg-zinc-50 border border-zinc-100 rounded-xl px-6 focus:ring-2 focus:ring-black outline-none transition-all" />
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">02</span>
                Método de Envio
              </h3>
              <div className="space-y-4">
                {[
                  { id: 'pac', name: 'Correios PAC', time: '7-12 dias úteis', price: shippingRates.pac },
                  { id: 'sedex', name: 'Correios SEDEX', time: '3-5 dias úteis', price: shippingRates.sedex },
                  { id: 'express', name: 'Transportadora Express', time: '2-4 dias úteis', price: shippingRates.express },
                ].map((method) => (
                  <label 
                    key={method.id}
                    className={`flex items-center justify-between p-5 border-2 rounded-xl cursor-pointer transition-all ${
                      shippingMethod === method.id ? 'border-black bg-zinc-50' : 'border-zinc-100 hover:border-zinc-200'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input 
                        type="radio" 
                        name="shipping" 
                        className="w-4 h-4 accent-black"
                        checked={shippingMethod === method.id}
                        onChange={() => setShippingMethod(method.id as ShippingMethod)}
                      />
                      <div>
                        <p className="text-sm font-bold uppercase">{method.name}</p>
                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{method.time}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold">{method.price === 0 ? 'GRÁTIS' : `R$ ${method.price.toFixed(2)}`}</span>
                  </label>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">03</span>
                Pagamento
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <button 
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`flex flex-col items-center justify-center p-6 border-2 rounded-2xl transition-all ${
                    paymentMethod === 'pix' ? 'border-black bg-zinc-50 shadow-inner' : 'border-zinc-100 hover:border-zinc-300'
                  }`}
                >
                  <QrCode size={28} className={paymentMethod === 'pix' ? 'text-black' : 'text-zinc-300'} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-3">PIX (Instantâneo)</span>
                  <span className="text-[9px] text-green-600 font-bold uppercase mt-1">Aprovação Imediata</span>
                </button>
                <button 
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`flex flex-col items-center justify-center p-6 border-2 rounded-2xl transition-all ${
                    paymentMethod === 'card' ? 'border-black bg-zinc-50 shadow-inner' : 'border-zinc-100 hover:border-zinc-300'
                  }`}
                >
                  <CreditCard size={28} className={paymentMethod === 'card' ? 'text-black' : 'text-zinc-300'} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-3">Cartão de Crédito</span>
                  <span className="text-[9px] text-zinc-400 font-bold uppercase mt-1">Até 12x Sem Juros</span>
                </button>
              </div>

              {paymentMethod === 'card' ? (
                <div className="space-y-5 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 animate-in fade-in slide-in-from-top-2">
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Número do Cartão</label>
                    <input required type="text" placeholder="0000 0000 0000 0000" className="w-full h-14 bg-white border border-zinc-200 rounded-xl px-6 focus:ring-2 focus:ring-black outline-none transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Validade</label>
                      <input required type="text" placeholder="MM/AA" className="w-full h-14 bg-white border border-zinc-200 rounded-xl px-6 focus:ring-2 focus:ring-black outline-none transition-all" />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">CVC</label>
                      <input required type="text" placeholder="123" className="w-full h-14 bg-white border border-zinc-200 rounded-xl px-6 focus:ring-2 focus:ring-black outline-none transition-all" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 bg-zinc-50 rounded-2xl border border-dashed border-zinc-300 text-center animate-in fade-in">
                  <p className="text-xs text-zinc-500 mb-2 font-medium">Você poderá escanear o QR Code ou copiar o código na próxima tela após confirmar o pedido.</p>
                  <div className="flex items-center justify-center gap-2 text-red-600">
                    <QrCode size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Desconto de 5% no PIX aplicado</span>
                  </div>
                </div>
              )}
            </section>

            <button 
              type="submit"
              disabled={isProcessing}
              className={`w-full h-20 bg-zinc-900 text-white flex items-center justify-center gap-4 font-bold uppercase tracking-[0.3em] transition-all rounded-2xl shadow-2xl hover:bg-red-600 group relative overflow-hidden ${isProcessing ? 'opacity-70' : ''}`}
            >
              {isProcessing ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processando...</span>
                </div>
              ) : (
                <>
                  <Lock size={20} className="group-hover:scale-110 transition-transform" />
                  <span>Finalizar e Pagar R$ {finalTotal.toFixed(2)}</span>
                </>
              )}
            </button>
            <p className="text-center text-[9px] text-zinc-400 uppercase font-bold tracking-[0.2em] flex items-center justify-center gap-2">
              <ShieldCheck size={12} className="text-green-500" /> Ambiente 100% Criptografado e Seguro
            </p>
          </form>
        </div>

        <aside className="lg:col-span-5 py-8 lg:py-12">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 sticky top-32">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-8 border-b border-zinc-50 pb-4 flex items-center justify-between">
              Resumo da Compra
              <span className="px-2 py-0.5 bg-zinc-100 rounded text-zinc-400">{items.length} itens</span>
            </h3>
            
            <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 group">
                  <div className="w-16 h-20 bg-zinc-50 rounded-xl shrink-0 overflow-hidden border border-zinc-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="text-[10px] font-bold line-clamp-1 uppercase text-zinc-900">{item.name}</h4>
                    <p className="text-[9px] text-zinc-400 uppercase mt-1 font-bold">TAM: {item.selectedSize} | QTD: {item.quantity}</p>
                    <p className="text-xs font-bold mt-1 text-zinc-900">R$ {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon Section */}
            <div className="mb-8 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 flex items-center gap-2">
                <Ticket size={14} /> Cupom de Desconto
              </h4>
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-zinc-900 text-white p-3 rounded-xl animate-in zoom-in-95 duration-200">
                  <div className="flex items-center gap-2">
                    <div className="bg-red-600 p-1.5 rounded-lg">
                      <Ticket size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase leading-none">{appliedCoupon.code}</p>
                      <p className="text-[9px] text-zinc-400 font-bold uppercase mt-1">{(appliedCoupon.discount * 100)}% de desconto</p>
                    </div>
                  </div>
                  <button onClick={handleRemoveCoupon} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <XCircle size={16} />
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="CUPOM" 
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 h-12 bg-white border border-zinc-200 rounded-xl px-4 text-xs font-bold uppercase focus:ring-2 focus:ring-black outline-none"
                    />
                    <button 
                      onClick={handleApplyCoupon}
                      className="h-12 px-4 bg-zinc-900 text-white text-[10px] font-bold uppercase rounded-xl hover:bg-red-600 transition-colors"
                    >
                      Aplicar
                    </button>
                  </div>
                  {couponError && <p className="text-[9px] text-red-600 font-bold uppercase ml-1 animate-pulse">{couponError}</p>}
                  <p className="text-[8px] text-zinc-400 font-bold uppercase mt-2 text-center italic">Tente: BEMVINDO10 ou LUCAS20</p>
                </div>
              )}
            </div>

            <div className="space-y-4 border-t border-zinc-100 pt-8">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-zinc-500 uppercase tracking-widest">Subtotal</span>
                <span className="font-bold">R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs font-medium">
                <span className="text-zinc-500 uppercase tracking-widest">Frete ({shippingMethod.toUpperCase()})</span>
                <span className="font-bold text-green-600">{currentShippingCost === 0 ? 'GRÁTIS' : `R$ ${currentShippingCost.toFixed(2)}`}</span>
              </div>
              
              {appliedCoupon && (
                <div className="flex justify-between text-xs font-medium animate-in slide-in-from-right-2">
                  <span className="text-zinc-500 uppercase tracking-widest">Desconto Cupom ({appliedCoupon.code})</span>
                  <span className="font-bold text-red-600">- R$ {discountAmount.toFixed(2)}</span>
                </div>
              )}

              {paymentMethod === 'pix' && (
                <div className="flex justify-between text-xs font-medium animate-in slide-in-from-right-2">
                  <span className="text-zinc-500 uppercase tracking-widest">Desconto PIX (5%)</span>
                  <span className="font-bold text-green-600">- R$ {pixDiscount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between items-end border-t border-zinc-100 pt-6 mt-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Total Final</span>
                  <p className="text-4xl font-oswald font-extrabold italic tracking-tighter leading-none text-zinc-900">
                    R$ {finalTotal.toFixed(2)}
                  </p>
                </div>
                <div className="text-right">
                   <p className="text-[8px] text-zinc-300 font-bold uppercase tracking-widest">Até 12x de</p>
                   <p className="text-sm font-bold">R$ {(finalTotal / 12).toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 bg-zinc-50 rounded-2xl flex items-start gap-3">
               <Info size={16} className="text-zinc-400 shrink-0 mt-0.5" />
               <p className="text-[9px] text-zinc-500 font-medium leading-relaxed">
                 O prazo de entrega começa a contar a partir da confirmação do pagamento. Enviaremos o código de rastreio para o seu e-mail cadastrado.
               </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;
