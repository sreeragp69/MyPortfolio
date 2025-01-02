import React, { useState } from "react";
import Button from "../Button/Button";
import { FaTelegramPlane } from "react-icons/fa";
import toast from "react-hot-toast";

const ContactForm = () => {

  const API = `https://myportfolio-backend-1.onrender.com`

  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!user.name || !user.email || !user.subject || !user.message) {
      toast.error("Please fill out all fields!", {
        style: {
          border:"1px solid #2F607D",
          padding: "10px",
          color: "#dddddd",
          backgroundColor: "#2F607D",
        },
        iconTheme: {
          primary: "#2F607D",
          secondary: "#dddddd",
        },
      });

      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      setUser({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message, {
          style: {
            border:"1px solid #2F607D",
            padding: "10px",
            color: "#dddddd",
            backgroundColor: "#2F607D",
          },
          iconTheme: {
            primary: "#2F607D",
            secondary: "#dddddd",
          },
        });
      } else {
        toast.error(data.error || "Something went wrong!", {
          style: {
            border:"1px solid #2F607D",
            padding: "10px",
            color: "#dddddd",
            backgroundColor: "#2F607D",
          },
          iconTheme: {
            primary: "#2F607D",
            secondary: "#dddddd",
          },
        });
        setError(data.error || "Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.", {
        style: {
          border:"1px solid #2F607D",
          padding: "10px",
          color: "#dddddd",
          backgroundColor: "#2F607D",
        },
        iconTheme: {
          primary: "#2F607D",
          secondary: "#dddddd",
        },
      });
      setError("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-cente lg:items-start justify-center gap-7 mt-9 lg:mt-0"
    >
      <div className="w-full gap-8 lg:gap-4 flex justify-between flex-col lg:flex-row items-center">
        <div className="w-full">
          <input
            className="rounded-full w-full bg-gray outline-none text-white placeholder:text-mid-gray focus:ring-primary focus:ring-1 px-5 py-2.5"
            type="text"
            name="name"
            placeholder="Your name"
            onChange={handleChange}
            value={user.name}
            required
          />
        </div>

        <div className="w-full">
          <input
            className="rounded-full  w-full bg-gray outline-none text-white placeholder:text-mid-gray focus:ring-primary focus:ring-1 px-5 py-2.5"
            type="email"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
            value={user.email}
            required
          />
        </div>
      </div>

      <div className="w-full">
        <input
          className="rounded-full  w-full bg-gray outline-none text-white placeholder:text-mid-gray focus:ring-primary focus:ring-1 px-5 py-2.5"
          type="text"
          name="subject"
          placeholder="Your subject"
          onChange={handleChange}
          value={user.subject}
          required
        />
      </div>

      <div className="w-full">
        <textarea
          rows={7}
          className="w-full rounded-3xl bg-gray outline-none text-white placeholder:text-mid-gray focus:ring-primary focus:ring-1 px-5 py-2.5"
          name="message"
          placeholder="Your message"
          onChange={handleChange}
          value={user.message}
          required
        ></textarea>
      </div>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      <div>
        <Button
          Icon={FaTelegramPlane   }
          text={loading ? "Sending..." : "Send message"}
        />
      </div>
    </form>
  );
};

export default ContactForm;
