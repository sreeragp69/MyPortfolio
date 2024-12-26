import React from "react";

const Heading = () => {
  return (
    <div className="flex items-center justify-center w-full text-white font-sans font-extrabold">
      <p className=" hidden  md:flex md:text-8xl lg:text-9xl tracking-wide uppercase text-center leading-none text-gray relative">
        Connect <br />
        <span className=" absolute bottom-0 left-0 right-[30%] top-1/3 w-full text-5xl lg:text-6xl text-white">
          get in <span className="text-primary">touch</span>
        </span>
      </p>

      <p className="bg-[#000] p-4 py-4 w-full text-3xl tracking-wider uppercase flex md:hidden">
      get in {" "}  <span className="text-primary ml-1.5"> touch</span>
      </p>
    </div>
  );
};

export default Heading;
