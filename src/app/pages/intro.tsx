const Intro = () => {
  return (
    <section id="intro">
      <main className="bg-gradient-to-r from-blue-500 to-purple-600 py-20">
        <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-center text-center md:text-left">
          
          {/* Left Side: Profile Picture with Hover Effect */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="/data/Shahzaib.jpg" // Path to your image in the public folder
              alt="Profile"
              className="w-96 h-96 rounded-full mx-auto md:mx-0 border-solid border-2 border-black transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:border-8 hover:border-black "
            />
          </div>
          
          {/* Right Side: Intro Text */}
          <div className="md:w-1/2 px-2">
            <h1 className="text-white text-4xl font-bold mb-4">SHAIKH MUHAMMAD SHAHZAIB</h1>
            <p className="text-lg text-white">
            An IT professional with a strong focus on web development and project implementation. Skilled in creating responsive, user-friendly websites and applications using JavaScript & TypeScript, HTML, CSS, and other modern technologies like Node.js, React & Next.js. Passionate about leveraging tech to build efficient solutions and streamline digital workflows.            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Intro;
