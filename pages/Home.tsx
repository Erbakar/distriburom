
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Clock, Heart, Eye } from 'lucide-react';
import { Category } from '../types';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const categoryList = Object.values(Category);

  const visualCategories = [
    { title: Category.LIVING_ROOM, img: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-2' },
    { title: Category.BEDROOM, img: 'https://images.unsplash.com/photo-1505693419148-ad3b47385f6c?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
    { title: Category.DINING_ROOM, img: 'https://images.unsplash.com/photo-1617806118233-f8e187f42b94?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
    { title: Category.OFFICE, img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800', size: 'col-span-2 row-span-1' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-xs uppercase tracking-widest mb-6 animate-in slide-in-from-left duration-700">
              Yeni Koleksiyon 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] animate-in slide-in-from-left delay-100 duration-700">
              Yaşam Alanlarınıza <br /> <span className="italic text-amber-100">Ruh Katın</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-100/90 mb-10 leading-relaxed max-w-lg animate-in slide-in-from-left delay-200 duration-700">
              Modern tasarımın sadeliği ve işçiliğin asaletiyle tanışın. Distriburom ile eviniz bir sanat eserine dönüşsün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left delay-300 duration-700">
              <NavLink 
                to="/products" 
                className="bg-white text-stone-900 px-8 py-4 text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-stone-100 transition-colors"
              >
                Şimdi Keşfet <ArrowRight size={16} />
              </NavLink>
              <NavLink 
                to="/about" 
                className="bg-transparent border border-white/40 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Hikayemiz
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid (Visual Area) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 uppercase tracking-tighter">Kategorilerimiz</h2>
            <p className="text-stone-500 max-w-md italic">Evinizin her köşesi için özenle tasarlanmış, stil sahibi mobilya koleksiyonlarımızı keşfedin.</p>
          </div>
          <NavLink to="/products" className="text-amber-800 font-semibold flex items-center gap-2 group text-sm uppercase tracking-widest">
            Tüm Koleksiyonlar <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {visualCategories.map((cat) => (
            <NavLink 
              key={cat.title}
              to={`/products?cat=${cat.title}`}
              className={`relative overflow-hidden group rounded-sm shadow-sm ${cat.size}`}
            >
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-white text-2xl font-bold mb-2 uppercase tracking-tight">{cat.title}</h3>
                <div className="flex items-center text-white/0 group-hover:text-white/100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-sm uppercase tracking-widest font-medium">İncele</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-stone-50 py-16 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-700 shadow-sm">
              <Star size={24} />
            </div>
            <h4 className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">Premium Kalite</h4>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-700 shadow-sm">
              <Clock size={24} />
            </div>
            <h4 className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">Hızlı Teslimat</h4>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-700 shadow-sm">
              <Heart size={24} />
            </div>
            <h4 className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">Müşteri Memnuniyeti</h4>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-700 shadow-sm">
              <ArrowRight size={24} />
            </div>
            <h4 className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">Sürdürülebilirlik</h4>
          </div>
        </div>
      </section>

      {/* Showcase Areas (4 products per category) */}
      <section className="py-24 space-y-32">
        {categoryList.map((category) => {
          const categoryProducts = PRODUCTS.filter(p => p.category === category).slice(0, 4);
          
          return (
            <div key={category} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 border-b border-stone-100 pb-8">
                <div>
                  <h3 className="text-3xl font-bold text-stone-900 uppercase tracking-tighter">{category}</h3>
                  <p className="text-stone-500 mt-2 italic text-sm">Modern ve fonksiyonel {category.toLowerCase()} çözümleri.</p>
                </div>
                <NavLink 
                  to={`/products?cat=${category}`} 
                  className="text-amber-800 font-semibold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group"
                >
                  Tümünü Gör <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {categoryProducts.map((product) => (
                  <div key={product.id} className="group cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4 rounded-sm shadow-sm">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <div className="bg-white text-stone-900 p-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            <Eye size={20} />
                         </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 group-hover:text-amber-800 transition-colors uppercase tracking-tight text-sm">{product.name}</h4>
                      <p className="text-stone-400 text-[10px] mt-1 uppercase tracking-widest">{product.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Visual CTA */}
      <section className="py-24 relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1920" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Hayalinizdeki Evi <br /> Birlikte Tasarlayalım</h2>
          <p className="text-lg text-stone-200 mb-10 max-w-2xl mx-auto">Uzman iç mimarlarımızla ücretsiz danışmanlık randevusu alarak yaşam alanlarınızı yeniden keşfedin.</p>
          <NavLink 
            to="/contact"
            className="inline-block bg-amber-700 text-white px-10 py-5 rounded-sm font-semibold uppercase tracking-widest hover:bg-amber-800 transition-colors shadow-2xl active:scale-95 transition-transform"
          >
            Randevu Al
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
