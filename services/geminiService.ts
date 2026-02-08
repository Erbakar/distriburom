import { Language } from "../types";

/**
 * Yerel asistan yanıtı — harici API yok, sadece frontend.
 */
export const getFurnitureAdvice = async (
  _message: string,
  _history: { role: string; content: string }[],
  lang: Language
): Promise<string> => {
  if (lang === "ro") {
    return "Mulțumim pentru mesaj! Pentru întrebări despre produse, livrări sau comenzi, vă invităm să vizitați secțiunile Produse, Livrare sau să ne contactați direct prin pagina Contact.";
  }
  return "Thank you for your message! For questions about products, delivery or orders, please visit our Products or Delivery sections, or contact us directly via the Contact page.";
};
