import React from "react";

const Button = ({ Icon, text }) => {
  return (
    <button
      type="submit"
      className="group relative inline-flex items-center justify-center w-[15rem] md:w-[17rem] py-4 px-6 rounded-full overflow-hidden transition-all duration-300 border border-primary text-white uppercase font-semibold shadow-md backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 hover:from-primary/30 hover:to-primary/10"
    >
      {/* Ripple/Glow Background */}
      <span className="absolute inset-0 rounded-full bg-primary opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></span>

      {/* Text */}
      <span className="relative z-10">{text}</span>

      {/* Icon with animation */}
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white transform group-hover:scale-110 transition-all duration-300"
      >
        <Icon className="text-base group-hover:translate-x-1 transition-transform duration-300" />
      </span>

      {/* Animated Border Ring */}
      <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-primary/40 transition-all duration-300 z-0"></span>
    </button>
  );
};

export default Button;
