export function CartTotal() {
  return (
    <div className="my-4 border w-full md:w-1/2 border-gray-300">
      <h1 className="text-2xl font-bold border-b border-gray-300 py-4 ml-2 text-gray-600">
        Cart Totals
      </h1>
      <tr className="flex pl-2 border-gray-300 border-b mx-2 py-4 text-lg">
        <p>Subtotal</p>
        <p className="ml-40">$53.000</p>
      </tr>
      <tr className="flex pl-2 border-b border-gray-300 mx-2 py-4 text-lg">
        <p>Total</p>
        <p className="ml-[11.8rem]">$53.000</p>
      </tr>
      <tr className="flex justify-center py-2">
        <button className="bg-blue-500 px-10 py-3 rounded-lg text-white">
          PROCEED TO CHECKOUT
        </button>
      </tr>
    </div>
  );
}
