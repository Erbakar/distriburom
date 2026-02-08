
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { UI_STRINGS } from '../constants';

const About: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const translations = {
    title: { ro: 'Povestea noastră:', en: 'Our Story:' },
    subtitle: { ro: 'Artă și Meșteșug', en: 'Art and Craft' },
    quote: { 
      ro: '"La Distriburom, credem că mobilierul nu este doar un obiect, ci un mod de viață care reflectă sufletul casei."', 
      en: '"At Distriburom, we believe furniture is not just an object, but a lifestyle that reflects the soul of the home."' 
    },
    why_us: { ro: 'De ce Distriburom?', en: 'Why Distriburom?' },
    why_us_desc: { 
      ro: 'Cu peste 20 de ani de experiență în industria mobilierului, combinăm tendințele de design modern cu materiale de calitate modelate de meșteri experți. Fiecare produs este fabricat cu promisiunea utilizării pe termen lung și a excelenței estetice.', 
      en: 'With over 20 years of experience in the furniture industry, we combine modern design trends with quality materials shaped by expert craftsmen. Each product is manufactured with the promise of long-term use and aesthetic excellence.' 
    },
    happy_cust: { ro: 'Clienți Fericiți', en: 'Happy Customers' },
    export: { ro: 'Țări Export', en: 'Export Countries' },
    designs: { ro: 'Designuri Originale', en: 'Original Designs' },
    experience: { ro: 'Ani Experiență', en: 'Years Experience' },
    values: { ro: 'Valorile Noastre', en: 'Our Values' },
    sustainability: { ro: 'Sustenabilitate', en: 'Sustainability' },
    sustainability_desc: { ro: 'Adoptăm metode de producție ecologice pentru a lăsa o lume mai locuibilă generațiilor viitoare.', en: 'We adopt eco-friendly production methods to leave a more livable world for future generations.' },
    quality: { ro: 'Orientare spre Calitate', en: 'Quality Focus' },
    quality_desc: { ro: 'Fiecare punct de îmbinare și fiecare textură de material este selectată și prelucrată conform celor mai înalte standarde.', en: 'Every joint and every fabric texture is selected and processed according to the highest quality standards.' },
    customer_priority: { ro: 'Prioritate Client', en: 'Customer Priority' },
    customer_priority_desc: { ro: 'Suntem alături de dumneavoastră în orice moment, nu doar cu vânzări, ci și cu suport post-vânzare și consultanță în design.', en: 'We are with you at all times, not just with sales, but with after-sales support and design consultancy.' }
  };

  return (
    <div className="pt-20">
      <section className="relative py-32 bg-stone-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-10 uppercase tracking-tighter">
              {translations.title[lang]} <br /> <span className="text-amber-500 italic">{translations.subtitle[lang]}</span>
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed italic border-l-4 border-amber-600 pl-8 mb-12 font-light">
              {translations.quote[lang]}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-30">
           <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Workshop" />
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800" alt="Workmanship" className="rounded-sm shadow-2xl" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-800/10 -z-10 rounded-full blur-3xl"></div>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-stone-900 uppercase tracking-tighter">{translations.why_us[lang]}</h2>
          <p className="text-stone-600 leading-relaxed text-lg font-light">
            {translations.why_us_desc[lang]}
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="font-bold text-3xl text-amber-700 mb-2">15k+</h4>
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">{translations.happy_cust[lang]}</p>
            </div>
            <div>
              <h4 className="font-bold text-3xl text-amber-700 mb-2">30+</h4>
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">{translations.export[lang]}</p>
            </div>
            <div>
              <h4 className="font-bold text-3xl text-amber-700 mb-2">500+</h4>
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">{translations.designs[lang]}</p>
            </div>
            <div>
              <h4 className="font-bold text-3xl text-amber-700 mb-2">20</h4>
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">{translations.experience[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-y border-stone-100">
         <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-16 text-stone-900 uppercase tracking-tighter">{translations.values[lang]}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="p-10 bg-stone-50 rounded-sm border border-stone-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
               <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-amber-800">{translations.sustainability[lang]}</h3>
               <p className="text-stone-500 text-xs leading-relaxed uppercase tracking-widest opacity-70 group-hover:opacity-100">{translations.sustainability_desc[lang]}</p>
             </div>
             <div className="p-10 bg-stone-50 rounded-sm border border-stone-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
               <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-amber-800">{translations.quality[lang]}</h3>
               <p className="text-stone-500 text-xs leading-relaxed uppercase tracking-widest opacity-70 group-hover:opacity-100">{translations.quality_desc[lang]}</p>
             </div>
             <div className="p-10 bg-stone-50 rounded-sm border border-stone-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
               <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-amber-800">{translations.customer_priority[lang]}</h3>
               <p className="text-stone-500 text-xs leading-relaxed uppercase tracking-widest opacity-70 group-hover:opacity-100">{translations.customer_priority_desc[lang]}</p>
             </div>
           </div>
         </div>
      </section>
    </div>
  );
};

export default About;
