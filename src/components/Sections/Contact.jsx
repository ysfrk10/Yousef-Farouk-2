import {
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-transparent transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach
            out to me!
          </p>
        </div>

        <div className=" flex justify-between items-center gap-12">
          {/* Contact Info */}
          <div className="flex-col justify-center ite space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="flex  gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  faroukyousef0@gmail.com
                </p>
              </div>
            </div>

            <div className="flex  gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
                <FaPhone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  +20 1119 166 590
                </p>
              </div>
            </div>

            <div className="flex  gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Cairo,Egypt
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* image */}
    <div>
      <img src="public/assets/contact.jpg" alt="Contact" 
      className="w-[400px] rounded-lg" />
    </div>
          {/* <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                </div>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:shadow-md transition-shadow"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                </div>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:shadow-md transition-shadow"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Message
                  </label>
                </div>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:shadow-md transition-shadow"
                  placeholder="Leave a message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
