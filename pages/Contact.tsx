
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">Bizimle <br /> <span className="text-amber-700 italic">İletişime Geçin</span></h1>
            <p className="text-stone-500 text-lg mb-12 leading-relaxed">
              Sorularınız, iş birliği teklifleriniz veya özel tasarım talepleriniz için aşağıdaki kanallardan bize ulaşabilirsiniz.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-stone-100 p-4 rounded-full text-amber-800">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Mağaza ve Ofis</h4>
                  <p className="text-stone-500">Modernist Caddesi, No: 42, Mobilya Sanayi, İstanbul</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-stone-100 p-4 rounded-full text-amber-800">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Müşteri Hattı</h4>
                  <p className="text-stone-500">+90 (212) 555 00 00</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-stone-100 p-4 rounded-full text-amber-800">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">E-Posta</h4>
                  <p className="text-stone-500">info@distriburom.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 shadow-2xl rounded-sm border border-stone-100">
            <h3 className="text-2xl font-bold text-stone-900 mb-8 uppercase tracking-widest text-sm">Bize Mesaj Gönderin</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Ad Soyad</label>
                  <input type="text" className="w-full bg-stone-50 border-b border-stone-200 py-3 px-4 focus:outline-none focus:border-amber-700" placeholder="Ahmet Yılmaz" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">E-Posta</label>
                  <input type="email" className="w-full bg-stone-50 border-b border-stone-200 py-3 px-4 focus:outline-none focus:border-amber-700" placeholder="ahmet@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Konu</label>
                <input type="text" className="w-full bg-stone-50 border-b border-stone-200 py-3 px-4 focus:outline-none focus:border-amber-700" placeholder="Tasarım Danışmanlığı" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Mesajınız</label>
                <textarea rows={5} className="w-full bg-stone-50 border-b border-stone-200 py-3 px-4 focus:outline-none focus:border-amber-700 resize-none" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
              </div>
              <button className="w-full bg-stone-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-amber-900 transition-colors flex items-center justify-center gap-3">
                Mesajı Gönder <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
