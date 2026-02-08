
export interface Product {
  id: string;
  name: Record<Language, string>;
  category: Category;
  image: string;
  description: Record<Language, string>;
  features: Record<Language, string[]>;
}

export enum Category {
  LIVING_ROOM = 'LIVING_ROOM',
  BEDROOM = 'BEDROOM',
  DINING_ROOM = 'DINING_ROOM',
  OFFICE = 'OFFICE'
}

export type Language = 'ro' | 'en';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface TranslationDict {
  [key: string]: Record<Language, string>;
}
