
export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export enum Category {
  LIVING_ROOM = 'Oturma Odası',
  BEDROOM = 'Yatak Odası',
  DINING_ROOM = 'Yemek Odası',
  OFFICE = 'Ofis Mobilyaları'
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
