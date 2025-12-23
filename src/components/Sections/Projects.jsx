import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive dashboard for managing products, orders, and customers with real-time data visualization.",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
      tech: ["React", "Tailwind CSS", "Recharts"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "A drag-and-drop task manager inspired by Kanban boards, featuring local storage persistence.",
      image: "https://flowbite.com/docs/images/blog/image-2.jpg",
      tech: ["React", "DnD Kit", "Flowbite"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Forecast",
      description:
        "Minimalist weather application providing accurate forecasts using the OpenWeatherMap API.",
      image: "https://flowbite.com/docs/images/blog/image-3.jpg",
      tech: ["React", "API Integration", "Chart.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Clone",
      description:
        "A responsive social media feed with infinite scroll, like functionality, and dark mode support.",
      image: "https://flowbite.com/docs/images/blog/image-4.jpg",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website (this one!) built to showcase my skills and projects.",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg", // Placeholder
      tech: ["React", "Vite", "Flowbite"],
      github: "#",
      demo: "#",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with room support and message history.",
      image: "https://flowbite.com/docs/images/blog/image-2.jpg",
      tech: ["Firebase", "React", "Context API"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-transparent transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one was a unique
            challenge that helped me grow as a developer.
          </p>
        </div>

        <div className="relative overflow-hidden w-full">
          {/* Gradient Masks for smooth fade effect at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-gray-50 to-transparent z-10 dark:from-gray-900 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-gray-50 to-transparent z-10 dark:from-gray-900 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div
            className="flex gap-8 animate-scrollP"
            style={{
              width: "max-content",
            }}
          >
            {/* Double the list to create seamless infinite scroll */}
            {[...projects, ...projects].map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="w-[400px] shrink-0 group relative"
              >
                <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                  <a href="#">
                    <img
                      className="rounded-t-lg w-full h-48 object-cover"
                      src={project.image}
                      alt={project.title}
                    />
                  </a>
                  <div className="flex flex-col flex-1 p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {project.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.github}
                        className="flex-1 inline-flex items-center justify-center px-3
                        py-2 text-sm font-medium text-center border rounded-lg 
                          focus:ring-4 focus:outline-none bg-gray-800 
                           text-white border-gray-600 hover:bg-gray-700
                        transition-all duration-300     hover:border-gray-700 focus:ring-gray-700"
                      >
                        <FaGithub className="mr-2 h-4 w-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex-1
                         inline-flex items-center
                          justify-center px-3 py-2 text-sm font-medium 
                          text-center text-white hover:bg-[#4a48c2]
                bg-[#4a48c2]/90 transition-all duration-300
                           hover:bg-linear-to-bl focus:ring-4 
                           focus:outline-none focus:ring-blue-300
                            dark:focus:ring-blue-800 rounded-lg"
                      >
                        <FaExternalLinkAlt className="mr-2 h-3 w-3" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
