import React, { useState } from "react";
import Button from "../Button/Button";
import { FaTelegramPlane } from "react-icons/fa";
import toast from "react-hot-toast";

const ContactForm = () => {
  const API = `https://myportfolio-backend-1.onrender.com`;

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
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.subject || !user.message) {
      toast.error("Please fill out all fields!", toastStyle);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API}/api/form/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message, toastStyle);
        setUser({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong!", toastStyle);
        setError(data.error || "Something went wrong!");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.", toastStyle);
      setError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  const toastStyle = {
    style: {
      border: "1px solid #2F607D",
      padding: "10px",
      color: "#dddddd",
      backgroundColor: "#2F607D",
    },
    iconTheme: {
      primary: "#2F607D",
      secondary: "#dddddd",
    },
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-6 bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-md"
    >
      {/* Name & Email */}
      <div className="flex flex-col sm:flex-row gap-5">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-2.5 rounded-md bg-white/10 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-2.5 rounded-md bg-white/10 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Subject */}
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={user.subject}
        onChange={handleChange}
        required
        className="w-full px-4 py-2.5 rounded-md bg-white/10 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary"
      />

      {/* Message */}
      <textarea
        name="message"
        rows="6"
        placeholder="Message"
        value={user.message}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary resize-none"
      ></textarea>

      {/* Error */}
      {error && <p className="text-red-500 text-sm -mt-2">{error}</p>}

      {/* Button */}
      <div className="w-full flex justify-start">
        <div className="w-[10px]  ">
          <Button
            Icon={FaTelegramPlane}
            text={loading ? "Sending..." : "Send message"}
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
