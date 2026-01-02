import React from 'react';
import { AlertCircle } from 'lucide-react';

const TemporaryAccountNotice: React.FC = () => {
  return (
    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
      <div className="flex items-start space-x-3">
        <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-yellow-400 font-semibold mb-1">Important Notice</h4>
          <p className="text-gray-300 text-sm">
            Your account will be activated after verification. You'll receive an email with next steps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemporaryAccountNotice;
