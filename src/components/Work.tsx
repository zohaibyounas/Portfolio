import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Image Imports
import Project from "../assets/project.png";
import Proo from "../assets/work.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project0 from "../assets/project0.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";

// Project Data
const projects = [
  {
    img: project0,
    title: "Full Stack Application",
    demo: "https://www.e-passtransfer.de/",
    code: "https://github.com/zohaibyounas/E-PASS-TRANSFER",
  },
  {
    img: project8,
    title: "React JS Application",
    demo: "https://mira-ee.de/",
    code: "https://github.com/zohaibyounas/UpadatedCode-Mira",
  },
  {
    img: project9,
    title: "POS Application",
    demo: "https://pos-office-frontend.vercel.app/",
    code: "https://github.com/zohaibyounas/pos-office-frontend",
  },
  {
    img: project1,
    title: "Next JS Application",
    demo: "https://bokija-site-dsx4.vercel.app/",
    code: "https://github.com/zohaibyounas/bokija-site",
  },
  {
    img: project2,
    title: "Next JS Application",
    demo: "https://bm-sema-next.vercel.app/",
    code: "https://github.com/zohaibyounas/updatedcodesema",
  },
  {
    img: project3,
    title: "React JS Application",
    demo: "https://blogs-site-two.vercel.app/",
    code: "https://github.com/zohaibyounas/Blogs-site",
  },
  {
    img: Proo,
    title: "React JS Application",
    demo: "https://e-store-desinge.vercel.app/",
    code: "https://github.com/zohaibyounas/E-StoreDesinge",
  },
  {
    img: Project,
    title: "React JS Application",
    demo: "https://food-site-wine.vercel.app/",
    code: "https://github.com/zohaibyounas/Food-site",
  },
  {
    img: project4,
    title: "React JS Application",
    demo: "https://www.iwizsol.com/",
    code: "/",
  },
  {
    img: project5,
    title: "React JS Application",
    demo: "https://quidtask.vercel.app/",
    code: "https://github.com/zohaibyounas/quidtask",
  },
  {
    img: project6,
    title: "React JS Application",
    demo: "https://passphotoapp.vercel.app/",
    code: "https://github.com/zohaibyounas/passphotoapp",
  },
  {
    img: project7,
    title: "React JS Application",
    demo: "https://innoit-site.vercel.app/",
    code: "https://github.com/zohaibyounas/Saprise-Consuktancy",
  },
];

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-gray-300 py-20" id="work">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4 text-lg text-gray-400">
            Here’s a selection of my recent projects
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="relative group rounded-lg overflow-hidden shadow-lg shadow-gray-800 transform hover:scale-[1.03] transition-all duration-500"
              data-aos="zoom-in-up"
              data-aos-delay={idx * 100}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${proj.img})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center lg:h-[300px] text-center px-4">
                <span className="text-xl font-semibold">{proj.title}</span>
                <div className="mt-4 flex gap-3">
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-pink-600 rounded-lg text-sm font-semibold hover:bg-pink-700 transition"
                  >
                    Demo
                  </a>
                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg text-sm font-semibold hover:bg-white transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
