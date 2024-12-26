import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const desktopImage =
    "https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/2.jpg";
  const mobileImage =
    "https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/img-mobile.jpg";

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is below the `lg` breakpoint (1024px)
      setIsMobileView(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  return (
    <section className="w-full relative flex items-center justify-center bg-black">
      {/* CONTAINER  */}
      <div className="max-w-xl lg:max-w-full py-8 justify-center lg:gap-12 min-h-screen flex flex-col lg:flex-row items-center">
        {/* MAIN IMGAE SECTION */}
        <div className=" lg:imageSection lg:w-[38%]  h-full lg:rounded-[2rem] m-1 bg-transparent mb-5 flex items-center justify-center">
          <div className="rounded-full w-full h-full border-4 lg:border-none border-[#252525]">
            <img
              className={`rounded-full w-52 md:w-64 ${
                isMobileView ? "" : "hidden"
              }`}
              src={mobileImage}
              alt="Image Avatar Mobile"
            />
            <img
              className={`rounded-[2rem] w-full h-full ${
                isMobileView ? "hidden" : ""
              }`}
              src={desktopImage}
              alt="Image Avatar Desktop"
            />
          </div>
        </div>

        {/* MY DETAILS SECTION */}
        <div className="contentSection lg:w-[50%] m-1   text-white">
          <div className="p-3 lg:pl-12 ml-6 lg:mb-3  relative">
            <h1 className="headingBar  text-3xl text-primary lg:text-[2.9rem] leading-10 lg:leading-[3.3rem] uppercase font-bold text-center lg:text-start">
              i'm Sreerag.
            </h1>
            <h1 className="text-3xl text-white lg:text-[2.9rem] leading-10 lg:leading-[3.3rem] uppercase font-bold text-center lg:text-start">
              Web developer
            </h1>
          </div>

          <div className="p-3 ">
            <p className="px-3  leading-7 lg:leading-8 text-base text-center lg:text-justify ">
              I'm an aspiring full-stack developer specializing in the MERN
              stack, focused on creating dynamic and user-friendly web
              applications. Passionate about leveraging React, Node.js,
              Express.js, and MongoDB to craft innovative solutions that enhance
              user experiences and make a positive impact.
            </p>
          </div>

          <div className="p-3 px-6 flex items-center justify-center lg:justify-start">
            <Link to={"/about"}>
              <Button Icon={FaArrowRight} text={" more about me"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
