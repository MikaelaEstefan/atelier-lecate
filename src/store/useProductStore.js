import { create } from "zustand";
import { products as initialProducts } from "../data/products";

export const useProductStore = create(() => ({
  products: initialProducts,
}));
