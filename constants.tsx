
import React from 'react';
import { Category, Product, Language, TranslationDict } from './types';

export const Logo = ({ className = "h-12" }: { className?: string }) => (
  <svg 
    viewBox="0 0 540 120" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMid meet"
    style={{ minWidth: '180px' }}
  >
    <g fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 40 V105 H75" />
      <path d="M30 75 H75 V105" />
      <path d="M30 105 L25 112" strokeWidth="4" />
      <path d="M75 105 L80 112" strokeWidth="4" />
      <path d="M105 110 H135" strokeWidth="4" />
      <path d="M120 110 V45" />
      <path d="M100 45 H140 L132 20 H108 L100 45 Z" fill="currentColor" fillOpacity="0.1" />
    </g>
    <text x="165" y="82" fontFamily="'Playfair Display', serif" fontSize="52" fontWeight="700" letterSpacing="1.5" fill="currentColor">
      DISTRIBUROM
    </text>
    <text x="167" y="105" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="600" letterSpacing="6" fill="currentColor" opacity="0.6">
      MODERN FURNITURE
    </text>
  </svg>
);

export const UI_STRINGS: TranslationDict = {
  home: { ro: 'Acasă', en: 'Home' },
  about: { ro: 'Despre noi', en: 'About' },
  products: { ro: 'Produse', en: 'Products' },
  contact: { ro: 'Contact', en: 'Contact' },
  new_collection: { ro: 'Colecția Nouă 2026', en: 'New Collection 2026' },
  hero_title: { ro: 'Dă suflet spațiilor tale de locuit', en: 'Give Soul to Your Living Spaces' },
  hero_desc: { ro: 'Descoperă simplitatea designului modern și eleganța măiestriei. Transformă-ți casa într-o operă de artă cu Distriburom.', en: 'Discover the simplicity of modern design and the elegance of craftsmanship. Turn your home into a work of art with Distriburom.' },
  explore: { ro: 'Explorează acum', en: 'Explore Now' },
  our_story: { ro: 'Povestea noastră', en: 'Our Story' },
  categories: { ro: 'Categoriile Noastre', en: 'Our Categories' },
  all_collections: { ro: 'Toate Colecțiile', en: 'All Collections' },
  examine: { ro: 'Examinează', en: 'Examine' },
  quality: { ro: 'Calitate Premium', en: 'Premium Quality' },
  delivery: { ro: 'Livrare Rapidă', en: 'Fast Delivery' },
  satisfaction: { ro: 'Satisfacția Clientului', en: 'Customer Satisfaction' },
  sustainability: { ro: 'Sustenabilitate', en: 'Sustainability' },
  see_all: { ro: 'Vezi tot', en: 'See All' },
  cta_title: { ro: 'Hai să proiectăm împreună casa visurilor tale', en: "Let's Design Your Dream Home Together" },
  cta_desc: { ro: 'Rezervă o consultație gratuită cu arhitecții noștri de interior și redescoperă-ți spațiile de locuit.', en: 'Book a free consultation with our interior designers and rediscover your living spaces.' },
  appointment: { ro: 'Fă o programare', en: 'Make an Appointment' },
  search_placeholder: { ro: 'Caută produse...', en: 'Search products...' },
  no_results: { ro: 'Nu am găsit produse care să corespundă criteriilor tale.', en: 'No products found matching your criteria.' },
  info_request: { ro: 'Cere informații', en: 'Get Information' },
  features: { ro: 'Caracteristici produs', en: 'Product Features' },
  back_to_coll: { ro: 'Înapoi la colecție', en: 'Back to Collection' },
  prod_not_found: { ro: 'Produsul nu a fost găsit.', en: 'Product not found.' }
};

export const CATEGORY_LABELS: Record<Category, Record<Language, string>> = {
  [Category.LIVING_ROOM]: { ro: 'Camera de zi', en: 'Living Room' },
  [Category.BEDROOM]: { ro: 'Dormitor', en: 'Bedroom' },
  [Category.DINING_ROOM]: { ro: 'Sufragerie', en: 'Dining Room' },
  [Category.OFFICE]: { ro: 'Mobilier Birou', en: 'Office Furniture' }
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: { ro: 'Canapea Nordic', en: 'Nordic Sofa' },
    category: Category.LIVING_ROOM,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    description: { ro: 'Design scandinav minimalist, combinând confortul cu stilul rafinat.', en: 'Minimalist Scandinavian design, combining comfort and style.' },
    features: { ro: ['100% In', 'Picioare din lemn de fag', 'Design ergonomic'], en: ['100% Linen', 'Beech wood legs', 'Ergonomic design'] }
  },
  {
    id: '2',
    name: { ro: 'Set de pat Zen', en: 'Zen Bed Set' },
    category: Category.BEDROOM,
    image: 'https://images.unsplash.com/photo-1505693419148-ad3b47385f6c?q=80&w=800&auto=format&fit=crop',
    description: { ro: 'Texturi naturale și culori liniștitoare pentru un somn odihnitor.', en: 'Natural textures and soothing colors for a peaceful sleep.' },
    features: { ro: ['Stejar masiv', 'Spațiu generos de depozitare', 'Sistem silențios'], en: ['Solid Oak', 'Large storage space', 'Silent rail system'] }
  },
  {
    id: '3',
    name: { ro: 'Masă Dining Marble', en: 'Marble Dining Table' },
    category: Category.DINING_ROOM,
    image: 'https://images.unsplash.com/photo-1617806118233-f8e187f42b94?q=80&w=800&auto=format&fit=crop',
    description: { ro: 'Blat din marmură veritabilă și picioare metalice pentru o experiență de lux.', en: 'Genuine marble top and metal legs for a luxury dining experience.' },
    features: { ro: ['Marmură italiană', 'Capacitate 6 persoane', 'Suprafață anti-zgârieturi'], en: ['Italian Marble', '6 Person capacity', 'Scratch resistant'] }
  },
  {
    id: '4',
    name: { ro: 'Birou Aura', en: 'Aura Desk' },
    category: Category.OFFICE,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop',
    description: { ro: 'Spațiu de lucru compact și funcțional pentru birouri moderne.', en: 'Compact and functional workspace for modern offices.' },
    features: { ro: ['Canal cabluri', 'Înălțime reglabilă', 'Construcție din oțel'], en: ['Cable management', 'Adjustable height', 'Steel construction'] }
  }
];

export const NAV_LINKS = [
  { label: 'home', path: '/' },
  { label: 'about', path: '/about' },
  { label: 'products', path: '/products', isMega: true },
  { label: 'contact', path: '/contact' }
];
