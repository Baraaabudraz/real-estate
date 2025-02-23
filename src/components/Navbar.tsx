import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const activeClass = "text-blue-600 font-medium";
  const inactiveClass = "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">MGS Realtor</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive('/') ? activeClass : inactiveClass}>
              Home
            </Link>
            <Link to="/properties" className={isActive('/properties') ? activeClass : inactiveClass}>
              Properties
            </Link>
            <Link to="/about" className={isActive('/about') ? activeClass : inactiveClass}>
              About
            </Link>
            <Link to="/contact" className={isActive('/contact') ? activeClass : inactiveClass}>
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <User className="h-5 w-5 mr-2" />
              Sign In
            </button>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={isActive('/') ? activeClass : inactiveClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/properties" 
                className={isActive('/properties') ? activeClass : inactiveClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
              <Link 
                to="/about" 
                className={isActive('/about') ? activeClass : inactiveClass}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? activeClass : inactiveClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;