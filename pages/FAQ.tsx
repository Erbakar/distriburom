
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const faqs = [
    {
      q: { ro: 'Cât durează livrarea?', en: 'How long does delivery take?' },
      a: { ro: 'Livrarea standard durează între 5 și 7 zile lucrătoare, în funcție de locația dumneavoastră.', en: 'Standard delivery takes between 5 to 7 business days, depending on your location.' }
    },
    {
      q: { ro: 'Oferiți servicii de montaj?', en: 'Do you offer installation services?' },
      a: { ro: 'Da, oferim servicii de montaj profesional contra cost pentru toate produsele noastre de mobilier.', en: 'Yes, we offer professional installation services for an additional fee for all our furniture products.' }
    },
    {
      q: { ro: 'Ce materiale folosiți?', en: 'What materials do you use?' },
      a: { ro: 'Folosim doar materiale premium: lemn masiv certificat, stofe rezistente la uzură și componente metalice tratate anticoroziune.', en: 'We use only premium materials: certified solid wood, wear-resistant fabrics, and anti-corrosion treated metal components.' }
    },
    {
      q: { ro: 'Pot returna un produs?', en: 'Can I return a product?' },
      a: { ro: 'Desigur. Aveți dreptul de a returna orice produs în termen de 14 zile de la primire, cu condiția să fie în starea originală.', en: 'Of course. You have the right to return any product within 14 days of receipt, provided it is in its original condition.' }
    }
  ];

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-stone-900 uppercase tracking-tighter text-center">
        {lang === 'ro' ? 'Întrebări Frecvente' : 'Frequently Asked Questions'}
      </h1>
      <div className="space-y-8">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white p-8 border border-stone-100 shadow-sm rounded-sm">
            <div className="flex items-start gap-4 mb-4">
              <HelpCircle className="text-amber-700 shrink-0" size={24} />
              <h3 className="text-lg font-bold text-stone-900 uppercase tracking-tight">{faq.q[lang]}</h3>
            </div>
            <p className="text-stone-500 leading-relaxed font-light pl-10">{faq.a[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
