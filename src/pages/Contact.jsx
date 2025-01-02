import React from "react";
import Heading from "../components/Heading/Heading";
import {
  FaEnvelopeOpen,
  FaGithub,
  FaLinkedin,
  FaMap,
  FaPhoneSquare,
  FaTwitter,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import ContactForm from "../components/ContactForm/ContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="w-full  relative flex items-center justify-center bg-black " data-aos="fade-up">
      {/* CONTAINER  */}
      <div className="max-w-2xl pb-10  lg:max-w-full md:py-8  mx-auto w-[96%] px-4 lg:px-10 pr-4 flex-col  justify-start lg:gap-12 min-h-screen flex items-center">
        {/* CONTACT HEADER */}
        <div className="flex  justify-center items-center  w-full  md:p-3 m-3 md:m-5 ">
          <Heading
            bgText={"connect"}
            headTextWhite={"get in"}
            headTextOrenge={"touch"}
          />
        </div>

        {/* COTACT */}
        <div className="flex pb-4  flex-col lg:flex-row  w-full items-start  justify-between gap-5 text-white px-1 py-2">
          <div className="lg:w-[30%]  flex flex-col items-start justify-start gap-4">
            <div className="">
              <h2 className="font-bold text-white pb-3 text-2xl">Contact Me</h2>
              <p className="pb-3 leading-6 text-[15px]">
                If you're looking for a dedicated MERN Stack developer to bring
                your ideas to life, I would love to connect with you!
              </p>
            </div>

            <div className="flex flex-col gap-3 ">

              <div className="flex items-start gap-3">
                <FaMap className="text-5xl  text-primary" />
                <div>
                  <p className="uppercase text-light-gray">Address Point</p>
                  <Link className="text-white font-medium no-underline ">
                    Kondotty malappuram, kerala india ,673641
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelopeOpen className="text-4xl text-primary" />
                <div>
                  <p className="uppercase text-light-gray">mail me</p>
                  <Link className="text-white font-medium no-underline ">
                    psreerag@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneSquare className="text-4xl text-primary" />
                <div>
                  <p className="uppercase text-light-gray">call me</p>
                  <Link className="text-white font-medium no-underline">
                    +91 7306259602
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 mt-2 text-xl">
              <Link
                target="_blank"
                to={"https://github.com/sreeragp69"}
                className="p-3 bg-gray rounded-full hover:bg-primary hover:text-white duration-500 ease-in-out transition-colors"
              >
                <FaGithub />
              </Link>

              <Link
                target="_blank"
                to={"https://www.linkedin.com/in/sreerag-p/"}
                className="p-3 bg-gray rounded-full hover:bg-primary hover:text-white duration-500 ease-in-out transition-colors"
              >
                <FaLinkedin />
              </Link>

              <Link
                target="_blank"
                to={"https://www.instagram.com/s.r.e.e__rag/"}
                className="p-3 bg-gray rounded-full hover:bg-primary hover:text-white duration-500 ease-in-out transition-colors"
              >
                <AiFillInstagram />
              </Link>

              <Link
                target="_blank"
                to={"https://x.com/Sree_rag_p"}
                className="p-3 bg-gray rounded-full hover:bg-primary hover:text-white duration-500 ease-in-out transition-colors"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[69%] text-white flex flex-col gap-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
