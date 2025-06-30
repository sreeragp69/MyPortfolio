import React, { Suspense, lazy, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = lazy(() => import("../components/Button/Button"));

const Home = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      className="w-full min-h-screen bg-black flex items-center justify-center px-6 py-16"
      id="home"
      data-aos="fade-up"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* TEXT SECTION */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary animate-fade-in-down">
                I'm Sreerag.
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold animate-fade-in-up">
                Full stack Developer
              </h2>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed animate-fade-in-up">
              Aspiring full-stack developer focused on crafting seamless web experiences using the MERN stack — React, Node.js, Express & MongoDB.
            </p>

            <div className="animate-fade-in-up">
              <Link to="/about" aria-label="More about me">
                <Suspense fallback={<div>Loading...</div>}>
                  <Button Icon={FaArrowRight} text=" about me" />
                </Suspense>
              </Link>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative group transition-transform hover:scale-105 duration-500">
            <div className="rounded-3xl p-1 bg-gradient-to-br from-primary to-transparent shadow-xl transform rotate-[-2deg] group-hover:rotate-0 transition-all duration-500">
              <picture>
                <source
                  srcSet="/img-desktop.webp"
                  media="(min-width:1024px)"
                  type="image/webp"
                />
                <img
                  src="/img-mobile.webp"
                  alt="Sreerag Avatar"
                  loading="eager"
                  className="rounded-2xl w-52 md:w-64 lg:w-80 h-52 md:h-64 lg:h-[28rem] object-cover border-4 border-[#252525] shadow-lg"
                />
              </picture>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
