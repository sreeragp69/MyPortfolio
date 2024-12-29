import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaEnvelope, FaHome, FaToolbox, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [sidebarTransitionComplete, setSidebarTransitionComplete] =
    useState(false);

  const handleClick = () => {
    if (!sidebar) {
      setSidebar(true);
    } else {
      setSidebarTransitionComplete(false);
      setSidebar(false);
    }
  };

  const closeSidebar = () => {
    setSidebar(false);
    setSidebarTransitionComplete(false);
  };

  // Wait for Sidebar transition to complete before showing RxCross2
  useEffect(() => {
    if (sidebar) {
      const timer = setTimeout(() => {
        setSidebarTransitionComplete(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [sidebar]);

  return (
    <header className="relative flex justify-end lg:justify-center bg-black lg:h-screen text-white">
      {/* Hamburger Menu */}
      {!sidebarTransitionComplete ? (
        <button
          onClick={handleClick}
          className="text-white bg-[#252525] h-fit m-1 p-3 md:m-4 md:p-4 md:text-2xl text-2xl rounded-md cursor-pointer transition duration-300 transform lg:hidden"
        >
          <GiHamburgerMenu />
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="z-20 text-white bg-[#252525] h-fit m-1 p-3 text-2xl rounded-md cursor-pointer transition duration-300 transform lg:hidden"
        >
          <RxCross2 />
        </button>
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebar} closeSidebar={closeSidebar} />

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex w-full justify-center flex-col text-light-gray h-full p-3 space-y-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "bg-primary text-white p-3" : "bg-mid-gray p-3"} text-white rounded-full relative hover-btn`
          }
          onClick={closeSidebar}
        >
          <FaHome className="text-2xl icon" />
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "bg-primary text-white p-3" : "bg-mid-gray p-3"} text-white rounded-full hover-btn`
          }
          onClick={closeSidebar}
        >
          <FaUser className="text-2xl icon" />
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `${isActive ? "bg-primary text-white p-3" : "bg-mid-gray p-3"} text-white rounded-full hover-btn`
          }
          onClick={closeSidebar}
        >
          <FaToolbox className="text-2xl icon " />
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "bg-primary text-white p-3" : "bg-mid-gray p-3"} text-white rounded-full hover-btn `
          }
          onClick={closeSidebar}
        >
          <FaEnvelope className="text-2xl icon" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
