const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-transparent transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Passionate about creating digital experiences
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
             I’m a Frontend Developer focused on building responsive, high-performance web applications with clean and maintainable code. 
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
             I specialize in React and modern JavaScript, turning complex requirements into intuitive and visually appealing user interfaces. I care deeply about performance, scalability, and user experience.
            </p>

           
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg rotate-6 opacity-20"></div>
              {/* Manual Card Implementation */}
              <div className="max-w-sm relative z-10 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 w-full">
                <div className="flex flex-col items-center pb-10 pt-10 px-4">
                  <div className="w-[60%] h-[60%] mb-3 rounded-full shadow-lg overflow-hidden bg-gray-200">
                    <img
                      src="/public/assets/profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Yousef Farouk
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Frontend Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
