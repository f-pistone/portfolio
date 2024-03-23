"use client";

import { sendContactForm } from "@/lib/api";
import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const initValues = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [values, setValues] = useState(initValues);

  function handleChange(e: any) {
    const target = e.target;
    const { name, value, required } = target;

    if (required == true && (value.trim() === "" || value === undefined)) {
      target.nextSibling?.classList.remove("hidden");
      target.classList.add("border-red-500");
    } else {
      target.nextSibling?.classList.add("hidden");
      target.classList.remove("border-red-500");
    }

    setValues({
      ...values,
      [name]: value,
    });
  }

  async function sendForm() {
    const form = document.getElementById("contactForm");
    const requiredInputs = form?.querySelectorAll(".input-field:required");
    let valids = 0;

    requiredInputs?.forEach((input) => {
      let value = input.value;

      if (value.trim() === "" || value === undefined) {
        input.nextSibling?.classList.remove("hidden");
        input.classList.add("border-red-500");
      } else {
        input.nextSibling?.classList.add("hidden");
        input.classList.remove("border-red-500");
        valids++;
      }
    });

    if (valids === requiredInputs?.length) {
      try {
        const send = await sendContactForm(values);
        if (send.ok) {
          toast.success("Email sent", {
            position: "top-center",
            className: "!text-left !text-gray-800",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            closeButton: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
          setValues(initValues);
        } else {
          toast.error("Email not sent", {
            position: "top-center",
            className: "!text-left !text-gray-800",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            closeButton: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
        }
        return;
      } catch (error) {
        toast.error("Error", {
          position: "top-center",
          className: "!text-left !text-gray-800",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          closeButton: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        return;
      }
    }
  }

  return (
    <motion.section
      id="contact"
      className="section bg-gray-50"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.3,
        },
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="max-w-[1200px] mx-auto my-0">
        <div className="px-5 py-[200px]">
          <h2 className="text-center text-3xl mb-10">Contact</h2>
          <form
            id="contactForm"
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            <div>
              <label className="block mb-2" htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="input-field p-2 bg-transparent w-full border-b hover:border-gray-500 focus:border-blue-500 focus:outline-none transition"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                value={values.fullName}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              />
              <span className="error-message hidden text-sm text-red-500">
                Required
              </span>
            </div>
            <div>
              <label className="block mb-2" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="input-field p-2 bg-transparent w-full border-b hover:border-gray-500 focus:border-blue-500 focus:outline-none transition"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              />
              <span className="error-message hidden text-sm text-red-500">
                Required
              </span>
            </div>
            <div>
              <label className="block mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                className="input-field p-2 bg-transparent w-full border-b hover:border-gray-500 focus:border-blue-500 focus:outline-none transition"
                name="phone"
                id="phone"
                placeholder="Phone"
                value={values.phone}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="md:col-span-3">
              <label className="block mb-2" htmlFor="message">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                className="input-field p-2 bg-transparent w-full border-b hover:border-gray-500 focus:border-blue-500 focus:outline-none transition"
                name="message"
                id="message"
                placeholder="Message"
                rows={10}
                value={values.message}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              ></textarea>
              <span className="error-message hidden text-sm text-red-500">
                Required
              </span>
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
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
