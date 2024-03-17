import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export function FilterPrice() {
  const [progress, setProgress] = useState<number>(50);

  const handlerProgress = (value: string) => {
    if (value == "negativo" && progress > 10) setProgress(progress - 10);
    if (value == "positivo" && progress < 100) setProgress(progress + 10);
  };
  return (
    <div>
      <h1 className="text-4xl font-bold pb-4 text-gray-600 md:text-start text-center">
        Filter by price
      </h1>
      <div className="flex items-center">
        <button
          onClick={() => handlerProgress("negativo")}
          className="text-lg px-0.5 rounded-full"
        >
          <FaMinus className="border rounded-full border-teal-600 text-teal-600" />
        </button>
        <progress className="w-full md:w-9/12 h-2" value={progress} max={100}>
          70%
        </progress>
        <button
          onClick={() => handlerProgress("positivo")}
          className="text-lg px-0.5 rounded-full"
        >
          <FaPlus className="border rounded-full border-orange-500 text-orange-500" />
        </button>
      </div>
      <div className="flex justify-between w-full md:w-11/12">
        <p>$10</p>
        <p>${progress}</p>
      </div>
      <div className="my-4 flex justify-end md:mr-5">
        <button className="bg-blue-500 px-2 py-1 rounded-lg shadow-lg text-white">
          APPLY
        </button>
      </div>
    </div>
  );
}
