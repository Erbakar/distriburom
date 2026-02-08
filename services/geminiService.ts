
import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFurnitureAdvice = async (message: string, history: {role: string, content: string}[], lang: Language) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: `
          Ești asistentul oficial AI al Distriburom.com. 
          Ajută utilizatorii cu design de mobilier modern, idei de decorare și produse Distriburom.
          Stilul tău: Profesional, politicos, inspirațional și minimalist.
          Categorii: Camera de zi, Dormitor, Sufragerie și Mobilier Birou.
          Răspunde SCURT, la obiect și convingător.
          Încurajează clienții să exploreze colecțiile noastre.
          LIMBA DE RĂSPUNS: Răspunde exclusiv în limba ${lang === 'ro' ? 'Română' : 'Engleză'}.
        `,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'ro' 
      ? "Momentan nu vă pot ajuta, vă rugăm să încercați mai târziu." 
      : "I cannot help you at the moment, please try again later.";
  }
};
