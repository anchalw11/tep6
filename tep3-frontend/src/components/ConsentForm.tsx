import React from 'react';
import { Check, X } from 'lucide-react';

interface ConsentFormProps {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const ConsentForm: React.FC<ConsentFormProps> = ({ isOpen, onAccept, onDecline }) => {
  if (!isOpen) return null;

  const handleAccept = () => {
    localStorage.setItem('user_consent_accepted', 'true');
    onAccept();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Terms and Conditions</h2>
        <div className="text-gray-300 space-y-4 mb-6">
          <p>
            By using TraderEdge Pro, you agree to our terms of service and privacy policy.
          </p>
          <p>
            You understand that trading involves risk and that past performance does not guarantee future results.
          </p>
          <p>
            We provide educational content and tools but do not provide financial advice. Always conduct your own research.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            <Check className="w-5 h-5" />
            <span>Accept</span>
          </button>
          <button
            onClick={onDecline}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            <X className="w-5 h-5" />
            <span>Decline</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentForm;
