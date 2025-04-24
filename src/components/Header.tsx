import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight - 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: any
  ) => {
    e.preventDefault();
    if (link.name === 'PROJECTS') {
      window.open(link.href, '_blank');
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: 'https://atinistudio.com/projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'w-full z-50 transition-all duration-300 h-[60px] flex items-center justify-center',
        isScrolled
          ? 'fixed top-0 bg-white/95 backdrop-blur-sm shadow-md'
          : 'absolute bottom-0 bg-transparent'
      )}
      style={
        isScrolled
          ? {
              backgroundImage: 'url("/lovable-uploads/background_cropped.png")',
            }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Desktop navigation */}
        <nav className="flex items-center space-x-5 sm:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="nav-link text-primary hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        {/* <button
          onClick={toggleMobileMenu}
          className="md:hidden text-yellow-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button> */}
      </div>

      {/* Mobile navigation */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4">
          <div className="flex flex-col space-y-4 px-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
