const Education = () => {
  return (
    <section id="education">
      <main className="bg-gradient-to-r from-blue-500 to-purple-600 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-white text-5xl font-extrabold mb-10">Education</h1>
          {/* <p className="text-lg text-white mb-12">Bachelor's Degree in Computer Science from ABC University.</p> */}

          {/* Education Cards */}
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-16">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ml-14 w-96 md:w-1/3">
              <img
                src="/data/collage_logo.png" // Replace with actual image path
                alt="High School"
                className="w-full h-64 "
              />
              <div className="p-6 bg-black">
                <h2 className="text-2xl font-semibold text-white mb-4">Intermediate in Commerce</h2>
                <p className="text-white">
                Institute: Aisha Bawani Government College
                </p>
                <p className="text-white">
                Status: Passout
                </p>
                <br />
                <p className="text-white">
                Overview: Aisha Bawani Government College provided a solid foundation in commerce. The program focused on key business principles and practical skills, preparing students for various roles in the commercial sector.                
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ml-14 w-96 md:w-1/3">
              <img
                src="/data/logo_smiu.png" // Replace with actual image path
                alt="Bachelor's Degree"
                className="w-full h-64"
              />
              <div className="p-6 bg-black">
                <h2 className="text-2xl font-semibold text-white mb-4">Bachelor's in Business Administration (BBA)</h2>
                <p className="text-white">
                Institute: Sindh Madressatul Islam University
                </p>
                <br />
                <p className="text-white">
                Status: Final Year (8th semester)
                </p>
                <br />
                <p className="text-white">
                Overview: Gained an extensive understanding of business management with an emphasis on supply chain efficiency, procurement, and operations management.                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ml-14 w-96 md:w-1/3">
              <img
                src="/data/logo_it.png" // Replace with actual image path
                alt="Certifications"
                className="w-full h-64 "
              />
              <div className="p-6 bg-black">
                <h2 className="text-2xl font-semibold text-white mb-4">Cloud Generative AI Web 2.0</h2>
                <p className="text-white">
                Institute: Governor Sindh IT Initiative
                </p>
                <p className="text-white">
                Status: Currently Enrolled
                </p>
                <br />
                <p className="text-white">
                Overview: The Cloud Generative AI course at Governor Sindh IT Initiative teaches advanced cloud computing and it technologies. It focuses on building and implementing AI models for cloud solutions, preparing students with skills in the latest IT innovations.               
                 </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Education;
