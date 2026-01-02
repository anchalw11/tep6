import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

const NewPropFirmRules: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="holo-card">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <Shield className="w-8 h-8 mr-3" />
          Prop Firm Rules & Compliance
        </h2>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-yellow-400 font-semibold mb-1">Important</h3>
              <p className="text-sm text-gray-300">
                Always review your prop firm's specific rules before trading. Violations can result in account termination.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Common Rules</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Max Daily Loss:</span>
                <span className="text-white font-semibold">5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Max Total Drawdown:</span>
                <span className="text-white font-semibold">10%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Minimum Trading Days:</span>
                <span className="text-white font-semibold">4 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Profit Target:</span>
                <span className="text-white font-semibold">8-10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPropFirmRules;
