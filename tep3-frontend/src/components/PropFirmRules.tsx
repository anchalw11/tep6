import React from 'react';
import { Shield } from 'lucide-react';

const PropFirmRules: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="holo-card">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <Shield className="w-8 h-8 mr-3" />
          Prop Firm Rules
        </h2>
        <div className="text-gray-300 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Trading Rules</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Maximum daily loss limit</li>
              <li>Maximum total drawdown</li>
              <li>Minimum trading days</li>
              <li>Profit target requirements</li>
            </ul>
          </div>
          <p className="text-sm text-gray-400">
            Specific rules will be loaded based on your selected prop firm
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropFirmRules;
