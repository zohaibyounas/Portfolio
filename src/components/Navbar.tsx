import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      <div>
        {/* Make Zohaib Younas scroll to the Home section */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <h1 className="text-2xl font-bold">
            <span className="text-white">Zohaib</span>{" "}
            <span className="text-yellow-500">Younas</span>
          </h1>
        </Link>
      </div>

      {/**menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-500"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-500"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-500"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-500"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/**hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/**mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-lg">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-lg">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-6 text-lg">
          <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-lg">
          <Link to="work" smooth={true} duration={500} onClick={handleClick}>
            Work
          </Link>
        </li>
        <li className="py-6 text-lg">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>

      {/**social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="https://www.linkedin.com/in/zohaib-younas-536755258/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="https://github.com/zohaibyounas"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="mailto:zohaiby737@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="/Zohaib_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
