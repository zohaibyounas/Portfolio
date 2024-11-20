import img1 from "../assets/Worktime.gif";
const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-800">
      <div className="flex flex-col justify-center items-center w-full h-full py-16">
        {/** Header Section */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-8">
          <div className="sm:text-right pb-4 pl-4">
            <p className="text-4xl font-bold inline text-black border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        {/** Content Section */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-32 px-6">
          {/** Text Section */}
          <div className="order-2 sm:order-1 text-center sm:text-left text-lg leading-relaxed">
            <p className="text-gray-700">
              I am a passionate and skilled Frontend Developer with expertise in
              creating dynamic, responsive, and user-friendly web designs. My
              technical proficiency includes HTML, CSS, Bootstrap, Tailwind CSS,
              JavaScript, React.js, and Next.js, enabling me to craft seamless
              digital experiences that prioritize both functionality and
              aesthetics. I specialize in building responsive designs that adapt
              flawlessly across devices, ensuring an engaging experience for
              users on desktops, tablets, and mobile screens.
            </p>
            <p className="text-gray-700 mt-6">
              If you're looking for a dedicated developer to bring your vision
              to life, I'm here to help!
            </p>
          </div>

          {/** Image Section */}
          <div className="order-1 sm:order-2 flex justify-center items-center">
            <img
              src={img1}
              alt="Working Illustration"
              className="rounded-2xl w-[100%] md:w-[100%] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
