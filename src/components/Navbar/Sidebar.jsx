import React from "react";
import { FaEnvelope, FaHome, FaToolbox, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed p-4 top-0  left-0 h-screen w-full bg-[#252525] text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="mt-10  flex flex-col items-start p-4 font-medium uppercase gap-1">
        <li className="border-b border-mid-gray  py-4 w-full flex items-start">
          <NavLink
          to={"/"}
            className={({ isActive }) =>
              ` ${
                isActive ? " text-primary  " : " text-white "
              }  flex items-center justify-start  gap-3  w-full `
            }
          >
            <FaHome className="text-xl" /> <span>Home</span>
          </NavLink>
        </li>
        <li className="border-b border-mid-gray   py-4 w-full flex items-start">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              ` ${
                isActive ? " text-primary  " : " text-white "
              }  flex items-center justify-start  gap-3  w-full`
            }
          >
            <FaUser className="text-xl" />
            About
          </NavLink>
        </li>
        <li className="border-b border-mid-gray   py-4 w-full flex items-start">
          <NavLink
           to="/portfolio"
            className={({ isActive }) =>
              ` ${
                isActive ? " text-primary  " : " text-white "
              }  flex items-center justify-start  gap-3  w-full`
            }
          >
            <FaToolbox className="text-xl" /> Portfolio{" "}
          </NavLink>
        </li>
        <li className="border-b border-mid-gray   py-4 w-full flex items-start">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` ${
                isActive ? " text-primary  " : " text-white "
              } flex items-center justify-start  gap-3  w-full`
            }
          >
            <FaEnvelope className="text-2xl" />
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
