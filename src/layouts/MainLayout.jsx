import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import { Toaster } from "react-hot-toast";
import AOS from "aos";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="flex flex-col relative lg:flex-row min-h-screen "  data-aos="fade-up">
      {/* Main Content */}
      <main className="flex-1 relative order-2 lg:order-1">
        <div className="yellowShade"></div>
        <Outlet />
      </main>
      {/* Navbar */}
      <div className="w-full lg:w-[10%]  order-1 lg:order-2">
        <Navbar />
      </div>
      {/* <AnimatedCursor
        innerSize={8} 
        outerSize={44} 
        color="62, 119, 149" 
        outerAlpha={0.3} 
        innerScale={0.8}
        outerScale={1.5} 
      /> */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default MainLayout;
