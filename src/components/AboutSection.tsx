const AboutSection = () => {
  return (
    <section id="about" className="py-10 relative bg-gradient-to-br from-white to-yellow-50/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(94,129,172,0.1),transparent)] -z-10" />
      <div className="absolute inset-0 bg-[length:40px_40px] bg-grid-yellow-900/[0.02] -z-10" />
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-4">About Me</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-3"></div>
              <div className="relative aspect-[4/5] bg-gradient-to-tr from-yellow-100 to-yellow-50 rounded-xl overflow-hidden border border-yellow-100 shadow-lg">
                <div className="w-full h-full flex items-center justify-center bg-yellow-200/20">
                  <img className="" src="https://firebasestorage.googleapis.com/v0/b/personal-website-313d4.appspot.com/o/profile_photo.JPG?alt=media&token=e3d10d1c-4652-403d-abbe-1f4f65d19550"></img>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 animate-fade-up delay-200">
            <h3 className="text-2xl font-bold text-yellow-900 mb-6">A Bit About Me</h3>
            <p className="text-yellow-700 leading-relaxed mb-4">
            Hi there! I’m Christine, a passionate full-stack software engineer and proud UC Berkeley alum based in sunny Los Angeles, California ☀️
            </p>
            <p className="text-yellow-700 leading-relaxed mb-6">
            I’ve always been drawn to software design and development for its incredible power to turn ideas into reality with elegance and efficiency. What excites me the most is collaborating with curious, creative minds to build meaningful products that bring ideas to life and move us toward a shared vision.

I believe that only magic can surpass technology — and with that mindset, I’m eager to use my skills and creativity to craft solutions that fill real-world gaps and help make the world a better, more connected place.

Feel free to reach out on social media or shoot me an email — I’d love to chat about anything from tech to travel, career journeys to everyday life!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-lg font-bold text-yellow-900 mb-3">Education</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-medium">2016 - 2020</span>
                    <span className="ml-4 text-yellow-700">BSc in Computer Science, University of Technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-medium">2020 - 2022</span>
                    <span className="ml-4 text-yellow-700">MSc in Web Development, Digital Institute</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-yellow-900 mb-3">Experience</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-medium">2020 - 2022</span>
                    <span className="ml-4 text-yellow-700">Frontend Developer at Tech Solutions Inc.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-medium">2022 - Present</span>
                    <span className="ml-4 text-yellow-700">Full Stack Developer at Digital Innovations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
