import React from "react";
const truncateTechName = (techName) => {
  if (techName.length > 10) {
    return techName.slice(0, 10) + "...";
  }
  return techName;
};

const SkillCard = ({ techName, iconName: Icon }) => {
  return (
    <div
      className="bg-primary flex items-center  justify-center gap-1  min-w-24 w-fit rounded-sm p-2 border border-primary cursor-pointer 
    hover:bg-transparent hover:border-primary hover:scale-105 hover:shadow-xl hover:translate-y-[-2px] 
    transition-all duration-300 ease-in-out group"
    >
      {/* Render the icon dynamically */}
      <Icon className=" text-base md:text-xl transition-colors  duration-300 ease-in-out group-hover:text-primary" />
      <p className="font-semibold  text-sm md:text-base transition-colors truncate duration-300 ease-in-out">
        {truncateTechName(techName)}
      </p>
    </div>
  );
};

export default SkillCard;
