import React from 'react';
import { X } from 'lucide-react';

interface LegalPagesProps {
  page: 'refund' | 'terms' | 'privacy' | 'disclaimer' | null;
  onClose: () => void;
}

const LegalPages: React.FC<LegalPagesProps> = ({ page, onClose }) => {
  if (!page) return null;

  const getContent = () => {
    switch (page) {
      case 'refund':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Refund Policy</h2>
            <div className="text-gray-300 space-y-4">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <h3 className="text-red-400 font-bold text-xl mb-2">NO REFUNDS PROVIDED</h3>
                <p>All sales are final. No refunds will be provided under any circumstances.</p>
              </div>
              <p>
                By purchasing our services, you acknowledge and agree that all transactions are final and non-refundable.
              </p>
              <p>
                This includes but is not limited to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Chat services</li>
                <li>Video call services</li>
                <li>Premium subscriptions</li>
                <li>Any other paid features</li>
              </ul>
              <p>
                If you experience technical issues, please contact our support team for assistance, but no monetary refunds will be issued.
              </p>
            </div>
          </div>
        );
      
      case 'terms':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Terms & Conditions</h2>
            <div className="text-gray-300 space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">1. Acceptance of Terms</h3>
                <p>By using GF99.in, you agree to be bound by these terms and conditions.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">2. Service Description</h3>
                <p>GF99.in provides AI-powered virtual companion services including chat and video call features.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">3. Age Restriction</h3>
                <p>Users must be at least 18 years old to use our services.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">4. Payment Terms</h3>
                <p>All payments are processed securely. No refunds are provided as stated in our refund policy.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">5. User Conduct</h3>
                <p>Users must behave respectfully and follow community guidelines.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">6. Limitation of Liability</h3>
                <p>GF99.in is not liable for any damages arising from the use of our services.</p>
              </div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Privacy Policy</h2>
            <div className="text-gray-300 space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Information We Collect</h3>
                <p>We collect minimal information necessary to provide our services:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Email address for notifications</li>
                  <li>Payment information (processed securely)</li>
                  <li>Usage analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">How We Use Your Information</h3>
                <p>Your information is used to:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Process payments</li>
                  <li>Send service notifications</li>
                  <li>Improve our services</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Data Security</h3>
                <p>We implement industry-standard security measures to protect your data.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Third-Party Sharing</h3>
                <p>We do not sell or share your personal information with third parties except as required by law.</p>
              </div>
            </div>
          </div>
        );

      case 'disclaimer':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Disclaimer</h2>
            <div className="text-gray-300 space-y-4">
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h3 className="text-yellow-400 font-bold text-lg mb-2">⚠️ IMPORTANT NOTICE</h3>
                <p className="font-semibold">
                  This project is under development stage, so sometimes orders may be delayed or unfulfilled.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Service Availability</h3>
                <p>
                  Our services are provided "as is" and may experience interruptions, delays, or technical issues due to ongoing development.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">No Guarantees</h3>
                <p>
                  While we strive to provide quality service, we cannot guarantee:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Uninterrupted service availability</li>
                  <li>Immediate order fulfillment</li>
                  <li>Perfect technical performance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">User Acknowledgment</h3>
                <p>
                  By using our services, you acknowledge that you understand and accept the developmental nature of our platform and potential service limitations.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Contact Support</h3>
                <p>
                  If you experience any issues, please contact our support team for assistance.
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-pink-500/30">
        <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 p-4 border-b border-pink-500/20 flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        <div className="p-6">
          {getContent()}
        </div>
      </div>
    </div>
  );
};

export default LegalPages;