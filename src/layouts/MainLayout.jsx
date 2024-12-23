import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Main Content */}
      <div className="flex-1  order-2 md:order-1">
        <Outlet />
      </div>
      {/* Navbar */}
      <div className="w-full md:w-1/5 order-1 md:order-2">
        <Navbar />
      </div>
    </div>
  );
};

export default MainLayout;
