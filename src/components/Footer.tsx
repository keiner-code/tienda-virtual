import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <div className="bg-gray-700 text-white py-6 px-10">
      <div className="md:flex gap-16 py-6 justify-center">
        <div>
          <h1 className="font-semibold text-2xl text-center md:text-start">
            Custom Print Store
          </h1>
          <div className="flex gap-4 justify-center py-4">
            <FaInstagram className="text-2xl text-red-500" />
            <FaTwitter className="text-2xl text-blue-500" />
            <FaLinkedin className="text-2xl text-blue-300" />
            <FaFacebook className="text-2xl text-blue-600" />
          </div>
        </div>

        <div className="md:w-1/5 text-center md:text-start">
          <h1 className="font-semibold text-2xl">
            Get in Touch with Us for the Best Quality Custom Prints & Supplies.
          </h1>
          <p className="mt-2">
            Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit,
            sed quia non numquam eius modi tempora incidunt lores ta porro ame.
          </p>
        </div>

        <div className="text-center md:text-start mb-10 md:mb-0">
          <h1 className="font-semibold text-2xl mb-3">Quick Links</h1>
          <ul>
            <li className="ml-0.5 mb-1 hover:text-blue-400">
              <a href="http://">Know More About Us</a>
            </li>
            <li className="ml-0.5 mb-1 hover:text-blue-400">
              <a href="http://">Visit Store</a>
            </li>
            <li className="ml-0.5 mb-1 hover:text-blue-400">
              <a href="http://">Let’s Connect</a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-start">
          <h1 className="font-semibold text-2xl mb-3">Important Links</h1>
          <ul>
            <li className="mb-1">
              <a href="http://">Privacy Policy</a>
            </li>
            <li className="mb-1">
              <a href="http://">Shipping Details</a>
            </li>
            <li className="mb-1">
              <a href="http://">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between border-t-2 border-blue-400 py-10">
        <p className="ml-10">Copyright © 2024 | Custom Printing</p>
        <p className="mr-10">Powered By Custom Printing</p>
      </div>
    </div>
  );
}
