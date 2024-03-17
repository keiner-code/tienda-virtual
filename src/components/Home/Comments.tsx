import { FaStar } from "react-icons/fa";

export function Comments() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-10">
          Our Happy Clients!
        </h1>
        <hr className="w-32 border border-b-4 border-blue-500 mb-10" />
      </div>

      <div className="md:flex gap-14 mx-10">
        <div>
          <p className="mb-7 text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium ipsam fugiat porro ut eligendi
          </p>
          <div className="flex mb-7">
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
          </div>
          <div className="flex items-center gap-1">
            <img
              className="w-14 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQT7IuhC1SLkzhUloyMLE9vOXczQpO6GPTfxNdSYNlFMlZ86VTtUgSjMyr7ASuNMYo0Pk&usqp=CAU"
              alt=""
            />
            <span className="text-lg">Diana Burnwood</span>
          </div>
        </div>
        <div>
          <p className="mb-7 text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium ipsam fugiat porro ut eligendi
          </p>
          <div className="flex mb-7">
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
          </div>
          <div className="flex items-center gap-1">
            <img
              className="w-14 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQT7IuhC1SLkzhUloyMLE9vOXczQpO6GPTfxNdSYNlFMlZ86VTtUgSjMyr7ASuNMYo0Pk&usqp=CAU"
              alt=""
            />
            <span className="text-lg">Jessica Foxx</span>
          </div>
        </div>
        <div>
          <p className="mb-7 text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium ipsam fugiat porro ut eligendi
          </p>
          <div className="flex mb-7">
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
          </div>
          <div className="flex items-center gap-1">
            <img
              className="w-14 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQT7IuhC1SLkzhUloyMLE9vOXczQpO6GPTfxNdSYNlFMlZ86VTtUgSjMyr7ASuNMYo0Pk&usqp=CAU"
              alt=""
            />
            <span className="text-lg">Lily Granger</span>
          </div>
        </div>
      </div>
    </div>
  );
}
