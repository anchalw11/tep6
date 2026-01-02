import React from 'react';

interface CryptoDashboardProps {
  isBotRunning: boolean;
  setIsBotRunning: (running: boolean) => void;
}

const CryptoDashboard: React.FC<CryptoDashboardProps> = ({ isBotRunning, setIsBotRunning }) => {
  return (
    <div className="p-6 bg-gray-800/50 rounded-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">Crypto Trading Dashboard</h2>
      <div className="flex items-center justify-between mb-6">
        <span className="text-gray-300">Bot Status:</span>
        <button
          onClick={() => setIsBotRunning(!isBotRunning)}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            isBotRunning
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isBotRunning ? 'Stop Bot' : 'Start Bot'}
        </button>
      </div>
      <div className="text-gray-400 text-center py-8">
        Crypto trading signals will appear here
      </div>
    </div>
  );
};

export default CryptoDashboard;
