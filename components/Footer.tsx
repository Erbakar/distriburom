
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Logo, UI_STRINGS } from '../constants';
import { LanguageContext } from '../App';

const Footer: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    desc: { 
      ro: 'Oferim soluții de mobilier care combină estetica, funcționalitatea și calitatea pentru spațiile dumneavoastră moderne de locuit.', 
      en: 'We offer furniture solutions that combine aesthetics, functionality, and quality for your modern living spaces.' 
    },
    discover: { ro: 'Descoperă', en: 'Discover' },
    support: { ro: 'Suport', en: 'Support' },
    contact_us: { ro: 'Contactați-ne', en: 'Contact Us' },
    faq: { ro: 'Întrebări Frecvente', en: 'FAQ' },
    delivery: { ro: 'Informații Livrare', en: 'Delivery Info' },
    warranty: { ro: 'Garanție și Retur', en: 'Warranty & Returns' },
    privacy: { ro: 'Confidențialitate', en: 'Privacy' },
    cookies: { ro: 'Cookie-uri', en: 'Cookies' },
    rights: { ro: 'Toate drepturile rezervate.', en: 'All rights reserved.' }
  };

  return (
    <footer className="bg-stone-950 text-stone-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="space-y-10">
            <NavLink to="/" className="inline-block text-stone-100">
              <Logo className="h-10 w-auto min-w-[180px] opacity-90" />
            </NavLink>
            <p className="text-[10px] leading-relaxed uppercase tracking-[0.2em] opacity-50 font-medium">
              {t.desc[lang]}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">{t.discover[lang]}</h4>
            <ul className="space-y-5 text-[10px] uppercase tracking-[0.2em] font-semibold">
              <li><NavLink to="/" className="hover:text-white transition-colors">{UI_STRINGS.home[lang]}</NavLink></li>
              <li><NavLink to="/products" className="hover:text-white transition-colors">{UI_STRINGS.products[lang]}</NavLink></li>
              <li><NavLink to="/about" className="hover:text-white transition-colors">{UI_STRINGS.about[lang]}</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">{UI_STRINGS.contact[lang]}</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">{t.support[lang]}</h4>
            <ul className="space-y-5 text-[10px] uppercase tracking-[0.2em] font-semibold">
              <li><NavLink to="/faq" className="hover:text-white transition-colors">{t.faq[lang]}</NavLink></li>
              <li><NavLink to="/delivery" className="hover:text-white transition-colors">{t.delivery[lang]}</NavLink></li>
              <li><NavLink to="/warranty" className="hover:text-white transition-colors">{t.warranty[lang]}</NavLink></li>
              <li><NavLink to="/privacy" className="hover:text-white transition-colors">GDPR</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">{t.contact_us[lang]}</h4>
            <ul className="space-y-6 text-[10px] uppercase tracking-[0.15em] leading-relaxed font-medium">
              <li className="flex items-start space-x-4">
                <MapPin size={16} className="text-stone-600 shrink-0" />
                <span>Bulevardul Modernist, Nr. 42, București</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={16} className="text-stone-600 shrink-0" />
                <span>+40 21 000 0000</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={16} className="text-stone-600 shrink-0" />
                <span>info@distriburom.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-12 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] font-bold opacity-30">
          <p>© 2026 Distriburom. {t.rights[lang]}</p>
          <div className="mt-4 md:mt-0 flex space-x-10">
            <NavLink to="/privacy" className="hover:text-white transition-colors">{t.privacy[lang]}</NavLink>
            <NavLink to="/privacy" className="hover:text-white transition-colors">{t.cookies[lang]}</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
