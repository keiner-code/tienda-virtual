import { CategoryProducts } from "../components/AllProducts/CategoryProducts";
import { FilterPrice } from "../components/AllProducts/FilterPrice";
import { ProductFavoriteAside } from "../components/AllProducts/ProductsFavoriteAside";

export function AllProductAside() {
  return (
    <div className="md:border-r-2 flex flex-col gap-4">
      <FilterPrice />
      <CategoryProducts />
      <div className="hidden md:block mt-4">
        <h1 className="text-2xl font-medium mb-4 text-gray-600">
          Hottest Deals
        </h1>
        <div className="grid grid-cols-2 gap-2 mr-8">
          <ProductFavoriteAside />
          <ProductFavoriteAside />
          <ProductFavoriteAside />
        </div>
      </div>
    </div>
  );
}
