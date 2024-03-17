import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { ShoppingCart } from "./ShoppingCart";
import { useStore } from "../hooks/useStore";

export const Layout = () => {
  const cartDetails = useStore((state) => state.cartDetails);
  return (
    <div className="flex flex-col min-h-screen">
      {cartDetails && (
        <div className="fixed bg-gray-300 w-full h-full z-10 bg-opacity-50">
          <div className="flex h-screen justify-end">
            <ShoppingCart />
          </div>
        </div>
      )}
      <nav className="md:mx-10">
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};
