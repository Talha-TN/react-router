import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          React-Routers
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><NavLink to="/" className="text-white hover:text-gray-300">Home</NavLink></li>
            <li><NavLink to="/productdetails/1001" className="text-white hover:text-gray-300">productdetails</NavLink></li>
            <li><NavLink to="/productlist" className="text-white hover:text-gray-300">product</NavLink></li>
            <li><NavLink to="/contact" className="text-white hover:text-gray-300">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export {Header}
