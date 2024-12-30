import React, { useState } from "react";

const WorkCard = ({ key, image, about, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={key}
      className="w-80 h-44 rounded-md cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      
      <img
        className={`w-full h-full opacity-90 rounded-md absolute transition-opacity duration-700 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
        src={`./${image}`}
        alt="Website Image"
      />

      <div
        className={`w-full h-full bg-primary flex items-center justify-center rounded-md absolute  transition-opacity duration-700 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className={`text-white text-lg font-semibold`}>{about}</span>
      </div>
    </div>
  );
};

export default WorkCard;
