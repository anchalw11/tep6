import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const PropFirmRuleTracker: React.FC = () => {
  const [accountSize, setAccountSize] = useState(100000);
  const [riskPercent, setRiskPercent] = useState(1);

  const calculateLotSize = () => {
    const riskAmount = (accountSize * riskPercent) / 100;
    const lotSize = riskAmount / 100; // Simplified calculation
    return lotSize.toFixed(2);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Free </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              Risk Calculator
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Calculate your position size and risk per trade</p>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm rounded-3xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2 font-semibold">Account Size ($)</label>
              <input
                type="number"
                value={accountSize}
                onChange={(e) => setAccountSize(Number(e.target.value))}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">Risk Per Trade (%)</label>
              <input
                type="number"
                value={riskPercent}
                onChange={(e) => setRiskPercent(Number(e.target.value))}
                min="0.1"
                max="5"
                step="0.1"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-2">
                <Calculator className="w-6 h-6 text-cyan-400" />
                <span className="text-white font-semibold text-lg">Calculated Lot Size</span>
              </div>
              <div className="text-4xl font-bold text-cyan-400">{calculateLotSize()}</div>
              <div className="text-sm text-gray-400 mt-2">Based on your account size and risk tolerance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropFirmRuleTracker;
