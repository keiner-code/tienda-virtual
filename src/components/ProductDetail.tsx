export function ProductDetail() {
  return (
    <div className="flex justify-center py-10">
      <div className="flex w-9/12 gap-6">
        <img
          className="w-2/5"
          src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-white.jpg"
          alt=""
        />
        <div className="">
          <h1 className="text-3xl font-semibold text-gray-600 mb-4">
            Black Printed Coffee Mug
          </h1>
          <p className="mb-4">
            <strong className="text-xl font-bold">£15.00 </strong>
            <span className="text-gray-600">+ Free Shipping</span>
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            doloribus voluptatibus quo non obcaecati distinctio culpa veritatis
            iusto! Repudiandae doloremque dolore, voluptatum quae expedita dicta
            dolores facere ratione quos consectetur!
          </p>

          <div className="mt-4">
            <input
              className="border w-14 h-8 mr-2 outline-none"
              type="number"
              name=""
              id=""
            />
            <button className="bg-blue-500 hover:bg-blue-600 px-10 py-2 rounded-lg text-white mb-4">
              ADD TO CART
            </button>
            <hr />
            <p>
              <span className="text-gray-700">Category:</span>{" "}
              <span className="text-blue-500">Mugs</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
