
import React, { useContext } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Heart, CheckCircle2, Share2 } from 'lucide-react';
import { PRODUCTS, UI_STRINGS, CATEGORY_LABELS } from '../constants';
import { LanguageContext } from '../App';

const ProductDetail: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-2xl font-bold mb-4">{UI_STRINGS.prod_not_found[lang]}</h2>
        <button 
          onClick={() => navigate('/products')}
          className="text-amber-700 font-semibold flex items-center justify-center gap-2 mx-auto"
        >
          <ArrowLeft size={18} /> {UI_STRINGS.back_to_coll[lang]}
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8 group text-[10px] font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          {UI_STRINGS.back_to_coll[lang]}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-stone-100 overflow-hidden rounded-sm shadow-sm">
              {/* Fix: Access product name by language for alt tag */}
              <img 
                src={product.image} 
                alt={product.name[lang]} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Minimalist gallery placeholder */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-stone-100 rounded-sm overflow-hidden opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
                   <img src={product.image} alt="Gallery" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="sticky top-32">
            <div className="mb-8 border-b border-stone-100 pb-8">
              <span className="text-amber-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                {CATEGORY_LABELS[product.category][lang]}
              </span>
              {/* Fix: Access localized name and description */}
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 uppercase tracking-tighter leading-none">{product.name[lang]}</h1>
              <p className="text-stone-500 italic text-lg font-light leading-relaxed">
                {product.description[lang]}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-4">{UI_STRINGS.features[lang]}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Fix: Access localized features array */}
                  {product.features[lang].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-stone-700 font-medium">
                      <div className="w-1.5 h-1.5 bg-amber-700 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <NavLink 
                  to="/contact"
                  className="flex-1 bg-stone-900 text-white py-5 px-8 font-bold uppercase tracking-[0.2em] hover:bg-amber-900 transition-colors flex items-center justify-center gap-3 shadow-2xl text-xs active:scale-95 transition-transform"
                >
                  <MessageSquare size={18} /> {UI_STRINGS.info_request[lang]}
                </NavLink>
                <button className="p-5 border border-stone-200 hover:bg-stone-50 transition-colors rounded-sm flex items-center justify-center group">
                  <Heart size={20} className="text-stone-400 group-hover:text-red-500 transition-colors" />
                </button>
                <button className="p-5 border border-stone-200 hover:bg-stone-50 transition-colors rounded-sm flex items-center justify-center">
                  <Share2 size={20} className="text-stone-400" />
                </button>
              </div>

              <div className="bg-stone-50 p-8 rounded-sm space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 className="text-amber-700" size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-stone-900 uppercase tracking-widest mb-1">{UI_STRINGS.delivery[lang]}</h5>
                    <p className="text-[10px] text-stone-500 leading-relaxed uppercase tracking-widest">{lang === 'ro' ? 'Livrare rapidă și sigură pe tot teritoriul țării.' : 'Fast and secure delivery across the country.'}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 className="text-amber-700" size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-stone-900 uppercase tracking-widest mb-1">{lang === 'ro' ? 'Suport Design' : 'Design Support'}</h5>
                    <p className="text-[10px] text-stone-500 leading-relaxed uppercase tracking-widest">{lang === 'ro' ? 'Consultanță gratuită pentru alegerea mobilierului potrivit.' : 'Free consultation for choosing the right furniture.'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
