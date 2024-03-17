import { FaStar } from "react-icons/fa";
import { ProductType } from "../../types";
import { ReactNode } from "react";
import { PiStarThin } from "react-icons/pi";
import { SlLike, SlDislike } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
type Product = {
  product: ProductType;
};

export function Product({ product }: Product) {
  const url: string =
    "https://img.freepik.com/vector-gratis/ilustracion-concepto-error-400-solicitud-incorrecta_114360-1933.jpg?t=st=1710622330~exp=1710625930~hmac=0d45f32a059ad2fbf58db8576ce9af2d3245989335710364d8d479d23e19c433&w=360";
  const currentLike = (value: number) => {
    const response: ReactNode[] = [];
    for (let i = 1; i <= value; i++) {
      response.push(
        <div key={i}>
          <FaStar className="text-yellow-500" />
        </div>
      );
    }
    for (let j = response.length; j < 5; j++) {
      response.push(
        <div key={j + 1}>
          <PiStarThin className="text-yellow-600" />
        </div>
      );
    }
    return response;
  };
  const currentDiscount = (price: number, descount: number) => {
    const valueDescount = (price * descount) / 100;
    return (price - valueDescount).toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });
  };
  return (
    <div className="text-center">
      <div className="relative">
        <span className="absolute mr-1 mt-1 right-0 px-1 py-2 rounded-full bg-blue-500 text-white">
          {product != null
            ? product.descount < 10
              ? "0." + product.descount
              : product.descount
            : 0}
          %
        </span>
        <img
          src={product != null ? product.image.imageOne : url}
          alt={product != null ? product.productName : "undefined"}
        />
      </div>
      <p className="text-gray-400 my-1">
        {product != null ? product.productName : "nombre del producto"}
      </p>
      <p className="text-gray-600 font-bold">
        {product != null ? product.description : "descripcion del producto"}
      </p>
      <div className="flex justify-between gap-1 mx-2 mt-2">
        <div className="flex">
          {product != null ? currentLike(product.like / 10) : 0}
        </div>
        <div className="flex items-center gap-4">
          <div>
            <SlLike className="text-blue-500" />
            <span className="text-gray-500">
              {product != null ? product.like : 0}
            </span>
          </div>

          <div>
            <CiHeart className="text-red-500 text-xl" />
            <p className="text-red-500">
              {product != null ? product.mostLove : 0}
            </p>
          </div>
          <div>
            <SlDislike className="text-blue-400" />
            <p className="text-blue-400">
              {product != null ? product.disLike : 0}
            </p>
          </div>
        </div>
      </div>
      <div>
        <span className="line-through text-gray-500">
          {product != null
            ? product.price.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })
            : 0}
        </span>
        <span className="line-through mx-2"> </span>
        <span>
          {currentDiscount(
            product != null ? product.price : 0,
            product != null ? product.descount : 0
          )}
        </span>
      </div>
    </div>
  );
}
