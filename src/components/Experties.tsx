import React, { useEffect } from "react";

const Experties = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach((bar) => {
      const percentage = (bar as HTMLElement).getAttribute("data-percentage");
      if (percentage) {
        (bar as HTMLElement).style.width = `${percentage}%`;
      }
    });
  }, []);

  return (
    <div className="bg-white py-16 mt-24">
      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 border-b-4 border-pink-600 inline-block pb-2">
            My Expertise
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Below is a showcase of my proficiency in various technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/** React Js */}
          <div className="bg-black shadow-md hover:shadow-xl transform hover:scale-105 transition-all h-[200px] duration-300 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-white pt-10">React Js</h3>
            <div className="w-full bg-gray-200 rounded-full h-6 mt-4 relative overflow-hidden">
              <div
                className="progress-bar bg-pink-600 h-6 rounded-full"
                data-percentage="85"
                style={{
                  width: "0%",
                  transition: "width 5s ease-in-out",
                }}
              ></div>
              <span className="absolute right-2 top-0 text-sm text-gray-800 font-bold">
                85%
              </span>
            </div>
          </div>

          {/** Tailwind CSS */}
          <div className="bg-black shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-white pt-10">
              Tailwind CSS
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-6 mt-4 relative overflow-hidden">
              <div
                className="progress-bar bg-blue-600 h-6 rounded-full"
                data-percentage="95"
                style={{
                  width: "0%",
                  transition: "width 5s ease-in-out",
                }}
              ></div>
              <span className="absolute right-2 top-0 text-sm text-gray-800 font-bold">
                95%
              </span>
            </div>
          </div>

          {/** Next Js */}
          <div className="bg-black shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-white pt-10">Next Js</h3>
            <div className="w-full bg-gray-200 rounded-full h-6 mt-4 relative overflow-hidden">
              <div
                className="progress-bar bg-green-600 h-6 rounded-full"
                data-percentage="70"
                style={{
                  width: "0%",
                  transition: "width 5s ease-in-out",
                }}
              ></div>
              <span className="absolute right-2 top-0 text-sm text-gray-800 font-bold">
                70%
              </span>
            </div>
          </div>

          {/** JavaScript */}
          <div className="bg-black shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-white pt-10">
              JavaScript
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-6 mt-4 relative overflow-hidden">
              <div
                className="progress-bar bg-yellow-600 h-6 rounded-full"
                data-percentage="90"
                style={{
                  width: "0%",
                  transition: "width 5s ease-in-out",
                }}
              ></div>
              <span className="absolute right-2 top-0 text-sm text-gray-800 font-bold">
                90%
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experties;
