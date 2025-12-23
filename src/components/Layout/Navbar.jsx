import { useState, useEffect } from "react";
import GooeyNav from "../ui/nav";
import ThemeToggle from "../ui/ThemeToggle";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const AppNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero", icon: <FaHome size={20} /> },
    { label: "About", href: "#about", icon: <FaUser size={20} /> },
    { label: "Skills", href: "#skills", icon: <FaCode size={20} /> },
    { label: "Projects", href: "#projects", icon: <FaBriefcase size={20} /> },
    { label: "Contact", href: "#contact", icon: <FaEnvelope size={20} /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 hidden md:block ${
          isScrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 mt-2 p-[-20px]">
              <a
                href="/"
              >
                <img src="/public/assets/Y.png" alt="Logo" 
                className="w-20 bg-[#4a48c1] rounded-[50px]
                 dark:bg-transparent" />
             </a>
            </div>

            {/* Desktop Menu - Centered GooeyNav */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
              <div className="my-8">
                <GooeyNav
                  items={navItems}
                  particleCount={10}
                  particleDistances={[80, 10]}
                  particleR={10}
                  initialActiveIndex={0}
                />
              </div>
            </div>

            {/* Right Side: Theme Toggle */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar (Logo & Theme Toggle) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-4 flex justify-between items-center bg-white/80 dark:bg-black/80 backdrop-blur-md">
              <a
                href="/"
              >
                <img src="/src/assets/Y.png" alt="Logo" 
                className="w-15 bg-[#4a48c1] rounded-[50px]
                 dark:bg-transparent" />
             </a>
            
        <ThemeToggle />
      </div>

      {/* Mobile Bottom Floating Navbar */}
      <div className=" md:hidden fixed
       bottom-10 left-1/2 transform -translate-x-1/2 
      z-9999 w-auto">
        <div className="flex items-center gap-1 bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-lg rounded-full px-4 py-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-white/10 rounded-full transition-all duration-300"
              aria-label={"item.label"}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppNavbar;
