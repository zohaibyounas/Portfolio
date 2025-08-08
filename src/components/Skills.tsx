import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import BootStrap from "../assets/bootstrap.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import node from "../assets/nodeicon.png";
import express from "../assets/express.jpg";
import next from "../assets/next.png";
import supabase from "../assets/supabase.png";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animate every time on scroll
    });
    AOS.refresh(); // recalculate on load
  }, []);

  const skills = [
    { src: HTML, name: "HTML" },
    { src: CSS, name: "CSS" },
    { src: JavaScript, name: "JavaScript" },
    { src: Tailwind, name: "Tailwind CSS" },
    { src: ReactImg, name: "React" },
    { src: GitHub, name: "GitHub" },
    { src: BootStrap, name: "Bootstrap" },
    { src: Mongo, name: "MongoDB" },
    { src: node, name: "Node.js" },
    { src: express, name: "Express" },
    { src: next, name: "Next.js" },
    { src: supabase, name: "Supabase" },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white" id="skills">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="mb-8" data-aos="fade-right">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 text-xl text-gray-300">
            A collection of technologies and tools I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center py-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={index * 100} // delay animation based on index
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>

              <img
                className="w-20 mx-auto transition-transform duration-500 group-hover:scale-110"
                src={skill.src}
                alt={`${skill.name}-icon`}
              />
              <p className="mt-4 text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
