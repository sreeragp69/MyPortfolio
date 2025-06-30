const truncateTechName = (techName) => {
  if (techName.length > 10) {
    return techName.slice(0, 10) + "...";
  }
  return techName;
};

const SkillCard = ({ techName, iconName: Icon }) => {
  return (
    <div
      className="min-w-32 w-fit px-3 py-2 rounded-lg 
        flex items-center justify-center gap-2
        bg-white/10 backdrop-blur-md border border-white/20
        text-white cursor-pointer
        transition-all duration-300 ease-in-out 
        hover:scale-105 hover:shadow-xl hover:translate-y-[-2px] hover:bg-white/20"
    >
      {/* Icon */}
      <Icon className="text-lg md:text-xl text-white transition-colors duration-300 group-hover:text-primary" />
      {/* Tech Name */}
      <p className="text-sm md:text-base font-medium truncate">
        {truncateTechName(techName)}
      </p>
    </div>
  );
};

export default SkillCard;
