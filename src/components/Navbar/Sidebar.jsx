import React from "react";
import { FaEnvelope, FaHome, FaToolbox, FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-[100] h-full w-full bg-black/80 backdrop-blur-md text-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={closeSidebar}
        className="absolute top-4 right-4 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
        aria-label="Close Sidebar"
      >
        <RxCross2 size={22} />
      </button>

      {/* Navigation Links */}
      <ul className="mt-20 px-6 space-y-6 text-lg font-medium uppercase">
        {[
          { label: "Home", to: "/", icon: <FaHome /> },
          { label: "About", to: "/about", icon: <FaUser /> },
          { label: "Portfolio", to: "/portfolio", icon: <FaToolbox /> },
          { label: "Contact", to: "/contact", icon: <FaEnvelope /> },
        ].map(({ label, to, icon }) => (
          <li key={label}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-4 w-full px-4 py-3 rounded-lg transition duration-200 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-white hover:bg-white/10"
                }`
              }
              onClick={closeSidebar}
            >
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
