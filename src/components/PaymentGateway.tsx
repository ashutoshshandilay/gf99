import React, { useState } from 'react';
import { ArrowLeft, Smartphone, ExternalLink } from 'lucide-react';
import { Girl, SubscriptionPlan, PaymentMethod } from '../types';

interface PaymentGatewayProps {
  selectedGirl: Girl | null;
  selectedPlan: SubscriptionPlan | null;
  onBack: () => void;
  onPaymentComplete: (success: boolean, email: string) => void;
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({
  selectedGirl,
  selectedPlan,
  onBack,
  onPaymentComplete,
}) => {
  const [email, setEmail] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showUpiOptions, setShowUpiOptions] = useState<boolean>(false);

  if (!selectedGirl || !selectedPlan) return null;

  const upiId = 'tbs@ptyes';
  const amount = selectedPlan.price;
  const transactionNote = `Payment for ${selectedPlan.name} - ${selectedGirl.name}`;

  const generateUpiLink = (app: string) => {
    const baseUrl = `upi://pay?pa=${upiId}&am=${amount}&tn=${encodeURIComponent(transactionNote)}&cu=INR`;
    
    switch (app) {
      case 'paytm':
        return `paytmmp://pay?pa=${upiId}&am=${amount}&tn=${encodeURIComponent(transactionNote)}&cu=INR`;
      case 'phonepe':
        return `phonepe://pay?pa=${upiId}&am=${amount}&tn=${encodeURIComponent(transactionNote)}&cu=INR`;
      case 'gpay':
        return `tez://upi/pay?pa=${upiId}&am=${amount}&tn=${encodeURIComponent(transactionNote)}&cu=INR`;
      default:
        return baseUrl;
    }
  };

  const handleUpiPayment = (app: string) => {
    const upiLink = generateUpiLink(app);
    
    // Try to open the UPI app
    window.location.href = upiLink;
    
    // Start monitoring for payment completion
    setIsProcessing(true);
    
    // Simulate payment verification after user returns
    setTimeout(() => {
      // In a real app, you would verify payment status from your backend
      const isSuccess = Math.random() > 0.2; // 80% success rate
      setIsProcessing(false);
      onPaymentComplete(isSuccess, email);
    }, 10000); // Wait 10 seconds for user to complete payment
  };

  const handlePayment = () => {
    setShowUpiOptions(true);
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
              <div className="flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8 text-pink-500 mr-3" />
                <h3 className="text-white font-semibold text-xl">UPI Payment</h3>
              </div>
              <p className="text-gray-300 text-center mb-4">
                Pay securely using any UPI app
              </p>
              <div className="bg-black p-4 rounded-lg">
                <p className="text-gray-400 text-sm mb-1">UPI ID:</p>
                <p className="text-pink-400 font-mono text-lg text-center">{upiId}</p>
                <p className="text-gray-400 text-sm mt-2 text-center">
                  Amount: ₹{amount}
                </p>
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

            {showUpiOptions ? (
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-center mb-4">Choose UPI App</h3>
                <div className="grid grid-cols-1 gap-3">
                  <button
                    onClick={() => handleUpiPayment('paytm')}
                    disabled={isProcessing}
                    className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    <Smartphone className="w-6 h-6" />
                    <span>Pay with Paytm</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleUpiPayment('phonepe')}
                    disabled={isProcessing}
                    className="flex items-center justify-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    <Smartphone className="w-6 h-6" />
                    <span>Pay with PhonePe</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleUpiPayment('gpay')}
                    disabled={isProcessing}
                    className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    <Smartphone className="w-6 h-6" />
                    <span>Pay with Google Pay</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleUpiPayment('upi')}
                    disabled={isProcessing}
                    className="flex items-center justify-center space-x-3 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    <Smartphone className="w-6 h-6" />
                    <span>Other UPI Apps</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => setShowUpiOptions(false)}
                  className="w-full text-gray-400 hover:text-white py-2 transition-colors"
                >
                  ← Back to Payment Methods
                </button>
                {isProcessing && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-500 mr-2"></div>
                      <span className="text-yellow-400 font-semibold">Waiting for Payment...</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Complete the payment in your UPI app and return here
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                    Processing Payment...
                  </div>
                ) : (
                  `Pay with UPI - ₹${amount}`
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
