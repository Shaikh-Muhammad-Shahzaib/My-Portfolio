import { FaBriefcase, FaCode, FaProjectDiagram } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id='experience'>
      <main className="bg-gradient-to-r from-blue-500 to-purple-600 py-24">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6">Experience</h1>
          <p className="text-lg mb-12">I have 2 years of experience in full-stack web development at XYZ Company.</p>

          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Experience Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ml-14 w-96 md:w-1/3">
              <div className="flex flex-col items-center">
                <FaBriefcase size={50} className="text-blue-600 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Frontend Development</h2>
                <p className="text-gray-600 text-center">Specialized in React, CSS, and responsive design to build engaging user interfaces.</p>
              </div>
            </div>

            {/* Experience Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ml-14 w-96 md:w-1/3">
              <div className="flex flex-col items-center">
                <FaCode size={50} className="text-purple-600 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Backend Development</h2>
                <p className="text-gray-600 text-center">Experience with Node.js, Express, and databases to create robust backend systems.</p>
              </div>
            </div>

            {/* Experience Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ml-14 w-96 md:w-1/3">
              <div className="flex flex-col items-center">
                <FaProjectDiagram size={50} className="text-green-600 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Project Management</h2>
                <p className="text-gray-600 text-center">Managed multiple projects, ensuring timely delivery and maintaining code quality.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Experience;
