
import React from 'react';
import { Product, Language, TranslationDict } from './types';
// Ürün ve kategoriler: scripts/generate-products.cjs + PRODUCTS.xlsx + public/images/{SKU}
import productsData from './products.generated.json';

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

/** Kategori anahtarları (Excel’deki Categorie sütunundan). */
export const CATEGORIES: string[] = productsData.categories as string[];

export const CATEGORY_LABELS: Record<string, Record<Language, string>> = productsData.categoryLabels as Record<string, Record<Language, string>>;

export const PRODUCTS: Product[] = productsData.products as Product[];

export const NAV_LINKS = [
  { label: 'home', path: '/' },
  { label: 'about', path: '/about' },
  { label: 'products', path: '/products', isMega: true },
  { label: 'contact', path: '/contact' }
];
