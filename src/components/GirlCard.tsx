import React from 'react';
import { Girl } from '../types';
import { Heart, Sparkles } from 'lucide-react';

interface GirlCardProps {
  girl: Girl;
  onTalkToHer: (girl: Girl) => void;
}

const GirlCard: React.FC<GirlCardProps> = ({ girl, onTalkToHer }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 group">
      <div className="relative">
        <img
          src={girl.image}
          alt={girl.name}
          className="w-full h-80 sm:h-96 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 right-4">
          <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Sparkles className="w-4 h-4" />
            <span>Online</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-2xl font-bold mb-1">{girl.name}</h3>
          <p className="text-pink-300 text-lg">{girl.age} years old</p>
        </div>
      </div>
      
      <div className="p-6">
        <button
          onClick={() => onTalkToHer(girl)}
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <Heart className="w-5 h-5 fill-current" />
          <span>Talk to Her</span>
        </button>
      </div>
    </div>
  );
};

export default GirlCard;