import React from 'react';
import { X, Crown, MessageCircle, Video, Calendar } from 'lucide-react';
import { Girl, SubscriptionPlan } from '../types';
import { subscriptionPlans } from '../data/plans';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedGirl: Girl | null;
  onSelectPlan: (plan: SubscriptionPlan) => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  selectedGirl,
  onSelectPlan,
}) => {
  if (!isOpen || !selectedGirl) return null;

  const getIcon = (planId: string) => {
    switch (planId) {
      case 'chat':
        return <MessageCircle className="w-8 h-8" />;
      case 'video':
        return <Video className="w-8 h-8" />;
      case 'fullday':
        return <Calendar className="w-8 h-8" />;
      default:
        return <Crown className="w-8 h-8" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-pink-500/30">
        <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-pink-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={selectedGirl.image}
                alt={selectedGirl.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-pink-500"
              />
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Connect with {selectedGirl.name}
                </h2>
                <p className="text-pink-300">Choose your experience</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  plan.id === 'fullday'
                    ? 'border-pink-500 shadow-pink-500/20 shadow-xl'
                    : 'border-gray-600 hover:border-pink-500/50'
                }`}
                onClick={() => onSelectPlan(plan)}
              >
                {plan.id === 'fullday' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-pink-500 mb-3 flex justify-center">
                    {getIcon(plan.id)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-pink-500 mb-2">
                    ₹{plan.price}
                  </div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;