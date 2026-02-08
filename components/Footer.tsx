
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="space-y-10">
            <NavLink to="/" className="inline-block">
              <Logo className="h-10 w-auto brightness-0 invert opacity-90" />
            </NavLink>
            <p className="text-[10px] leading-relaxed uppercase tracking-[0.2em] opacity-50 font-medium">
              Modern yaşam alanlarınız için estetik, fonksiyonellik ve kaliteyi bir araya getiren mobilya çözümleri sunuyoruz.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Keşfet</h4>
            <ul className="space-y-5 text-[10px] uppercase tracking-[0.2em] font-semibold">
              <li><NavLink to="/" className="hover:text-white transition-colors">Anasayfa</NavLink></li>
              <li><NavLink to="/products" className="hover:text-white transition-colors">Koleksiyonlar</NavLink></li>
              <li><NavLink to="/about" className="hover:text-white transition-colors">Hakkımızda</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">İletişim</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Destek</h4>
            <ul className="space-y-5 text-[10px] uppercase tracking-[0.2em] font-semibold">
              <li><a href="#" className="hover:text-white transition-colors">S.S.S.</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Teslimat Bilgileri</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garanti & İade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">KVKK</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Bize Ulaşın</h4>
            <ul className="space-y-6 text-[10px] uppercase tracking-[0.15em] leading-relaxed font-medium">
              <li className="flex items-start space-x-4">
                <MapPin size={16} className="text-stone-600 shrink-0" />
                <span>Modernist Caddesi, No: 42, Mobilya Sanayi, İstanbul</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={16} className="text-stone-600 shrink-0" />
                <span>+90 (212) 555 00 00</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={16} className="text-stone-600 shrink-0" />
                <span>info@distriburom.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-12 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] font-bold opacity-30">
          <p>© 2024 Distriburom. Tüm hakları saklıdır.</p>
          <div className="mt-4 md:mt-0 flex space-x-10">
            <a href="#" className="hover:text-white transition-colors">Gizlilik</a>
            <a href="#" className="hover:text-white transition-colors">Çerezler</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
