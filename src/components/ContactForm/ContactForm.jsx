import React from "react";
import Button from "../Button/Button";
import { FaTelegramPlane } from "react-icons/fa";
const ContactForm = () => {
  return (
    <form className="w-full flex flex-col items-cente lg:items-start justify-center gap-7 mt-9 lg:mt-0">
      <div className="w-full gap-8 lg:gap-4 flex justify-between flex-col lg:flex-row items-center">
        <div className="w-full">
          <input
            className="rounded-full w-full bg-gray outline-none text-white placeholder:text-mid-gray focus:ring-primary focus:ring-1 px-5 py-2.5"
            type="text"
            name="email"
            placeholder="Your name"
          />
        </div>

        <div className="w-full">
          <input
            className="rounded-full  w-full bg-gray outline-none text-white placeholder:text-mid-gray focus:ring-primary focus:ring-1 px-5 py-2.5"
            type="email"
            name="email"
            placeholder="Your email"
          />
        </div>
      </div>

      <div className="w-full">
        <input
          className="rounded-full  w-full bg-gray outline-none text-white placeholder:text-mid-gray focus:ring-primary focus:ring-1 px-5 py-2.5"
          type="text"
          name="subject"
          placeholder="Your subject"
        />
      </div>

      <div className="w-full">
        <textarea
          rows={6}
          className="w-full rounded-3xl bg-gray outline-none text-white placeholder:text-mid-gray focus:ring-primary focus:ring-1 px-5 py-2.5"
          name="message"
          placeholder="Your message"
        ></textarea>
      </div>

      <div>
        <Button Icon={FaTelegramPlane} text={" Send message"} />
      </div>
    </form>
  );
};

export default ContactForm;
