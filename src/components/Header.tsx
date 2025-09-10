import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-pink-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            <h1 className="text-2xl font-bold text-white">
              GF<span className="text-pink-500">99</span>.in
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-300 hover:text-pink-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;