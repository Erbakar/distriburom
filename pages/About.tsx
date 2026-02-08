
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative py-32 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-10">Hikayemiz: <br /> <span className="text-amber-500 italic">Sanat ve Zanaat</span></h1>
            <p className="text-xl text-stone-300 leading-relaxed italic border-l-4 border-amber-600 pl-8 mb-12">
              "Distriburom olarak, mobilyanın sadece bir eşya değil, evin ruhunu yansıtan bir yaşam biçimi olduğuna inanıyoruz."
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-40">
           <img src="https://picsum.photos/id/1/800/800" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <img src="https://picsum.photos/id/180/800/1000" alt="Workmanship" className="rounded-sm shadow-2xl" />
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-stone-900">Neden Distriburom?</h2>
          <p className="text-stone-600 leading-relaxed text-lg">
            20 yılı aşkın süredir mobilya sektöründe edindiğimiz tecrübe ile modern tasarım trendlerini, usta zanaatkarlarımızın ellerinde şekillenen kaliteli malzemelerle buluşturuyoruz.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="font-bold text-3xl text-amber-700 mb-2">15k+</h4>
              <p className="text-sm text-stone-500 uppercase tracking-widest">Mutlu Müşteri</p>
            </div>
            <div>
              <h4 className="font-bold text-3xl text-amber-700 mb-2">4</h4>
              <p className="text-sm text-stone-500 uppercase tracking-widest">Kıtada İhracat</p>
            </div>
            <div>
              <h4 className="font-bold text-3xl text-amber-700 mb-2">500+</h4>
              <p className="text-sm text-stone-500 uppercase tracking-widest">Özgün Tasarım</p>
            </div>
            <div>
              <h4 className="font-bold text-3xl text-amber-700 mb-2">25</h4>
              <p className="text-sm text-stone-500 uppercase tracking-widest">Yıllık Tecrübe</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24 border-y border-stone-200">
         <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-16 text-stone-900">Değerlerimiz</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="p-8 bg-white shadow-sm rounded-sm">
               <h3 className="text-xl font-bold mb-4">Sürdürülebilirlik</h3>
               <p className="text-stone-500 text-sm">Gelecek nesillere daha yaşanabilir bir dünya bırakmak için çevre dostu üretim metodlarını benimsiyoruz.</p>
             </div>
             <div className="p-8 bg-white shadow-sm rounded-sm">
               <h3 className="text-xl font-bold mb-4">Kalite Odaklılık</h3>
               <p className="text-stone-500 text-sm">Her bir birleşim noktası, her bir kumaş dokusu en yüksek kalite standartlarına göre seçilir ve işlenir.</p>
             </div>
             <div className="p-8 bg-white shadow-sm rounded-sm">
               <h3 className="text-xl font-bold mb-4">Müşteri Önceliği</h3>
               <p className="text-stone-500 text-sm">Sadece satış değil, satış sonrası destek ve tasarım danışmanlığı ile her an yanınızdayız.</p>
             </div>
           </div>
         </div>
      </section>
    </div>
  );
};

export default About;
