import React from 'react';
import { CheckCircle, XCircle, Clock, Mail } from 'lucide-react';

interface QueueStatusProps {
  paymentSuccess: boolean;
  email: string;
  queuePosition: number;
  onBackToHome: () => void;
}

const QueueStatus: React.FC<QueueStatusProps> = ({
  paymentSuccess,
  email,
  queuePosition,
  onBackToHome,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 max-w-lg w-full text-center border border-pink-500/20">
        {paymentSuccess ? (
          <>
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Payment Successful!</h2>
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">Added to Queue</span>
              </div>
              <p className="text-white mb-2">
                You are added to queue. We will notify you by email when your turn comes.
              </p>
              <div className="flex items-center justify-center mt-4">
                <Mail className="w-5 h-5 text-pink-400 mr-2" />
                <span className="text-pink-300">{email}</span>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <p className="text-gray-300 text-sm">Queue Position</p>
              <p className="text-2xl font-bold text-pink-500">#{queuePosition}</p>
            </div>
          </>
        ) : (
          <>
            <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Payment Failed</h2>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
              <p className="text-white">
                Payment failed. Please try again.
              </p>
            </div>
          </>
        )}
        
        <button
          onClick={onBackToHome}
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default QueueStatus;