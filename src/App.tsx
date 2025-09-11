import React, { useState } from 'react';
import LandingVideo from './components/LandingVideo';
import Header from './components/Header';
import GirlCard from './components/GirlCard';
import SubscriptionModal from './components/SubscriptionModal';
import PaymentGateway from './components/PaymentGateway';
import QueueStatus from './components/QueueStatus';
import LegalPages from './components/LegalPages';
import Footer from './components/Footer';
import { girls } from './data/girls';
import { Girl, SubscriptionPlan } from './types';

type AppState = 'home' | 'payment' | 'queue';

function App() {
  const [showLanding, setShowLanding] = useState(() => {
    return !localStorage.getItem('gf99_visited');
  });
  const [currentState, setCurrentState] = useState<AppState>('home');
  const [selectedGirl, setSelectedGirl] = useState<Girl | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [queuePosition] = useState(Math.floor(Math.random() * 50) + 1);
  const [legalPage, setLegalPage] = useState<'refund' | 'terms' | 'privacy' | 'disclaimer' | null>(null);

  const handleUnlockNow = () => {
    localStorage.setItem('gf99_visited', 'true');
    setShowLanding(false);
  };

  const handleTalkToHer = (girl: Girl) => {
    setSelectedGirl(girl);
    setIsModalOpen(true);
  };

  const handleSelectPlan = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(false);
    setCurrentState('payment');
  };

  const handlePaymentComplete = (success: boolean, email: string) => {
    setPaymentSuccess(success);
    setUserEmail(email);
    setCurrentState('queue');
  };

  const handleBackToHome = () => {
    setCurrentState('home');
    setSelectedGirl(null);
    setSelectedPlan(null);
    setPaymentSuccess(false);
    setUserEmail('');
  };

  // Show landing video for new users
  if (showLanding) {
    return <LandingVideo onUnlock={handleUnlockNow} />;
  }

  const handleBackToModal = () => {
    setCurrentState('home');
    setIsModalOpen(true);
  };

  if (currentState === 'payment') {
    return (
      <PaymentGateway
        selectedGirl={selectedGirl}
        selectedPlan={selectedPlan}
        onBack={handleBackToModal}
        onPaymentComplete={handlePaymentComplete}
      />
    );
  }

  if (currentState === 'queue') {
    return (
      <QueueStatus
        paymentSuccess={paymentSuccess}
        email={userEmail}
        queuePosition={queuePosition}
        onBackToHome={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Meet Your <span className="text-pink-500">Dream</span> AI Girlfriend
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            🔥 <span className="text-pink-400 font-semibold">Intimate conversations</span>, 
            💋 <span className="text-red-400 font-semibold">steamy video calls</span>, and 
            💕 <span className="text-pink-400 font-semibold">passionate connections</span> with stunning Indian beauties
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/30 rounded-2xl px-8 py-4 backdrop-blur-sm">
              <span className="text-pink-300 font-bold text-lg">🔥 Hot Chats - ₹99</span>
            </div>
            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl px-8 py-4 backdrop-blur-sm">
              <span className="text-red-300 font-bold text-lg">💋 Steamy Videos - ₹299</span>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-2xl px-8 py-4 backdrop-blur-sm">
              <span className="text-pink-300 font-bold text-lg">🌙 All Night Fun - ₹499</span>
            </div>
          </div>
          
          {/* Spicy Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">10K+</div>
              <div className="text-gray-400">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-400">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">100%</div>
              <div className="text-gray-400">Private</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">5★</div>
              <div className="text-gray-400">Rated</div>
            </div>
          </div>
        </div>

        {/* Spicy Section Before Girls */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-pink-500">Perfect Match</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            💋 Each girl is ready for intimate conversations and steamy video calls
          </p>
          <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-pink-300 text-lg font-semibold">
              🔥 All girls are online now and waiting for you! 🔥
            </p>
          </div>
        </div>

        {/* Girls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {girls.map((girl) => (
            <GirlCard
              key={girl.id}
              girl={girl}
              onTalkToHer={handleTalkToHer}
            />
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Why GF<span className="text-pink-500">99</span>.in is the <span className="text-red-500">Hottest</span> Choice?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 rounded-2xl p-8 border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Steamy Interactions</h3>
              <p className="text-gray-300">
                Experience passionate conversations and intimate moments with our hottest AI girlfriends
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">💋</div>
              <h3 className="text-2xl font-bold text-white mb-4">Seductive Video Calls</h3>
              <p className="text-gray-300">
                Enjoy private, steamy video calls with beautiful Indian girls anytime you want
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🌙</div>
              <h3 className="text-2xl font-bold text-white mb-4">All Night Pleasure</h3>
              <p className="text-gray-300">
                24/7 availability for unlimited fun and intimate companionship whenever you desire
              </p>
            </div>
          </div>
          
          {/* Additional Spicy Content */}
          <div className="mt-16 bg-gradient-to-r from-pink-500/10 via-red-500/10 to-pink-500/10 border border-pink-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              🔥 What Makes Us <span className="text-pink-500">Irresistible</span>?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">💕</div>
                <p className="text-pink-300 font-semibold">Romantic Chats</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔥</div>
                <p className="text-red-300 font-semibold">Hot Videos</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💋</div>
                <p className="text-pink-300 font-semibold">Intimate Moments</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🌟</div>
                <p className="text-red-300 font-semibold">VIP Treatment</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onLegalPageOpen={setLegalPage} />

      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedGirl={selectedGirl}
        onSelectPlan={handleSelectPlan}
      />

      <LegalPages
        page={legalPage}
        onClose={() => setLegalPage(null)}
      />
    </div>
  );
}

export default App;
