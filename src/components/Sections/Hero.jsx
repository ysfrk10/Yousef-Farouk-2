import { FaGithub, FaLinkedin, FaFacebook  } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-transparent transition-colors duration-300"
    >
      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-semibold mb-4">
            Frontend Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6 drop-shadow-sm">
            I'm Yousef Farouk
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building  responsive, and performant web experiences with
            modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#projects"
              className="transition-gradient duration-300 ease-in-out text-white
              hover:bg-[#4a48c2]
                bg-[#4a48c2]/90 
                focus:ring-4 focus:outline-none focus:ring-blue-300
                 dark:focus:ring-blue-800 font-medium rounded-xl 
                 text-lg px-8 py-3 text-center"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="transition duration-300 ease-in-out border 
              focus:outline-none focus:ring-4 font-medium rounded-xl
              text-lg px-8 py-3 bg-gray-800 text-white border-gray-600
                hover:bg-gray-700 
                 hover:border-gray-700
                  focus:ring-gray-700"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 justify-center text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/ysfrk10"
              target="_blank"
              className="  hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300  transform hover:scale-110"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/yousef-farouk-dev/"
              target="_blank"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300  transform hover:scale-110"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.facebook.com/yousef.farouk.372/"
              target="_blank"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300  transform hover:scale-110"
            >
              <FaFacebook  size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
