import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col relative lg:flex-row min-h-screen">
      {/* Main Content */}
      <main className="flex-1 relative order-2 lg:order-1">
        <div className="yellowShade"></div>
        <Outlet />
      </main>
      {/* Navbar */}
      <div className="w-full lg:w-[10%]  order-1 lg:order-2">
        <Navbar />
      </div>
    </div>
  );
};

export default MainLayout;
