export function Creative() {
  return (
    <div className="my-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-10">
          Meet Our Creative Team
        </h1>
        <hr className="w-16 border border-b-4 border-blue-500 mb-10" />
      </div>
      <div className="flex gap-10 justify-center">
        <div>
          <img
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-14.jpg"
            alt=""
          />
          <h3 className="text-center text-xl font-bold mt-2 text-gray-700">
            Amanda Lee
          </h3>
          <p className="text-center">Creative Head</p>
        </div>
        <div>
          <img
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/team-0.jpg"
            alt=""
          />
          <h3 className="text-center text-xl font-bold mt-2 text-gray-700">
            Lee Stoner
          </h3>
          <p className="text-center">Marketing Head</p>
        </div>
        <div>
          <img
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/team-01.jpg"
            alt=""
          />
          <h3 className="text-center text-xl font-bold mt-2 text-gray-700">
            Monica Gala
          </h3>
          <p className="text-center">Graphic Designer</p>
        </div>
      </div>
    </div>
  );
}
