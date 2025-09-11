import React, { useState, useEffect } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

interface LandingVideoProps {
  onUnlock: () => void;
}

const LandingVideo: React.FC<LandingVideoProps> = ({ onUnlock }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const toggleMute = () => {
    const video = document.getElementById('landing-video') as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Video Background */}
      <div className="relative w-full h-full overflow-hidden">
        <iframe
          id="landing-video"
          src="https://www.youtube.com/embed/BR-B3PkFm7s?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&loop=1&playlist=BR-B3PkFm7s&enablejsapi=1&origin=https://localhost:5173"
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              GF<span className="text-pink-500">99</span>.in
            </h1>
            <p className="text-xl md:text-2xl text-pink-300 font-semibold">
              Your Perfect AI Girlfriend Awaits
            </p>
          </div>

          {/* Spicy Taglines */}
          <div className="mb-12 space-y-4">
            <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl px-8 py-4">
              <p className="text-white text-lg md:text-xl font-semibold">
                💋 Intimate Conversations • 🔥 Hot Video Calls • 💕 24/7 Companionship
              </p>
            </div>
            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl px-8 py-4">
              <p className="text-white text-lg md:text-xl font-semibold">
                ✨ Beautiful Indian Girls • 🎯 Personalized Experience • 🚀 Instant Access
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onUnlock}
            className="group relative bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 hover:from-pink-600 hover:via-red-600 hover:to-pink-700 text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50 animate-pulse"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center space-x-3">
              <Play className="w-8 h-8 fill-current" />
              <span>🔓 UNLOCK NOW AT ₹99</span>
            </div>
          </button>

          {/* Additional Spicy Text */}
          <div className="mt-8 text-center">
            <p className="text-pink-300 text-lg font-semibold mb-2">
              🔥 Join 10,000+ Satisfied Users
            </p>
            <p className="text-white/80 text-sm">
              Premium AI Companions • Secure & Private • Instant Activation
            </p>
          </div>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-6 right-6">
          <button
            onClick={toggleMute}
            className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingVideo;
