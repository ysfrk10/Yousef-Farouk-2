import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaMobileAlt,
  FaServer,
  FaNpm,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: FaReact, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
    { name: "Vite", icon: SiVite, color: "text-purple-500" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    // { name: "VS Code", icon: SiVisualStudioCode, color: "text-blue-500" },
    { name: "Figma", icon: FaFigma, color: "text-purple-400" },
    { name: "Responsive Design", icon: FaMobileAlt, color: "text-cyan-400" },
    { name: "REST APIs", icon: FaServer, color: "text-green-500" },
    { name: "NPM", icon: FaNpm, color: "text-red-500" },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-transparent transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="relative overflow-hidden w-full">
          {/* Gradient Masks */}
        

          {/* Scrolling Container */}
          <div
          className="  flex gap-2 animate-scrollS hover:pause"
            style={{
              width: "fit-content",
            }}
          >
            {/* Double the list for infinite scroll */}
            {[...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="w-48
                p-6 rounded-xl
                 shadow-lg hover:shadow-xl
                  transition-shadow border
                   border-transparent 
                   dark:border-transparent
                    group flex flex-col items-center justify-center gap-4"
              >
                <div
                  className={`p-4 rounded-full bg-gray-50 dark:bg-gray-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors ${skill.color}`}
                >
                  <skill.icon size={40} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
