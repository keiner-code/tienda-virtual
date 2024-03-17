import { CartTotal } from "../components/CartTotal";
import { ProductCart } from "../container/ProductCart";

export function Cart() {
  return (
    <div className="mx-6 md:mx-10 py-10">
      <table className="table-auto w-full text-center text-gray-700">
        <thead>
          <tr className="border border-b border-gray-300">
            <th></th>
            <th className="py-4">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th className="w-1/5 md:w-0">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </tbody>
      </table>

      <div className="border border-gray-300 border-t-0 w-full md:flex md:justify-between px-4 py-4">
        <div>
          <input
            className="border rounded-lg h-8 border-gray-300 shadow-lg outline-none"
            type="text"
          />
          <button className="ml-1 bg-blue-500 px-4 py-1.5 rounded-lg text-white shadow-xl">
            APPLY COUPON
          </button>
        </div>
        <button className="md:ml-1 ml-[13.5rem] bg-blue-500 px-4 py-1.5 rounded-lg text-white shadow-xl mt-4">
          UPDATE CART
        </button>
      </div>

      <div className="flex justify-end mt-5">
        <CartTotal />
      </div>
    </div>
  );
}
