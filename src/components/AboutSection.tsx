const AboutSection = () => {
  return (
    <section id="about" className="relative bg-gradient-to-br from-[#DAD2C5] to-white overflow-hidden">
      <div className="section-container">
        {/* <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xl md:text-2xl text-yellow-900 mb-4">ABOUT</div>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
        </div> */}
        
        <div className="grid grid-cols-1 px-3 md:px-8 lg:px-16 lg:grid-cols-12 gap-6 md:gap-12 items-center">
          <div className="md:col-span-5 animate-fade-up">
            <div className="relative max-w-[300px] lg:max-w-none">
              <div className="absolute inset-0 bg-[#BABFB8]/50 rounded-xl transform rotate-3"></div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center bg-[#BABFB8]/20">
                  <img className="" src="https://firebasestorage.googleapis.com/v0/b/personal-website-313d4.appspot.com/o/profile_photo.JPG?alt=media&token=e3d10d1c-4652-403d-abbe-1f4f65d19550"></img>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 animate-fade-up delay-200">
          <h3 className="font-bold text-xl md:text-2xl text-blue-500 mb-2 md:mb-5 flex items-center">About Me</h3>
          <div className="text-black">
          <p className="leading-relaxed mb-2">
            Hi there! I’m Christine, a passionate full-stack software engineer and proud UC Berkeley alum based in sunny Los Angeles, California ☀️
            </p>
            <p className="leading-relaxed mb-2">
            I’ve always been drawn to software design and development for its incredible power to turn ideas into reality with elegance and efficiency. What excites me the most is collaborating with curious, creative minds to build meaningful products that bring ideas to life and move us toward a shared vision.
            </p>
            <p className="leading-relaxed mb-2">
            I believe that only magic can surpass technology, and with that mindset, I’m eager to use my skills and creativity to craft solutions that fill real-world gaps and help make the world a better, more connected place.
            </p>
            <p className="leading-relaxed">
            Feel free to reach out on social media or <a className="text-primary" href="mailto:christine.t@atinistudio.com">send me an email</a> — I’d love to chat about anything from tech to travel, career journeys to everyday life!
            </p>
          </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-lg font-bold text-blue-500 mb-3">Education</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-black">BSc in Computer Science, University of Technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black">MSc in Web Development, Digital Institute</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-blue-500 mb-3">Experience</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-medium">2020 - 2022</span>
                    <span className="ml-4 text-black">Frontend Developer at Tech Solutions Inc.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-medium">2022 - Present</span>
                    <span className="ml-4 text-black">Full Stack Developer at Digital Innovations</span>
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
