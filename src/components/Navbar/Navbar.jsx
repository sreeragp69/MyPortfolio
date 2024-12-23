import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleClick = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <header className=" absolute h-full md:relative md:h-full right-0 top-0 p-2 md:p-0  md:bg-black  md:w-auto text-white  ">
      {sidebar ? (
        <RxCross2 onClick={handleClick} className="text-red-800 md:hidden " />
      ) : (
        <GiHamburgerMenu
          onClick={handleClick}
          className="text-red-800 md:hidden"
        />
      )}

      {sidebar ? (
        <nav className=" top-[50%] left-[50%]  md:relative absolute  md:hidden flex bg-[#292929]">
          <ul className=" flex text-white space-y-4  flex-col">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </ul>
        </nav>
      ) : (
        ""
      )}
      <nav>
        <ul className=" md:flex hidden    flex-col">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/portfolio"}>Portfolio</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
