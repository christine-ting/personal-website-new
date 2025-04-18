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
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-sky-50">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-navy-600 text-lg md:text-xl font-medium mb-3">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-950 leading-tight mb-6">
              John Smith
            </h1>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <p className="text-lg md:text-xl text-navy-800 mb-8 max-w-lg">
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
                    className="text-navy-800 hover:text-primary transition-colors duration-300 hover:scale-110"
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button className="btn-primary" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="outline" className="btn-outline" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in hidden md:block">
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-primary/20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-navy-200/30"></div>
            <div className="relative z-10 bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl p-4 shadow-xl">
              <div className="aspect-square rounded-xl bg-navy-800 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-tr from-navy-800 to-navy-600 flex items-center justify-center">
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
