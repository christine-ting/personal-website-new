const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-yellow-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-display font-bold">Christine Ting</h3>
            <p className="mt-2 text-yellow-200">Full Stack Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-yellow-200">
              &copy; {currentYear} All rights reserved.
            </p>
            <div className="mt-4 flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-yellow-200 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-yellow-200 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-yellow-200 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
