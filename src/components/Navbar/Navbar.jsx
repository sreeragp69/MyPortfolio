import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaEnvelope, FaHome, FaToolbox, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar((prev) => !prev);
  const closeSidebar = () => setSidebar(false);

  // auto close on larger screen
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (mediaQuery.matches) {
        closeSidebar();
      }
    };
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-6 
        bg-black/40 backdrop-blur-md p-4 rounded-full border border-white/10 shadow-lg z-50">
        {[ 
          { to: "/", icon: <FaHome /> },
          { to: "/about", icon: <FaUser /> },
          { to: "/portfolio", icon: <FaToolbox /> },
          { to: "/contact", icon: <FaEnvelope /> },
        ].map((item, idx) => (
          <NavLink
            key={idx}
            to={item.to}
            className={({ isActive }) =>
              `${isActive ? "bg-primary text-white" : "bg-gray-700"} 
               p-3 rounded-full transition hover:bg-primary`
            }
          >
            {item.icon}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#252525] p-3 rounded-md text-white"
        onClick={toggleSidebar}
      >
        {sidebar ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={sidebar} closeSidebar={closeSidebar} />
    </>
  );
};

export default Navbar;
