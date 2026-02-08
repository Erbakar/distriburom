
import { Category, Product } from './types';

export const PRODUCTS: Product[] = [
  // LIVING ROOM
  {
    id: '1',
    name: 'Nordic Kanepe',
    category: Category.LIVING_ROOM,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    description: 'Minimalist İskandinav tasarımı, konfor ve şıklığı bir araya getiriyor.',
    features: ['%100 Keten Kumaş', 'Kayın Ağacı Ayaklar', 'Ergonomik Tasarım']
  },
  {
    id: '5',
    name: 'Modernist Berjer',
    category: Category.LIVING_ROOM,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800',
    description: 'Kitap okuma köşelerinizin vazgeçilmezi olacak şık bir dokunuş.',
    features: ['Kadife Dokulu', 'Yüksek Dansite Sünger']
  },
  {
    id: '7',
    name: 'Luna Orta Sehpa',
    category: Category.LIVING_ROOM,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    description: 'Meşe kaplama modern orta sehpa.',
    features: ['Doğal Meşe', 'Minimalist Ayaklar']
  },
  {
    id: '8',
    name: 'Vera TV Ünitesi',
    category: Category.LIVING_ROOM,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
    description: 'Şık ve fonksiyonel depolama alanı.',
    features: ['Geniş Çekmeceler', 'Modern Kulp Detayı']
  },

  // BEDROOM
  {
    id: '2',
    name: 'Zen Yatak Takımı',
    category: Category.BEDROOM,
    image: 'https://images.unsplash.com/photo-1505693419148-ad3b47385f6c?auto=format&fit=crop&q=80&w=800',
    description: 'Huzurlu bir uyku için doğal dokular ve sakinleştirici renkler.',
    features: ['Masif Meşe', 'Geniş Depolama Alanı', 'Sessiz Ray Sistemi']
  },
  {
    id: '9',
    name: 'Cloud Komodin',
    category: Category.BEDROOM,
    image: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=80&w=800',
    description: 'Yatağınızın en şık eşlikçisi.',
    features: ['Yumuşak Kapanış', 'Minimal Tasarım']
  },
  {
    id: '10',
    name: 'Atlas Gardırop',
    category: Category.BEDROOM,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
    description: 'Geniş iç hacim ve aynalı kapaklar.',
    features: ['Sürgülü Kapak', 'LED Aydınlatma']
  },
  {
    id: '11',
    name: 'Mona Şifonyer',
    category: Category.BEDROOM,
    image: 'https://images.unsplash.com/photo-1509660150808-8952324f4b5b?auto=format&fit=crop&q=80&w=800',
    description: 'Zarif detaylar ve geniş çekmeceler.',
    features: ['Altın Rengi Kulplar', 'Leke Tutmaz Yüzey']
  },

  // DINING ROOM
  {
    id: '3',
    name: 'Marble Yemek Masası',
    category: Category.DINING_ROOM,
    image: 'https://images.unsplash.com/photo-1617806118233-f8e187f42b94?auto=format&fit=crop&q=80&w=800',
    description: 'Gerçek mermer tabla ve antrasit metal ayaklarla lüks bir akşam yemeği deneyimi.',
    features: ['İtalyan Mermeri', '6 Kişilik Kapasite', 'Çizilmez Yüzey']
  },
  {
    id: '12',
    name: 'Elegance Sandalye',
    category: Category.DINING_ROOM,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800',
    description: 'Konforlu oturum ve şık tasarım.',
    features: ['Kadife Döşeme', 'Ergonomik Sırt Desteği']
  },
  {
    id: '13',
    name: 'Royal Konsol',
    category: Category.DINING_ROOM,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&q=80&w=800',
    description: 'Yemek odanız için asil bir depolama çözümü.',
    features: ['Oymalı Detaylar', 'Temperli Cam']
  },
  {
    id: '14',
    name: 'Modernist Vitrin',
    category: Category.DINING_ROOM,
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=800',
    description: 'En sevdiğiniz objeleri sergilemek için.',
    features: ['İçten Aydınlatma', 'İnce Metal Profil']
  },

  // OFFICE
  {
    id: '4',
    name: 'Aura Çalışma Masası',
    category: Category.OFFICE,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800',
    description: 'Modern ofisler için kompakt ve fonksiyonel çalışma alanı.',
    features: ['Kablo Kanalı', 'Ayarlanabilir Yükseklik', 'Çelik Konstrüksiyon']
  },
  {
    id: '6',
    name: 'Loft Kitaplık',
    category: Category.OFFICE,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800',
    description: 'Endüstriyel tarzda açık raf sistemi.',
    features: ['Metal İskelet', 'Ceviz Raflar']
  },
  {
    id: '15',
    name: 'Prime Ofis Koltuğu',
    category: Category.OFFICE,
    image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&q=80&w=800',
    description: 'Uzun çalışma saatleri için tam destek.',
    features: ['Bel Desteği', 'Nefes Alan File']
  },
  {
    id: '16',
    name: 'Sigma Keson',
    category: Category.OFFICE,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
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
