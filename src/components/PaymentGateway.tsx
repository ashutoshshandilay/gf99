import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Girl, SubscriptionPlan } from '../types';

interface PaymentGatewayProps {
  selectedGirl: Girl | null;
  selectedPlan: SubscriptionPlan | null;
  onBack: () => void;
  onPaymentComplete: (success: boolean, email: string) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({
  selectedGirl,
  selectedPlan,
  onBack,
  onPaymentComplete,
}) => {
  const [email, setEmail] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  if (!selectedGirl || !selectedPlan) return null;

  const handleRazorpayPayment = () => {
    setIsProcessing(true);

    const options = {
      key: 'rzp_live_RGB2Bc5HbmMGGj', // Your Razorpay key ID
      amount: selectedPlan.price * 100, // Amount in paise
      currency: 'INR',
      name: 'GF99.in',
      description: `${selectedPlan.name} - ${selectedGirl.name}`,
      image: '/vite.svg', // Your logo
      handler: function (response: any) {
        console.log('Payment successful:', response);
        setIsProcessing(false);
        onPaymentComplete(true, email);
      },
      prefill: {
        email: email || '',
        contact: '',
      },
      notes: {
        plan: selectedPlan.name,
        girl: selectedGirl.name,
      },
      theme: {
        color: '#ec4899', // Pink color matching your theme
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    if (window.Razorpay) {
      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', function (response: any) {
        console.log('Payment failed:', response);
        setIsProcessing(false);
        onPaymentComplete(false, email);
      });

      rzp.open();
    } else {
      console.error('Razorpay SDK not loaded');
      setIsProcessing(false);
      onPaymentComplete(false, email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <button
          onClick={onBack}
          className="flex items-center text-pink-400 hover:text-pink-300 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Plans
        </button>

        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 border border-pink-500/20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Complete Your Payment</h2>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                src={selectedGirl.image}
                alt={selectedGirl.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-pink-500"
              />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white">{selectedGirl.name}</h3>
                <p className="text-pink-300">{selectedPlan.name}</p>
                <p className="text-2xl font-bold text-pink-500">₹{selectedPlan.price}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-pink-500/20">
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold text-xl mb-2">Secure Payment</h3>
                <p className="text-gray-300">
                  Pay securely using UPI, Cards, Net Banking & Wallets
                </p>
              </div>
              <div className="flex justify-center space-x-4 text-sm text-gray-400">
                <span>💳 Cards</span>
                <span>🏦 Net Banking</span>
                <span>📱 UPI</span>
                <span>💰 Wallets</span>
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Email Address <span className="text-gray-400 text-sm font-normal">(optional - for notifications)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email (optional)"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
              />
            </div>

            <button
              onClick={handleRazorpayPayment}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
            >
              {isProcessing ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                  Processing Payment...
                </div>
              ) : (
                `Pay ₹${selectedPlan.price} - Powered by Razorpay`
              )}
            </button>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                🔒 Your payment information is secure and encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
