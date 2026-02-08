
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, Lock, Globe } from 'lucide-react';
import { FOOTER_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tighter uppercase mb-6 inline-block">
              LUCAS<span className="text-zinc-400">IMPORTS</span>
            </Link>
            <p className="text-zinc-500 text-xs leading-relaxed mb-6">
              A maior loja de artigos esportivos premium do Brasil. Qualidade incomparável e atendimento personalizado em <span className="text-black font-bold">lucasimports.com.br</span>.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-black hover:opacity-50 transition-opacity"><Instagram size={18} /></a>
              <a href="#" className="text-black hover:opacity-50 transition-opacity"><Facebook size={18} /></a>
              <a href="#" className="text-black hover:opacity-50 transition-opacity"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-black">Institucional</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-xs text-zinc-500 hover:text-black transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-black">Ajuda</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.support.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-xs text-zinc-500 hover:text-black transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-black">Atendimento</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <Mail size={14} />
                <span>contato@lucasimports.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <Globe size={14} />
                <span>www.lucasimports.com.br</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-zinc-50 rounded text-[10px] text-zinc-500 font-bold uppercase">
                <Lock size={12} className="text-green-500" /> Domínio Seguro SSL
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap justify-center gap-4 grayscale opacity-40">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" alt="Pix" className="h-4" />
            </div>
            <p className="text-[9px] text-zinc-400 uppercase tracking-widest font-medium">
              © 2025 LUCASIMPORTS.COM.BR - CNPJ: 00.000.000/0001-00.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
