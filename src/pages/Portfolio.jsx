import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import WorkCard from "../components/WorkCard/WorkCard";

const Portfolio = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const myWorks = [
    {
      id: 1,
      image: "cofee-cup.png",
      about: "Coffee Website",
      techs:
        "React.js, React Router, Tailwind CSS, Axios, JWT, Node.js, Express.js, MongoDB, Mongoose",
      url: "https://cup-coffee-frontend.onrender.com/",
    },
    {
      id: 2,
      image: "chat-app.png",
      about: "Chatting App",
      techs:
        "React.js, Tailwind CSS, Axios, JWT, Express.js, MongoDB, Mongoose, Node.js, Socket.IO, Zustand",
      url: "https://mern-chat-app-8my5.onrender.com/",
    },
    {
      id: 3,
      image: "zentry.png",
      about: "Zentry",
      techs: "React.js, Tailwind CSS, Vite, gsap",
      url: "https://zentry-v1.netlify.app/",
    },
    {
      id: 4,
      image: "logo-room.png",
      about: "Logo Room",
      techs:
        "React.js, Tailwind CSS, Vite, ShadCN UI, Radix UI, Lucide Icons, html2canvas",
      url: "https://logo-loom.onrender.com/",
    },
    {
      id: 5,
      image: "media-player.png",
      about: "Media Player",
      techs:
        "React.js, Bootstrap, React Router, Axios, React Toastify, UUID, React Feather",
      url: "https://media-player-applicaion.netlify.app/",
    },
    {
      id: 6,
      image: "nikee.png",
      about: "Nikee frontend",
      techs: "React, Tailwind CSS, React Router, Vite",
      url: "https://nike-websitee.netlify.app/",
    },
    {
      id: 7,
      image: "calculator.png",
      about: "Simple Interest Calculator",
      techs: "React.js, Bootstrap, React Router DOM",
      url: "https://simple-interestapp.netlify.app/",
    },
    {
      id: 8,
      image: "notes-app.png",
      about: "Notes App",
      techs:
        "React.js, Tailwind CSS, React Router, Axios, JWT, Express.js, MongoDB, Mongoose, Node.js",
      url: "https://notes-app-frontend-s44d.onrender.com/",
    },
    {
      id: 9,
      image: "portfolio-img.png",
      about: "Portfolio",
      techs:
        "React.js, Tailwind CSS, React Router, Axios, JWT, Express.js, MongoDB, Mongoose, Node.js",
      url: "https://sreerag-p.netlify.app/",
    },
  ];

  const [selectedWork, setSelectedWork] = useState(null);

  const handleWorkClick = (work) => setSelectedWork(work);
  const closeModal = () => setSelectedWork(null);

  useEffect(() => {
    document.body.style.overflow = selectedWork ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedWork]);

  return (
    <section
      className="w-full py-12 px-4 md:px-12 text-white flex flex-col gap-10 items-center bg-black min-h-screen"
      id="portfolio"
      data-aos="fade-up"
    >
      {/* Heading */}
      <div className="text-center w-full">
        <Heading bgText="Works" headTextWhite="my" headTextOrenge="portfolio" />
        <h2 className="text-xl font-semibold mt-4">MY WORKS</h2>
      </div>

      {/* Work Grid */}
    <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {myWorks.map((item, index) => (
    <div
      key={item.id}
      className="rounded-xl bg-white/5 border border-white/20 backdrop-blur-md 
                 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <WorkCard
        index={index}
        image={item.image}
        about={item.about}
        onClick={() => handleWorkClick(item)}
      />
    </div>
  ))}
</div>


      {/* Modal */}
      {selectedWork &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
            <div
              className="w-[90%] sm:w-[80%] md:w-1/2 flex flex-col items-center 
                            bg-white/5 border border-white/20 backdrop-blur-md 
                            p-6 rounded-lg relative text-white shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {selectedWork.about}
              </h3>

              <div className="w-full text-sm space-y-3 mb-4">
                <div className="flex flex-col md:flex-row">
                  <p className="font-light w-1/3">Language:</p>
                  <span className="font-medium w-full">
                    {selectedWork.techs}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row">
                  <p className="font-light w-1/3">Preview:</p>
                  <Link
                    to={selectedWork.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-primary-light w-full"
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
                className="absolute top-2 right-2 text-white bg-white/10 hover:bg-white/20 border px-2 py-1 rounded-md"
              >
                ✕
              </button>
            </div>
          </div>,
          document.getElementById("modal-root")
        )}
    </section>
  );
};

export default Portfolio;
