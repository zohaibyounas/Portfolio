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
  return (
    <div className="w-full h-screen  bg-[#0a192f] text-gray-300 " id="skills">
      {/**container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4 text-xl">
            These are the technologies I've worked with.
          </p>
        </div>
        <div className="w-full grid  grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="Html-icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="Html-icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="Html-icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Html-icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="Html-icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="Html-icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={BootStrap} alt="Html-icon" />
            <p className="my-4">BootStrap</p>
          </div>
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Html-icon" />
            <p className="my-4">Mongo</p>
          </div>
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="Html-icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-6" src={express} alt="Html-icon" />
            <p className="my-4">Express</p>
          </div>
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-4" src={next} alt="Html-icon" />
            <p className="my-4">Next Js</p>
          </div>
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={supabase} alt="Html-icon" />
            <p className="my-4">Supabase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
