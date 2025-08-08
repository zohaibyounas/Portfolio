import { useState, useEffect } from "react";
import Pic from "../assets/pic.jpeg";
import { HiArrowCircleRight } from "react-icons/hi";

const Home = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Text parts in sequence
  const texts = [
    "Hi, my name is",
    "Zohaib Younas",
    " I am Full‑Stack Web Developer",
    "I am a versatile Full‑Stack Web Developer specializing in both front‑end and back‑end development. My technical expertise spans HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, enabling me to design and build scalable, high‑performance web applications from concept to deployment.I also have hands‑on experience in Shopify development, creating customized e‑commerce solutions tailored to client needs. With a strong focus on responsive design and user experience, I craft visually appealing, mobile‑friendly interfaces that seamlessly blend functionality and aesthetics.Passionate about delivering clean, efficient, and maintainable code, I bring static designs to life with dynamic, interactive features that engage users across all platforms. Whether developing complex back‑end architectures or refining front‑end interactions, my goal is to create robust, user‑centered solutions that drive results.",
  ];

  const [displayedText, setDisplayedText] = useState(["", "", "", ""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (currentLine >= texts.length) return;

    const words = texts[currentLine].split(" ");

    if (currentWordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const newText = [...prev];
          newText[currentLine] =
            (newText[currentLine] ? newText[currentLine] + " " : "") +
            words[currentWordIndex];
          return newText;
        });
        setCurrentWordIndex((prev) => prev + 1);
      }, 150); // typing speed

      return () => clearTimeout(timeout);
    } else {
      const lineTimeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentWordIndex(0);
      }, 10); // delay before next line starts

      return () => clearTimeout(lineTimeout);
    }
  }, [currentWordIndex, currentLine]);

  return (
    <div
      className="w-full pt-32 sm:pt-52 bg-black text-white relative z-10"
      id="home"
    >
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center h-full">
        <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between">
          {/* Text Container */}
          <div className="w-full sm:w-2/3 mt-4 sm:mt-0 sm:mr-12 text-lg text-center sm:text-left relative z-20">
            <p className="text-pink-500 text-lg sm:text-xl mb-2">
              {displayedText[0]}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {displayedText[1]}
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-300 mt-2">
              {displayedText[2]}
            </h2>
            <p className="text-gray-400 py-6 leading-relaxed max-w-[700px] mx-auto sm:mx-0">
              {displayedText[3]}
            </p>
            {currentLine >= texts.length && (
              <div className="relative z-20">
                <button
                  onClick={scrollToWork}
                  className="group relative text-white bg-pink-600 border-2 border-pink-600 px-6 py-3 my-4 flex items-center rounded-md transition-all duration-500 hover:bg-pink-700 hover:border-pink-700"
                >
                  <span className="relative z-10">View Work</span>
                  <span className="ml-3 group-hover:rotate-90 duration-300 relative z-10">
                    <HiArrowCircleRight />
                  </span>
                  <span className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-30 transition-all duration-500"></span>
                </button>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative animate-float z-10 ">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <img
              className="relative rounded-full mb-6 sm:mb-0 sm:ml-16 w-[250px] sm:w-[300px] lg:w-[350px] border-4 border-pink-500 shadow-lg hover:scale-105 transition-transform duration-500"
              src={Pic}
              alt="Profile Pic"
            />
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
