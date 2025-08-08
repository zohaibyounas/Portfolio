import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/Worktime.gif";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animate every time on scroll
    });
    AOS.refresh(); // force AOS to recalculate positions
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-black text-white pt-24 scroll-mt-24"
      id="about"
    >
      <div className="flex flex-col justify-center items-center w-full h-full py-16">
        {/* Header Section */}
        <div
          className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-8"
          data-aos="fade-right"
        >
          <div className="sm:text-right pb-4 pl-4">
            <p className="text-4xl font-bold inline text-white border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1130px] w-full grid sm:grid-cols-2 gap-12 px-6">
          {/* Text Section */}
          <div
            className="order-2 sm:order-1 text-center sm:text-left text-lg leading-relaxed space-y-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p
              className="text-gray-300"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              I am a versatile{" "}
              <span className="text-pink-500 font-semibold">
                Full‑Stack Web Developer
              </span>{" "}
              specializing in both front‑end and back‑end development. My
              technical expertise spans{" "}
              <span className="text-pink-400">
                HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB
              </span>
              , enabling me to design and build scalable, high‑performance web
              applications from concept to deployment.
            </p>

            <p
              className="text-gray-300"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              I also have professional experience with{" "}
              <span className="text-pink-400">Shopify development</span>,
              creating tailored e‑commerce solutions to meet unique business
              needs. With a strong focus on responsive design and user
              experience, I deliver visually appealing, mobile‑friendly
              interfaces that seamlessly blend functionality and aesthetics.
            </p>

            <p
              className="text-gray-300"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Passionate about delivering clean, efficient, and maintainable
              code, I bring static designs to life with dynamic, interactive
              features that engage users across all platforms.
            </p>
          </div>

          {/* Image Section */}
          <div
            className="order-1 sm:order-2 flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute -inset-3 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
              <img
                src={img1}
                alt="Working Illustration"
                className="relative rounded-2xl w-full md:w-full object-cover shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
