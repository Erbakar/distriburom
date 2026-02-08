
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { Truck, Clock, ShieldCheck } from 'lucide-react';

const DeliveryInfo: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-stone-900 uppercase tracking-tighter text-center">
        {lang === 'ro' ? 'Informații Livrare' : 'Delivery Information'}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="text-center space-y-4">
          <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-amber-700">
            <Truck size={32} />
          </div>
          <h3 className="font-bold uppercase tracking-widest text-sm">{lang === 'ro' ? 'Metode Livrare' : 'Shipping Methods'}</h3>
          <p className="text-xs text-stone-500 leading-relaxed">{lang === 'ro' ? 'Livrare standard prin curierat specializat pentru mobilier greu.' : 'Standard delivery via specialized couriers for heavy furniture.'}</p>
        </div>
        <div className="text-center space-y-4">
          <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-amber-700">
            <Clock size={32} />
          </div>
          <h3 className="font-bold uppercase tracking-widest text-sm">{lang === 'ro' ? 'Timp Estimat' : 'Estimated Time'}</h3>
          <p className="text-xs text-stone-500 leading-relaxed">{lang === 'ro' ? '5-7 zile lucrătoare pentru produsele în stoc.' : '5-7 business days for in-stock products.'}</p>
        </div>
        <div className="text-center space-y-4">
          <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-amber-700">
            <ShieldCheck size={32} />
          </div>
          <h3 className="font-bold uppercase tracking-widest text-sm">{lang === 'ro' ? 'Asigurare' : 'Insurance'}</h3>
          <p className="text-xs text-stone-500 leading-relaxed">{lang === 'ro' ? 'Toate transporturile sunt asigurate 100% împotriva daunelor.' : 'All shipments are 100% insured against damage.'}</p>
        </div>
      </div>

      <div className="bg-stone-50 p-12 rounded-sm border border-stone-100 prose prose-stone max-w-none">
        <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">{lang === 'ro' ? 'Costuri de Livrare' : 'Delivery Costs'}</h2>
        <p className="text-stone-600 mb-6 italic">{lang === 'ro' ? 'Costul livrării este calculat automat la finalizarea comenzii în funcție de greutatea produselor și distanță.' : 'Shipping cost is automatically calculated at checkout based on product weight and distance.'}</p>
        <ul className="space-y-4 text-sm text-stone-600">
          <li><strong>{lang === 'ro' ? 'Livrare Gratuită:' : 'Free Delivery:'}</strong> {lang === 'ro' ? 'Pentru comenzi peste 5000 RON.' : 'For orders over 5000 RON.'}</li>
          <li><strong>{lang === 'ro' ? 'Livrare Premium:' : 'Premium Delivery:'}</strong> {lang === 'ro' ? 'Include manipularea până în locuință și despachetarea.' : 'Includes in-home handling and unpacking.'}</li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryInfo;
