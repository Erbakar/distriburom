
import React from 'react';
import { Category, Product } from './types';

// Refined Professional Logo SVG with Chair and Lamp icon
export const Logo = ({ className = "h-12" }: { className?: string }) => (
  <svg 
    viewBox="0 0 540 120" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMid meet"
    style={{ minWidth: '180px' }}
  >
    {/* Icon Group: Chair and Lamp */}
    <g fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Minimalist Chair */}
      <path d="M30 40 V105 H75" /> {/* Back and Seat Base */}
      <path d="M30 75 H75 V105" /> {/* Seat and Front Leg */}
      <path d="M30 105 L25 112" strokeWidth="4" /> {/* Back Leg Detail */}
      <path d="M75 105 L80 112" strokeWidth="4" /> {/* Front Leg Detail */}
      
      {/* Modern Floor Lamp */}
      <path d="M105 110 H135" strokeWidth="4" /> {/* Base */}
      <path d="M120 110 V45" /> {/* Stem */}
      <path d="M100 45 H140 L132 20 H108 L100 45 Z" fill="currentColor" fillOpacity="0.1" /> {/* Lampshade */}
    </g>
    
    {/* Brand Text */}
    <text 
      x="165" 
      y="82" 
      fontFamily="'Playfair Display', serif" 
      fontSize="52" 
      fontWeight="700" 
      letterSpacing="1.5" 
      fill="currentColor"
    >
      DISTRIBUROM
    </text>
    <text 
      x="167" 
      y="105" 
      fontFamily="'Inter', sans-serif" 
      fontSize="12" 
      fontWeight="600" 
      letterSpacing="6" 
      fill="currentColor" 
      opacity="0.6"
    >
      MODERN FURNITURE
    </text>
  </svg>
);

export const PRODUCTS: Product[] = [
  // LIVING ROOM
  {
    id: '1',
    name: 'Nordic Kanepe',
    category: Category.LIVING_ROOM,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    description: 'Minimalist İskandinav tasarımı, konfor ve şıklığı bir araya getiriyor.',
    features: ['%100 Keten Kumaş', 'Kayın Ağacı Ayaklar', 'Ergonomik Tasarım']
  },
  {
    id: '5',
    name: 'Modernist Berjer',
    category: Category.LIVING_ROOM,
    image: 'https://images.unsplash.com/photo-1598191330641-ca44120ec29a?q=80&w=800&auto=format&fit=crop',
    description: 'Kitap okuma köşelerinizin vazgeçilmezi olacak şık bir dokunuş.',
    features: ['Kadife Dokulu', 'Yüksek Dansite Sünger']
  },
  {
    id: '7',
    name: 'Luna Orta Sehpa',
    category: Category.LIVING_ROOM,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop',
    description: 'Meşe kaplama modern orta sehpa.',
    features: ['Doğal Meşe', 'Minimalist Ayaklar']
  },
  {
    id: '8',
    name: 'Vera TV Ünitesi',
    category: Category.LIVING_ROOM,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800&auto=format&fit=crop',
    description: 'Şık ve fonksiyonel depolama alanı.',
    features: ['Geniş Çekmeceler', 'Modern Kulp Detayı']
  },

  // BEDROOM
  {
    id: '2',
    name: 'Zen Yatak Takımı',
    category: Category.BEDROOM,
    image: 'https://images.unsplash.com/photo-1505693419148-ad3b47385f6c?q=80&w=800&auto=format&fit=crop',
    description: 'Huzurlu bir uyku için doğal dokular ve sakinleştirici renkler.',
    features: ['Masif Meşe', 'Geniş Depolama Alanı', 'Sessiz Ray Sistemi']
  },
  {
    id: '9',
    name: 'Cloud Komodin',
    category: Category.BEDROOM,
    image: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=800&auto=format&fit=crop',
    description: 'Yatağınızın en şık eşlikçisi.',
    features: ['Yumuşak Kapanış', 'Minimal Tasarım']
  },
  {
    id: '10',
    name: 'Atlas Gardırop',
    category: Category.BEDROOM,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop',
    description: 'Geniş iç hacim ve aynalı kapaklar.',
    features: ['Sürgülü Kapak', 'LED Aydınlatma']
  },
  {
    id: '11',
    name: 'Mona Şifonyer',
    category: Category.BEDROOM,
    image: 'https://images.unsplash.com/photo-1509660150808-8952324f4b5b?q=80&w=800&auto=format&fit=crop',
    description: 'Zarif detaylar ve geniş çekmeceler.',
    features: ['Altın Rengi Kulplar', 'Leke Tutmaz Yüzey']
  },

  // DINING ROOM
  {
    id: '3',
    name: 'Marble Yemek Masası',
    category: Category.DINING_ROOM,
    image: 'https://images.unsplash.com/photo-1617806118233-f8e187f42b94?q=80&w=800&auto=format&fit=crop',
    description: 'Gerçek mermer tabla ve antrasit metal ayaklarla lüks bir akşam yemeği deneyimi.',
    features: ['İtalyan Mermeri', '6 Kişilik Kapasite', 'Çizilmez Yüzey']
  },
  {
    id: '12',
    name: 'Elegance Sandalye',
    category: Category.DINING_ROOM,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop',
    description: 'Konforlu oturum ve şık tasarım.',
    features: ['Kadife Döşeme', 'Ergonomik Sırt Desteği']
  },
  {
    id: '13',
    name: 'Royal Konsol',
    category: Category.DINING_ROOM,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=800&auto=format&fit=crop',
    description: 'Yemek odanız için asil bir depolama çözümü.',
    features: ['Oymalı Detaylar', 'Temperli Cam']
  },
  {
    id: '14',
    name: 'Modernist Vitrin',
    category: Category.DINING_ROOM,
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop',
    description: 'En sevdiğiniz objeleri sergilemek için.',
    features: ['İçten Aydınlatma', 'İnce Metal Profil']
  },

  // OFFICE
  {
    id: '4',
    name: 'Aura Çalışma Masası',
    category: Category.OFFICE,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop',
    description: 'Modern ofisler için kompakt ve fonksiyonel çalışma alanı.',
    features: ['Kablo Kanalı', 'Ayarlanabilir Yükseklik', 'Çelik Konstrüksiyon']
  },
  {
    id: '6',
    name: 'Loft Kitaplık',
    category: Category.OFFICE,
    image: 'https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=800&auto=format&fit=crop',
    description: 'Endüstriyel tarzda açık raf sistemi.',
    features: ['Metal İskelet', 'Ceviz Raflar']
  },
  {
    id: '15',
    name: 'Prime Ofis Koltuğu',
    category: Category.OFFICE,
    image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=800&auto=format&fit=crop',
    description: 'Uzun çalışma saatleri için tam destek.',
    features: ['Bel Desteği', 'Nefes Alan File']
  },
  {
    id: '16',
    name: 'Sigma Keson',
    category: Category.OFFICE,
    image: 'https://images.unsplash.com/photo-1594732832278-abd644401426?q=80&w=800&auto=format&fit=crop',
    description: 'Tekerlekli ve kilitli saklama alanı.',
    features: ['3 Çekmece', 'Kilit Mekanizması']
  }
];

export const NAV_LINKS = [
  { label: 'Anasayfa', path: '/' },
  { label: 'Hakkımızda', path: '/about' },
  { label: 'Ürünler', path: '/products', isMega: true },
  { label: 'İletişim', path: '/contact' }
];
