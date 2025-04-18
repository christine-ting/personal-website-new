
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/johnsmith", 
      ariaLabel: "GitHub Profile" 
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/johnsmith", 
      ariaLabel: "LinkedIn Profile" 
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/johnsmith", 
      ariaLabel: "Twitter Profile" 
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/johnsmith", 
      ariaLabel: "Instagram Profile" 
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/e51fbb97-b9a6-4ada-a00b-3ff6f7a58b9e.png")'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 to-navy-950/20 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent -z-10" />

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up text-white">
            <h2 className="text-lg md:text-xl font-medium mb-3">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              John Smith
            </h1>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <p className="text-lg md:text-xl mb-8 max-w-lg opacity-90">
              A passionate <span className="text-primary font-medium">Full-Stack Developer</span>{" "}
              crafting beautiful and functional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex space-x-4 mb-4 sm:mb-0">
                {socialLinks.map(({ icon: Icon, href, ariaLabel }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ariaLabel}
                    className="text-white hover:text-primary transition-colors duration-300 hover:scale-110"
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in hidden md:block">
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-primary/20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
              <div className="aspect-square rounded-xl bg-navy-800/50 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-tr from-navy-800/50 to-navy-600/50 flex items-center justify-center">
                  <span className="font-display text-4xl text-white opacity-90">JS</span>
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
