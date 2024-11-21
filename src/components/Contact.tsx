import contactImg from "../assets/contact.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full sm:mt-64 min-h-screen bg-gray-200 flex flex-col sm:flex-row lg:flex-row justify-center items-center py-10 gap-6 sm:gap-12 lg:gap-16"
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
          id="form-box"
          className="w-full bg-transparent flex flex-col gap-4"
        >
          <input
            type="text"
            className="w-full text-white bg-slate-900 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-lg border-none font-ubuntu"
            placeholder="Enter your full name here"
          />
          <div className="text-red-500 text-sm"></div>

          <div className="w-full flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-1/2 text-white bg-slate-900 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-lg border-none font-ubuntu"
            />
            <div className="text-red-500 text-sm"></div>

            <input
              type="text"
              placeholder="Enter your mobile number here"
              className="w-full sm:w-1/2 text-white bg-slate-900 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-lg border-none font-ubuntu"
            />
            <div className="text-red-500 text-sm"></div>
          </div>

          <textarea
            className="w-full text-white bg-slate-900 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-lg border-none font-ubuntu"
            placeholder="Enter your message"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-white text-black px-6 py-3 md:py-4 lg:py-5 w-full rounded-md font-semibold text-md lg:text-lg font-ubuntu"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
