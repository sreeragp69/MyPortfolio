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
    <header className="relative flex justify-end md:justify-center   h-screen  text-white">
      {/* Hamburger Menu */}
      {!sidebarTransitionComplete ? (
        <GiHamburgerMenu
          onClick={handleClick}
          className="text-red-800 m-2 text-2xl cursor-pointer transition duration-300 transform md:hidden"
        />
      ) : (
        <RxCross2
          onClick={handleClick}
          className="text-red-800 z-10 m-2 text-2xl cursor-pointer transition duration-300 transform md:hidden"
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebar} />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex w-full justify-center flex-col text-light-gray   h-full p-3 space-y-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${
              isActive ? "bg-primary text-white  p-3 " : " bg-mid-gray p-3"
            } text-white rounded-full`
          }
        >
          <FaHome className="text-2xl" />
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            ` ${
              isActive ? "bg-primary text-white  p-3 " : " bg-mid-gray p-3"
            } text-white rounded-full`
          }
        >
          <FaUser className="text-2xl" />
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            ` ${
              isActive ? "bg-primary text-white  p-3 " : " bg-mid-gray p-3"
            } text-white rounded-full`
          }
        >
          <FaToolbox className="text-2xl" />
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            ` ${
              isActive ? "bg-primary text-white  p-3 " : " bg-mid-gray p-3"
            } text-white rounded-full`
          }
        >
          <FaEnvelope className="text-2xl" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
