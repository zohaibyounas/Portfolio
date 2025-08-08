import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experties = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const handleScroll = () => {
      const progressBars =
        document.querySelectorAll<HTMLDivElement>(".progress-bar");

      progressBars.forEach((bar) => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        const percentage = bar.getAttribute("data-percentage");

        if (isVisible && percentage) {
          bar.style.width = `${percentage}%`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const expertiseData = [
    { name: "React Js", color: "bg-pink-600", percentage: 85 },
    { name: "Tailwind CSS", color: "bg-blue-600", percentage: 95 },
    { name: "Next Js", color: "bg-green-600", percentage: 70 },
    { name: "JavaScript", color: "bg-yellow-500", percentage: 90 },
  ];

  return (
    <div className="bg-black py-20 text-white relative z-30" id="expertise">
      <section className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold border-b-4 border-pink-600 inline-block pb-2">
            My Expertise
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            A visual representation of my proficiency in key technologies.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {expertiseData.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500 z-0"></div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center mt-4 relative z-10">
                {item.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-6 mt-6 relative overflow-hidden z-10">
                <div
                  className={`progress-bar ${item.color} h-6 rounded-full relative z-10`}
                  data-percentage={item.percentage}
                  style={{
                    width: "0%", // animated on scroll
                    transition: "width 2s ease-in-out",
                  }}
                ></div>
                <span className="absolute right-2 top-0 text-sm text-gray-300 font-bold z-10">
                  {item.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experties;
