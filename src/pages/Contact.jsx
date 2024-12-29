import React from "react";
import Heading from "../components/Heading/Heading";
import {
  FaEnvelopeOpen,
  FaGithub,
  FaPhone,
  FaPhoneSquare,
  FaTwitter,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import ContactForm from "../components/ContactForm/ContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="w-full  relative flex items-center justify-center bg-black ">
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
        <div className="flex pb-4 flex-col lg:flex-row  w-full items-start  justify-between gap-5 text-white px-1 py-2">
          <div className="lg:w-[30%]  flex flex-col items-start justify-start gap-4">
            <div className="">
              <h2 className="font-bold text-white pb-3 text-2xl">
                DON'T BE SHY!
              </h2>
              <p className="pb-3 leading-7">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
            </div>

            <div className="flex flex-col gap-3 ">
              <div className="flex items-center gap-3">
                <FaEnvelopeOpen className="text-4xl text-primary" />
                <div>
                  <p className="uppercase text-light-gray">mail me</p>
                  <Link className="text-white font-bold no-underline ">
                    psreerag@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneSquare className="text-4xl text-primary" />
                <div>
                  <p className="uppercase text-light-gray">call me</p>
                  <Link className="text-white font-bold no-underline">
                    +216 21 184 010
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 mt-2 text-xl">
              <div className="p-3 bg-gray rounded-full">
                <FaGithub />
              </div>

              <div className="p-3 bg-gray rounded-full">
                <FaTwitter />
              </div>

              <div className="p-3 bg-gray rounded-full">
                <AiFillInstagram />
              </div>

              <div className="p-3 bg-gray rounded-full">
                <SiLeetcode />
              </div>
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
