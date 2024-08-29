import React from "react";
import Navbar from "../components/navbar/navbar";
import PathlogyLogo from "../../public/images/pathology-logo.png";
import "./header.css";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="border-t-4 border-[--bgBlue]">
      <img src={PathlogyLogo} alt="Pathology Logo" />
      <Navbar />
      <a
        href="https://wa.me/919967646399"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="logo-btn">
          <FaWhatsapp className="whatsapp-icon" />
          Whatsapp
        </button>
      </a>
    </header>
  );
};

export default Header;
