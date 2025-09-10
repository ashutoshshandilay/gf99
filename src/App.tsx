import React, { useState } from 'react';
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
  const [currentState, setCurrentState] = useState<AppState>('home');
  const [selectedGirl, setSelectedGirl] = useState<Girl | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [queuePosition] = useState(Math.floor(Math.random() * 50) + 1);
  const [legalPage, setLegalPage] = useState<'refund' | 'terms' | 'privacy' | 'disclaimer' | null>(null);

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Perfect AI <span className="text-pink-500">Girlfriend</span> Awaits
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience meaningful conversations, video calls, and genuine connections with our beautiful AI companions. Choose your perfect match and start your journey today.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg px-6 py-3">
              <span className="text-pink-400 font-semibold">💬 Chat Starting at ₹99</span>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg px-6 py-3">
              <span className="text-pink-400 font-semibold">📹 Video Calls Available</span>
            </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Why Choose GF<span className="text-pink-500">99</span>.in?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-pink-500/20">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold text-white mb-4">Premium Experience</h3>
              <p className="text-gray-300">
                High-quality interactions with our carefully designed AI companions
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-pink-500/20">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Private & Secure</h3>
              <p className="text-gray-300">
                Your conversations are completely private and secure
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-pink-500/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Instant Access</h3>
              <p className="text-gray-300">
                Start chatting immediately after payment confirmation
              </p>
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