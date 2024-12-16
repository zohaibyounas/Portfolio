import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import contactImg from "../assets/contact.png";
import { useState } from "react";

const Contact = () => {
  const [, setError] = useState(false);
  const [, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handling form submit with proper event type
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // Prepare the data to send to the EmailJS template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_mrwhkle", // Your EmailJS Service ID
        "template_1nxtdvm", // Your EmailJS Template ID
        templateParams, // Pass form data here as an object
        "nAotBHDln0-9aUzza" // Your EmailJS Public Key
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setIsSending(false);
          setFormData({ name: "", email: "", message: "" }); // Clear all state fields
          toast.success("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error); // Log the full error
          setSuccess(false);
          setError(true);
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
        className="w-full sm:mt-96 min-h-screen bg-gray-200 flex flex-col sm:flex-row lg:flex-row justify-center items-center py-10 gap-6 sm:gap-12 lg:gap-16"
      >
        <div className="w-full sm:w-1/2 lg:w-2/5 flex justify-center">
          <img
            src={contactImg}
            alt="Contact"
            className="w-3/4 sm:w-full lg:w-3/4 max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-full sm:w-1/2 lg:w-3/5 max-w-3xl flex flex-col justify-center items-center gap-6 bg-[#0a192f] p-6 md:p-10 lg:p-12 rounded-3xl shadow-lg"
        >
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold font-ubuntu text-center">
            Let's Contact Us
          </h1>
          <form
            onSubmit={handleSubmit}
            id="form-box"
            className="w-full bg-transparent flex flex-col gap-4"
          >
            <input
              type="text"
              className="w-full text-white bg-slate-900 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-lg border-none font-ubuntu"
              placeholder="Enter your full name here"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <div className="text-red-500 text-sm"></div>

            <div className="w-full flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full sm:w-full lg:w-full text-white bg-slate-900 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-lg border-none font-ubuntu"
              />
            </div>

            <textarea
              className="w-full text-white bg-slate-900 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-lg border-none font-ubuntu"
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className="bg-yellow-500 hover:bg-white text-black px-6 py-3 md:py-4 lg:py-5 w-full rounded-md font-semibold text-md lg:text-lg font-ubuntu"
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
