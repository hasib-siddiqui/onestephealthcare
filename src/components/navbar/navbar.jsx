import React from "react";
import "./navbar.css";
const Navbar = () => {
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
  return (
    <>
      {Navlist.map((item, index) => {
        return (
          <div key={index}>
            <li className="max-sm:p-2">
              <a href={item.link}>{item.linkName}</a>
            </li>
          </div>
        );
      })}
    </>
  );
};

export default Navbar;
