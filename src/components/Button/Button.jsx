import React from "react";

const Button = ({Icon,text}) => {
  return (
    <button className="btn border text-base py-4 w-[17rem] relative font-bold uppercase border-primary rounded-full flex items-center justify-start">
      {text}
      <span className="bg-primary absolute right-0 top-0 p-[1rem] flex items-center justify-center rounded-full">
        <Icon />
      </span>
    </button>
  );
};

export default Button;
