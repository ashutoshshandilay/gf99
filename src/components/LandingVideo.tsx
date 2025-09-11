import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

interface LandingVideoProps {
  onUnlock: () => void;
}

const LandingVideo: React.FC<LandingVideoProps> = ({ onUnlock }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force play with sound
      video.muted = false;
      video.volume = 0.7;
      
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log('Autoplay failed, user interaction required');
        }
      };
      
      playVideo();
    }
  }, []);

  const handleVideoClick = async () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      try {
        await video.play();
      } catch (error) {
        console.log('Play failed');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Video Background */}
      <div className="relative w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
          autoPlay
          loop
          muted={false}
          playsInline
          controls={false}
          onClick={handleVideoClick}
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900 to-red-900"></div>
        </video>
        
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
            <p className="text-pink-400 text-sm mt-2">
              🔊 Click anywhere on video to enable sound
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingVideo;
