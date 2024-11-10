const Projects = () => {
  return (
    <section id="projects">
      <main className="bg-gradient-to-r from-blue-500 to-purple-600 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-white text-5xl font-extrabold mb-10">Projects</h1>
          <p className="text-lg text-gray-300 mb-12">Some of my notable projects in web development, data science, and more.</p>

          {/* Project Cards */}
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-16">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ml-14 w-96 md:w-1/3">
              <img
                src="/data/resume.png" // Replace with actual image path
                alt="Project 1"
                className="w-full h-48"
              />
              <div className="p-6 bg-black">
                <h2 className="text-2xl font-semibold text-white mb-4">Resume Builder</h2>
                <p className="text-gray-300 mb-4">
                The Resume Builder simplifies the resume creation process with customizable templates and an easy-to-navigate interface. Users can tailor resumes to fit their specific career goals with various formatting options and pre-written content.                </p>
                <a
                  href="https://smartresumebuilder.netlify.app/" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ml-14 w-96 md:w-1/3">
              <img
                src="/data/GoldenCrunch.png" // Replace with actual image path
                alt="Project 2"
                className="w-full h-48"
              />
              <div className="p-6 bg-black">
                <h2 className="text-2xl font-semibold text-white mb-4">Golden Crunch</h2>
                <p className="text-gray-300 mb-4">
                The Golden Crunch website effectively represents the brand’s mission, offering a clean and modern design that appeals to snack lovers. It features an intuitive product section showcasing various snack flavors and product sizes.                
                 </p>
                <a
                  href="https://goldencrunchpk.netlify.app/" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ml-14 w-96 md:w-1/3">
              <img
                src="/data/portfolio.png" // Replace with actual image path
                alt="Project 3"
                className="w-full h-48"
              />
              <div className="p-6 bg-black">
                <h2 className="text-2xl font-semibold text-white mb-4">Portfolio</h2>
                <p className="text-gray-300 mb-4">
                A responsive portfolio website designed to highlight professional skills, projects, and experiences. Featuring interactive sections and a modern layout, it provides an engaging way to showcase personal and technical achievements.                
                </p>
                <a
                  href="https://s-m-shahzaib-portfolio.netlify.app/" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Projects;
