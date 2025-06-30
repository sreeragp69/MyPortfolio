import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AOS from "aos";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative bg-black">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="min-h-screen relative z-10">
        <div className="yellowShade" />
        <Outlet />
      </main>

      {/* Toast Notifications */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default MainLayout;
