const API = "http://localhost:8080/api";
export const endPoint = {
  auth: {},
  product: {
    getPopulation: (like: number) => `${API}/products/popular/${like}`,
    getLoved: (loved: number) => `${API}/products/loved/${loved}`,
    getAll: () => `${API}/products`,
  },
  category: {
    getAll: () => `${API}/category`,
    getAllProductCategory: (idCategory: number) =>
      `${API}/products/category/${idCategory}`,
  },
};
