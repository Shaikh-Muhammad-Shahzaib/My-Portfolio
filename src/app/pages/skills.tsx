import { FaJsSquare, FaReact, FaHtml5, FaDatabase, FaCss3Alt, FaNodeJs } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id='skills'>
      <main className="bg-gradient-to-r from-blue-500 to-purple-600 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-white text-5xl font-extrabold mb-6">Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Skill Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 ml-14 w-96 md:w-full">
              <FaJsSquare size={50} className="text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">JavaScript & TypeScript</h2>
              <p className="text-gray-600">Entry Level in JavaScript and TypeScript for both front-end and back-end development.</p>
            </div>

            {/* Skill Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 ml-14 w-96 md:w-full">
              <FaReact size={50} className="text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">React & Next.js</h2>
              <p className="text-gray-600">Skilled in building dynamic and responsive web applications with React and Next.js.</p>
            </div>

            {/* Skill Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 ml-14 w-96 md:w-full">
              <FaHtml5 size={50} className="text-orange-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">HTML & CSS</h2>
              <p className="text-gray-600">Experienced in HTML, CSS, SCSS, and Tailwind CSS for creating structured, styled layouts.</p>
            </div>

            {/* Skill Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 ml-14 w-96 md:w-full">
              <FaDatabase size={50} className="text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">SQL & MongoDB</h2>
              <p className="text-gray-600">Knowledgeable in SQL and MongoDB for efficient data storage and management.</p>
            </div>

            {/* Skill Card 5 */}
            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 ml-14 w-96 md:w-full">
              <FaCss3Alt size={50} className="text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">CSS</h2>
              <p className="text-gray-600">Well-versed in CSS, and responsive design principles for modern web styling.</p>
            </div>

            {/* Skill Card 6 */}
            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 ml-14  w-96 md:w-full">
              <FaNodeJs size={50} className="text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Node.js</h2>
              <p className="text-gray-600">Entry Level in using Node.js to build scalable backend applications and RESTful APIs.</p>
            </div>

          </div>
        </div>
      </main>
    </section>
  );
};

export default Skills;
