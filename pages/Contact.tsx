
import React, { useContext } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { LanguageContext } from '../App';
import { UI_STRINGS } from '../constants';

const Contact: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    title: { ro: 'Contactați-ne', en: 'Contact Us' },
    subtitle: { ro: 'Intrați în', en: 'Get in' },
    italic: { ro: 'Legătură', en: 'Touch' },
    desc: { 
      ro: 'Pentru întrebări, propuneri de colaborare sau solicitări de design personalizat, ne puteți contacta prin canalele de mai jos.', 
      en: 'For questions, collaboration proposals or custom design requests, you can contact us through the channels below.' 
    },
    office: { ro: 'Magazin și Birou', en: 'Store and Office' },
    office_val: { ro: 'Bulevardul Modernist, Nr. 42, București, România', en: 'Modernist Boulevard, No. 42, Bucharest, Romania' },
    customer_line: { ro: 'Linia Clienți', en: 'Customer Line' },
    email: { ro: 'E-mail', en: 'E-mail' },
    form_title: { ro: 'Trimiteți-ne un mesaj', en: 'Send us a message' },
    name_label: { ro: 'Nume Complet', en: 'Full Name' },
    subject_label: { ro: 'Subiect', en: 'Subject' },
    message_label: { ro: 'Mesajul Dumneavoastră', en: 'Your Message' },
    send_btn: { ro: 'Trimite Mesajul', en: 'Send Message' },
    placeholders: {
      name: { ro: 'Ion Popescu', en: 'John Doe' },
      subject: { ro: 'Consultanță Design', en: 'Design Consultancy' },
      message: { ro: 'Cum vă putem ajuta?', en: 'How can we help you?' }
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
              {t.subtitle[lang]} <br /> <span className="text-amber-700 italic">{t.italic[lang]}</span>
            </h1>
            <p className="text-stone-500 text-lg mb-12 leading-relaxed">
              {t.desc[lang]}
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-stone-100 p-4 rounded-full text-amber-800">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">{t.office[lang]}</h4>
                  <p className="text-stone-500">{t.office_val[lang]}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-stone-100 p-4 rounded-full text-amber-800">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">{t.customer_line[lang]}</h4>
                  <p className="text-stone-500">+40 21 000 0000</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-stone-100 p-4 rounded-full text-amber-800">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">{t.email[lang]}</h4>
                  <p className="text-stone-500">info@distriburom.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 shadow-2xl rounded-sm border border-stone-100">
            <h3 className="text-2xl font-bold text-stone-900 mb-8 uppercase tracking-widest text-sm">{t.form_title[lang]}</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">{t.name_label[lang]}</label>
                  <input type="text" className="w-full bg-stone-50 border-b border-stone-200 py-3 px-4 focus:outline-none focus:border-amber-700" placeholder={t.placeholders.name[lang]} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">{t.email[lang]}</label>
                  <input type="email" className="w-full bg-stone-50 border-b border-stone-200 py-3 px-4 focus:outline-none focus:border-amber-700" placeholder="email@domain.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">{t.subject_label[lang]}</label>
                <input type="text" className="w-full bg-stone-50 border-b border-stone-200 py-3 px-4 focus:outline-none focus:border-amber-700" placeholder={t.placeholders.subject[lang]} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">{t.message_label[lang]}</label>
                <textarea rows={5} className="w-full bg-stone-50 border-b border-stone-200 py-3 px-4 focus:outline-none focus:border-amber-700 resize-none" placeholder={t.placeholders.message[lang]}></textarea>
              </div>
              <button className="w-full bg-stone-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-amber-900 transition-colors flex items-center justify-center gap-3">
                {t.send_btn[lang]} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
