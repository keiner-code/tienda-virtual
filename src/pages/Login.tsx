import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-start text-5xl py-4 font-bold text-gray-600">
        Login
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
        <div className="text-gray-600 flex items-center gap-1">
          <input
            className="border rounded-lg border-gray-300 shadow-lg h-8 outline-none"
            type="checkbox"
            name="remember"
          />
          <label className="font-semibold" htmlFor="remember">
            Remember me
          </label>
        </div>
        <div className="flex justify-center my-4">
          <button className="bg-blue-500 px-4 py-1 rounded-lg text-white shadow-lg hover:bg-blue-600">
            LOG IN
          </button>
        </div>
      </form>
      <div className="w-9/12 md:w-1/4 pb-10 pt-4 flex justify-between pr-2">
        <Link
          to="/"
          className="text-blue-500 font-semibold hover:text-blue-600"
        >
          Lost your password?
        </Link>
        <Link
          to="/"
          className="text-blue-500 font-semibold hover:text-blue-600"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
