import { socialLinks } from "@/config/socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#192F38] text-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Name and title */}
          <div>
            <h3 className="text-2xl font-display font-bold">Christine Ting</h3>
            <p className="mt-2 text-white">Full Stack Developer</p>
          </div>

          {/* Right column - Connect section */}
          <div>
            <h3 className="text-xl font-bold text-blue-100 mb-6">
              Connect with Me
            </h3>
            
            {/* Email section */}
            <div className="flex items-center mb-6">
              <div className="mr-4 bg-white/10 p-2 rounded-lg transition-transform duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-white/90">Email</h4>
                <a href="mailto:christine.t@atinistudio.com" className="text-primary hover:text-primary/90 transition-colors">
                  christine.t@atinistudio.com
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-6">
              {socialLinks.map(({ icon, href, ariaLabel }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="text-white/80 hover:text-yellow-100 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
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
    </footer>
  );
};

export default Footer;
