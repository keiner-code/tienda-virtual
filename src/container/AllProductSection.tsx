import { Product } from "../shared/components/Product";
import { ChangeEvent, useEffect } from "react";
import { useCategory } from "../hooks/useCategory";
import { IoSearchOutline } from "react-icons/io5";

type Props = {
  category: {
    categoryId: number;
    title: string;
  };
};
export function AllProductSection({ category }: Props) {
  const { getAllProductsByCategoryId, products, filterProduct } = useCategory(
    (state) => state
  );

  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    filterProduct(event.target.value);
  };

  useEffect(() => {
    getAllProductsByCategoryId(category.categoryId);
  }, [category]);

  return (
    <div className="md:ml-4 mb-10">
      <p className="text-gray-400 text-sm hidden md:block">
        {category.categoryId != 0 ? `products/${category.title}` : "Products"}
      </p>
      <h1 className="text-5xl text-blue-500 font-semibold my-3 md:text-start text-center">
        {category.categoryId != 0 ? category.title : "Products"}
      </h1>
      <div className="flex justify-between mt-6 md:mt-8 mb-4">
        <p>Showing all {products.length} results</p>
        <div className="flex items-center gap-1">
          <div className="flex border items-center border-gray-300 rounded-md shadow-md">
            <input
              className="ml-2 outline-none"
              type="text"
              placeholder="Search"
              onChange={(e) => handlerChange(e)}
            />
            <IoSearchOutline className="mr-1 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {products?.map((product) => (
          <Product product={product} key={product.productId} />
        ))}
      </div>
    </div>
  );
}
