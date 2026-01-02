import React from 'react';

interface ForexDataDashboardProps {
  isBotRunning: boolean;
  setIsBotRunning: (running: boolean) => void;
}

const ForexDataDashboard: React.FC<ForexDataDashboardProps> = ({ isBotRunning, setIsBotRunning }) => {
  return (
    <div className="p-6 bg-gray-800/50 rounded-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">Forex Data Dashboard</h2>
      <div className="text-gray-400 text-center py-8">
        Forex market data and analysis will appear here
      </div>
    </div>
  );
};

export default ForexDataDashboard;
