"use client";

import { useEffect } from "react";

function showMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu?.classList.remove("hidden");
  document.querySelector("body")?.classList.add("overflow-none");
}

function hideMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu?.classList.add("hidden");
  document.querySelector("body")?.classList.remove("overflow-none");
}

export default function Navbar() {
  const navbarElements = [
    {
      name: "About",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
    },
  ];

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        hideMobileMenu();
      }
    });
  }, []);

  return (
    <nav className="flex justify-between items-center">
      {/* LOGO */}
      <div className="w-[50px] aspect-square border border-gray-800"></div>
      {/* LOGO END */}

      {/* MENU */}
      <ul className="hidden md:flex justify-end items-center gap-5">
        {navbarElements.map((navbarElement, index) => (
          <li key={index} className="text-lg">
            {navbarElement.name}
          </li>
        ))}
      </ul>
      {/* MENU END */}

      {/* BUTTON TO SHOW THE MOBILE MENU */}
      <button
        type="button"
        className="inline-block md:hidden text-3xl"
        onClick={showMobileMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
          />
        </svg>
      </button>
      {/* BUTTON TO SHOW THE MOBILE MENU END */}

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className="hidden flex flex-col items-center gap-10 pt-10 w-screen h-screen bg-white fixed top-0 left-0 z-[999]"
      >
        {/* BUTTON TO HIDE THE MOBILE MENU */}
        <button
          type="button"
          className="inline-block md:hidden text-2xl"
          onClick={hideMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            />
          </svg>
        </button>
        {/* BUTTON TO HIDE THE MOBILE MENU END */}

        {/* MENU */}
        <ul className="flex flex-col justify-center items-center gap-10">
          {navbarElements.map((navbarElement, index) => (
            <li key={index} className="text-2xl">
              {navbarElement.name}
            </li>
          ))}
        </ul>
        {/* MENU END */}
      </div>
      {/* MOBILE MENU END */}
    </nav>
  );
}
