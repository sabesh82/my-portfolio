import React, { useState } from "react";
import RevealOnScroll from "./../RevealOnScroll";
import emailjs from "emailjs-com";
import { SlLocationPin } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! someting went wrong.please try again"));
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-25 relative"
    >
      <RevealOnScroll>
        <div className="w-full px-4">
          <h2 className="w-full text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-white inline-block text-transparent bg-clip-text">
            Contact Me
          </h2>

          <div className="max-w-xl mx-auto">
            <form className="w-full space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:bg-purple-500/10"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:bg-purple-500/10"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <textarea
                name="message"
                rows={6}
                required
                value={formData.message}
                placeholder="Your Message"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400  focus:bg-purple-500/10"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded border-2 border-white/50 hover:border-white/20 transition duration-200 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5 pt-11 text-center px-4">
          {/*location*/}
          <div className="flex items-center space-x-2">
            <SlLocationPin />
            <p className="text-xl">Chilaw, Sri Lanka</p>
          </div>

          <div className="flex items-center space-x-2">
            <FaPhone />
            <p className="text-xl">071 999 8363</p>
          </div>

          <div className="flex items-center space-x-2">
            <MdOutlineMail />
            <p className="text-xl">sabesh769@gmail.com</p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
