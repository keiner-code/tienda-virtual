type cuCategory = {
  categoryId: number;
  title: string;
};
export interface initialStore {
  cartDetails: boolean;
  showMenu: boolean;
  category: cuCategory;
  showDetails: () => void;
  showMenuDevice: () => void;
  currentCategory: (category: cuCategory) => void;
}
export interface ProductType {
  amount: number;
  categoryId: number;
  descount: number;
  description: string;
  disLike: number;
  mostLove: number;
  idCategory: number;
  image: Image;
  like: number;
  price: number;
  productCode: string;
  productId: number;
  productName: string;
}
export interface Image {
  imageId: number;
  imageOne: string;
  imageThree: string;
  imageTwo: string;
  status: boolean;
}
export interface ProductState {
  popular: ProductType[];
  loved: ProductType[];
  products: ProductType[];
  getAllPopular: (likes: number) => void;
  getAllLoved: (loved: number) => void;
  getAll: () => void;
}
export interface CategoryState {
  category: CategoryType[];
  products: ProductType[];
  productsFilter: ProductType[];
  getAll: () => void;
  getAllProductsByCategoryId: (categoryId: number) => void;
  filterProduct: (letters: string) => void;
  getPrices: () => number[];
  filterPriceProduct: (price: number) => void;
  getAmountProductByIdCategory: (categoryId: number) => number;
}
export interface CategoryType {
  categoryId: number;
  description: string;
  name: string;
}
