import React from "react";
import "./navbar.css";
const Navbar = () => {
  const Navlist = [
    {
      linkName: "Home",
      link: "#",
    },
    {
      linkName: "Tests",
      link: "#",
    },
    {
      linkName: "About",
      link: "#",
    },
    {
      linkName: "Contact",
      link: "#",
    },
  ];
  return (
    <>
      {Navlist.map((item, index) => {
        return (
          <div key={index}>
            <li>
              <a href={item.link}>{item.linkName}</a>
            </li>
          </div>
        );
      })}
    </>
  );
};

export default Navbar;
