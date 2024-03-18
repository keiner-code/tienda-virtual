import { create } from "zustand";
import { getAll, getAllProductByCategory } from "../services/Category";
import { CategoryState, CategoryType, ProductType } from "../types";
import getAllProduct from "../services/Product";

export const useCategory = create<CategoryState>()((set, get) => ({
  category: [],
  products: [],
  productsFilter: [],
  getAll: async () => {
    const response: CategoryType[] = await getAll()
      .then((res) => {
        return res;
      })
      .catch((error) => console.log(error));
    set((state) => ({ category: (state.category = response) }));
  },
  getAllProductsByCategoryId: async (categoryId: number) => {
    let response: ProductType[] = [];
    if (categoryId) {
      response = await getAllProductByCategory(categoryId)
        .then((res) => {
          return res;
        })
        .catch((error) => console.log(error));
    } else {
      response = await getAllProduct()
        .then((res) => {
          return res.content;
        })
        .catch((error) => console.log(error));
    }
    set((state) => ({ products: (state.products = response) }));
    set((state) => ({ productsFilter: (state.productsFilter = response) }));
  },
  filterProduct: (letters: string) => {
    const response = get().productsFilter.filter((product) =>
      product.productName.toLowerCase().includes(letters.toLowerCase())
    );
    set((state) => ({ products: (state.products = response) }));
  },
  getPrices: () => {
    const prices: number[] = [];
    get().products.map((product) => {
      prices.push(product.price);
    });
    return prices.sort();
  },
  filterPriceProduct: (price: number) => {
    const response = get().productsFilter.filter(
      (product) => product.price < price
    );
    set((state) => ({ products: (state.products = response) }));
  },
  getAmountProductByIdCategory: (categoryId: number) => {
    const response = get().products.filter((product) => product.idCategory === categoryId);
    return response.length;
  }
}));
