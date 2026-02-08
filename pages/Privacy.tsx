
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Privacy: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-stone-900 uppercase tracking-tighter">
        {lang === 'ro' ? 'Confidențialitate și Cookies' : 'Privacy & Cookies'}
      </h1>
      <div className="prose prose-stone max-w-none text-stone-500 font-light space-y-10">
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-4">{lang === 'ro' ? 'Protecția Datelor' : 'Data Protection'}</h2>
          <p className="leading-relaxed">
            {lang === 'ro' 
              ? 'Distriburom respectă viața privată a utilizatorilor săi și se angajează să protejeze datele cu caracter personal. Colectăm date doar pentru procesarea comenzilor și îmbunătățirea serviciilor noastre.' 
              : 'Distriburom respects its users privacy and is committed to protecting personal data. We collect data only for processing orders and improving our services.'}
          </p>
        </section>
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-4">{lang === 'ro' ? 'Politica de Cookies' : 'Cookies Policy'}</h2>
          <p className="leading-relaxed">
            {lang === 'ro' 
              ? 'Site-ul nostru folosește cookie-uri pentru a vă oferi o experiență de navigare personalizată. Acestea ne ajută să înțelegem cum interacționați cu platforma noastră.' 
              : 'Our website uses cookies to provide you with a personalized browsing experience. These help us understand how you interact with our platform.'}
          </p>
        </section>
        <div className="bg-stone-50 p-6 border-l-2 border-amber-800 italic text-xs">
          {lang === 'ro' 
            ? 'Pentru orice întrebare privind datele dumneavoastră, ne puteți scrie la privacy@distriburom.com.' 
            : 'For any questions regarding your data, you can write to us at privacy@distriburom.com.'}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
