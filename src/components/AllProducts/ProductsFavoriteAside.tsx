export function ProductFavoriteAside() {
  return (
    <div className="mb-4">
      <div className="relative">
        <img
          src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-red-300x300.jpg"
          alt=""
        />
        <span className="absolute -top-2 right-1 border border-gray-500 bg-white px-1 py-2 rounded-full">
          Sale
        </span>
      </div>
      <p className="mt-4 text-blue-500">White Printed Coffee Mug</p>
      <p>
        <span className="text-gray-400 line-through">$18.000</span>{" "}
        <span>$25.000</span>
      </p>
    </div>
  );
}
