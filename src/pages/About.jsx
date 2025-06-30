import React, { Suspense, lazy } from "react";
import { FaDownload } from "react-icons/fa";
import {
  FaUser,
  FaBirthdayCake,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGlobe,
  FaRocket,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Lazy-loaded Components
const Heading = lazy(() => import("../components/Heading/Heading"));
const MySkills = lazy(() => import("../components/MySkills/MySkills"));
const Education = lazy(() => import("../components/Education/Education"));
const Experience = lazy(() => import("../components/Experience/Experience"));
const DownloadButton = lazy(() =>
  import("../components/Button/DownloadButton")
);

const infos = [
  { label: "Name", value: "Sreerag P", icon: <FaUser /> },
  { label: "Age", value: "23", icon: <FaBirthdayCake /> },
  {
    label: "Email",
    value: "psreerag69@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:psreerag69@gmail.com",
  },
  {
    label: "Phone",
    value: "7306259602",
    icon: <FaPhone />,
    link: "tel:7306259602",
  },
  {
    label: "LinkedIn",
    value: "sreerag-p",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/sreerag-p/",
  },
  { label: "Nationality", value: "Indian", icon: <FaGlobe /> },
  { label: "Freelance", value: "Available", icon: <FaRocket /> },
  {
    label: "Place",
    value: "Indore, Madhya Pradesh",
    icon: <FaMapMarkerAlt />,
  },
];

const About = () => {
  return (
    <section className="w-full bg-black text-white flex items-center justify-center">
      <div className="max-w-6xl w-full px-4 lg:px-10 py-12 mx-auto flex flex-col items-center">
        {/* Heading */}
        <div className="w-full mb-10">
          <Suspense fallback={<div>Loading Heading...</div>}>
            <Heading
              bgText="resume"
              headTextWhite="about"
              headTextOrenge="me"
            />
          </Suspense>
        </div>

        {/* Personal Info */}
        <div className="w-full flex flex-col lg:flex-row gap-10">
          {/* Left Side */}
          <div className="w-full lg:w-full flex flex-col items-center lg:items-start gap-6">
            {/* Avatar */}
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-[#252525] shadow-md lg:hidden">
              <img
                src="/img-mobile.webp"
                alt="Sreerag Avatar"
                loading="lazy"
                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h2 className="text-2xl font-bold text-start w-full">
              Personal Infos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
              {infos.map((info, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 transition duration-300 hover:scale-[1.03] hover:shadow-xl"
                >
                  <div className="text-xl text-primary">{info.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      {info.label}
                    </span>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm font-semibold text-white hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full mt-6">
              <Suspense fallback={<div>Loading Button...</div>}>
                <DownloadButton Icon={FaDownload} text="Download CV" />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 w-2/3 border-white/20" />

        {/* Experience */}
        <div className="w-full">
          <Suspense fallback={<div>Loading Experience...</div>}>
            <Experience />
          </Suspense>
        </div>

        <hr className="my-12 w-2/3 border-white/20" />

        {/* Skills */}
        <div className="w-full">
          <Suspense fallback={<div>Loading Skills...</div>}>
            <MySkills />
          </Suspense>
        </div>

        <hr className="my-12 w-2/3 border-white/20" />

        {/* Education */}
        <div className="w-full">
          <Suspense fallback={<div>Loading Education...</div>}>
            <Education />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default About;
