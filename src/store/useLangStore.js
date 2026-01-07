import { create } from "zustand";

const defaultLang = localStorage.getItem("lang") || "es";

export const useLangStore = create((set) => ({
  lang: defaultLang,

  setLang: (lang) => {
    localStorage.setItem("lang", lang);
    set({ lang });
  },

  toggleLang: () =>
    set((state) => {
      const next = state.lang === "es" ? "en" : "es";
      localStorage.setItem("lang", next);
      return { lang: next };
    }),
}));
