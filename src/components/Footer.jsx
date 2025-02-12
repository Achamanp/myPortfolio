const Footer = () => {
    return (
      <footer className="py-5 border bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base">
                @2025 Achaman Pathak <span>All Rights Reserved</span>
              </p>
            </div>
            
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-5">
              <a href="/about" className="text-sm md:text-base hover:underline">
                About
              </a>
              <a href="/about" className="text-sm md:text-base hover:underline">
                Privacy Policy
              </a>
              <a href="/about" className="text-sm md:text-base hover:underline">
                Licensing
              </a>
              <a href="/about" className="text-sm md:text-base hover:underline">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;