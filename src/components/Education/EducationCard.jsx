import { PiToolboxFill } from "react-icons/pi";

const EducationCard = ({ year, course, university, details }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-start gap-4 px-4 sm:px-6 py-4 text-white relative  sm:border-none border-white/10">
      {/* Icon */}
      <div
        className="w-12 h-12 min-w-[3rem] rounded-full flex items-center justify-center
        bg-white/5 shadow-md shadow-primary/30 ring-1 ring-white/10 backdrop-blur-md"
      >
        <PiToolboxFill className="text-xl text-primary" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        {/* Year Badge */}
        <span className="inline-block w-fit text-xs px-3 py-1 bg-white/5 text-white rounded-full border border-white/20 backdrop-blur-sm">
          {year}
        </span>

        {/* Course & University */}
        <h5 className="text-sm sm:text-base uppercase font-semibold leading-tight">
          {course}
          <span className="block sm:inline font-normal text-white/70 ml-0 sm:ml-1 text-xs sm:text-sm">
            — {university}
          </span>
        </h5>

        {/* Description */}
        <p className="text-white/70 text-sm leading-6">{details}</p>
      </div>
    </div>
  );
};

export default EducationCard;
