import { IoCloseCircleOutline } from "react-icons/io5";

export function ProductShopping() {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex">
        <img
          className="w-12"
          src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg"
          alt=""
        />
        <div className="ml-3">
          <p className="text-gray-500 font-semibold">Father's Day Coffee Mug</p>
          <p className="text-gray-500 font-semibold">1 x $20.000</p>
        </div>
      </div>
      <IoCloseCircleOutline className="text-2xl" />
    </div>
  );
}
