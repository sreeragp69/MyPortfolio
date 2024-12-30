import React from "react";
import { PiToolboxFill } from "react-icons/pi";

const EducationCard = ({year,course,university,details}) => {
  return (
    <li key={course} className="  relative leading-8  w-fit pr-6 pl-[3rem] md:pl-16 mb-14">
      <div className="absolute z-10 w-10 h-10 left-0 right-0 top-0 rounded-full bg-primary flex items-center justify-center">
        <PiToolboxFill />
      </div>
      <span className="bg-mid-gray text-light-gray text-xs px-1 rounded-full ">
      {year}
      </span>
      <h5 className="uppercase font-medium mb-1">
      {course}{" "}
        <span className="text-light-gray ">- {university}</span>
      </h5>
      <p className="text-light-gray text-sm  leading-6">
        {details}
        
      </p>
    </li>
  );
};

export default EducationCard;
