import { Product } from "../shared/components/Product";

export function ProductDescription() {
  return (
    <div className="flex justify-center py-10">
      <div className="w-9/12">
        <h1 className="text-3xl font-semibold mb-4 text-gray-600">
          Related products
        </h1>
        <p className="text-gray-700 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          tempora repellendus vero nobis eaque aliquid, quibusdam voluptatum,
          excepturi nihil, quia odio!
        </p>
        <div>
          <div className="grid grid-cols-3 gap-8">
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}
