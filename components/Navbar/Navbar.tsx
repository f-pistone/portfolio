"use client";

import "./Navbar.css";
import { useEffect, useState } from "react";

function showMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu?.classList.remove("hidden");
  document.querySelector("body")?.classList.add("overflow-hidden");
}

function hideMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu?.classList.add("hidden");
  document.querySelector("body")?.classList.remove("overflow-hidden");
}

export default function Navbar() {
  const sections = [
    {
      id: "#about",
      name: "About",
      isActive: true,
    },
    {
      id: "#skills",
      name: "Skills",
      isActive: false,
    },
    {
      id: "#projects",
      name: "Projects",
      isActive: false,
    },
    {
      id: "#contact",
      name: "Contact",
      isActive: false,
    },
  ];

  const [sectionsNavbar, setActive] = useState(sections);

  function handleActive(id: string) {
    sectionsNavbar.forEach((section) => {
      if (section.id == id) {
        section.isActive = true;
      } else {
        section.isActive = false;
      }
    });
    setActive([...sectionsNavbar]);
  }

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        hideMobileMenu();
      }
    });
    window.addEventListener("scroll", function () {
      const sectionsEl = document.querySelectorAll(".section");
      sectionsEl?.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 300) {
          handleActive(`#${section.id}`);
        }
      });
    });
  }, []);

  return (
    <nav className="flex justify-between items-center">
      {/* LOGO */}
      <div className="w-[50px] aspect-square">
        <img src="./images/portfolio-logo.svg" alt="Porfolio Logo" className="w-full aspect-square"/>
      </div>
      {/* LOGO END */}

      {/* MENU */}
      <ul className="hidden md:flex justify-end items-center gap-5">
        {sectionsNavbar.map((section, index) => (
          <li
            key={index}
            className={`${section.isActive ? "active" : ""} menu-li text-lg`}
          >
            <a href={section.id}>{section.name}</a>
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
          {sectionsNavbar.map((section, index) => (
            <li
              key={index}
              className={`${section.isActive ? "active" : ""} menu-li text-2xl`}
            >
              <a
                href={section.id}
                onClick={() => {
                  hideMobileMenu();
                  handleActive(section.id);
                }}
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
        {/* MENU END */}
      </div>
      {/* MOBILE MENU END */}
    </nav>
  );
}
