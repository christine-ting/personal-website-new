import Header from './Header';
import { socialLinks } from '@/config/socialLinks';
import Paint from './Paint';
import { useState } from 'react';

const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat -z-20 ${
          isDarkMode ? '' : 'brightness-100 grayscale'
        }`}
        style={{
          backgroundImage: 'url("/lovable-uploads/background.png")',
        }}
      />
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="gap-12 items-center">
          <div className="animate-fade-up text-white">
            <h1 className="flex justify-center text-5xl md:text-6xl font-bold leading-tight mb-3 md:mb-6">
              Christine Ting
            </h1>
            <p className="flex justify-center text-xl md:text-2xl max-w-lg opacity-90 font-thin">
              Full-Stack Developer
              <span className="mx-1 text-yellow-100 font-normal">&</span>
              Founder of
            </p>
            <div className="flex justify-center w-full mb-6 mt-4 md:mt-6 md:mb-8">
              <img
                className="ml-2 w-24 cursor-pointer"
                onClick={() =>
                  window.open('https://atinistudio.com/', '_blank')
                }
                src="https://firebasestorage.googleapis.com/v0/b/personal-website-313d4.appspot.com/o/atini_logo_light.svg?alt=media&token=40113ce4-dbf4-491e-bf2c-0d3bb37190d5"
              ></img>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center my-4">
              <div className="flex space-x-4 mb-4 sm:mb-0">
                {socialLinks.map(({ icon, href, ariaLabel }, index) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ariaLabel}
                    className="text-white hover:text-primary transition-colors duration-300 hover:scale-110"
                  >
                    <svg
                      onClick={() => window.open(href, '_blank')}
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="lightGray"
                      viewBox="0 0 24 24"
                    >
                      <path d={icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Paint Component */}
      <div
        className="absolute top-5 right-5 z-20 cursor-pointer"
        onClick={toggleDarkMode}
      >
        <Paint color={isDarkMode} />
      </div>
      <Header />
    </section>
  );
};

export default HeroSection;
