import Pic from "../assets/pic.jpeg";
import { HiArrowCircleRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full pt-32 sm:pt-52 bg-gray-100">
      {/** Container */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center h-full">
        <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between">
          {/** Text Container */}
          <div className="w-full sm:w-2/3 mt-4 sm:mt-0 sm:mr-12 text-lg text-center sm:text-left">
            <p className="text-pink-600 text-lg sm:text-xl mb-2">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
              Zohaib Younas
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-600 mt-2">
              I am a Frontend Web Developer.
            </h2>
            <p className="text-gray-700 py-6 leading-relaxed max-w-[700px] mx-auto sm:mx-0">
              Currently, I am focused on building responsive web applications.
              As a front-end developer, I am passionate about crafting
              captivating digital experiences that seamlessly blend form and
              function. With a keen eye for design and a dedication to clean,
              efficient code, I specialize in bringing static designs to life,
              creating dynamic and interactive websites and applications. My
              expertise lies in harnessing the power of HTML, CSS, and
              JavaScript to build responsive and user-friendly interfaces that
              engage and delight users across various platforms and devices.
            </p>
            <div>
              <button className="text-white bg-pink-600 border-2 border-pink-600 px-6 py-3 my-4 flex items-center rounded-md hover:bg-pink-700 hover:border-pink-700 transition-all duration-300">
                View Work
                <span className="ml-3 group-hover:rotate-90 duration-300">
                  <HiArrowCircleRight />
                </span>
              </button>
            </div>
          </div>
          {/** Image */}
          <img
            className="rounded-full mb-6 sm:mb-0 sm:ml-16 w-[250px] sm:w-[300px] lg:w-[350px]"
            src={Pic}
            alt="Profile Pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
