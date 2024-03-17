export function Register() {
  return (
    <div className="flex flex-col items-center justify-center mb-4 md:mb-0">
      <h1 className="text-start text-5xl py-4 font-bold text-gray-600">
        Register
      </h1>
      <form className="border w-9/12 md:w-1/4 p-2 rounded-lg shadow-lg">
        <div className="my-4">
          <label className="text-gray-600" htmlFor="user">
            Username
          </label>
          <input
            className="border w-full rounded-lg border-gray-300 shadow-lg h-8 outline-none"
            type="text"
            name="user"
          />
        </div>
        <div className="my-4">
          <label className="text-gray-600" htmlFor="second">
            Second Name
          </label>
          <input
            className="border w-full rounded-lg border-gray-300 shadow-lg h-8 outline-none"
            type="text"
            name="second"
          />
        </div>
        <div className="my-4">
          <label className="text-gray-600" htmlFor="Identification">
            Identification
          </label>
          <input
            className="border w-full rounded-lg border-gray-300 shadow-lg h-8 outline-none"
            type="text"
            name="Identification"
          />
        </div>
        <div className="my-4">
          <label className="text-gray-600" htmlFor="Phone">
            Phone
          </label>
          <input
            className="border w-full rounded-lg border-gray-300 shadow-lg h-8 outline-none"
            type="number"
            name="Phone"
          />
        </div>
        <div className="mt-4">
          <label className="text-gray-600" htmlFor="password">
            Password
          </label>
          <input
            className="border w-full rounded-lg border-gray-300 shadow-lg h-8 outline-none"
            type="password"
            name="password"
          />
        </div>
        <div className="flex justify-center my-4">
          <button className="bg-blue-500 px-4 py-1 rounded-lg text-white shadow-lg hover:bg-blue-600">
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}
