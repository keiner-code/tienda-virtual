import { create } from "zustand";
import getAll, { getAllLoved, getAllPopulation } from "../services/Product";
import { ProductType } from "../types";
import { ProductState } from "../types";

export const useProduct = create<ProductState>()((set) => ({
  popular: [],
  loved: [],
  products: [],
  getAllPopular: async (likes: number) => {
    const result: ProductType[] = await getAllPopulation(likes)
      .then((res) => {
        return res;
      })
      .catch((error) => console.error(error));
    set((state) => ({ popular: (state.popular = result) }));
  },
  getAllLoved: async (loved: number) => {
    const response: ProductType[] = await getAllLoved(loved)
      .then((res) => {
        return res;
      })
      .catch((error) => console.error(error));
    set((state) => ({ loved: (state.loved = response) }));
  },
  getAll: async () => {
    const response: ProductType[] = await getAll()
      .then((res) => {
        return res;
      })
      .catch((error) => console.error(error));
    set((state) => ({ products: (state.products = response) }));
  }
}));
