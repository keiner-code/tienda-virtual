import { FaCodepen, FaGg, FaHandPaper, FaSnowflake } from "react-icons/fa";

export function Qualities() {
  return (
    <div className="flex md:flex-row flex-col mb-10 gap-14">
      <div className="text-center md:text-start">
        <h1 className="w-full md:w-9/12 text-4xl font-semibold text-gray-600 mb-6">
          We Are Your Favourite, Online Store.
        </h1>
        <p className="w-full md:w-10/12">
          Dui habitasse provident eu etiam praesent placeat maiores temporibus,
          accumsan parturient autem, mi animi ipsa. Lobortis maxime quos,
          pellentesq.
        </p>
        <p className="w-full md:w-10/12">
          Ee platea animi commodo tincidunt ridiculus tempora, ornare lorem quam
          sit possimus? Quam cras facilisi officia fusce. Ac, excepteur
          excepteur fusce? Sunt minim expedita magnis!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <FaSnowflake className="text-2xl text-blue-600 mb-1" />
          <h2 className="text-xl font-semibold mb-1">Eros Imperdie</h2>
          <p className="text-gray-500">
            We’ll generate a sitemap for your site, submit it to search engine
            is and track.
          </p>
        </div>

        <div>
          <FaCodepen className="text-2xl text-blue-600 mb-1" />
          <h2 className="text-xl font-semibold mb-1">Proident Congu</h2>
          <p className="text-gray-500">
            We’ll generate a sitemap for your site, submit it to search engine
            is and track.
          </p>
        </div>

        <div>
          <FaHandPaper className="text-2xl text-blue-600 mb-1" />
          <h2 className="text-xl font-semibold mb-1">Rerum Rutrum</h2>
          <p className="text-gray-500">
            We’ll generate a sitemap for your site, submit it to search engine
            is and track.
          </p>
        </div>

        <div>
          <FaGg className="text-2xl text-blue-600 mb-1" />
          <h2 className="text-xl font-semibold mb-1">Vero Maecenas</h2>
          <p className="text-gray-500">
            We’ll generate a sitemap for your site, submit it to search engine
            is and track.
          </p>
        </div>
      </div>
    </div>
  );
}
