import React from "react";
import Heading from "../components/Heading/Heading";

const Portfolio = () => {
  return (
    <section className="w-full  relative flex items-center justify-center bg-black ">
      {/* CONTAINER  */}
      <div className="max-w-2xl pb-10  lg:max-w-full md:py-8  mx-auto w-[96%] px-4 lg:px-10 pr-4 flex-col  justify-start lg:gap-12 min-h-screen flex items-center">
        {/* Header part */}
        <div className="flex  justify-center items-center  w-full  md:p-3 m-3 md:m-5 ">
          <Heading
            bgText={"Works"}
            headTextWhite={"my"}
            headTextOrenge={"portfolio"}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
