import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [brandName] = useState("Achaman Pathak");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuLinks = [
    { title: "Home", link: "/home", id: 1 },
    { title: "About", link: "/about", id: 2 },
    { title: "Skills", link: "/skills", id: 3 },
    { title: "projects", link: "/projects", id: 4},
    { title: "Contact", link: "/contact", id: 5 }
  ];

  const actionButton = {
    title: "Download CV",
    link: "/path-to-your-cv.pdf"
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadCV = () => {
    // Replace this URL with your actual CV file URL
    const cvUrl = '/path-to-your-cv.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Achaman_Pathak_CV.pdf';
    
    // Programmatically click the link to trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 shadow-md fixed left-0 top-0 z-50 w-full">
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 pt-20max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">{brandName}</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-end w-full">
              {/* Right-Aligned Navigation Links */}
              <div className="flex space-x-6">
                {menuLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.link}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.title}
                  </a>
                ))}
              </div>

              {/* Download CV Button - At the Rightmost End */}
              <button
                onClick={handleDownloadCV}
                className="ml-6 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {actionButton.title}
              </button>
          </div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuLinks.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.title}
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
            >
              {actionButton.title}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;