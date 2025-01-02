import React from "react";
import Heading from "../components/Heading/Heading";
import Button from "../components/Button/Button";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import MySkills from "../components/MySkills/MySkills";
import Education from "../components/Education/Education";
import DownloadButton from "../components/Button/DownloadButton";

const About = () => {
  const INFOS = [
    {
      id: 1,
      key: "First Name",
      value: "Sreerag",
      link: null,
    },
    {
      id: 2,
      key: "Last Name",
      value: "p",
      link: null,
    },
    {
      id: 3,
      key: "Age",
      value: "23",
      link: null,
    },
    {
      id: 4,
      key: "Nationality",
      value: "Indian",
      link: null,
    },
    {
      id: 5,
      key: "Freelance",
      value: "Not Available",
      link: null,
    },
    {
      id: 6,
      key: "Place",
      value: "Malappuram, Kerala",
      link: null,
    },
    {
      id: 7,
      key: "Email",
      value: "psreerag69@gmail.com",
      link: "mailto:psreerag69@gmail.com",
    },
    {
      id: 8,
      key: "Phone",
      value: "7306259602",
      link: null,
    },
    {
      id: 9,
      key: "LinkedIn",
      value: "sreerag-p",
      link: "https://www.linkedin.com/in/sreerag-p",
    },
    {
      id: 10,
      key: "Languages",
      value: "English, Hindi, Malayalam",
      link: null,
    },
  ];

  return (
    <section className="w-full  relative flex items-center justify-center bg-black " data-aos="fade-up">
      {/* CONTAINER  */}
      <div className="max-w-2xl pb-10  lg:max-w-full md:py-8  mx-auto w-[96% px-4 lg:px-10 pr-4 flex-col  justify-start lg:gap-12 min-h-screen flex items-center">
        {/* Header part */}
        <div className="flex  justify-center items-center   w-full  md:p-3 m-3 md:m-5 ">
          <Heading
            bgText={"resume"}
            headTextWhite={"about"}
            headTextOrenge={"me"}
          />
        </div>

        {/* PERSONAL INFOS */}
        <div className="flex pb-4 flex-col lg:flex-row justify-center  w-full lg:items-start  lg:justify-between gap-5 text-white px-1 py-2">
          <div className="lg:w-full  flex flex-col items-center justify-center lg:justify-center gap-3">
            <div className="w-full md:mb-3">
              <h2 className="font-bold  text-start text-white  text-2xl">
                PERSONAL INFOS
              </h2>
            </div>

            <div className="rounded-full my-4  w-52 md:w-64 h-52 md:h-64 border-4 lg:border-none lg:hidden flex border-[#252525]">
              <img
                className="rounded-full text-center  h-full w-full lg:hidden"
                src="/img-mobile.png"

                alt="Avatar image"
              />
            </div>

            <div className="flex justify-start  items-start w-full">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {INFOS.map((item) => (
                  <div key={item.id} className="flex flex-col">
                    <Link to={item.link} className="text-light-gray ">
                      <>
                        {item.key} :{" "}
                        <span className="font-semibold text-white">
                          {item.value}
                        </span>
                      </>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full mt-4">
              <DownloadButton
                className="self-start  "
                Icon={FaDownload}
                text={" download cv"}
              />
            </div>
          </div>
        </div>

        <hr className="text-gray w-1/2  my-10 " />
        {/* MY SKILLS */}

        <MySkills />

        <hr className="text-gray w-1/2  my-10 " />

        <Education />
      </div>
    </section>
  );
};

export default About;
