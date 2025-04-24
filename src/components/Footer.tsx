
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="logo">
              <div className="logo-icon">P</div>
              <span className="text-white">Piyush's Portfolio</span>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {currentYear} Piyush Priyabrata Mishra. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
