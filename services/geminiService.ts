
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFurnitureAdvice = async (message: string, history: {role: string, content: string}[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: `
          Sen Distriburom.com'un resmi yapay zeka asistanısın. 
          Kullanıcılara modern mobilya tasarımları, dekorasyon fikirleri ve Distriburom ürünleri hakkında yardımcı oluyorsun.
          Tarzın: Profesyonel, nazik, ilham verici ve minimalist.
          Ürün kategorilerimiz: Oturma Odası, Yatak Odası, Yemek Odası ve Ofis Mobilyaları.
          Sorulara kısa, öz ve ikna edici cevaplar ver. 
          Müşteriyi ürünlerimizi incelemeye teşvik et.
        `,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Şu anda size yardımcı olamıyorum, lütfen daha sonra tekrar deneyiniz.";
  }
};
