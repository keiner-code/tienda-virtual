import { useEffect } from "react";
import { useProduct } from "../hooks/useProducts";
import { Product } from "../shared/components/Product";
type TitleType = {
  title: string;
  seed: string;
};
export function Products({ title, seed }: TitleType) {
  const { getAllPopular, getAllLoved, popular, loved } = useProduct(
    (state) => state
  );

  useEffect(() => {
    if (seed == "populate") getAllPopular(10);
    if (seed == "loved") getAllLoved(10);
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-700 mb-10">{title}</h1>
      <hr className="w-16 border border-b-4 border-blue-500 mb-10" />
      <div
        className={`${
          seed == "populate"
            ? popular.length <= 3
              ? "md:flex"
              : "md:grid grid-cols-4"
            : loved.length <= 3
            ? "md:flex"
            : "md:grid grid-cols-4"
        } gap-8`}
      >
        {seed == "populate" &&
          popular.map((value) => (
            <Product product={value} key={value.productId} />
          ))}

        {seed == "loved" &&
          loved.map((value) => (
            <Product product={value} key={value.productId} />
          ))}
      </div>
    </>
  );
}
