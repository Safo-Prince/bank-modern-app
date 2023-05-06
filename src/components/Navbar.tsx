import React from "react";
import close from "../assets/close.svg";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((navlink, index) => (
          <li
            key={navlink.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${navlink.id}`}>{navlink.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden  flex justify-end items-center flex-1">
        <img
          alt="menu"
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={` ${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient  absolute top-20 right-0 mx-4 my-2 rounded-xl min-w-[140px] sidebar`}
        >
          <ul className="list-none flex-col justify-end items-center flex-1">
            {navLinks.map((navlink, index) => (
              <li
                key={navlink.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${navlink.id}`}>{navlink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
