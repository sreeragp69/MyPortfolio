import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full bg-black text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="mt-10 flex flex-col items-center space-y-4">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
