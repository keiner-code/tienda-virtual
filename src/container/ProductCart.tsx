import { IoCloseCircleSharp } from "react-icons/io5";
export function ProductCart() {
  return (
    <tr className="border border-b border-gray-300">
      <td className="flex justify-around items-center py-1">
        <IoCloseCircleSharp className="text-3xl text-gray-400" />
        <img
          className="w-20"
          src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee-300x300.jpg"
          alt=""
        />
      </td>
      <td className="text-blue-500">Father's Day Coffee Mug</td>
      <td>$19.000</td>
      <td>
        <input className="border w-10 h-8" type="number" value={1} />
      </td>
      <td>$19.000</td>
    </tr>
  );
}
