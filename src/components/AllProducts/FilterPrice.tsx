import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCategory } from "../../hooks/useCategory";

export function FilterPrice() {
  const { getPrices, filterPriceProduct,category} = useCategory((state) => state);

  const [progress, setProgress] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  useEffect(() => {
    setProgress(getPrices()[getPrices().length - 1]);
    setMaxPrice(getPrices()[getPrices().length - 1])
  }, [category]);

  const handlerProgress = (value: string) => {
    if (value == "negativo" && progress > 10000) setProgress(progress - 10000);
    if (value == "positivo" && progress < maxPrice)
      setProgress(progress + 10000);
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
        <progress
          className="w-full md:w-9/12 h-2"
          value={progress}
          max={maxPrice}
        ></progress>
        <button
          onClick={() => handlerProgress("positivo")}
          className="text-lg px-0.5 rounded-full"
        >
          <FaPlus className="border rounded-full border-orange-500 text-orange-500" />
        </button>
      </div>
      <div className="flex justify-between w-full md:w-11/12">
        <p>
          {getPrices()[0]
            ? getPrices()[0].toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })
            : 0}
        </p>
        <p>
          {progress
            ? progress.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })
            : 0}
        </p>
      </div>
      <div className="my-4 flex justify-end md:mr-5">
        <button 
          className="bg-blue-500 px-2 py-1 rounded-lg shadow-lg text-white"
          onClick={()=>filterPriceProduct(progress)}
        >
          APPLY
        </button>
      </div>
    </div>
  );
}
