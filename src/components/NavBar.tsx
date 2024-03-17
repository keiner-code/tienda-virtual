import { FaAngleDown, FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import { GiHamburgerMenu } from "react-icons/gi";

export function NavBar() {
  const showDetails = useStore((state) => state.showDetails);
  const showMenu = useStore((state) => state.showMenu);
  const showMenuDevice = useStore((state) => state.showMenuDevice);
  return (
    <div className="h-14 flex justify-between items-center pr-10">
      <div className="hidden md:block">
        <img
          src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/print-1.svg"
          alt=""
        />
      </div>

      <ul className="gap-6 hidden md:flex">
        <li className="hover:text-blue-500 border-b-2 border-b-blue-400">
          <Link to="/">HOME</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link to="products">ALL PRODUCTS</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link to="about">ABOUT</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link to="contact">CONTACT</Link>
        </li>
        <li className="group flex items-center relative">
          <span className="hover:text-blue-500 mr-1">ACCOUNT</span>
          <FaChevronDown className="text-base text-gray-500" />
          <ul className="hidden group-hover:block absolute top-6 border w-28 -left-2 rounded-lg shadow-lg">
            <li className="my-1 ml-1 hover:text-blue-500">
              <Link to="account">LOGIN</Link>
            </li>
            <li className="my-1 ml-1 hover:text-blue-500">
              <Link to="register">REGISTER</Link>
            </li>
            <li className="my-1 ml-1 hover:text-blue-500">
              <Link to="cart">CART</Link>
            </li>
          </ul>
        </li>
      </ul>

      <div className="hidden md:flex items-center gap-3">
        <span>$3.000.000</span>
        <div className="relative cursor-pointer" onClick={showDetails}>
          <span className="absolute bottom-3 left-4 text-base text-blue-500">
            0
          </span>
          <FaShoppingCart className="text-xl text-blue-400" />
        </div>

        <div className="flex items-center border-l-2 relative group">
          <img
            className="w-10 rounded-full ml-1.5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQT7IuhC1SLkzhUloyMLE9vOXczQpO6GPTfxNdSYNlFMlZ86VTtUgSjMyr7ASuNMYo0Pk&usqp=CAU"
            alt=""
          />
          <p className="ml-1">Carla Estrada</p>
          <FaAngleDown className="text-gray-600" />

          <div className="hidden group-hover:block absolute top-12 border p-2 rounded-lg shadow-xl">
            <p className="text-gray-500 font-medium mb-0.5">
              Carla123@domain.com
            </p>
            <p className="text-gray-500 font-medium mb-0.5">304566554</p>
            <hr />
            <button className="text-red-400 py-1">Cerrar Session</button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <GiHamburgerMenu className="text-2xl ml-10" onClick={showMenuDevice} />
        {showMenu && (
          <ul
            onClick={showMenuDevice}
            className="fixed top-14 h-screen bg-blue-600 bg-opacity-50 w-full pl-4"
          >
            <li className="hover:text-blue-500 my-2 border-b-2 border-b-blue-400 font-semibold">
              <Link to="/">HOME</Link>
            </li>
            <li className="hover:text-blue-500 font-semibold my-2">
              <Link to="products">ALL PRODUCTS</Link>
            </li>
            <li className="hover:text-blue-500 font-semibold my-2">
              <Link to="about">ABOUT</Link>
            </li>
            <li className="hover:text-blue-500 font-semibold my-2">
              <Link to="contact">CONTACT</Link>
            </li>

            <li className="font-semibold my-2 hover:text-blue-500">
              <Link to="account">LOGIN</Link>
            </li>
            <li className="font-semibold my-2 hover:text-blue-500">
              <Link to="register">REGISTER</Link>
            </li>
            <li className="font-semibold my-2 hover:text-blue-500">
              <Link to="cart">CART</Link>
            </li>
          </ul>
        )}
      </div>

      <div className="md:hidden">
        <img
          className=""
          src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/print-1.svg"
          alt=""
        />
      </div>

      <div className="md:hidden flex items-center relative group">
        <img
          className="w-10 rounded-full ml-1.5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQT7IuhC1SLkzhUloyMLE9vOXczQpO6GPTfxNdSYNlFMlZ86VTtUgSjMyr7ASuNMYo0Pk&usqp=CAU"
          alt=""
        />

        <div className="hidden group-hover:block absolute top-12 -left-12 border p-2 rounded-lg shadow-xl">
          <p className="text-gray-500 font-medium mb-0.5 w-[6.7rem]">
            Carla Girarldo
          </p>
          <p className="text-gray-500 font-medium mb-0.5">304566554</p>
          <hr />
          <button className="text-red-400 py-1">Cerrar Session</button>
        </div>
      </div>
    </div>
  );
}
