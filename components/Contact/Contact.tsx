"use client";

import { sendContactForm } from "@/lib/api";

async function sendForm() {
  const data = {
    fullName: "Francesco Pistone",
    email: "francesco@email.com",
    phone: "1234567890",
    message: "Hello",
  };
  await sendContactForm(data);
}

export default function Contact() {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="max-w-[1200px] mx-auto my-0">
        <div className="px-5 py-[150px]">
          <h2 className="text-center text-3xl mb-10">Contact</h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block mb-2" htmlFor="fullname">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="p-2 bg-transparent w-full border-b hover:border-gray-500 focus:border-blue-500 focus:outline-none transition"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="p-2 bg-transparent w-full border-b hover:border-gray-500 focus:border-blue-500 focus:outline-none transition"
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
                className="p-2 bg-transparent w-full border-b hover:border-gray-500 focus:border-blue-500 focus:outline-none transition"
                name="phone"
                id="phone"
                placeholder="Phone"
              />
            </div>
            <div className="md:col-span-3">
              <label className="block mb-2" htmlFor="message">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                className="p-2 bg-transparent w-full border-b hover:border-gray-500 focus:border-blue-500 focus:outline-none transition"
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
                className="px-7 py-3 inline-flex items-center gap-2 rounded-md text-white bg-green-600 hover:bg-green-500 transition"
                onClick={sendForm}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"
                    />
                  </svg>
                </span>
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
