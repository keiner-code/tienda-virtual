import { Creative } from "../components/About/Creative";
import { Header } from "../components/About/Header";
import { Qualities } from "../components/About/Qualities";

export function About() {
  return (
    <div>
      <div className="md:mx-10 mx-4">
        <Header />
        <Qualities />
      </div>
      <div className="bg-blue-500 flex md:flex-row flex-col justify-around items-center py-10 mb-4">
        <h1 className="text-4xl font-semibold py-4 text-white text-center md:text-start">
          Get Best Offers On Customized Designs!
        </h1>
        <button className="inline-block h-10 px-6 border-2 border-white rounded-lg text-white">
          GET STARTED &gt;
        </button>
      </div>
      <div className="mx-10">
        <Creative />
      </div>
    </div>
  );
}
