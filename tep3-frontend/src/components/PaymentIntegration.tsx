import React from 'react';
import { CheckCircle } from 'lucide-react';

interface PaymentIntegrationProps {
  selectedPlan: any;
  onPaymentSuccess: () => void;
}

const PaymentIntegration: React.FC<PaymentIntegrationProps> = ({ selectedPlan, onPaymentSuccess }) => {
  const handlePayment = async () => {
    // Simulate payment processing
    setTimeout(() => {
      onPaymentSuccess();
    }, 2000);
  };

  return (
    <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Payment Details</h2>

      <div className="mb-6">
        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Plan:</span>
            <span className="text-white font-semibold">{selectedPlan?.name || 'Pro'}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-300">Amount:</span>
            <span className="text-white font-semibold">${selectedPlan?.price || 99}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-gray-300 mb-2">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-2">Expiry</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">CVC</label>
            <input
              type="text"
              placeholder="123"
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handlePayment}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <CheckCircle className="w-5 h-5" />
        <span>Complete Payment</span>
      </button>

      <p className="text-center text-gray-400 text-sm mt-4">
        Your payment is secure and encrypted
      </p>
    </div>
  );
};

export default PaymentIntegration;
