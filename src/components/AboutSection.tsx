
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">About Me</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-3"></div>
              <div className="relative aspect-[4/5] bg-gradient-to-tr from-navy-100 to-navy-50 rounded-xl overflow-hidden border border-navy-100 shadow-lg">
                <div className="w-full h-full flex items-center justify-center bg-navy-200/20">
                  <span className="font-display text-5xl text-navy-800/30">Portrait</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 animate-fade-up delay-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">A Bit About Me</h3>
            <p className="text-navy-700 leading-relaxed mb-4">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. With over 5 years of experience in the tech industry, I've had the opportunity to work on a wide range of projects from small business websites to complex enterprise applications.
            </p>
            <p className="text-navy-700 leading-relaxed mb-6">
              When I'm not coding, you can find me exploring the outdoors, experimenting with new recipes, or diving into a good book. I believe in continuous learning and pushing my creative boundaries.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-3">Education</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-medium">2016 - 2020</span>
                    <span className="ml-4 text-navy-700">BSc in Computer Science, University of Technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-medium">2020 - 2022</span>
                    <span className="ml-4 text-navy-700">MSc in Web Development, Digital Institute</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-3">Experience</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-medium">2020 - 2022</span>
                    <span className="ml-4 text-navy-700">Frontend Developer at Tech Solutions Inc.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-medium">2022 - Present</span>
                    <span className="ml-4 text-navy-700">Full Stack Developer at Digital Innovations</span>
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
