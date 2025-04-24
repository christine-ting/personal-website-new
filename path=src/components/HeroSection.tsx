import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{
          backgroundImage:
            'url("/lovable-uploads/e51fbb97-b9a6-4ada-a00b-3ff6f7a58b9e.png")',
        }}
      />

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Christine Ting
            </h1>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <p className="text-lg md:text-xl mb-8 max-w-lg opacity-90">
              Full-Stack Developer{' '}
              <span className="text-primary font-medium">
                &
              </span>{' '}
              crafting beautiful and functional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
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

              <div className="flex gap-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white"
                  asChild
                >
                  <a href="#projects">View My Work</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in hidden md:block">
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-primary/20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
              <div className="aspect-square rounded-xl bg-yellow-800/50 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-tr from-yellow-800/50 to-yellow-600/50 flex items-center justify-center">
                  <span className="font-display text-4xl text-white opacity-90">
                    JS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 