import Aos from "aos";
import React, { useEffect, useState } from "react";

const WorkCard = ({ image, about, onClick, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="w-full h-full aspect-video rounded-xl cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      data-aos="fade-right"
      data-aos-delay={index * 100}
    >
      {/* Background Image */}
      <img
        className={`w-full h-full object-cover rounded-xl absolute transition-opacity duration-700 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
        src={`./${image}`}
        alt={about}
      />

      {/* Hover Overlay */}
      <div
        className={`w-full h-full bg-black/50 flex items-center justify-center 
                    rounded-xl absolute transition-opacity duration-700 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
      >
        <span className="text-white text-lg font-semibold">{about}</span>
      </div>
    </div>
  );
};

export default WorkCard;
