import { useLangStore } from "../store/useLangStore";
import { translations } from "./translations";

export function useT() {
  const lang = useLangStore((s) => s.lang);

  const t = (key) => {
    const table = translations[lang] || translations.es;
    return table[key] ?? translations.es[key] ?? key;
  };

  return { t, lang };
}
