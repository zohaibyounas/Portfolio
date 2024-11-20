import {
  FaMapMarkedAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { IoTime } from "react-icons/io5";
const Footers = () => {
  return (
    <>
      <section
        className="w-full bg-black m-auto grid lg:grid-cols-3 grid-col-1
      justify-between items-start lg:gap-28 gap-16 lg:p-20 p-10     "
      >
        <div className="flex flex-col justify-center items-start gap-10  ">
          <h1 className="text-white font-semibold font-ubuntu text-[40px] leading-[50px]">
            Get in touch!
          </h1>
          <p className="bg-yellow-500 px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-white hover:text-black">
            Get Started Now
          </p>
        </div>
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white text-2xl font-ubuntu font-semibold">
            Contact Information
          </h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="flex justify-center items-center gap-3">
              <FaMapMarkedAlt className="text-limegreen size-8" />
              <span className="text-[17px] font-ubuntu text-slate-100">
                First Floor, Zeeshan Arcade, Office No, 2, Street 49, G-13/2
                Islamabad, 44220{" "}
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <FaPhoneVolume className="text-limegreen size-8" />
              <span className="text-[17px] font-ubuntu text-slate-100">
                03368865717
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <IoIosMailOpen className="text-limegreen size-8" />
              <span className="text-[17px] font-ubuntu text-slate-100">
                zohaiby737@gmail.com
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <IoTime className="text-limegreen size-8" />
              <span className="text-[17px] font-ubuntu text-slate-100">
                9AM to 6PM
              </span>
            </p>
          </div>
        </div>
        <form>
          <div className="flex flex-col justify-center items-start gap-6">
            <h1 className="text-white text-2xl font-ubuntu font-semibold">
              Subscribe Newsletter
            </h1>
            <p className="text-[16px] font-ubuntu text-slate-100">
              {/* Loram ipsum dolar sit amet consectetur adipisicing elit. At,ex. */}
            </p>
            <div className="flex flex-col justify-center items-start gap-6 w-full">
              <input
                type="email"
                placeholder="Enter your valid email"
                className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu text-white"
              />
              <button
                type="submit"
                className="bg-yellow-500 px-6 py-4 rounded-xl text-[17px] font-semibold font-ubuntu hover:bg-white hover:text-black"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </form>
      </section>

      <section className="w-full bg-black m-auto border-y-2 border-slate-600 grid lg:grid-cols-3 grid-cols-1 justify-between items-center lg:gap-28 gap-8 px-20 py-6">
        <div>
          <h1 className="text-white text-[17px] font-ubuntu text-center">
            Copyright &copy; 2024, personal-site, All Rights Reserved
          </h1>
        </div>
        <div>
          <p className="text-white text-3xl text-center font-ubuntu font-bold">
            Zohaib
            <span className="text-yellow-500 italic"> Younas</span>
          </p>
        </div>
        <div className="flex lg:justify-end justify-center items-center gap-4">
          <a href="https://cdn.dribbble.com/users/11475909/screenshots/20343551/media/1169e0e11347c3fa05981a450bb1ccdf.png?resize=400x300&vertical=center">
            {" "}
            <FaFacebook className="text-blue-600 size-6" />
          </a>
          <FaInstagram className="text-red-300 size-6" />
          <FaYoutube className="text-red-600 size-6" />
          <FaTwitter className="text-blue-400 size-6" />
        </div>
      </section>
    </>
  );
};

export default Footers;
