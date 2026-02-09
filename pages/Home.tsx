
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Clock, Heart, Eye } from 'lucide-react';
import { PRODUCTS, UI_STRINGS, CATEGORY_LABELS, CATEGORIES } from '../constants';
import { LanguageContext } from '../App';

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useContext(LanguageContext);

  const visualCategories = CATEGORIES.map((cat, i) => {
    const firstProduct = PRODUCTS.find(p => p.category === cat);
    const sizes = CATEGORIES.length === 1 ? ['col-span-1 row-span-2'] : ['col-span-1 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-1', 'col-span-2 row-span-1'];
    return {
      title: cat,
      img: firstProduct?.image || PLACEHOLDER_IMG,
      size: sizes[i % sizes.length] || 'col-span-1 row-span-1',
    };
  });
  const categoryList = CATEGORIES;

  return (
    <div className="pt-20">
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-xs uppercase tracking-widest mb-6 animate-in slide-in-from-left duration-700">
              {UI_STRINGS.new_collection[lang]}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] animate-in slide-in-from-left delay-100 duration-700">
              {lang === 'ro' ? 'Dă suflet' : 'Give Soul to'} <br /> <span className="italic text-amber-100">{lang === 'ro' ? 'spațiilor tale' : 'your spaces'}</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-100/90 mb-10 leading-relaxed max-w-lg animate-in slide-in-from-left delay-200 duration-700">
              {UI_STRINGS.hero_desc[lang]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left delay-300 duration-700">
              <NavLink to="/products" className="bg-white text-stone-900 px-8 py-4 text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-stone-100 transition-colors">
                {UI_STRINGS.explore[lang]} <ArrowRight size={16} />
              </NavLink>
              <NavLink to="/about" className="bg-transparent border border-white/40 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors">
                {UI_STRINGS.our_story[lang]}
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 uppercase tracking-tighter">{UI_STRINGS.categories[lang]}</h2>
            <p className="text-stone-500 max-w-md italic">{lang === 'ro' ? 'Descoperă colecțiile noastre de mobilier pline de stil.' : 'Discover our stylish furniture collections.'}</p>
          </div>
          <NavLink to="/products" className="text-amber-800 font-semibold flex items-center gap-2 group text-sm uppercase tracking-widest">
            {UI_STRINGS.all_collections[lang]} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {visualCategories.length > 0 && visualCategories.map((cat) => (
            <NavLink key={cat.title} to={`/products?cat=${cat.title}`} className={`relative overflow-hidden group rounded-sm shadow-sm ${cat.size}`}>
              <img src={cat.img} alt={CATEGORY_LABELS[cat.title]?.[lang] || cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-white text-2xl font-bold mb-2 uppercase tracking-tight">{CATEGORY_LABELS[cat.title]?.[lang] || cat.title}</h3>
                <div className="flex items-center text-white/0 group-hover:text-white/100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-sm uppercase tracking-widest font-medium">{UI_STRINGS.examine[lang]}</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 py-16 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-700 shadow-sm"><Star size={24} /></div>
            <h4 className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">{UI_STRINGS.quality[lang]}</h4>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-700 shadow-sm"><Clock size={24} /></div>
            <h4 className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">{UI_STRINGS.delivery[lang]}</h4>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-700 shadow-sm"><Heart size={24} /></div>
            <h4 className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">{UI_STRINGS.satisfaction[lang]}</h4>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-700 shadow-sm"><ArrowRight size={24} /></div>
            <h4 className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">{UI_STRINGS.sustainability[lang]}</h4>
          </div>
        </div>
      </section>

      <section className="py-24 space-y-32">
        {categoryList.map((category) => {
          const categoryProducts = PRODUCTS.filter(p => p.category === category).slice(0, 4);
          return (
            <div key={category} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 border-b border-stone-100 pb-8">
                <div>
                  <h3 className="text-3xl font-bold text-stone-900 uppercase tracking-tighter">{CATEGORY_LABELS[category]?.[lang] ?? category}</h3>
                  <p className="text-stone-500 mt-2 italic text-sm">{lang === 'ro' ? `Soluții moderne și funcționale pentru ${(CATEGORY_LABELS[category]?.[lang] ?? category).toLowerCase()}.` : `Modern solutions for your ${(CATEGORY_LABELS[category]?.[lang] ?? category).toLowerCase()}.`}</p>
                </div>
                <NavLink to={`/products?cat=${category}`} className="text-amber-800 font-semibold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group">
                  {UI_STRINGS.see_all[lang]} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {categoryProducts.map((product) => (
                  <div key={product.id} className="group cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4 rounded-sm shadow-sm">
                      <img src={product.image} alt={product.name[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <div className="bg-white text-stone-900 p-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform"><Eye size={20} /></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 group-hover:text-amber-800 transition-colors uppercase tracking-tight text-sm">{product.name[lang]}</h4>
                      <p className="text-stone-400 text-[10px] mt-1 uppercase tracking-widest">{CATEGORY_LABELS[product.category]?.[lang] ?? product.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="py-24 relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1920" alt="CTA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stone-900/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tighter">{UI_STRINGS.cta_title[lang]}</h2>
          <p className="text-lg text-stone-200 mb-10 max-w-2xl mx-auto font-light italic">{UI_STRINGS.cta_desc[lang]}</p>
          <NavLink to="/contact" className="inline-block bg-amber-700 text-white px-10 py-5 rounded-sm font-semibold uppercase tracking-widest hover:bg-amber-800 transition-colors shadow-2xl active:scale-95 transition-transform">
            {UI_STRINGS.appointment[lang]}
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
