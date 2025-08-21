import {
  FaMapMarkedAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { IoTime } from "react-icons/io5";

const Footers = () => {
  return (
    <>
      {/* Top Footer Section */}
      <section className="w-full bg-[#0a192f] relative overflow-hidden m-auto grid lg:grid-cols-3 grid-col-1 justify-between items-start lg:gap-28 gap-16 lg:p-20 p-10">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a192f] to-black opacity-60 z-0"></div>

        {/* Left Column */}
        <div className="flex flex-col justify-center items-start gap-10 relative z-10 animate-fade-right">
          <h1 className="text-white font-semibold font-ubuntu text-[40px] leading-[50px]">
            Get in touch!
          </h1>
          <p className="bg-yellow-500 px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            Get Started Now
          </p>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col justify-center items-start gap-10 relative z-10 animate-fade-up">
          <h1 className="text-white text-2xl font-ubuntu font-semibold">
            Contact Information
          </h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="flex justify-center items-center gap-3 hover:text-yellow-400 transition-all duration-300">
              <FaMapMarkedAlt className="text-white size-8" />
              <span className="text-[17px] font-ubuntu text-slate-100">
                First Floor, Zeeshan Arcade, Office No, 2, Street 49, G-13/2
                Islamabad, 44220
              </span>
            </p>
            <p className="flex justify-center items-center gap-3 hover:text-yellow-400 transition-all duration-300">
              <FaPhoneVolume className="text-white size-8" />
              <span className="text-[17px] font-ubuntu text-slate-100">
                03368865717
              </span>
            </p>
            <p className="flex justify-center items-center gap-3 hover:text-yellow-400 transition-all duration-300">
              <IoIosMailOpen className="text-white size-8" />
              <span className="text-[17px] font-ubuntu text-slate-100">
                zohaiby737@gmail.com
              </span>
            </p>
            <p className="flex justify-center items-center gap-3 hover:text-yellow-400 transition-all duration-300">
              <IoTime className="text-white size-8" />
              <span className="text-[17px] font-ubuntu text-slate-100">
                9AM to 6PM
              </span>
            </p>
          </div>
        </div>

        {/* Right Column (Newsletter Form) */}
        <form className="relative z-10 animate-fade-left">
          <div className="flex flex-col justify-center items-start gap-6">
            <h1 className="text-white text-2xl font-ubuntu font-semibold">
              Subscribe Newsletter
            </h1>
            <div className="flex flex-col justify-center items-start gap-6 w-full">
              <input
                type="email"
                placeholder="Enter your valid email"
                className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-yellow-500 px-6 py-4 rounded-xl text-[17px] font-semibold font-ubuntu hover:bg-white hover:text-black transition-all duration-300"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* Bottom Footer Section */}
      <section className="w-full bg-black border-t border-slate-700 grid lg:grid-cols-3 grid-cols-1 justify-between items-center lg:gap-28 gap-8 px-6 lg:px-20 py-6">
        {/* Left */}
        <div className="text-center lg:text-left">
          <h1 className="text-white text-[15px] font-ubuntu">
            Copyright &copy; 2025, personal-site, All Rights Reserved
          </h1>
        </div>

        {/* Middle */}
        <div className="text-center">
          <p className="text-white text-2xl font-ubuntu font-bold">
            Zohaib
            <span className="text-yellow-500 italic"> Younas</span>
          </p>
        </div>

        {/* Right (Social Links) */}
        <div className="flex lg:justify-end justify-center items-center gap-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100048721413491"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-blue-600 size-6 hover:scale-110 transition-transform duration-300" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/call_me_zabii6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-500 size-6 hover:scale-110 transition-transform duration-300" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/923368865717"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-green-500 size-6 hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Footers;
