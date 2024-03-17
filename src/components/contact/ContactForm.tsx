export function ContactForm() {
  return (
    <div className="border-2 rounded-lg h-96">
      <h1 className="pl-4 text-3xl font-semibold text-gray-600 py-4">
        Ask Your Queries
      </h1>
      <form className="flex flex-col gap-6 px-4">
        <div>
          <input
            className="pl-1 outline-none border border-gray-300 w-full h-9 rounded-lg"
            type="text"
            placeholder="your Email"
          />
        </div>
        <div>
          <input
            className="pl-1 outline-none border border-gray-300 w-full h-9 rounded-lg"
            type="text"
            placeholder="your Email"
          />
        </div>
        <div>
          <textarea
            className="pl-1 outline-none border border-gray-300 w-full h-20 rounded-lg"
            placeholder="your Email"
          ></textarea>
        </div>
        <div className="mb-6">
          <button className="bg-blue-500 px-3 py-1.5 text-white rounded-lg shadow-lg">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}
