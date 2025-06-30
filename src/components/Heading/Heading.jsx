import React from "react";

const Heading = ({ bgText, headTextWhite, headTextOrenge }) => {
  return (
    <div className="w-full flex items-center justify-center text-white font-sans font-extrabold relative">
      {/* Desktop View: Big Background Text with Overlay */}
      <div className="hidden md:block relative text-center">
        <p className="text-7xl lg:text-8xl tracking-widest uppercase text-white/10 leading-none select-none">
          {bgText}
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl lg:text-[42px] uppercase text-white tracking-wide z-10">
            {headTextWhite}{" "}
            <span className="text-primary">{headTextOrenge}</span>
          </h2>
        </div>
      </div>

      {/* Mobile View: Glass Card */}
      <div
        className="md:hidden w-full text-center py-4 px-6 text-2xl uppercase tracking-wide 
        bg-white/10 backdrop-blur-md border border-white/20 
        text-white rounded-md shadow-md"
      >
        {headTextWhite} <span className="text-primary">{headTextOrenge}</span>
      </div>
    </div>
  );
};

export default Heading;
