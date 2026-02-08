
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { NAV_LINKS, Logo } from '../constants';
import { Category } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  const categories = [
    { title: Category.LIVING_ROOM, img: 'https://images.unsplash.com/photo-1567016432779-094069958ad5?q=80&w=800&auto=format&fit=crop', desc: 'Konfor ve estetiğin buluşması.' },
    { title: Category.BEDROOM, img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop', desc: 'Rüya gibi bir uyku deneyimi.' },
    { title: Category.DINING_ROOM, img: 'https://images.unsplash.com/photo-1617806118233-f8e187f42b94?q=80&w=800&auto=format&fit=crop', desc: 'Paylaşılan en güzel anlar için.' },
    { title: Category.OFFICE, img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop', desc: 'Verimli ve şık çalışma alanları.' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center text-stone-800 hover:opacity-80 transition-opacity">
            <Logo className="h-10 w-auto" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 items-center">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.path}
                className="relative group h-20 flex items-center"
                onMouseEnter={() => link.isMega && setIsMegaOpen(true)}
                onMouseLeave={() => link.isMega && setIsMegaOpen(false)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) => 
                    `text-[11px] font-bold tracking-[0.25em] uppercase transition-all flex items-center gap-1.5 ${isActive ? 'text-amber-800' : 'text-stone-500 hover:text-stone-900'}`
                  }
                >
                  {link.label}
                  {link.isMega && <ChevronDown size={12} className={`transition-transform duration-300 ${isMegaOpen ? 'rotate-180' : ''}`} />}
                </NavLink>

                {/* Mega Menu */}
                {link.isMega && isMegaOpen && (
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-screen max-w-5xl bg-white shadow-2xl border border-stone-100 p-10 grid grid-cols-4 gap-8 animate-in fade-in slide-in-from-top-2 duration-300">
                    {categories.map((cat) => (
                      <NavLink 
                        key={cat.title} 
                        to={`/products?cat=${cat.title}`}
                        onClick={() => setIsMegaOpen(false)}
                        className="group/item flex flex-col"
                      >
                        <div className="aspect-[4/3] overflow-hidden mb-4 bg-stone-100 rounded-sm">
                          <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700" />
                        </div>
                        <h4 className="font-bold text-stone-900 mb-1 uppercase tracking-tight text-xs">{cat.title}</h4>
                        <p className="text-[9px] text-stone-400 uppercase tracking-widest leading-relaxed">{cat.desc}</p>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6 text-stone-500">
            <button className="hover:text-stone-900 transition-colors"><Search size={18} /></button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-8 flex flex-col space-y-6 shadow-2xl animate-in fade-in slide-in-from-right duration-300">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-[0.2em] text-stone-800 border-b border-stone-50 pb-4"
            >
              {link.label}
            </NavLink>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {categories.map((cat) => (
              <NavLink 
                key={cat.title}
                to={`/products?cat=${cat.title}`}
                onClick={() => setIsOpen(false)}
                className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold bg-stone-50 p-3 rounded-sm"
              >
                {cat.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
