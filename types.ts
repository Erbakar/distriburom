
export interface Product {
  id: string;
  sku?: string;
  name: Record<Language, string>;
  category: string;
  image: string;
  images?: string[];
  description: Record<Language, string>;
  features: Record<Language, string[]>;
}

/** Kategoriler products.generated.json içinden gelir (Excel + image klasörlerine göre). */
export type Category = string;

export type Language = 'ro' | 'en';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface TranslationDict {
  [key: string]: Record<Language, string>;
}
