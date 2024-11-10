const About = () => {
  return (
    <section id="about">
      <main className="bg-gradient-to-r from-blue-500 to-purple-600 py-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* About Section Title and Text */}
          <h1 className="text-white text-5xl font-extrabold mb-4">About Me</h1>
          <p className="text-lg text-gray-300 mb-8">
              Hello! I'm a passionate and detail-oriented IT professional with a strong foundation in web development, project management, and strategic consulting. With hands-on experience in building responsive websites, implementing TypeScript-driven solutions, and designing intuitive user interfaces, I have a knack for transforming ideas into functional, user-friendly applications. My recent work includes developing inventory management tools, dynamic portfolio sites, and an interactive consulting tool tailored for the automotive industry. I’m currently pursuing a Bachelor’s Degree in Business Administration with a focus on Supply Chain Management, combining technical expertise with a solid understanding of business operations. I thrive on solving complex problems, optimizing workflows, and continuously enhancing my skills to stay at the forefront of technology.          
          </p>
          {/* Images with Hover Effect */}
          <div className="flex justify-center space-x-16">
            {/* Image 1 */}
            <img
              src="/data/me.jpg" // Replace with the actual path to your first image
              alt="Project or About Image 1"
              className="w-1/3 h-1/3 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:border-4 hover:border-black"
            />
            
            {/* Image 2 */}
            <img
              src="/data/me1.jpg" // Replace with the actual path to your second image
              alt="Project or About Image 2"
              className="w-1/3 h-1/3 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:border-4 hover:border-black"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
