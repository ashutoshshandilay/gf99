import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  onLegalPageOpen: (page: 'refund' | 'terms' | 'privacy' | 'disclaimer') => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalPageOpen }) => {
  return (
    <footer className="bg-black border-t border-pink-500/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
              <h3 className="text-2xl font-bold text-white">
                GF<span className="text-pink-500">99</span>.in
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your premium AI companion experience. Connect, chat, and enjoy meaningful conversations with beautiful AI girlfriends.
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 GF99.in. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onLegalPageOpen('terms')}
                  className="text-gray-400 hover:text-pink-400 transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLegalPageOpen('privacy')}
                  className="text-gray-400 hover:text-pink-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLegalPageOpen('refund')}
                  className="text-gray-400 hover:text-pink-400 transition-colors text-left"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLegalPageOpen('disclaimer')}
                  className="text-gray-400 hover:text-pink-400 transition-colors text-left"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;