import { create } from "zustand";
import { initialStore } from "../types";

type cuCategory = {
  categoryId: number;
  title: string;
};
const initialCuCategory: cuCategory = {
  categoryId: 0,
  title: "",
};

export const useStore = create<initialStore>((set) => ({
  cartDetails: false,
  showMenu: false,
  category: initialCuCategory,
  showDetails: () =>
    set((state) => ({ cartDetails: (state.cartDetails = !state.cartDetails) })),
  showMenuDevice: () =>
    set((state) => ({ showMenu: (state.showMenu = !state.showMenu) })),
  currentCategory: (category: cuCategory) =>
    set((state) => ({ category: (state.category = category) })),
}));
