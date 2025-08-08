import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import contactImg from "../assets/contact.png";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_mrwhkle",
        "template_1nxtdvm",
        templateParams,
        "nAotBHDln0-9aUzza"
      )
      .then(
        () => {
          setIsSending(false);
          setFormData({ name: "", email: "", message: "" });
          toast.success("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          setIsSending(false);
          toast.error(
            "There was an error sending your message. Please try again."
          );
        }
      );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />

      <section
        id="contact"
        className="w-full min-h-screen bg-[#0a192f] flex flex-col sm:flex-row justify-center items-center py-16 gap-6 sm:gap-12 lg:gap-16 relative overflow-hidden"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black" />

        {/* Left Image */}
        <div
          className="w-full sm:w-1/2 lg:w-2/5 flex justify-center items-center relative"
          data-aos="fade-right"
        >
          <img
            src={contactImg}
            alt="Contact"
            className="w-3/4 bg-white rounded-md sm:w-full lg:w-3/4 max-w-sm sm:max-w-md lg:max-w-lg object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Contact Form */}
        <div
          className="w-full sm:w-1/2 lg:w-3/5 max-w-3xl flex flex-col justify-center items-center gap-6 bg-[#112240] p-6 md:p-10 lg:p-12 rounded-3xl shadow-lg relative z-10"
          data-aos="fade-left"
        >
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            Get in Touch
          </h1>
          <form
            onSubmit={handleSubmit}
            id="form-box"
            className="w-full bg-transparent flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name here"
              required
              className="w-full text-white bg-slate-900 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-lg border-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="w-full text-white bg-slate-900 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-lg border-none"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              required
              className="w-full text-white bg-slate-900 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-lg border-none"
              rows={5}
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className="bg-yellow-400 hover:bg-white text-black px-6 py-3 md:py-4 lg:py-5 w-full rounded-md font-semibold text-md lg:text-lg transition-all duration-300"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
