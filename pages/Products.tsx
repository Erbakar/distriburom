
import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Heart, Search, Eye } from 'lucide-react';
import { PRODUCTS, UI_STRINGS, CATEGORY_LABELS } from '../constants';
import { Category } from '../types';
import { LanguageContext } from '../App';

const Products: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    if (cat) setActiveCategory(cat);
  }, [location]);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCat = activeCategory === 'ALL' || p.category === activeCategory;
    // Fix: Access name by current language before toLowerCase()
    const matchesSearch = p.name[lang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const categories = ['ALL', ...Object.values(Category)];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 uppercase tracking-tighter">{UI_STRINGS.products[lang]}</h1>
          <p className="text-stone-500 max-w-2xl mx-auto italic">{lang === 'ro' ? 'Descoperă eleganța și funcționalitatea în colecțiile noastre.' : 'Discover elegance and functionality in our collections.'}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-y border-stone-100 py-6 gap-6">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
                  activeCategory === cat 
                  ? 'bg-stone-900 text-white' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat === 'ALL' ? UI_STRINGS.all_collections[lang] : CATEGORY_LABELS[cat as Category][lang]}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder={UI_STRINGS.search_placeholder[lang]} 
              className="w-full bg-stone-50 border-b border-stone-200 py-2 pl-2 pr-10 focus:outline-none focus:border-stone-900 transition-colors text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-2 top-2 text-stone-400" size={18} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div 
                className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-6 rounded-sm cursor-pointer shadow-sm"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {/* Fix: Access product name by language for alt tag */}
                <img 
                  src={product.image} 
                  alt={product.name[lang]} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[8px] font-bold uppercase tracking-widest text-stone-900 shadow-sm">
                    {CATEGORY_LABELS[product.category][lang]}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="bg-white text-stone-900 p-3 rounded-full hover:bg-stone-900 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                    <Eye size={20} />
                  </button>
                  <button 
                    className="bg-white text-stone-900 p-3 rounded-full hover:bg-red-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75 shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Heart size={20} />
                  </button>
                </div>
              </div>
              <div className="cursor-pointer text-center" onClick={() => navigate(`/product/${product.id}`)}>
                {/* Fix: Access name and description by current language */}
                <h3 className="text-lg font-bold text-stone-900 mb-1 hover:text-amber-800 transition-colors uppercase tracking-tight">{product.name[lang]}</h3>
                <p className="text-stone-400 text-[10px] uppercase tracking-widest line-clamp-1">{product.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-400 text-xl italic font-light">{UI_STRINGS.no_results[lang]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
