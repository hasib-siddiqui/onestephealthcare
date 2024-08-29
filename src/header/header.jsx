import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar/navbar";
import PathlogyLogo from "../../public/images/pathology-logo.png";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const Navlist = [
    {
      linkName: "Home",
      link: "#",
    },
    {
      linkName: "Book now",
      link: "#book",
    },
    {
      linkName: "Tests",
      link: "#tests",
    },
    {
      linkName: "About",
      link: "#about",
    },

    {
      linkName: "Customer Review",
      link: "#review",
    },
    {
      linkName: "Contact",
      link: "#contact",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="border-t-4 border-[--bgBlue] flex items-center justify-between p-4 bg-white fixed top-0 w-full z-50">
      <img src={PathlogyLogo} alt="Pathology Logo" className="w-60" />
      <button
        className="block lg:hidden p-2 text-[--bgBlue] w-[40px]"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaBars className="text-xl" />
        )}
      </button>
      <div
        ref={menuRef}
        className={`lg:flex lg:items-center lg:space-x-6 fixed w-full bg-white transition-transform duration-300 left-0 ease-in-out ${
          isOpen ? "translate-y-[65%]" : "-translate-y-[1000px]"
        }`}
      >
        <Navbar />
      </div>
      {Navlist.map((list, index) => {
        return (
          <a
            key={index}
            href={list.link}
            className="sm:flex text-[--bgBlue] font-semibold text-md hidden items-center justify-between"
          >
            {list.linkName}
          </a>
        );
      })}
      <a
        href="https://wa.me/919967646399"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:block"
      >
        <button className="flex items-center bg-[#25D366] text-white px-4 py-2 rounded">
          <FaWhatsapp className="mr-2 text-xl" />
          Whatsapp
        </button>
      </a>
    </header>
  );
};

export default Header;
