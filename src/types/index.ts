export interface Girl {
  id: string;
  name: string;
  age: number;
  image: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

export interface User {
  email: string;
  selectedPlan?: SubscriptionPlan;
  paymentStatus?: 'pending' | 'success' | 'failed';
  queuePosition?: number;
}