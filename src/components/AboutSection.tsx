const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-[#DAD2C5] to-white overflow-hidden"
    >
      <div className="section-container">
        {/* <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xl md:text-2xl text-yellow-900 mb-4">ABOUT</div>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-2 lg:gap-6">
          {/* Left Column */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start gap-4 animate-fade-up">
            {/* About Me Heading */}
            <h3 className="text-blue-500 font-bold text-lg md:text-xl mb-2 uppercase tracking-wide">
              About Me
            </h3>
            {/* Profile Image */}
            <div className="relative w-36 h-36 rounded-full shadow-lg overflow-hidden mb-4">
              <img
                className="rounded-full object-cover w-full h-full bg-[#5A9E95]"
                src="https://firebasestorage.googleapis.com/v0/b/personal-website-313d4.appspot.com/o/profile%20(no%20background).png?alt=media&token=e3d10d1c-4652-403d-abbe-1f4f65d19550"
                alt="Profile photo"
              />
            </div>
            {/* Education */}
            <div className="flex flex-col w-full">
              <div className="flex gap-3">
                <img
                  src="/cal-logo.png"
                  alt="UC Berkeley logo"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <div className="font-semibold text-black leading-tight text-sm md:text-md">
                    UNIVERSITY OF CALIFORNIA, BERKELEY
                  </div>
                  <div className="text-xs md:text-sm text-neutral-500 mt-1">
                    B.A. in Applied Mathematics and Economics (Double Major)
                  </div>
                  <div className="w-[200px] xl:w-[350px] min-w-50 h-[1.5px] bg-black opacity-20 my-4"></div>
                </div>
              </div>
              <div className="flex gap-3">
                <img
                  src="/hack-reactor-logo.png"
                  alt="Hack Reactor logo"
                  className="w-9 h-9 object-contain"
                />
                <div>
                  <div className="font-semibold text-black leading-tight text-sm md:text-md">
                    HACK REACTOR
                  </div>
                  <div className="text-xs md:text-sm text-neutral-500 mt-1">
                    Software Engineering Immersive
                  </div>
                  <div className="w-[200px] xl:w-[350px] min-w-50 h-[1.5px] bg-black opacity-20 my-4"></div>
                </div>
              </div>
              <div className="flex gap-3">
                <img
                  src="/lse-logo.png"
                  alt="LSE logo"
                  className="w-9 h-9 object-contain"
                />
                <div>
                  <div className="font-semibold text-black leading-tight text-sm md:text-md">
                    THE LONDON SCHOOL OF ECONOMICS AND POLITICAL SCIENCE (LSE)
                  </div>
                  <div className="text-xs md:text-sm text-neutral-500 mt-1">
                    Summer Study Abroad Program
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 animate-fade-up delay-200 flex flex-col justify-center mt-5 md:mt-8">
            <h2 className="text-2xl md:text-4xl text-black mb-3 md:mb-6 leading-tight">
              A Entrepreneurial Full Stack Software Engineer
            </h2>
            <div className="text-black text-base md:text-lg space-y-2 md:space-y-4">
              <p>
                I've always been drawn to software design and development for
                its incredible power to turn ideas into reality with elegance
                and efficiency. What drives me most is the opportunity to learn,
                build, and solve problems with others. Working as a team toward
                a shared vision is where I thrive.
              </p>
              <p>
                I believe that only magic can surpass technology, and with that
                mindset, I'm eager to use my skills and creativity to craft
                solutions that fill real-world gaps and help make the world a
                better, more connected place.
              </p>
              <p>
                Feel free to reach out on social media or{' '}
                <a
                  className="text-primary underline"
                  href="mailto:christine.t@atinistudio.com"
                >
                  send me an email
                </a>{' '}
                — I'd love to chat about anything from tech to travel, career
                journeys to everyday life!
              </p>
            </div>
          </div>
        </div>
        {/* Experience Circles Row */}
        <div className="w-full flex flex-col items-center mt-5 md:mt-14">
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 w-full max-w-5xl">
            {/* Atini Studio */}
            <div className="flex flex-col items-center mr-0 -mb-6 md:mb-0 md:-mr-8">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-yellow-100 border-opacity-50 flex flex-col items-center justify-center mb-3">
                <div className="flex items-center justify-center h-20 mb-2 md:mb-6">
                  <img
                    src="https://atinistudio.com/assets/atini-logo-colored.svg"
                    alt="Atini Studio Logo"
                    className="w-14 md:w-16"
                  />
                </div>
                <div className="text-xs md:text-sm text-neutral-500 w-[70%] mb-1 text-center">
                  FOUNDER
                </div>
                <div className="font-semibold text-black text-md md:text-lg">
                  ATINI STUDIO
                </div>
                <div className="text-xs text-neutral-400">2021 - PRESENT</div>
              </div>
            </div>
            {/* Camping World */}
            <div className="flex flex-col items-center ml-0 mr-0 -mt-6 md:mt-0 -mb-6 md:mb-0 md:-ml-8 md:-mr-8">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-[#D0D0D0] flex flex-col items-center justify-center mb-3">
                <div className="flex items-center justify-center h-20 mb-2 md:mb-6">
                  <img
                    src="/camping-world-logo.png"
                    alt="Camping World Logo"
                    className="w-20"
                  />
                </div>
                <div className="text-xs md:text-sm text-neutral-500 w-[70%] mb-1 text-center">
                  LEAD SOFTWARE ENGINEER
                </div>
                <div className="font-semibold text-black text-md md:text-lg">
                  CAMPING WORLD
                </div>
                <div className="text-xs text-neutral-400">2020 - 2022</div>
              </div>
            </div>
            {/* Hack Reactor */}
            <div className="flex flex-col items-center ml-0 -mt-6 md:mt-0 md:-ml-8">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-[#3F64DD] border-opacity-50 flex flex-col items-center justify-center mb-3">
                <div className="flex items-center justify-center h-20 mb-2 md:mb-6">
                  <img
                    src="/hack-reactor-logo.png"
                    alt="Hack Reactor Logo"
                    className="w-16"
                  />
                </div>
                <div className="text-xs md:text-sm text-neutral-500 text-center w-[70%] mb-1">
                  SOFTWARE ENGINEERING TEACHING ASSISTANT
                </div>
                <div className="font-semibold text-black text-md md:text-lg">
                  HACK REACTOR
                </div>
                <div className="text-xs text-neutral-400">2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
