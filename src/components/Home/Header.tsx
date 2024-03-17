export function Header() {
  return (
    <div className="flex md:flex-row gap-2 md:gap-0 flex-col items-center mx-10">
      <div>
        <hr className="w-14 border border-b-4 border-blue-400" />
        <div className="mt-6">
          <h1 className="mb-6 text-xl font-bold text-gray-700">
            Best Quality Products
          </h1>
          <p className="mb-6 text-6xl font-bold text-gray-700">
            We Print What You Want!
          </p>
          <p className="mb-6 w-3/4">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sapien.
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white">
            GET STARTED &gt;
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/image26-free.png"
          alt=""
        />
      </div>
    </div>
  );
}
