import React, { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import WorkCard from "../components/WorkCard/WorkCard";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const myWorks = [
    {
      id: 1,
      image: "cofee-cup.png",
      about: "Coffee Website",
      techs:
        " React.js, React Router, Tailwind CSS, Axios, JWT, Node.js, Express.js, MongoDB, Mongoose",
      url: "https://cup-coffee-frontend.onrender.com/",
    },
    {
      id: 2,
      image: "chat-app.png",
      about: "Chatting App",
      techs:
        "React.js, Tailwind CSS, Axios, JWT, Express.js, MongoDB, Mongoose, Node.js, Socket.IO, Zustand ",
      url: "https://mern-chat-app-8my5.onrender.com/",
    },

    {
      id: 3,
      image: "logo-room.png",
      about: "Logo Room",
      techs:
        "React.js, Tailwind CSS, Vite, ShadCN UI, Radix UI, Lucide Icons, html2canvas",
      url: "https://logo-loom.onrender.com/",
    },
    {
      id: 4,
      image: "media-player.png",
      about: "Media Player",
      techs:
        "React.js, Bootstrap, React Router, Axios, React Toastify, UUID, React Feather",
      url: "https://media-player-applicaion.netlify.app/",
    },
    {
      id: 5,
      image: "nikee.png",
      about: "Nikee frontend",
      techs: "React, Tailwind CSS, React Router, Vite",
      url: "https://nike-websitee.netlify.app/",
    },
    {
      id: 6,
      image: "calculator.png",
      about: "Simple Interest Calculator",
      techs: "React.js, Bootstrap, React Router DOM.",
      url: "https://simple-interestapp.netlify.app/",
    },
    {
      id: 7,
      image: "notes-app.png",
      about: "Notes App",
      techs:
        "React.js, Tailwind CSS, React Router, Axios, JWT, Express.js, MongoDB, Mongoose, Node.js ",
      url: "https://notes-app-frontend-s44d.onrender.com/",
    },
    {
      id: 8,
      image: "portfolio-img.png",
      about: "Portfolio",
      techs:
        "React.js, Tailwind CSS, React Router, Axios, JWT, Express.js, MongoDB, Mongoose, Node.js ",
      url: "https://sreerag-p.netlify.app/",
    },
  ];

  const [selectedWork, setSelectedWork] = useState(null);

  const handleWorkClick = (work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedWork]);

  return (
    <section
      className="w-full  flex items-center justify-center bg-black"
      data-aos="fade-up"
    >
      {/* CONTAINER  */}
      <div className="max-w-2xl pb-10  lg:max-w-full md:py-8  mx-auto w-[96%] px-4 lg:px-10 pr-4 flex-col  justify-start lg:gap-12 min-h-screen flex items-center">
        {/* Header part */}
        <div className="flex  justify-center items-center  w-full  md:p-3 m-3 md:m-4 ">
          <Heading
            bgText={"Works"}
            headTextWhite={"my"}
            headTextOrenge={"portfolio"}
          />
        </div>

        <div className=" text-white w-full">
          <div className="pb-6">
            <h2 className="text-center text-xl font-semibold  ">MY Works</h2>
          </div>

          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
            {myWorks &&
              myWorks.map((item, index) => (
                <WorkCard
                  index={index}
                  key={item.id}
                  image={item.image}
                  about={item.about}
                  onClick={() => handleWorkClick(item)}
                />
              ))}
          </div>
        </div>
      </div>

      {selectedWork &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="modal-content w-[90%] sm:w-[80%] md:w-1/2 flex flex-col items-center bg-mid-gray p-6 rounded-lg relative">
              <h3 className="text-3xl text-primary-light mb-4 font-semibold mt-4">
                {selectedWork.about}
              </h3>

              <div className="mb-4 w-full gap-5 text-sm">
                <div className="flex items-start justify-around mb-4 md:mb-0 font-light flex-col md:flex-row text-white">
                  <p className="flex items-center mb-2 md:mb-0 justify-between w-[14%]">
                    Language:
                  </p>
                  <span className="font-semibold w-[80%]">
                    {selectedWork.techs}
                  </span>
                </div>

                <div className="flex items-start mt-1 justify-around font-light flex-col md:flex-row text-white">
                  <p className="flex items-center mb-2 md:mb-0 justify-between w-[14%]">
                    Preview:
                  </p>
                  <Link
                    className="underline text-primary-light w-[80%]"
                    target="_blank"
                    rel="noopener noreferrer"
                    to={selectedWork.url}
                  >
                    Click here to view the site.
                  </Link>
                </div>
              </div>

              <img
                src={`./${selectedWork.image}`}
                alt={selectedWork.about}
                className="w-full h-auto object-cover rounded-md"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white border px-2 py-1 rounded-md"
              >
                ✕
              </button>
            </div>
          </div>,
          document.getElementById("modal-root") // The modal is rendered outside the main root
        )}
    </section>
  );
};

export default Portfolio;
