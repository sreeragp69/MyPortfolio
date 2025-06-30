import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";

const ExperienceCard = ({ year, role, company, details }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-start sm:items-start gap-4 text-white px-4 sm:px-6 py-4 relative  sm:border-none border-white/10">
      {/* Icon for mobile/desktop */}
      <div
        className="w-12 h-12 min-w-[3rem] rounded-full 
        flex items-center justify-center bg-white/5 
        shadow-md shadow-primary/30 ring-1 ring-white/10 
        backdrop-blur-md"
      >
        <BsPersonWorkspace className="text-xl text-primary" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2">
        {/* Year Badge */}
        <span className="inline-block w-fit text-xs px-3 py-1 bg-white/5 text-white rounded-full border border-white/20 backdrop-blur-sm">
          {year}
        </span>

        {/* Title & Company */}
        <h5 className="text-sm sm:text-base uppercase font-semibold leading-tight">
          {role}
          <span className="block sm:inline font-normal text-white/70 ml-0 sm:ml-1 text-xs sm:text-sm">
            — {company}
          </span>
        </h5>

        {/* Details */}
        <p className="text-white/70 text-sm leading-6">{details}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
