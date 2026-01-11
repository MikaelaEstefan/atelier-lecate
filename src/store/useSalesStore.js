import { create } from "zustand";

const SOLD_KEY = "sold_products";

const getInitialSold = () => {
  const stored = localStorage.getItem(SOLD_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const useSalesStore = create((set, get) => ({
  soldIds: getInitialSold(),

  markAsSold: (ids) => {
    const updated = [...new Set([...get().soldIds, ...ids])];
    localStorage.setItem(SOLD_KEY, JSON.stringify(updated));
    set({ soldIds: updated });
  },

  isSold: (id) => get().soldIds.includes(id),
}));
