import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],

  addItem: (product) => {
    const { items } = get();
    const exists = items.find((i) => i.id === product.id);

    if (exists) return; 

    set({ items: [...items, product] });
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  clearCart: () => set({ items: [] }),

  total: () =>
    get().items.reduce((sum, item) => sum + item.price, 0),
}));
