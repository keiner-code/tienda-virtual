import { CiMap } from "react-icons/ci";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export function Welcome() {
  return (
    <div className="text-center md:text-start">
      <h1 className="text-7xl font-semibold text-gray-600 mb-4">Say Hello.</h1>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <hr className="my-8 w-24 border-2 border-blue-500" />

      <p className="mb-3 flex items-center gap-2">
        <CiMap className="text-xl text-blue-500" />{" "}
        <span>212 7th St SE, Washington, DC 20003, USA</span>
      </p>
      <p className="mb-3 flex items-center gap-2">
        <FaEnvelope className="text-xl text-blue-500" />{" "}
        <span>info@example.com</span>
      </p>
      <p className="mb-3 flex items-center gap-2">
        <FaPhone className="text-xl text-blue-500" />{" "}
        <span>123-456-7890/91</span>
      </p>
    </div>
  );
}
