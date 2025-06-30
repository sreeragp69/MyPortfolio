import React from "react";
import { FaDownload } from "react-icons/fa";

const Button = ({ Icon, text }) => {
  return (
    <button
      type="submit"
      className="relative bg-white/5 flex items-center justify-center gap-3 w-[17rem] py-4 px-6 rounded-full 
        text-white font-semibold uppercase 
        border border-white/10 
         backdrop-blur-md 
        transition-all duration-300 ease-in-out 
        hover:bg-white/6 hover:shadow-xl hover:scale-95"
    >
      <span>{text}</span>
      <span
        className="bg-primary text-white p-3 rounded-full flex items-center justify-center 
        transition-transform duration-300 ease-in-out 
        hover:scale-110"
      >
        <Icon className="text-lg" />
      </span>
    </button>
  );
};

const DownloadButton = () => {
  return (
    <div className="w-full mt-4 flex justify-center">
      <a href="./Sreerag_p.pdf" download="Sreerag.pdf">
        <Button Icon={FaDownload} text="Download CV" />
      </a>
    </div>
  );
};

export default DownloadButton;
