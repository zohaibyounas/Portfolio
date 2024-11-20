const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen sm:mt-28  bg-gray-200 flex justify-center items-center py-10"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="w-full max-w-3xl flex flex-col justify-center items-center gap-6 bg-black p-6 lg:p-12 rounded-3xl shadow-lg"
      >
        <h1 className="text-white text-3xl sm:text-4xl font-semibold font-ubuntu text-center">
          Let's Contact Us
        </h1>
        <form
          id="form-box"
          className="w-full bg-transparent flex flex-col gap-4"
        >
          <input
            type="text"
            className="w-full text-white bg-slate-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg border-none font-ubuntu"
            placeholder="Enter your full name here"
          />
          <div className="text-red-500 text-sm"></div>

          <div className="w-full flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-1/2 text-white bg-slate-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg border-none font-ubuntu"
            />
            <div className="text-red-500 text-sm"></div>

            <input
              type="text"
              placeholder="Enter your mobile number here"
              className="w-full sm:w-1/2 text-white bg-slate-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg border-none font-ubuntu"
            />
            <div className="text-red-500 text-sm"></div>
          </div>

          <textarea
            className="w-full text-white bg-slate-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg border-none font-ubuntu"
            placeholder="Enter your message"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-white text-black px-6 py-3 sm:py-4 w-full rounded-md font-semibold text-md font-ubuntu"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
