
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative py-32 bg-stone-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-10 uppercase tracking-tighter">Hikayemiz: <br /> <span className="text-amber-500 italic">Sanat ve Zanaat</span></h1>
            <p className="text-xl text-stone-300 leading-relaxed italic border-l-4 border-amber-600 pl-8 mb-12 font-light">
              "Distriburom olarak, mobilyanın sadece bir eşya değil, evin ruhunu yansıtan bir yaşam biçimi olduğuna inanıyoruz."
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
          <h2 className="text-4xl font-bold text-stone-900 uppercase tracking-tighter">Neden Distriburom?</h2>
          <p className="text-stone-600 leading-relaxed text-lg font-light">
            20 yılı aşkın süredir mobilya sektöründe edindiğimiz tecrübe ile modern tasarım trendlerini, usta zanaatkarlarımızın ellerinde şekillenen kaliteli malzemelerle buluşturuyoruz. Her bir ürünümüz, uzun ömürlü kullanım ve estetik mükemmeliyet vaadiyle üretilmektedir.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="font-bold text-3xl text-amber-700 mb-2">15k+</h4>
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">Mutlu Müşteri</p>
            </div>
            <div>
              <h4 className="font-bold text-3xl text-amber-700 mb-2">4</h4>
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">Kıtada İhracat</p>
            </div>
            <div>
              <h4 className="font-bold text-3xl text-amber-700 mb-2">500+</h4>
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">Özgün Tasarım</p>
            </div>
            <div>
              <h4 className="font-bold text-3xl text-amber-700 mb-2">25</h4>
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">Yıllık Tecrübe</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-y border-stone-100">
         <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-16 text-stone-900 uppercase tracking-tighter">Değerlerimiz</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="p-10 bg-stone-50 rounded-sm border border-stone-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
               <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-amber-800">Sürdürülebilirlik</h3>
               <p className="text-stone-500 text-xs leading-relaxed uppercase tracking-widest opacity-70 group-hover:opacity-100">Gelecek nesillere daha yaşanabilir bir dünya bırakmak için çevre dostu üretim metodlarını benimsiyoruz.</p>
             </div>
             <div className="p-10 bg-stone-50 rounded-sm border border-stone-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
               <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-amber-800">Kalite Odaklılık</h3>
               <p className="text-stone-500 text-xs leading-relaxed uppercase tracking-widest opacity-70 group-hover:opacity-100">Her bir birleşim noktası, her bir kumaş dokusu en yüksek kalite standartlarına göre seçilir ve işlenir.</p>
             </div>
             <div className="p-10 bg-stone-50 rounded-sm border border-stone-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
               <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-amber-800">Müşteri Önceliği</h3>
               <p className="text-stone-500 text-xs leading-relaxed uppercase tracking-widest opacity-70 group-hover:opacity-100">Sadece satış değil, satış sonrası destek ve tasarım danışmanlığı ile her an yanınızdayız.</p>
             </div>
           </div>
         </div>
      </section>
    </div>
  );
};

export default About;
