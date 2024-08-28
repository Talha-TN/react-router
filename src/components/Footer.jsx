import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-400">
            Instagram
          </a>
          <a href="#" className="hover:text-gray-400">
            LinkedIn
          </a>
        </div>
        <div className="mb-4">
          <p>Contact us: nawazt964@gmail.com | +92 323 9825457</p>
        </div>
        <div className="text-sm">
          <p>&copy; 2024 Talha Nawaz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export  {Footer};
