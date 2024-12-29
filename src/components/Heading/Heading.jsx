import React from "react";

const Heading = ({ bgText, headTextWhite, headTextOrenge }) => {
  return (
    <div className="flex poppins-black items-center justify-center w-full text-white font-sans font-extrabold">
      <p className=" hidden  md:flex md:text-7xl lg:text-8xl tracking-wide uppercase text-center leading-none text-gray relative">
        {bgText} <br />
        <span className=" absolute bottom-0 left-0 right-[30%] top-1/3 w-full text-4xl lg:text-[42px] text-white">
          {headTextWhite} <span className="text-primary">{headTextOrenge}</span>
        </span>
      </p>

      <p className="bg-[#000] p-4 py-4 w-full text-3xl tracking-wider uppercase flex md:hidden">
        {headTextWhite}{" "}
        <span className="text-primary ml-1.5"> {headTextOrenge}</span>
      </p>
    </div>
  );
};

export default Heading;
