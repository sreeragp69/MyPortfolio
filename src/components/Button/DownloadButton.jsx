import React from "react";
import { FaDownload } from "react-icons/fa"; // Assuming you are using this icon

const Button = ({ Icon, text }) => {
  return (
    <button
      type="submit"
      className="btn border text-base py-4 w-[17rem] relative font-bold uppercase border-primary rounded-full flex items-center justify-start"
    >
      {text}
      <span className="bg-primary absolute right-0 top-0 p-[1rem] flex items-center justify-center rounded-full">
        <Icon />
      </span>
    </button>
  );
};

const DownloadButton = () => {
  return (
    <div className="w-full mt-4">
      <a
        href="./Sreerag.pdf" // Replace with your actual path to the PDF
        download="Sreerag.pdf" // Name the downloaded file
        className="self-start"
      >
        <Button Icon={FaDownload} text={"Download CV"} />
      </a>
    </div>
  );
};

export default DownloadButton;
