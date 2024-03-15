export default function Contact() {
  return (
    <section>
      <div className="max-w-[1000px] mx-auto my-0">
        <div className="p-10">
          <h2 className="text-center text-3xl mb-10">Contact</h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block mb-2" htmlFor="fullname">
                Full Name *
              </label>
              <input
                type="text"
                className="p-2 w-full border-b hover:border-gray-500 focus:border-blue-500 focus:outline-none transition"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                className="p-2 w-full border-b hover:border-gray-500 focus:border-blue-500 focus:outline-none transition"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                className="p-2 w-full border-b hover:border-gray-500 focus:border-blue-500 focus:outline-none transition"
                name="phone"
                id="phone"
                placeholder="Phone"
              />
            </div>
            <div className="md:col-span-3">
              <label className="block mb-2" htmlFor="message">
                Message *
              </label>
              <textarea
                className="p-2 w-full border-b hover:border-gray-500 focus:border-blue-500 focus:outline-none transition"
                name="message"
                id="message"
                placeholder="Message"
                rows={10}
                required
              ></textarea>
            </div>
            <div className="md:col-span-3 text-right">
              <button
                type="button"
                className="px-7 py-3 rounded-md text-white bg-green-600 hover:bg-green-500 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
