import { IoIosClose } from "react-icons/io";
import { ProductShopping } from "../components/ProductShopping";
import { useStore } from "../hooks/useStore";

export function ShoppingCart() {
  const showDetails = useStore((state) => state.showDetails);
  return (
    <div className="flex flex-col w-1/3 bg-white h-screen">
      <div className="flex justify-between px-3 py-4">
        <h1 className="text-xl font-semibold">Shopping Cart</h1>
        <button onClick={showDetails}>
          <IoIosClose className="text-3xl" />
        </button>
      </div>

      <hr className="mx-2" />

      <div className="mb-3 p-4 flex-1">
        <ProductShopping />
        <ProductShopping />
      </div>

      <div>
        <hr />
        <div className="flex justify-between py-4 px-2 text-gray-500 font-semibold text-lg">
          <p>Subtotal:</p>
          <p>$20.000</p>
        </div>
        <hr className="mb-4" />
        <div className="flex flex-col px-2">
          <button className="bg-blue-500 rounded-lg text-white shadow-lg mb-3 h-10">
            VIEW CART
          </button>
          <button className="bg-blue-500 rounded-lg text-white shadow-lg mb-3 h-10">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
