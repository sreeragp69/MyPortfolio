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
    <section className="w-full min-h-screen bg-black py-16 px-6" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 text-white">
        {/* Heading */}
        <div className="text-center">
          <Heading bgText="connect" headTextWhite="get in" headTextOrenge="touch" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Info */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Let’s Connect</h2>
            <p className="text-gray-300">
              Reach out if you're looking for a MERN stack developer or just want to say hi.
            </p>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <FaMap className="text-primary text-xl mt-1" />
                <p>Kondotty, Malappuram, Kerala, India – 673641</p>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelopeOpen className="text-primary text-xl mt-1" />
                <p>psreerag@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <FaPhoneSquare className="text-primary text-xl mt-1" />
                <p>+91 7306259602</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4 text-xl">
              <Link to="https://github.com/sreeragp69" target="_blank">
                <FaGithub className="hover:text-primary transition" />
              </Link>
              <Link to="https://linkedin.com/in/sreerag-p" target="_blank">
                <FaLinkedin className="hover:text-primary transition" />
              </Link>
              <Link to="https://instagram.com/s.r.e.e__rag" target="_blank">
                <AiFillInstagram className="hover:text-primary transition" />
              </Link>
              <Link to="https://x.com/Sree_rag_p" target="_blank">
                <FaTwitter className="hover:text-primary transition" />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
