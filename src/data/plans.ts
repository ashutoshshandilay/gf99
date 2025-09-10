import { SubscriptionPlan } from '../types';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'chat',
    name: 'Chat All Night',
    price: 99,
    description: 'Unlimited text chat for 24 hours',
    features: ['Unlimited messaging', 'Emoji reactions', 'Photo sharing', '24/7 availability']
  },
  {
    id: 'video',
    name: 'Video Call',
    price: 299,
    description: '1-hour premium video call experience',
    features: ['HD video calling', 'Screen sharing', 'Private room', 'Recording available']
  },
  {
    id: 'fullday',
    name: 'Full Day Video Call',
    price: 499,
    description: 'Exclusive full-day video companion',
    features: ['24-hour video access', 'Priority support', 'Custom requests', 'VIP treatment']
  }
];