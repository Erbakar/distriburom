
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Warranty: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-stone-900 uppercase tracking-tighter">
        {lang === 'ro' ? 'Garanție și Retur' : 'Warranty & Returns'}
      </h1>
      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-bold mb-4 uppercase tracking-widest text-amber-800">{lang === 'ro' ? 'Garanția de 2 Ani' : '2-Year Warranty'}</h2>
          <p className="text-stone-500 leading-relaxed font-light">
            {lang === 'ro' 
              ? 'Toate produsele achiziționate de la Distriburom beneficiază de o garanție de 24 de luni. Garanția acoperă defectele de fabricație și viciile ascunse ale materialelor.' 
              : 'All products purchased from Distriburom come with a 24-month warranty. The warranty covers manufacturing defects and hidden material flaws.'}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4 uppercase tracking-widest text-amber-800">{lang === 'ro' ? 'Politica de Retur' : 'Return Policy'}</h2>
          <p className="text-stone-500 leading-relaxed font-light mb-4">
            {lang === 'ro' 
              ? 'Conform legislației în vigoare, aveți la dispoziție 14 zile calendaristice pentru a returna produsul fără a invoca niciun motiv.' 
              : 'According to current legislation, you have 14 calendar days to return the product without stating any reason.'}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-500 text-sm italic">
            <li>{lang === 'ro' ? 'Produsul trebuie să fie în ambalajul original.' : 'The product must be in its original packaging.'}</li>
            <li>{lang === 'ro' ? 'Să nu prezinte urme de utilizare sau asamblare.' : 'It must show no signs of use or assembly.'}</li>
            <li>{lang === 'ro' ? 'Costurile de retur sunt suportate de client.' : 'Return shipping costs are borne by the customer.'}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Warranty;
