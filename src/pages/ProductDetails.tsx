import { ProductDescription } from "../container/ProductDescription";
import { ProductDetail } from "../components/ProductDetail";

export function ProductDetails() {
  return (
    <div className="mx-10">
      <ProductDetail />
      <hr />
      <ProductDescription />
    </div>
  );
}
