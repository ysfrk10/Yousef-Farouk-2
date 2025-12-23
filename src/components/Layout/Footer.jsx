import { FaGithub, FaLinkedin,  FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between mx-5">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white text-gray-900">
              Yousef Farouk
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-6">
            <li>
              <a href="#about" className="hover:underline transition-all duration-300 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline transition-all duration-300 hover:text-blue-500">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline transition-all duration-300 hover:text-blue-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline transition-all duration-300 hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between mx-10 ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="hover:underline">
              Yousef Farouk
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-6">
            <a
              href="https://github.com/ysfrk10"
              target="_blank"
              className="text-gray-500 transition-all duration-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub size={20} />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
               href="https://www.linkedin.com/in/yousef-farouk-dev/"
              target="_blank"
              className="text-gray-500 transition-all duration-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin size={20} />
              <span className="sr-only">LinkedIn account</span>
            </a>
            <a
               href="https://www.facebook.com/yousef.farouk.372/"
              target="_blank"
              className="text-gray-500 transition-all duration-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebook  size={20} />
              <span className="sr-only">Twitter page</span>
            </a>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
